# load helper functions
source('helpers.R')

# load required packages
library(tidyverse)
library(forcats)
theme_set(theme_bw())

# load raw data
d1 = read.csv("../data/speaker_prosody1.csv")
d2 = read.csv("../data/speaker_prosody2.csv")
d = rbind(d1,d2)
d$trial = d$slide_number_in_experiment - 2
d = as.data.frame(sapply(d, function(x) gsub("\"", "", x)))

nrow(d)
length(unique(d$workerid))
head(d)

# check standard things:

# experiment completion times
mean(as.numeric(as.character(d$Answer.time_in_minutes) ))
median(as.numeric(as.character(d$Answer.time_in_minutes)))
ggplot(d, aes(x=as.numeric(as.character(Answer.time_in_minutes)))) +
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
ggplot(d, aes(x=as.numeric(as.character(age)))) +
  geom_histogram()


d = d %>%
  select(workerid,weak_adjective,strong_adjective,condition_knowledge,condition_prosody,responsequestion,exchange,question,setup_phrase,context,response,age,language,asses,gender,comments,Answer.time_in_minutes,trial)
nrow(d) 
d$trial_type = ifelse(d$condition_prosody == "control", "control", ifelse(d$condition_prosody == "filler", "filler","target"))

d$response = as.numeric(as.character(d$response))

# look at overall distribution of responses
ggplot(d, aes(x=response)) +
  geom_histogram()

ggplot(d, aes(x=response,fill=condition_prosody)) +
  geom_histogram()

# exclude participants with means above .4 on controls (very generous)
no_attention = d %>%
  group_by(workerid,condition_knowledge,trial_type) %>%
  summarize(Mean = mean(response)) %>%
  filter(Mean > .35 & trial_type == "control" | Mean < .65 & trial_type == "filler")
bad_subjects = unique(no_attention$workerid)
bad_subjects
print(paste("participants excluded with means > .35 on controls or <.65 on fillers, in %: ", round(length(bad_subjects)*100 / length(unique(d$workerid)),2),sep=" "))

d = d %>%
  filter(! workerid %in% bad_subjects)

## plot means ##

# get condition means
agr = d %>%
  group_by(condition_knowledge,trial_type) %>%
  summarize(Mean = mean(response), CILow = ci.low(response), CIHigh = ci.high(response)) %>%
  mutate(YMin = Mean - CILow, YMax = Mean + CIHigh, trial_type = fct_relevel(trial_type, c("control","target","filler")))

# get condition & subject means
agr_subj = d %>%
  group_by(workerid,condition_knowledge,trial_type) %>%
  summarize(Mean = mean(response), CILow = ci.low(response), CIHigh = ci.high(response)) %>%
  mutate(YMin = Mean - CILow, YMax = Mean + CIHigh, trial_type = fct_relevel(trial_type, c("control","target","filler"))) %>%
  ungroup() %>%
  mutate(workerid = fct_drop(as.factor(workerid)))

dodge = position_dodge(.9)
  
ggplot(agr, aes(x=condition_knowledge, y=Mean)) +
  geom_bar(stat="identity",fill="gray60",color="black") +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  geom_line(data=agr_subj,aes(group=workerid,color=workerid),alpha=.5) +
  xlab("Speaker knowledge") +
  ylab("Mean rating (lower='no'=implicature)") +
  facet_wrap(~trial_type,nrow=1)
ggsave("../graphs/means_subj.pdf",width=7.5)

# get condition & item means
agr_item = d %>%
  group_by(weak_adjective,condition_knowledge,trial_type) %>%
  summarize(Mean = mean(response), CILow = ci.low(response), CIHigh = ci.high(response)) %>%
  mutate(YMin = Mean - CILow, YMax = Mean + CIHigh, trial_type = fct_relevel(trial_type, c("control","target","filler"))) 

dodge = position_dodge(.9)

ggplot(agr, aes(x=condition_knowledge, y=Mean)) +
  geom_bar(stat="identity",fill="gray60",color="black") +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25) +
  geom_line(data=agr_item,aes(group=weak_adjective,color=weak_adjective),alpha=.5,size=2) +
  # geom_errorbar(data=agr_item,aes(ymin=YMin,ymax=YMax,color=weak_adjective),alpha=.5,width=.25) +
  geom_text(data=agr_item,aes(label=weak_adjective,color=weak_adjective)) +
  xlab("Speaker knowledge") +
  ylab("Mean rating (lower='no'=implicature)") +
  facet_wrap(~trial_type,nrow=1)
ggsave("../graphs/means_item.pdf",width=7.5)


## analysis ##

# exclude uninteresting filler/control conditions and center predictors
cd = d %>% 
  filter(condition_prosody %in% c("neutral","RFR")) %>%
  mutate(condition_prosody = fct_drop(condition_prosody)) %>%
  mutate(ccondition_knowledge = myCenter(condition_knowledge), ccondition_prosody = myCenter(condition_prosody),ctrial = myCenter(trial)) %>%
  droplevels()

# see contrasts so you know how to interpret coefficients:
contrasts(cd$condition_knowledge)
contrasts(cd$condition_prosody)

m = lmer(response~ccondition_knowledge+ctrial + (1+ccondition_knowledge|workerid) + (1|weak_adjective), data=cd)  
summary(m)  

table(cd$weak_adjective,cd$condition_knowledge)
  
ranef(m)
