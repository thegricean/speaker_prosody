source('helpers.R')

# load required packages
library(tidyverse)
library(RColorBrewer)
library(forcats)
theme_set(theme_bw())

# load raw data
d = read.csv("../data/speaker_prosody.csv")
nrow(d)
length(unique(d$workerid))

# check standard things:

# experiment completion times
mean(d$Answer.time_in_minutes) 
median(d$Answer.time_in_minutes)

# look at participants' comments
unique(d$comments)

# did participants feel they understoody the task?
table(d$asses)

# did participants enjoy the hit? 0 - 2
table(d$enjoyment)

# native language
table(d$language)

# gender
table(d$gender)

# age
table(d$age)
ggplot(d, aes(x=age)) +
  geom_histogram()


d = d %>%
  select(workerid,weak_adjective,strong_adjective,condition_knowledge,condition_prosody,response,not_paid_attention,responsequestion,exchange,question,pre_check_response,context,num_plays,age,language,asses,gender,comments,Answer.time_in_minutes) # slide_number_in_experiment
nrow(d) 

# exclude participants with means above .4 on controls (very generous)
no_attention = d %>%
  group_by(workerid,condition_knowledge,condition_prosody) %>%
  summarize(Mean = mean(response)) %>%
  filter(Mean > .4 & condition_prosody == "control")
bad_subjects = unique(no_attention$workerid)

d = d %>%
  filter(! workerid %in% bad_subjects)


## plot means ##

# get condition means
agr = d %>%
  group_by(condition_knowledge,condition_prosody) %>%
  summarize(Mean = mean(response), CILow = ci.low(response), CIHigh = ci.high(response)) %>%
  mutate(YMin = Mean - CILow, YMax = Mean + CIHigh, condition_prosody = fct_relevel(condition_prosody, c("control","RFR","neutral","filler")))

# get condition & subject means
agr_subj = d %>%
  group_by(workerid,condition_knowledge,condition_prosody) %>%
  summarize(Mean = mean(response), CILow = ci.low(response), CIHigh = ci.high(response)) %>%
  mutate(YMin = Mean - CILow, YMax = Mean + CIHigh, condition_prosody = fct_relevel(condition_prosody, c("control","RFR","neutral","filler"))) %>%
  ungroup() %>%
  mutate(workerid = fct_drop(as.factor(workerid)))

dodge = position_dodge(.9)
  
ggplot(agr, aes(x=condition_knowledge, y=Mean)) +
  geom_bar(stat="identity",fill="gray60",color="black") +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  geom_line(data=agr_subj,aes(group=workerid,color=workerid),alpha=.5) +
  xlab("Speaker knowledge") +
  ylab("Mean rating (lower='no'=implicature)") +
  facet_wrap(~condition_prosody,nrow=1)
ggsave("../graphs/means_subj.pdf")

# get condition & item means
agr_item = d %>%
  group_by(weak_adjective,condition_knowledge,condition_prosody) %>%
  summarize(Mean = mean(response), CILow = ci.low(response), CIHigh = ci.high(response)) %>%
  mutate(YMin = Mean - CILow, YMax = Mean + CIHigh, condition_prosody = fct_relevel(condition_prosody, c("control","RFR","neutral","filler"))) 

dodge = position_dodge(.9)

ggplot(agr, aes(x=condition_knowledge, y=Mean)) +
  geom_bar(stat="identity",fill="gray60",color="black") +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  geom_line(data=agr_item,aes(group=weak_adjective,color=weak_adjective),alpha=.5) +
  xlab("Speaker knowledge") +
  ylab("Mean rating (lower='no'=implicature)") +
  facet_wrap(~condition_prosody,nrow=1)
ggsave("../graphs/means_item.pdf",width=9)


## analysis ##

# exclude uninteresting filler/control conditions and center predictors
cd = d %>% 
  filter(condition_prosody %in% c("neutral","RFR")) %>%
  mutate(condition_prosody = fct_drop(condition_prosody)) %>%
  mutate(ccondition_knowledge = myCenter(condition_knowledge), ccondition_prosody = myCenter(condition_prosody))

# see contrasts so you know how to interpret coefficients:
contrasts(cd$condition_knowledge)
contrasts(cd$condition_prosody)
m = lmer(response~ccondition_knowledge*ccondition_prosody + (1|workerid) + (1|weak_adjective), data=cd)  
summary(m)  
  
table(cd$weak_adjective,cd$condition_knowledge,cd$condition_prosody)
  