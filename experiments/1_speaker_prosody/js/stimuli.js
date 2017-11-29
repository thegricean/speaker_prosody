var stimuli = [


{audio_target: "anxious",
  audio_filler: "hysterical",
  icontext: "Mike is a doctor and runs into Julie on his way home. He briefly tells Julie about one of his patients that day, who had several broken bones. Later, Julie goes out to eat with her boyfriend Stan. Stan asks about Mike and Julie tells him about what she recalls her brief encounter with him", 
  kcontext: "Mike visited Julie at work to bring her something to eat. Julie is a doctor at a nearby hospital. Mike goes back, but Julie has to stay to see one last patient who suffered an injury with several broken bones.", 
  question: "Did Julie treat a patient that day?",  
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: Was your patient",
  iexchange: "Stan: Was his patient ",
  answer: "Julie: <strong>She was",
  kresponsequestion: "Does Julie mean that her patient was",
  iresponsequestion: "Does Julie mean that his patient was",
},

  {audio_target: "attractive",
  audio_filler: "beautiful",
  icontext: "Mike tells Julie that his sister is visiting.  Julie hasn’t met her yet. She’s only seen a blurry picture of her on Facebook. Later, Julie gets lunch with her boyfriend Stan. Stan's friend is looking for a blind date and Stan heard about Mike's sister being in town.", 
  kcontext: "Julie’s sister is visiting and they spend the day with each other. Julie is currently between relationships and is interested going out on dates while in town. Later, Julie hangs out with her friend Mike, and Mike has some single friends that might be interested in a blind date.", 
  question: "Is Julie's sister in town visiting?",  
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: Is your sister",
  iexchange: "Stan: Is his sister",
  answer: "Julie: <strong>She's",
  kresponsequestion: "Does Julie mean that her sister is",
  iresponsequestion: "Does Julie mean that his sister is",
},


//target dirty
  {audio_target: "dirty",
  audio_filler: "filthy",
  icontext: "Mike had to go out of town on a business trip for 10 days and had his brother look after his plants and feed his cats. Upon coming back, he noticed that his brother might have had a party or two in his apartment. Julie called Mike when he got back to invite him out for drinks and Mike quickly told her over the phone what had happened.", 
  kcontext: "Julie went back-packing in Vietnam for 2 months and sublet her aparment to a friend of a work colleague. Upon coming back, she found her apartment not in the state that she had left it and reckoned that this person had had a big party prior to leaving the apartment.", 
  question: "Did Julie notice that her aparment was not clean?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your carpet",
  iexchange:: "Stan: Was his carpet",
  answer: "Julie: <strong>It was",
  kresponsequestion: "Does Julie mean that her carpet was",
  iresponsequestion: "Does Julie mean that his carpet was",
}


  //target funny
  {audio_target: "funny",
  audio_filler: "hilarious",
  icontext: "Mike decides to start a blog about his life trying to make it as a comedian in the city. Julie, who has not yet read the blog, runs into Mike at a coffee house and he briefly tells her about several of his recent posts. When Julie gets home, she tells Stan ask her about Mike and what she knew about his Mike's most recent blog post.", 
  kcontext: "Julie decides to start a blog about her life trying to make it as a comedian in the city. Later, Julie hangs out with her friend Mike and tells him about the most recent blog post that she has written.", 
  question: "Is Julie writing a blog?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Is your blog post",
  iexchange:: "Is his blog post ",
  answer: "Julie: <strong>It was",
  kresponsequestion: "Does Julie mean that her blog post was",
  iresponsequestion: "Does Julie mean that his blog post was",
}


//target good-looking
  {audio_target: "goodlooking",
  audio_filler: "hot",
  icontext: "Mike and Julie meet for lunch. Mike, who recently got out of a long term relationship and had lost a lot of weight and changed his look, tells Julie about his date yesterday. A couple of day later, on her way home, Julie is on the phone with her boyfriend Stan and tells him about Stan's tranformation and how is going out on a lot of dates. Suprised, Stan asks about Mike's date and Julie briefly tells Stan what she gathered from her conversation with Mike.", 
  kcontext: "Mike and Julie meet for lunch. Julie, who recently got out of a long term relationship and had lost a lot of weight and changed her look, has started going on more dates to try to get over her ex. She tells Mike about one of her dates that she went on a couple of days ago.", 
  question: "Did Julie recently go on a date?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your date",
  iexchange:: "Stan: Was his date",
  answer: "Julie: <strong>He was",
  kresponsequestion: "Does Julie mean that her date was",
  iresponsequestion: "Does Julie mean that his date was",
}

// target intelligent
  {audio_target: "intelligent",
  audio_filler: "brilliant",
  icontext: "Mike just went back to school and is taking computer programming classes at the local university. He runs into Julie briefly on the bus and tells her about one of the classes. Later that night, Julie tells Stan about what she remembers from her conversation with Mike. ", 
  kcontext: "Julie recently went back to school to take strengthen her computer programming ability. She is now taking classes at the local university. One day after class, she meets her friend Mike and he asks her how her new classes are going.", 
  question: "Is Julie taking computer programming classes?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Is your professor",
  iexchange:: "Stan: Is his professor",
  answer: "Julie: <strong>She's",
  kresponsequestion: "Does Julie mean that her professor was",
  iresponsequestion: "Does Julie mean that his professor was",
}

// target intimidating
  {audio_target: "intimidating",
  audio_filler: "terrifying",
  icontext: "Mike is an amateur kickboxer. After a recent competition, he sees his friend Julie in a noisy bar and briefly tells her about his last fight that he lost. Later, Julie talks her boyfriend Stan later about that night and tells him about what she remembers about what Mike said about his kickboxing fight", 
  kcontext: "Julie is an amateur kickboxer, and had just got back from a regional tournement. She did well, but lost in the semifinals. Later in the week, Julie sees her friend Mike and tells him about her last fight.", 
  question: "Did Julie recently have a kickboxing match?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your opponent",
  iexchange:: "Stan: Was his opponent",
  answer: "Julie: <strong>He was",
  kresponsequestion: "Does Julie mean that her opponent was",
  iresponsequestion: "Does Julie mean that his opponent was",
}

  // target polished
  {audio_target: "polished",
  audio_filler: "impeccible",
  icontext: "As president of the student body, Mike gives a speech at commencement. Unfortunately, Julie couldn’t attend, but ran into someone who was there and told her about Mike's speech. Two days later, Julie had a quick breakfast with her boyfriend Stan. Julie tells Stan about what she briefly heard about Mike’s speech.", 
  kcontext: "As president of the student body, Julie had to give a speech to all of the current graduates. She had given it a lot of work and had practiced it several times. Later that night, Mike and Julie meet up for drinks and told him how it went", 
  question: "Did Julie give a speech?",  
  speakerutt: "then asks Julie:",
  answer: "Julie: <strong>It was",
  kexchange:: "Mike: Was your speech",
  iexchange:: "Stan: Was his speech",
  kresponsequestion: "Does Julie mean that her speech was",
  iresponsequestion: "Does Julie mean that his speech was",
}

 // target prominent
  {audio_target: "prominent",
  audio_filler: "famous",
  icontext: "Mike has a new internship at a law firm, one of the best in the city, and tells Julie about over Facebook. He did not really mention many details, but that he was quite anxious on his first day given the prestige of the firm. Later, she hangs out with her boyfriend Stan. Julie tells Stan about her brief chat with Mike.", 
  kcontext: "Julie has a new internship at a law firm one of the best in the city. There was a lot competition as this is one of the best law firms in the city and she was quite anxious about starting her internship. After work, she hangs out with Mike and tells her about her first day.", 
  question: "Was Julie anxious about working at the law firm?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Is your boss",
  iexchange:: "Stan: Is his boss",
  answer: "Julie: <strong>She's",
  kresponsequestion: "Does Julie mean that her boss is",
  iresponsequestion: "Does Julie mean that his boss is",
}

// target serious
  {audio_target: "serious",
  audio_filler: "life-threatening",
  icontext: "After not hearing from her friend Mike for a few weeks, Julie writes him on Facebook Messenger. Mike said that he was sick and was in the hospital, but didn’t provide that much information. Later, Julie hangs out with her boyfriend Stan and tell him that she had just heard from Mikeand explains what she found out.", 
  kcontext: "Julie had started having headaches and felt week. She found herself stuck in bed and had her roomate take her to the emergency room one night. It took the doctors several weeks to diagnose her with mono and provide a treatment for her. After she feels better, she meets up with her friend Mike and tells him what happened.", 
  question: "Did Julie go to the hospital?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your illness",
  iexchange:: "Stan: Was his illness",
  answer: "Julie: <strong>It was",
  kresponsequestion: "Does Julie mean that her illness was",
  iresponsequestion: "Does Julie mean that his illness was",
}

// target shabby
  {audio_target: "shabby",
  audio_filler: "decrepit",
  icontext: "Several months after his uncle passed away, Mike goes to see his house in the next state over and help prepare it to be sold.. On his way back, he sees his friend Julie at the airport and briefly tells her about it. Upon getting home, Julie tell to her boyfriend Stan what she gathered about Mike's uncle's house.", 
  kcontext: "Several months after her dad passed away, Julie becomes owner of her dad's lake house. She hadn't seen it in several years and goes on a trip to check it out. Upon getting back, she hangs out with her friend Mike and tells him about the state that her newly acquired house is in.", 
  question: "Did Julie go on a trip?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Is your house",
  iexchange:: "Stan: Is his house",
  answer: "Julie: <strong>It's",
  kresponsequestion: "Does Julie mean that her house is",
  iresponsequestion: "Does Julie mean that his house is",
}


//target strenuous

{audio_target: "strenuous",
  audio_filler: "exhausting",
  icontext: "Julie is having dinner with her boyfriend Stan. Stan asked Julie what her best friend Mike did today. Julie replied that Mike went on a hike. Although she didn't go, Mike briefly told her about it when he came back.”", 
  kcontext: "Julie is having dinner with Mike. Mike asks Julie what she did today and she tells him she and her boyfriend Max went on a hike.", 
  question: "Did Julie go on a hike?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your hike",
  iexchange:: "Mike: Was your hike”,
  answer: "Julie: <strong>It was",
  kresponsequestion: "Does Julie mean that her hike was",
  iresponsequestion: "Does Julie mean that his hike was",
}


// target ugly
  {audio_target: "ugly",
  audio_filler: "hideous",
  icontext: "Mike’s friend Sophie is getting married and as a joke, he bought a cheap bridesmaid dress and surprised her at the wedding rehearsal dressed in drag. A friend of Julie's was at the rehearsal and told her about Mike's prank. The next day, Julie gets lunch with her boyfriend Stan and tells her what she heard about his prank.", 
  kcontext: "Julie’s sister is getting married, and Julie is a bridesmaid. Her sister is a bit younger than her and they have different tastes in clothes. Her sister and her friends picked out the bridesmaids' dresses and she did not really have much say in it. The next day, Julie tells her friend Mike about the wedding preparations.", 
  question: "Did Julie pick out her dress for the wedding?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your bridesmaid dress",
  iexchange:: "Stan: Was his bridesmaid dress",
  answer: "Julie: <strong>It was",
  kresponsequestion: "Does Julie mean that her bridesmaid dress",
  iresponsequestion: "Does Julie mean that his bridesmaid dress",
}


// target understandable
  {audio_target: "understandable",
  audio_filler: "articulate",
  icontext: "Mike had an important interview at for a job in communications. As part of his interview, Mike had to give a speech explaining complicated scientifc findings as part of a mock press conference. She had given Mike some tips about presentations a couple of weeks earlier and was interested in how it went. She texted Mike after the interview and he said it went well. Later, when Julie gets home, she tells her boyfriend Stan about her brief chat with Mike", 
  kcontext: "Julie had an important interview at at for a job in communications. As part of her interview, Julie had to give a speech explaining complicated scientifc findings as part of a mock press conference. After the interview, she met up with friend Mike, who had helped her prepare for the interview, for a coffee and told him how her interview went. ", 
  question: "Did Julie give a talk about scientific findings?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your interview",
  iexchange:: "Stan: Was his interview",
  answer: "Julie: <strong>It was",
  kresponsequestion: "Does Julie mean that her interview was",
  iresponsequestion: "Does Julie mean that his interview was",
}


// target unpleasant
  {audio_target: "unpleasant",
  audio_filler: "disgusting",
  icontext: "Mike, remembering his second year in college, tells Julie about his first apartment that he moved into after leaving the dorms. It was very basic and had a mold problem in the kitchen and the bathroom. Later that week at a party, Julie tells her boyfriend Stan what she remembers about her talk Mike's old apartment.", 
  kcontext: "Julie, remembering his second year in college, tells Mike about her first apartment that he moved into after leaving the dorms. It was very basic and had a mold problem in the kitchen and the bathroom.", 
  question: "Did Julie give a talk about scientific findings?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your bathroom",
  iexchange:: "Stan: Was his bathroom",
  answer: "Julie: <strong>It was",
  kresponsequestion: "Does Julie mean that her bathroom was",
  iresponsequestion: "Does Julie mean that his bathroom was",
}

// target hungry
  {audio_target: "hungry",
  audio_filler: "starving",
  icontext: "Mike forgets to feed the dog in the morning before he goes to work, so he asks his roommate to do it. At lunch break, Mike calls his roomate to see if everything is ok and tells his friend Julie about it. Later, Julie hangs out with her boyfriend Stan. Julie tells Stan about what she heard about Mike’s dog situation", 
  kcontext: "Stan forgets to feed the dog in the morning before he goes to work, so he asks his girlfriend Julie to do it during her lunch break. On her way back to work and annoyed that she couldn't eat lunch with her colleagues, she sees her friend Mike and tells him about feeding the dog. ", 
  question: "Did Julie feed a dog?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your dog",
  iexchange:: "Stan: Was his dog",
  answer: "Julie: <strong>It was",
  kresponsequestion: "Does Julie mean that her dog was",
  iresponsequestion: "Does Julie mean that his dog was",



  // control cheap
{audio_target: "cheap",
  icontext: "Mike had just lost his phone and in order to be able to afford a replacement, he needed to sign up for a new cellphone plan. Mike has mixed feelings about it. Julie hadn't heard from Mike in a while, so wrote him an email and he wrote back saying that he lost his phone and just now got a new one, but it was a hassle. Stan, Julie's boyfriend, is looking for a new cellphone plan, so Julie tell's him about her conversation with Mike.", 
  kcontext: "Julie had just lost her phone and in order to be able to afford a replacement, she needed to sign up for a new cellphone plan. She has mixed feelings about it. Her friend Mike is looking for a new cellphone plan and asks her some questions about her cell phone plan.",
  question: "Did Julie sign up for a cellphone plan?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your cellphone plan",
  iexchange:: "Stan: Was his cellphone plan",
  answer: "Julie: <strong>It's",
  kresponsequestion: "Does Julie mean that her cellphone plan",
  iresponsequestion: "Does Julie mean that his cellphone plan",
}
   

 // control energetic
{audio_target: "energetic",
  icontext: "Mike has a new job. After his first day, he calls his friend Julie and tells her about his new job and his new boss. He works a lot and so does his partner. They have 5 kids. After the call, Julie tells her boyfriend Stan about Mike’s new job.", 
  kcontext: "Julie and Mike are drinking coffee together. Julie tells Mike about her new job and her new boss. He works a lot and so does his partner. They have 5 kids. ",
  question: "Does Julie's boss have 5 kids?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Is your boss",
  iexchange:: "Stan: Is his boss",
  answer: "Julie: <strong>He's",
  kresponsequestion: "Does Julie mean that her boss is",
  iresponsequestion: "Does Julie mean that his boss is",
}

  // control rude
{audio_target: "rude",
  icontext: "Mike and his brother are visting various buddist temples in Thailand. Besides wearing appropriate clothing to enter the temples, there are several other traditions to respect such as not being loud. Mike's brother is quite talkative. Upon getting home, Mike sees Julie at the the supermarket and tells her about this trip with his brother. Later, when Julie gets home, she tells her boyfriend Stan about Mike's trip.", 
  kcontext: "Julie and her brother are visting various buddist temples in Thailand. Besides wearing appropriate clothing to enter the temples, there are several other traditions to respect such as not being loud. Julie's brother is quite talkative. Picking her up at the airport, Stan asks Julie about her trip and her brother's behavior., Mike sees Julie at the the supermarket and tells her about this trip with his brother.",
  question: "Is Julie's brother talkative?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your brother",
  iexchange:: "Stan: Was his brother",
  answer: "Julie: <strong>He was",
  kresponsequestion: "Does Julie mean that her brother is",
  iresponsequestion: "Does Julie mean that his brother is",
}

// control big
{audio_target: "big",
  icontext: " Mike was on a festival. A few days later, he talks with his friend Julie about it. He tells her that he needed an umbrella the whole time during the festival because the weather was very bad. Despite the bad weather the festival was quite crowded. Later, Julie hangs out with her boyfriend Stan. She tells him about her talk with Mike.", 
  kcontext: "Julie was at a festival. A few days later, she met up with her friend Mike. She tells him that it was raining the whole time during the festival and that she needed her umbrella the whole time in the crowd. Despite the bad weather the festival was quite crowded.",
  question: "Did Julie need an umbrella at the festival?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your umbrella",
  iexchange:: "Stan: Was his umbrella",
  answer: "Julie: <strong>It was",
  kresponsequestion: "Does Julie mean that her umbrella was",
  iresponsequestion: "Does Julie mean that his umbrella was",
}

  // control light
{audio_target: "light",
  icontext: " Mike was on vacation in Australia. He bought some Australian souvenirs for his friends. After the vacation, he meets his friend Julie for dinner and tells her about his trip and the souvenirs he bought, though didn’t mention what the souvenirs were. On the next day, Julie tells her boyfriend Stan about her dinner with Mike.", 
  kcontext: "Julie was on vacation in Australia. Because it was rainy season, she had to take lots of clothes with her and had to lug around a suitcase because she didn't have a backpack big enough. After the trip, she meets up with her friend Mike and tell him about her trip back.",
  question: "Did Julie need an umbrella at the festival?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your suitcase",
  iexchange:: "Stan: Was his suitcase",
  answer: "Julie: <strong>It was",
  kresponsequestion: "Does Julie mean that her suitcase was",
  iresponsequestion: "Does Julie mean that his suitcase was",
}

  // control guilty
{audio_target: "guilty",
  icontext: " Julie and her friend Mike meet for a walk in a park in the afternoon. They are talking about their childhood. Mike tells Julie that his sister was at a party where drugs were sold and she got arrested when the police came. Mike only mentioned that she had a bad lawyer and went to prison for two months. In the evening, Julie meets her boyfriend Stan and tells him about Mike’s childhood and his sister.", 
  kcontext: "Julie and her friend Mike meet for a walk in a park. They are talking about their childhood. Julie remembers that her sister was at a party where drugs were sold and she got arrested when the police came. Julie mentioned that she had a bad lawyer and went to prison for two month. ",
  question: "Did Julie's sister get arrested for drugs?",  
  speakerutt: "then asks Julie:", 
  kexchange:: "Mike: Was your sister innocent?<br>Julie: <strong>She was guilty.</strong>",
  iexchange:: "Stan: Was his sister innocent?<br>Julie: <strong>She was guilty.</strong>",
  answer: "Julie: <strong>She was",
  kresponsequestion: "Does Julie mean that her sister was",
  iresponsequestion: "Does Julie mean that his sister was",
}











