var stimuli = [


{audio_target: "anxious",
  audio_filler: "hysterical",
  icontext: "Julie is having lunch with Stan. She tells him about their friend Mike, who is a doctor and had to calm down a difficult patient today.", 
  kcontext: "Julie is having lunch with Mike. She's a doctor and tells him about a difficult patient she had to calm down today.", 
  question: "Does Julie know exactly what state the patient was in?",  
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What did your patient feel like?",
  iexchange: "Stan: What did his patient feel like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "she was",
  kresponsequestion: "Does Julie mean that her patient was",
  iresponsequestion: "Does Julie mean that his patient was",
},

  {audio_target: "attractive",
  audio_filler: "beautiful",
  icontext: "Julie is having a drink with Stan. She tells him that their friend Mike's sister Donna is in town to visit.", 
  kcontext: "Julie is having a drink with Mike. She tells him that her sister Donna is in town to visit.", 
  question: "Does Julie know exactly what Donna looks like?", 
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What does your sister look like?",
  iexchange: "Stan: What does his sister look like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "she's",
  kresponsequestion: "Does Julie mean that her sister is",
  iresponsequestion: "Does Julie mean that his sister is"
},


//target dirty
  {audio_target: "dirty",
  audio_filler: "filthy",
  icontext: "Julie is having coffee with Stan. She tells him about their friend Mike, whose AirBnB guests had a huge party in his recently re-carpeted apartment.", 
  kcontext: "Julie is having coffee with Mike. She tells him that her AirBnB guests had a huge party in her recently re-carpeted apartment.", 
  question: "Did Julie notice that her house was not clean?",   
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What did your carpet look like?",
  iexchange: "Stan: What did his carpet look like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kresponsequestion: "Does Julie mean that her carpet was",
  iresponsequestion: "Does Julie mean that his carpet was"
},


  //target funny
  {audio_target: "funny",
  audio_filler: "hilarious",
  icontext: "Julie is at a party with her friend Stan. She tells him about their mutual friend Mike, a professional comedian whose latest tweet Julie has not yet read.", 
  kcontext: "Julie is at a party with her friend Mike. A professional comedian, Julie tells Mike about her latest tweet.", 
  question: "Does Julie read and write for a comedy blog?",   
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What is your new tweet like?",
  iexchange: "Stan: What is his new tweet like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it's",
  kresponsequestion: "Does Julie mean that her blog post was",
  iresponsequestion: "Does Julie mean that his blog post was"
},


//target good-looking
  {audio_target: "good-looking",
  audio_filler: "hot",
  icontext: "Stan and his friend Julie meet for lunch. Julie tells him about their mutual friend Mike, who just went on a date with someone Julie has never met.", 
  kcontext: "Mike and his friend Julie meet for lunch. Julie tells Mike about a recent date she had with someone Mike has never met.", 
  question: "Did Julie recently go on a date?",   
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What did your date look like?",
  iexchange: "Stan: What did his date look like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "he was",
  kresponsequestion: "Does Julie mean that her date was",
  iresponsequestion: "Does Julie mean that his date was"
},

//target hungry
  {audio_target: "hungry",
  audio_filler: "starving",
  icontext: "Julie and Stan are talking about her day at work over dinner. That afternoon, Julie and her coworker Mike discussed how Mike had to rush home on their lunch break because he had forgotten to feed his dog.", 
  kcontext: "Julie and Mike are talking about her day at work over dinner. Julie tells Mike about having to rush home on her lunch break because she had forgotten to feed her dog.", 
  question: "Did Julie feed a dog?",   
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What did your dog feel like after not eating for so long?",
  iexchange: "Stan: What did his dog feel like after not eating for so long?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kresponsequestion: "Does Julie mean that her dog was",
  iresponsequestion: "Does Julie mean that his dog was"
  },

// target intelligent
  {audio_target: "intelligent",
  audio_filler: "brilliant",
  icontext: "Julie and Stan are relaxing at home. They discuss their mutual friend Mike, who told Julie yesterday about the programming class he just started attending at the local community college.", 
  kcontext: "Julie and Mike are relaxing at home. She tells him about the programming class she just started attending at the local community college.", 
  question: "Is Julie taking computer programming classes?", 
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What is your new professor like?",
  iexchange: "Stan: What is his new professor like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "she's",
  kresponsequestion: "Does Julie mean that her professor was",
  iresponsequestion: "Does Julie mean that his professor was"
},

// target intimidating
  {audio_target: "intimidating",
  audio_filler: "terrifying",
  icontext: "Julie and Stan are having breakfast at home. She tells him about their mutual friend Mike, an amateur kickboxer who Julie recently got coffee with after his most recent out-of-town match.", 
  kcontext: "Julie and Mike are having breakfast at home. An amateur kickboxer, Julie tells Mike about her match last night.", 
  question: "Does Julie kickbox?",   
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What was your last opponent in the ring like?",
  iexchange: "Stan: What was his last opponent in the ring like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "he was",
  kresponsequestion: "Does Julie mean that her opponent was",
  iresponsequestion: "Does Julie mean that his opponent was"
},

  // target polished
  {audio_target: "polished",
  audio_filler: "impeccible",
  icontext: "Stan and Julie are meeting for drinks. Neither of them could make it to their friend Mike's valedictorian speech yesterday, but Julie talked very briefly to a friend who was in attendance.", 
  kcontext: "Stan and Mike are meeting for drinks. Mike couldn't make it to her valedictorian speech yesterday but wants to know how it went.", 
  question: "Did Julie give a speech?",   
  speakerutt: "then asks Julie:",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kexchange: "Mike: What was your speech like?",
  iexchange: "Stan: What was his speech like?",
  kresponsequestion: "Does Julie mean that her speech was",
  iresponsequestion: "Does Julie mean that his speech was"
},

 // target prominent
  {audio_target: "prominent",
  audio_filler: "famous",
  icontext: "Julie is hanging out with her boyfriend Stan. The two discuss their mutual friend Mike, who recently told Julie about his anxious first day of work at a prestigious law firm.", 
  kcontext: "Julie is hanging out with her boyfriend Mike. She tells him about her anxious first day of work at a prestigious law firm.", 
  question: "Does Julie work at a law firm?", 
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What's your new boss like?",
  iexchange: "Stan: What's his new boss like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "she's",
  kresponsequestion: "Does Julie mean that her boss is",
  iresponsequestion: "Does Julie mean that his boss is"
},

// target serious
  {audio_target: "serious",
  audio_filler: "life-threatening",
  icontext: "Julie is hanging out with Stan. The two discuss their mutual friend Mike, who recently informed Julie that he had to spend some time in the hospital after falling ill on vacation.", 
  kcontext: "Julie is hanging out with Mike. It's the first time the two have seen each other since Julie went on vacation, during which time she fell ill and was admitted to the hospital.", 
  question: "Did Julie recieve a diagnosis from the doctors?",   
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What was the degree of your illness?",
  iexchange: "Stan: What was the degree of his illness?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kresponsequestion: "Does Julie mean that her illness was",
  iresponsequestion: "Does Julie mean that his illness was"
},

// target shabby
  {audio_target: "shabby",
  audio_filler: "decrepit",
  icontext: "Julie is at home with her roommate Stan. She tells him about their mutual friend Mike, who recently moved away and just told Julie that he's bought a new house.",
  kcontext: "Julie is on the phone with her former roommate Mike. Julie recently moved to a new city, and she tells Mike about the house she just bought.",
  question: "Did Julie recently move?",   
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What does your new house look like?",
  iexchange: "Stan: What does his new house look like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it's",
  kresponsequestion: "Does Julie mean that her house is",
  iresponsequestion: "Does Julie mean that his house is"
},


//target strenuous

{audio_target: "strenuous",
  audio_filler: "exhausting",
  icontext: "Julie is having dinner with her roommate Stan. The two talk about Julie's friend Mike, who just finished a multi-day hike through the Swiss Alps.", 
  kcontext: "Julie is having dinner with her roommate Mike. The two talk about Julie's recent trip to Switzerland, where Julie completed a multi-day hike through the Alps.", 
  question: "Did Julie go on a hike in the Alps?",   
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What was your hike like?",
  iexchange: "Stan: What was his hike like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kresponsequestion: "Does Julie mean that her hike was",
  iresponsequestion: "Does Julie mean that his hike was"
},


// target ugly
  {audio_target: "ugly",
  audio_filler: "hideous",
  icontext: "Julie is getting lunch with her boyfriend Stan. Julie had a brief conversation this morning with her friend Sophie, who recently came back from a wedding in which she was a bridesmaid for a friend with notoriously poor taste in dresses.",
  kcontext: "Julie is getting lunch with her boyfriend Mike. Julie returned this morning from a wedding, in which she was a bridesmaid for a friend with notoriously poor taste in dresses.", 
  question: "Did Julie choose her bridesmaid dress?", 
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What did your bridesmaid dress look like?",
  iexchange: "Stan: What did her bridesmaid dress look like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kresponsequestion: "Does Julie mean that her bridesmaid dress",
  iresponsequestion: "Does Julie mean that his bridesmaid dress"
},


// target understandable
  {audio_target: "understandable",
  audio_filler: "articulate",
  icontext: "Julie is at home with her roommate Stan. They discuss their anxiety-prone mutual friend Mike, who recently told Julie about a high-stakes interview he had for a job in communications.", 
  kcontext: "Julie is at home with her roommate Mike. She tells Mike, who knows Julie tends to get quite anxious in stressful situations, about a recent high-stakes interview she had for a job in communications.", 
  question: "Did Julie give a speech about scientific findings?",   
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What was your presentation for your job interview like?",
  iexchange: "Stan: What was his presentation for your job interview like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kresponsequestion: "Does Julie mean that her presentation was",
  iresponsequestion: "Does Julie mean that his presentation was"
},


// target unpleasant
  {audio_target: "unpleasant",
  audio_filler: "disgusting",
  icontext: "Stan and Julie are two friends at a party. They talk about Julie's friend Mike, who recently complained to Julie about an AirBnB he booked on his last vacation.", 
  kcontext: "Mike and Julie are two friends at a party. Julie tells him that she was pretty unsatisfied with the AirBnB she booked on her last vacation.", 
  question: "Did Julie have a mold problem in her old apartment?",  
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What was your bathroom like?",
  iexchange: "Stan: What was his bathroom like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kresponsequestion: "Does Julie mean that her bathroom was",
  iresponsequestion: "Does Julie mean that his bathroom was"
}];

