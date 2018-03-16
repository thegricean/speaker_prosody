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
  icontext: "Mike decides to start a blog about his life trying to make it as a comedian in the city. Julie, who has not yet read the blog, runs into Mike at a coffee house. Waiting in line, Mike, who is very talkative, goes on a rant about his blog. Julie doesn't like stand up so much, so she kind of tunes him out. When Julie gets home, she tells Stan what she remembers about her encounter with Mike.", 
  kcontext: "Julie decides to start a blog along with some friends about their respective lives trying to make it as comedians in the city. Her boyfriend Stan recently wrote a controversial post, and after reading it, decided to write a post responding to it. Later, Julie hangs out with her friend Mike and tells him about the most recent blog post that she has written.", 
  question: "Does Julie read and write for a comedy blog?",   
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What is your new blog post like?",
  iexchange: "Stan: What is his new blog post like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it's",
  kresponsequestion: "Does Julie mean that her blog post was",
  iresponsequestion: "Does Julie mean that his blog post was"
},


//target good-looking
  {audio_target: "good-looking",
  audio_filler: "hot",
  icontext: "Mike and Julie meet for lunch. Mike, who recently got out of a long term relationship, lost a lot of weight and changed his look. At work, he briefly flashes a picture of his most recent date to everyone, but Julie was busy and didn't get such a good look. At home, Stan asks Julie about Mike's active life as a bachlor.", 
  kcontext: "Mike and Julie meet for lunch. Julie, who recently got out of a long term relationship, lost a lot of weight and changed her look. She has started to go on more dates to try to get over her ex. She tells Mike about one of her dates that she went on a couple of days ago.", 
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
  icontext: "Mike forgets to feed his dog in the morning before work. Upon arriving work, he calls his roommate to ask if he can feed the dog. At lunch, he tells Julie about forgeting to feed his dog. Later that night at home, Julie tells Stan about what she heard about Mike's dog situation", 
  kcontext: "Stan forgets to feed his dog in the morning before work, so he asks his girlfriend Julie to do it during her lunch break. On her way back to work and annoyed that she couldn't eat lunch with her colleagues, she sees her friend Mike and tells him about feeding the dog.", 
  question: "Did Julie feed a dog?",   
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What did your dog feel like?",
  iexchange: "Stan: What did his dog feel like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kresponsequestion: "Does Julie mean that her dog was",
  iresponsequestion: "Does Julie mean that his dog was"
  },

