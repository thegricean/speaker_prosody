# load helper functions
source('helpers.R')

# load required packages
library(tidyverse)
library(forcats)
theme_set(theme_bw())

# load raw data
d1 = read.csv("../../1_speaker_prosody/data/speaker_prosody.csv")
d3 = read.csv("../../3_speaker_prosody_neutral_question/data/speaker_prosody.csv")
d1$ExpQuestion = "biased"
d3$ExpQuestion = "neutral"
d3$workerid = d3$workerid + 120

d = rbind(d1,d3)
d$trial = d$slide_number_in_experiment - 2
nrow(d)
length(unique(d$workerid))

d = d %>%
  select(workerid,weak_adjective,strong_adjective,condition_knowledge,condition_prosody,response,not_paid_attention,responsequestion,exchange,question,pre_check_response,context,num_plays,age,language,asses,gender,comments,Answer.time_in_minutes,trial,ExpQuestion)
nrow(d) 

# exclude participants with means above .35 on controls (very generous) and below .65 on fillers
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
  group_by(condition_knowledge,condition_prosody,ExpQuestion) %>%
  summarize(Mean = mean(response), CILow = ci.low(response), CIHigh = ci.high(response)) %>%
  ungroup() %>%
  mutate(YMin = Mean - CILow, YMax = Mean + CIHigh, condition_prosody = fct_relevel(condition_prosody, c("control","RFR","neutral","filler")))

dodge = position_dodge(.9)
  
ggplot(agr, aes(x=condition_knowledge, y=Mean, fill=ExpQuestion)) +
  geom_bar(stat="identity",color="black",position=dodge) +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25,position=dodge) +
  xlab("Speaker knowledge") +
  ylab("Mean rating (lower='no'=implicature)") +
  facet_wrap(~condition_prosody,nrow=1)
ggsave("../graphs/means.pdf",width=7.5)

# get condition means and plot by whether or not comprehension question was anwered correctly

agr = d %>%
  group_by(condition_knowledge,condition_prosody,not_paid_attention,ExpQuestion) %>%
  summarize(Mean = mean(response), CILow = ci.low(response), CIHigh = ci.high(response)) %>%
  ungroup() %>%
  mutate(YMin = Mean - CILow, YMax = Mean + CIHigh, condition_prosody = fct_relevel(condition_prosody, c("control","RFR","neutral","filler"))
         ,paid_attention=ifelse(not_paid_attention == "False","passed attention check","failed attention check"))

dodge = position_dodge(.9)

ggplot(agr, aes(x=condition_prosody, y=Mean, fill=ExpQuestion)) +
  geom_bar(stat="identity",color="black",position=dodge) +
  geom_errorbar(aes(ymin=YMin,ymax=YMax),width=.25,position=dodge) +
  xlab("Speaker knowledge") +
  ylab("Mean rating (lower='no'=implicature)") +
  facet_grid(condition_knowledge~paid_attention)
ggsave("../graphs/means_byquestion.pdf")

## analysis ##

# exclude uninteresting filler/control conditions and center predictors
cd = d %>% 
  filter(condition_prosody %in% c("neutral","RFR")) %>%
  mutate(condition_prosody = fct_drop(condition_prosody)) %>%
  mutate(ccondition_knowledge = myCenter(condition_knowledge), ccondition_prosody = myCenter(condition_prosody),cnot_paid_attention = myCenter(not_paid_attention),ctrial = myCenter(trial),cExpQuestion = myCenter(as.factor(ExpQuestion))) %>%
  droplevels()

# first run full model (with both datasets) to see whether there's an effect of question
# see contrasts so you know how to interpret coefficients:
contrasts(cd$condition_knowledge)
contrasts(cd$condition_prosody)
contrasts(cd$not_paid_attention)
contrasts(as.factor(cd$ExpQuestion))

m = lmer(response~ccondition_knowledge*ccondition_prosody*cExpQuestion+ctrial + (1+ccondition_prosody+ccondition_knowledge|workerid) + (1+ccondition_prosody|weak_adjective), data=cd)  
summary(m)  
  