var controls = [
  // control cheap
{audio_target: "cheap",
audio_filler: "expensive",
  icontext: "Julie and Stan are two friends catching up over coffee. After Stan mentions that he needs a new cell phone plan, she says that her friend Mike just told her about his own experience switching to a new provider.", 
  kcontext: "Julie and Mike are two friends catching up over coffee. After Stan mentions that he needs a new cell phone plan, she talks about her own recent experience switching to a new provider.", 
  question: "Did Julie sign up for a new cellphone plan?",  
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What is your new cellphone plan like?",
  iexchange: "Stan: What is his new cellphone plan like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it's",
  kresponsequestion: "Does Julie mean that her cellphone plan",
  iresponsequestion: "Does Julie mean that his cellphone plan"
},
   

 // control energetic
{audio_target: "energetic",
  audio_filler: "lethargic",
  icontext: "Julie is at home with her boyfriend Stan. She tells him about her friend Mike, who started a new job this week and is getting used to working under his new boss.", 
  kcontext: "Julie is at home with her boyfriend Mike. She tells him about her new job, which she started this week, and her new boss - who she is still getting used under.", 
  question: "Does Julie's boss have 5 kids?",  
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What is your new boss like?",
  iexchange: "Stan: What is his new boss like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "he's",
  kresponsequestion: "Does Julie mean that her boss is",
  iresponsequestion: "Does Julie mean that his boss is"
},

  // control rude
{audio_target: "rude",
  audio_filler: "respectful",
  icontext: "Julie is having lunch with Stan. She tells him about her friend Mike, who told Julie about his recent trip to a Buddhist temple with his very belligerent and talkative brother.", 
  kcontext: "Julie is having lunch with Mike. She tells him about her recent trip to a Buddhist temple with her very belligerent and talkative brother.", 
  question: "Is Julie's brother talkative?",  
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What was your brother's behavior like?",
  iexchange: "Stan: What was his brother's behavior like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "he was",
  kresponsequestion: "Does Julie mean that her brother is",
  iresponsequestion: "Does Julie mean that his brother is"
},

// control big
{audio_target: "big",
  audio_filler: "tiny",
  icontext: "Julie is meeting her friend Stan for brunch. She tells him about their friend Mike, who recently got caught in a major thunderstorm at a music festival with an umbrella but no raincoat.", 
  kcontext: "Julie is meeting her friend Stan for brunch. She tells him about how she recently got caught in a major thunderstorm at a music festival with an umbrella but no raincoat.", 
  question: "Did Julie need an umbrella at the festival?",  
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What was your umbrella like?",
  iexchange: "Stan: What was his umbrella like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kresponsequestion: "Does Julie mean that her umbrella was",
  iresponsequestion: "Does Julie mean that his umbrella was"
},

  // control light
{audio_target: "light",
  audio_filler: "heavy",
  icontext: "Julie and her boyfriend Stan are getting coffee. She tells him about her friend Mike, who just mentioned to Julie that he has brought back souvenirs from Thailand for her and several other friends.", 
  kcontext: "Julie and her boyfriend Mike are getting coffee. She tells him about her flight home from her last business trip, during which Julie was forced to check her carry-on bag.", 
  question: "Did Julie travel to Australia?",  
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What was your suitcase like?",
  iexchange: "Stan: What was his suitcase like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kresponsequestion: "Does Julie mean that her suitcase was",
  iresponsequestion: "Does Julie mean that his suitcase was"
},

  // control guilty
{audio_target: "innocent",
  audio_filler: "guilty",
  icontext: "Julie and her friend Stan meet for a walk in a park one afternoon. Julie tells Stan that she's just learned that their mutual friend Mike has a sister, who has been in jail for several years for felony drug possession.", 
  kcontext: "Julie and her friend Mike meet for a walk in a park one afternoon. She reveals to Mike for the first time that she has a sister, who has been in jail for several years for felony drug possession.", 
  question: "Did Julie's sister get arrested for drugs?",  
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What happened with your sister?",
  iexchange: "Stan: What happened with his sister?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "she was",
  kresponsequestion: "Does Julie mean that her sister was",
  iresponsequestion: "Does Julie mean that his sister was"
}];