// target intelligent
  {audio_target: "intelligent",
  audio_filler: "brilliant",
   icontext: "Mike recently went back to school at the local community college to strengthen his computer programming ability. One day after class, he runs into Julie briefly on the bus and tells her about one of his classes. At home, Julie and Stan start talking about Mike's going back to school. ", 
  kcontext: "Julie recently went back to school at the local community college to strengthen her computer programming ability. One day after class, she runs into her friend Mike on the bus. Mike asks her how her new classes are going.", 
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
  icontext: "Mike is an amateur kickboxer. After a recent competition, he meets his friend Julie in a noisy bar and briefly tells her about his last fight that he lost. Julie hates violent sports and doesn't really pay much attention to what Mike was saying. The next moring at breakfast, Stan asks Julie about who she saw at the bar last night and she starts talking about Mike.", 
  kcontext: "Julie is an amateur kickboxer and had just got back from a regional tournement. She did well, but lost in the semifinals. It was a touch match, but it reaffirmed her passion for kickboxing and she was proud of herself for making for making it so far in the competition. Later in the week, Julie sees her friend Mike and tells him about her last fight.", 
  question: "Does Julie like kickboxing?",   
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
  icontext: "As president of the student body, Mike gives a speech to all of the current graduates. Unfortunately, Julie couldn't attend, but ran into someone in the audience at a busy work confernce. She told Julie that she liked Mike's speech, but didn't go into much detail. The next day at breakfast, Stan asks Julie about Mike's speech.", 
  kcontext: "As president of the student body, Julie gives a speech to all of the current graduates. She had put in a considerable amount of work and had practiced it several times. Later that night after giving the speech, Mike and Julie meet up for drinks and she tells him how it went.", 
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
  icontext: "Mike has a new internship at a law firm, one of the best in the city, and tells Julie about it over Facebook. He doesn't really mention many details, besides that he was quite anxious on his first day. Later on, Julie hangs out with her boyfriend Stan and tells Stan about her brief chat with Mike.", 
  kcontext: "Julie has a new internship at a law firm, one of the best in the city. Because there was a lot competition to get the position, she was quite anxious about her first day. After work, she meets up with Mike and tells him about her first day, specifically about the people she works with.", 
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
  icontext: "After not hearing from Mike for a few weeks, Julie writes him on Facebook Messenger. Mike said that he was sick and was in the hospital, but didn't provide that much information. Later, Julie hangs out with her boyfriend Stan and tells him that she had just heard from Mike and explains what she found out.", 
  kcontext: "Julie had started having headaches and felt weak. She found herself stuck in bed. Concerned for health, her roommate took her to the emergency room. It took the doctors several weeks to diagnose her with mono and provide a treatment for her. After she feels better, she meets up with her friend Mike and tells him what happened.", 
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
  icontext: "Several months after his uncle passed away, Mike goes to see his uncle's old house, which Mike just inherted, in the next state over and helps prepare it to be sold. On his way back, he sees his friend Julie at the grocery store and briefly tells her about it. Upon getting home, Julie tells her boyfriend Stan what she gathered about Mike's newly acquired house.", 
  kcontext: "Several months after her dad passed away, Julie becomes owner of her dad's lake house. She hadn't seen it in several years and goes on a trip to check it out. Upon getting back, she hangs out with her friend Mike and tells him about the state of her newly acquired property.", 
  question: "Did Julie go on a trip?",   
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
  icontext: "Julie is having dinner with her boyfriend Stan. Stan asked Julie what her friend Mike did during his vacation in Europe. Julie replied that among other things, Mike went on a hike in Switzerland, although Mike didn't really mention where and what it was like.", 
  kcontext: "Julie is having dinner with Mike. Mike asks Julie what she did during her vacation in Europe. She tells him that she and her boyfriend Stan went on a hike in the Swiss Alps, where several of the passes are quite steep.", 
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
  icontext: "Mike's friend Sophie is getting married and as a joke, he bought a bridesmaid dress and surprised her at the wedding rehearsal dressed in drag. A friend of Julie's was at the rehearsal and told her about Mike's prank, but really only mentioned that he was in drag. The next day, Julie gets lunch with her boyfriend Stan and tells him about the prank.", 
  kcontext: "Julie's sister is getting married, and Julie is a bridesmaid. Her sister is a bit younger than her and they have different tastes in clothes. She, her sister, and her friends got together and selected bridesmaids' dresses. The next day, Julie tells her friend Mike about the wedding preparations.", 
  question: "Did Julie choose her bridesmaid dress?", 
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What did your bridesmaid dress look like?",
  iexchange: "Stan: What did his bridesmaid dress look like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it was",
  kresponsequestion: "Does Julie mean that her bridesmaid dress",
  iresponsequestion: "Does Julie mean that his bridesmaid dress"
},


