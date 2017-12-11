# load helper functions
source('helpers.R')

# load required packages
library(tidyverse)
library(forcats)
theme_set(theme_bw())

# load raw data
d = read.csv("../data/speaker_prosody.csv")
d$trial = d$slide_number_in_experiment - 2
nrow(d)
length(unique(d$workerid))

# check standard things:

# experiment completion times
mean(d$Answer.time_in_minutes) 
median(d$Answer.time_in_minutes)
ggplot(d, aes(x=Answer.time_in_minutes)) +
  geom_histogram()

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
  select(workerid,weak_adjective,strong_adjective,condition_knowledge,condition_prosody,response,not_paid_attention,responsequestion,exchange,question,pre_check_response,context,num_plays,age,language,asses,gender,comments,Answer.time_in_minutes,trial)
nrow(d) 

# look at overall distribution of responses
ggplot(d, aes(x=response)) +
  geom_histogram()

ggplot(d, aes(x=response,fill=condition_prosody)) +
  geom_histogram()

# exclude participants with means above .4 on controls (very generous)
no_attention = d %>%
  group_by(workerid,condition_knowledge,condition_prosody) %>%
  summarize(Mean = mean(response)) %>%
  filter(Mean > .35 & condition_prosody == "control" | Mean < .65 & condition_prosody == "filler")
bad_subjects = unique(no_attention$workerid)
bad_subjects
print(paste("participants excluded with means > .35 on controls or <.65 on fillers, in %: ", round(length(bad_subjects)*100 / length(unique(d$workerid)),2),sep=" "))

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
ggsave("../graphs/means_subj.pdf",width=7.5)

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
ggsave("../graphs/means_item.pdf",width=7.5)

# get condition means and plot by whether or not comprehension question was anwered correctly

agr = d %>%
  group_by(condition_knowledge,condition_prosody,not_paid_attention) %>%
  summarize(Mean = mean(response), CILow = ci.low(response), CIHigh = ci.high(response)) %>%
  ungroup() %>%
  mutate(YMin = Mean - CILow, YMax = Mean + CIHigh, condition_prosody = fct_relevel(condition_prosody, c("control","RFR","neutral","filler")))

dodge = position_dodge(.9)

ggplot(agr, aes(x=condition_prosody, y=Mean, fill=condition_knowledge)) +
  geom_bar(stat="identity",color="black",position=dodge) +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25,position=dodge) +
  xlab("Speaker knowledge") +
  ylab("Mean rating (lower='no'=implicature)") +
  facet_wrap(~not_paid_attention,nrow=1)
ggsave("../graphs/means_subj_byquestion.pdf")

## analysis ##

# exclude uninteresting filler/control conditions and center predictors
cd = d %>% 
  filter(condition_prosody %in% c("neutral","RFR")) %>%
  mutate(condition_prosody = fct_drop(condition_prosody)) %>%
  mutate(ccondition_knowledge = myCenter(condition_knowledge), ccondition_prosody = myCenter(condition_prosody),cnot_paid_attention = myCenter(not_paid_attention),ctrial = myCenter(trial)) %>%
  droplevels()

# see contrasts so you know how to interpret coefficients:
contrasts(cd$condition_knowledge)
contrasts(cd$condition_prosody)
contrasts(cd$not_paid_attention)

m = lmer(response~ccondition_knowledge*ccondition_prosody+ctrial + (1+ccondition_prosody+ccondition_knowledge|workerid) + (1+ccondition_prosody|weak_adjective), data=cd)  
summary(m)  

m.att = lmer(response~ccondition_knowledge*ccondition_prosody+cnot_paid_attention+ctrial + (1+ccondition_prosody+ccondition_knowledge|workerid) + (1+ccondition_prosody|weak_adjective), data=cd)  
summary(m.att)  

table(cd$weak_adjective,cd$condition_knowledge,cd$condition_prosody)
  
ranef(m)