ranef(m)

# run models separately. 
# exp 1 first
cd1 = d %>% 
  filter(condition_prosody %in% c("neutral","RFR") & ExpQuestion == "biased") %>%
  mutate(condition_prosody = fct_drop(condition_prosody)) %>%
  mutate(ccondition_knowledge = myCenter(condition_knowledge), ccondition_prosody = myCenter(condition_prosody),cnot_paid_attention = myCenter(not_paid_attention),ctrial = myCenter(trial)) %>%
  droplevels()

m1 = lmer(response~ccondition_knowledge*ccondition_prosody+ctrial + (1+ccondition_prosody+ccondition_knowledge|workerid) + (1+ccondition_prosody|weak_adjective), data=cd1)  
summary(m1) 

r1 = ranef(m1)$weak_adjective
r1$ExpQuestion = "biased"
r1$Adjective = row.names(r1)

# exp 3 second
cd3 = d %>% 
  filter(condition_prosody %in% c("neutral","RFR") & ExpQuestion == "neutral") %>%
  mutate(condition_prosody = fct_drop(condition_prosody)) %>%
  mutate(ccondition_knowledge = myCenter(condition_knowledge), ccondition_prosody = myCenter(condition_prosody),cnot_paid_attention = myCenter(not_paid_attention),ctrial = myCenter(trial)) %>%
  droplevels()

m3 = lmer(response~ccondition_knowledge*ccondition_prosody+ctrial + (1+ccondition_prosody+ccondition_knowledge|workerid) + (1+ccondition_prosody|weak_adjective), data=cd3)  
summary(m3)

r3 = ranef(m3)$weak_adjective
r3$ExpQuestion = "neutral"
r3$Adjective = row.names(r3)

reffects = rbind(r1,r3)
colnames(reffects) = c("Intercept","Slope_prosody","ExpQuestion","Adjective")
reffects$Adjective = as.factor(reffects$Adjective)
reffects$ExpQuestion = as.factor(reffects$ExpQuestion)

head(reffects)

ggplot(reffects, aes(x=Adjective,y=Intercept,fill=ExpQuestion)) +
  geom_bar(stat="identity",position="dodge")

slopes = reffects %>%
  select(ExpQuestion,Slope_prosody,Adjective) %>%
  spread(ExpQuestion,Slope_prosody)
colnames(slopes) = c("Adjective","Slope_biased","Slope_neutral")
intercepts = reffects %>%
  select(ExpQuestion,Intercept,Adjective) %>%
  spread(ExpQuestion,Intercept)
colnames(intercepts) = c("Adjective","Intercept_biased","Intercept_neutral")
sreffects = left_join(slopes,intercepts, by=c("Adjective"))

ggplot(sreffects,aes(x=Slope_biased,y=Slope_neutral,color=Adjective)) +
  geom_hline(yintercept=0,alpha=.5) +
  geom_vline(xintercept=0,alpha=.5) +
  geom_abline(intercept=0,slope=1,color="gray60",linetype="dashed") +
  geom_point() +
  xlab("Prosody slopes for Exp 1 (biased question)") +
  ylab("Prosody slopes for Exp 3 (neutral question)")
ggsave("../graphs/exp1vs3-slopecorrelation.pdf",width=6.5,height=4.5)
cor(sreffects$Slope_biased,sreffects$Slope_neutral) # corr of .83

ggplot(sreffects,aes(x=Intercept_biased,y=Intercept_neutral,color=Adjective)) +
  geom_hline(yintercept=0,alpha=.5) +
  geom_vline(xintercept=0,alpha=.5) +
  geom_abline(intercept=0,slope=1,color="gray60",linetype="dashed") +
  geom_point() +
  xlab("Intercept for Exp 1 (biased question)") +
  ylab("Intercept for Exp 3 (neutral question)")
ggsave("../graphs/exp1vs3-interceptcorrelation.pdf",width=6.5,height=4.5)
cor(sreffects$Intercept_biased,sreffects$Intercept_neutral) # corr of .96