// target understandable
  {audio_target: "understandable",
  audio_filler: "articulate",
  icontext: "Mike had an important interview at for a job in communications. As part of his interview, Mike had to give a presentation explaining several complicated scientifc findings as part of a mock press conference. While prepping for the intervewi, Julie gave Mike some tips. A couple of days later, she texted Mike asking how it went, but only said that it went well. Later on, she tells Stan about what she gathered from Mike's text.", 
  kcontext: "Julie had an important interview for a job in communications. As part of her interview, Julie had to give a presentation explaining several complicated scientifc findings as part of a mock press conference. After the interview, she met up with friend Mike, who had helped her prepare for the interview, for a coffee and told him how her it went.", 
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
  icontext: "Mike, remembering his second year in college, tells Julie about his first apartment after leaving the dorms. Mike mentioned something about the bathroom, but Julie was texting and wasn't paying much attention. Later that week at a party, Julie and Stan were talking about their college living experiences and she mentions her talk with Mike.", 
  kcontext: "Julie, remembering her second year in college, tells Mike about her first apartment after leaving the dorms. It was very basic and had a mold problem in the kitchen and the bathroom. She goes out with Mike and a couple of mutual friends and reminise about their Spartan living conditions in college.", 
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
  icontext: "Mike had just lost his phone and in order to be able to afford a replacement, he needed to sign up for a new cellphone plan. Because Julie hadn't heard from Mike in a while, so wrote him an email and he wrote back saying that he lost his phone and just now got a new one, but it was a hassle. Stan, Julie's boyfriend, is looking for a new cellphone plan, so Julie tell's him about her conversation with Mike.", 
  kcontext: "Julie had just lost her phone and in order to be able to afford a replacement, she needed to sign up for a new cellphone plan. Her friend Mike is looking for a new cellphone plan and asks her some questions about her cell phone plan.",
  question: "Did Julie sign up for a new cellphone plan?",  
  speakerutt: "then asks Julie:", 
  kexchange: "Mike: What is your new cellphone plan like?",
  iexchange: "Stan: What is your new cellphone plan like?",
  ksetup_phrase: "Believe me,",
  isetup_phrase: "I don't know for sure, but",
  answer: "it's",
  kresponsequestion: "Does Julie mean that her cellphone plan",
  iresponsequestion: "Does Julie mean that his cellphone plan"
},
   

 // control energetic
{audio_target: "energetic",
  audio_filler: "lethargic",
  icontext: "Mike has a new job. After his first day, he calls his friend Julie and tells her about it and specifically his new boss. He works a lot and so does his partner. They have 5 kids. After hanging up the phone, Julie tells her boyfriend Stan about Mike's new job.", 
  kcontext: "Julie and Mike are drinking coffee together. Julie tells Mike about her new job and her new boss. He works a lot and so does his partner. They have 5 kids. ",
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
  icontext: "Mike and his brother are visting several buddist temples in Thailand. Apart from wearing appropriate clothing upon entering the temples, there are several other traditions to respect such as not being loud. The problem is that Mike's brother is quite talkative. Upon getting home, Mike sees Julie at the the supermarket and tells her about this trip with his brother. Later, when Julie gets home, she tells her boyfriend Stan about Mike's trip.", 
  kcontext: "Julie and her brother are visting several buddist temples in Thailand. Apart from wearing appropriate clothing upon entering the temples, there are several other traditions to respect such as not being loud. The problem is that Julie's brother is quite talkative. Upon picking her up at the airport, Stan asks Julie about her trip and her brother's behavior.",
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
  icontext: " Mike was on a festival. A few days later, he talks with his friend Julie about it. He tells her that he needed an umbrella the whole time during the festival because the weather was very bad. Despite the bad weather the festival was quite crowded. Later, Julie hangs out with her boyfriend Stan. She tells him about her talk with Mike.", 
  kcontext: "Julie was at a festival. A few days later, she met up with her friend Mike. She tells him that it was raining the whole time during the festival and that she needed her umbrella the whole time in the crowd. Despite the bad weather, the festival was quite crowded.",
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
  icontext: " Mike was on vacation in Australia. He bought some Australian souvenirs for his friends. After the vacation, he meets his friend Julie for dinner and tells her about his trip and the souvenirs he bought, though didn't mention what the souvenirs were. On the next day, Julie tells her boyfriend Stan about her dinner with Mike.", 
  kcontext: "Julie was on vacation in Australia. Because it was rainy season, she had to take lots of clothes with her and had to lug around a suitcase because she didn't have a backpack big enough. After the trip, she meets up with her friend Mike and tell him about her trip back.",
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
  icontext: " Julie and her friend Mike meet for a walk in a park one afternoon. They talked about their childhood among other things. Mike tells Julie that his sister was at a party where drugs were sold and she got arrested when the police came. Mike only mentioned that she had a bad lawyer and went to prison for several months, but doesn't go into detail about anything else. In the evening, Julie meets her boyfriend Stan and tells him about Mike's childhood and his sister.", 
  kcontext: "Julie and her friend Mike meet for a walk in a park. They are talking about their childhood. Julie remembers that her sister was at a party where drugs were sold and she got arrested when the police came. Julie mentioned that she had a bad lawyer and went to prison for two months. ",
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










