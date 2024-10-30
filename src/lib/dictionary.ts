interface Word {
  word: string;
  definition: string;
  origin: string;
  examples: string[];
  variations: string[];
}

const dictionaryData: Word[] = [
  {
    word: "af",
    definition: 'Shortened version of "as fuck"',
    origin:
      'The abbreviation of "AF" was first defined by Urban Dictionary user Mr McDownage on October 10 2011. The term was popularised by X (Formerly Twitter) user @whitepplquote on June 7, 2015, tweeing "Saying af instead of \'As Fuck.\'"',
    examples: ["That is lame af", "You're crazy af!"],
    variations: ["as fuck"],
  },
  {
    word: "Aight",
    definition: 'Shortened version of "Alright"',
    origin: "",
    examples: ["You Aight", "Meet me at 9, aight?"],
    variations: ["Alright"],
  },
  {
    word: "asf",
    definition: 'Shortened version of "as fuck"',
    origin:
      'The abbreviation of "AF" was first defined by Urban Dictionary user Mr McDownage on October 10 2011. The term was popularised by X (Formerly Twitter) user @whitepplquote on June 7, 2015, tweeing "Saying af instead of \'As Fuck.\'"',
    examples: ["That is lame asf", "You're crazy asf!"],
    variations: ["as fuck"],
  },
  {
    word: "Asl",
    definition:
      'Shortened version of "as hell." Unrelated to early Internet slang, "age/sex/location"',
    origin: "",
    examples: ["Your shirt looks cool asl"],
    variations: ["as hell"],
  },
  {
    word: "Ate",
    definition:
      "Phrase used to show admiration or praise for someone who succeeded or performed well in something.",
    origin:
      "Term originated in the African-American LGBTQ+ communities in the 2000s. Popularized by social media platforms such as TikTok.",
    examples: [
      "They ate and left no crumbs.",
      "Girl, you ate that outfit",
      "That choreography ate down",
    ],
    variations: [
      "Ate down",
      "Eat",
      "Eating",
      "Ate that",
      "Ate it up",
      "Devoured",
      "Ate and let no crumbs",
      "Let no crumbs",
    ],
  },
  {
    word: "Banger",
    definition:
      "Term used to describe something that is exceptional, impressive, or of high quality. Often referring to a catchy or energetic piece of music.",
    origin: "",
    examples: ["Play that song again, is a banger", "That food looks banging"],
    variations: ["Bangs", "Banging", "Banged"],
  },
  {
    word: "Based",
    definition:
      'Originally meaning "to be yourself and not care about how others view you", the word is now used to indicate an opinion or something that someone agrees with. It is especially common in political slang and discussions and may be used for controversial topics. Sometimes used as a positive antonym for "cringe."',
    origin:
      "Initially, African-American vernacular for being addicted or acting as if one were addicted to crack cocaine. Redefined by rapper Lil B, who used it to refer to his rapping style.",
    examples: ["Your opion is based", "That's based asf"],
    variations: ["Based", "Redpilled"],
  },
  {
    word: "Basic",
    definition:
      "Used to denote those who prefer mainstream products, trends, and music.",
    origin:
      'Derived from the term "basic bitch", which was coined in 2009 by American stand-up comedian Lil\' Duval.',
    examples: ["Those girls over there look so basic."],
    variations: ["Basic bitch"],
  },
  {
    word: "BDE",
    definition:
      'Abbreviation for "big dick energy." Term used for someone who exudes confidence and ease.',
    origin:
      'Originated from an X (formerly Twitter) post by @imbobswaget in June 2018, claiming that Anthony Bourdain had "big dick energy." Term went on to frequently be associated with Pete Davidson.',
    examples: ["He has BDE"],
    variations: ["Big dick energy", "Big energy"],
  },
  {
    word: "Bestie",
    definition:
      'Short for "best friend". Sometimes used jokingly with someone one does not have any relationship to.',
    origin: "",
    examples: ["You are my number one bestie", "She's my bestie"],
    variations: ["Best friend"],
  },
  {
    word: "Bet",
    definition: 'Yes, okay, "it\'s on."',
    origin:
      "Derived from non-slang bet (to bet on something). Originated in its current form from African-American vernacular and campus slang.",
    examples: ["You want to get ice cream after school? Bet."],
    variations: [],
  },
  {
    word: "Bffr",
    definition:
      'Abbreviation for "Be fucking for real." Meaning "be serious" or in response to something so incredible it cannot be real.',
    origin:
      "Derived from African-American vernacular, popularized on TikTok due to remix of a sound bite from rapper Slump6s in 2022.",
    examples: ["You think you can play in the NBA? Bffr."],
    variations: ["Be so fucking for real", "Be so for real"],
  },
  {
    word: "Big yikes",
    definition:
      "Used to describe something embarrassing or cringey, particularly in response to an offensive comment.",
    origin: "Gained popularity in 2017.",
    examples: ["Wow, when he failed that stunt, that was a big yikes."],
    variations: [],
  },
  {
    word: "Blud",
    definition:
      'Another word for a "friend" or "Bro". It is often used to describe people or animals that are out of place.',
    origin:
      'Derived from Jamaican slang and is believed to originally come from the term "blood brothers".',
    examples: ["What is blud doing right now?"],
    variations: ["Bludclart"],
  },
  {
    word: "Boujee",
    definition: "High-class/Materialistic",
    origin:
      'Derived from the French term for burghers, bourgeoisie, which originated in the 16th century. By the 1970s, the shortened version had been born as bougie. The term was popularized in 2016 by the song "Bad and Boujee" by the rap trio Migos, featuring Lil Uzi Vert.',
    examples: [
      "You must live in a castle since you're acting boujee.",
      "Why you acting so boujee?",
    ],
    variations: ["Bougie"],
  },
  {
    word: "Bouncing on it",
    definition:
      "A term used to describe someone who is over-praising or 'glazing' someone, same idea as 'dickriding'",
    origin:
      "A euphamism for bouncing on someone's phallus during cowboy, the term implies that someone is riding so hard for the person they are praising it is as though they want to have sex with them (and put in all the work themself)",
    examples: ["Stop glazing him, you're literally bouncing on it."],
    variations: ["Doing tricks on it"],
  },
  {
    word: "Brainrot",
    definition:
      'Used to describe the state of a person losing touch with the real world as a result of consuming of hyperstimulating or chronically online content, or the constant use of seemingly meaningless buzzwords ("skibidi", "fanum tax", "rizz", etc).',
    origin:
      'Derived from a euphemism that one\'s brain would "rot", or that one has "brain rot", by overconsumption of stimulating content. The term was popularized in 2023 with the rising interest and concerned discussion surrounding the outcome of Generation Alpha.',
    examples: [
      "Bro, the skibidi gyatt ohio sigma kai cenat rizzler memes are literal brainrot...",
    ],
    variations: ["Brain rot", "brain-rot"],
  },
  {
    word: "Bruh",
    definition:
      "Term used to express a feeling of shock, embarrassment, or disappointment toward something or someone.",
    origin:
      'Originated and was popularized from Black English as a shortened version of "brother."',
    examples: ["Did you just dent my car? Bruh!"],
    variations: ["Bro", "Bru", "Brah", "Bruh moment"],
  },
  {
    word: "Bussin",
    definition: "Extremely good, excellent. Also used to describe good food.",
    origin:
      "Originated from African-American vernacular as a way of complimenting good food. Though not related, it has also been used as a derogative term for ejaculation.",
    examples: ["This salad is bussin."],
    variations: ["Bussin"],
  },
  {
    word: "Bussy",
    definition:
      'Portmanteau of "Boy" (a young male) and "Pussy" (slang for vagina). Effectively, a man\'s anus.',
    origin: "",
    examples: ["Someone said that they saw his bussy."],
    variations: [],
  },
  {
    word: "Cap",
    definition:
      'To lie. Specifically, saying someone is "capping" or "cap" means to say they are lying. On the other hand, if someone says "no cap", it means they aren\'t lying.',
    origin:
      'First used in 1906 by Alfred Henry Lewis in his book Confessions of a Detective, this may have originated from another slang usage of "cap", meaning to brag or exaggerate. Popularized in 2017.',
    examples: [
      "I'm actually going to be productive today, no cap.",
      "You actually got tickets to the Bad Bunny concert? You're capping.",
    ],
    variations: ["No Cap", "Capping"],
  },
  {
    word: "Caught in 4K",
    definition:
      "Refers to someone being indisputably caught doing something wrong or incriminating on camera or with evidence to prove it, referencing 4K resolution",
    origin:
      'Originally from YouTuber RDCworld1\'s 2019 video How Lawyers Always Get Rappers Off, in which a lawyer talks to his client who was caught on video committing various crimes. The term is used similarly to the phrase "caught red-handed."',
    examples: ["How do they catch you in 4k?", "Bro really got caught in 4k."],
    variations: ["Catch in 4k", "Catching in 4k"],
  },
  {
    word: "Cook (verb)",
    definition:
      'To "cook", as a verb, is to prepare or initiate a situation with intent of creating a result. The most common uses ("Someone cooked here" and "Let him cook") are a request to give one space to proceed uninterrupted (especially when saying or doing something provocative) in the hope that the result might be entertaining, if not agreeable.',
    origin:
      'Originated within the African-American community. Can be traced back to Lil B. Popularized on Twitter and TikTok for the mainstream in early 2023. Can mean something else given context (See "cooked").',
    examples: ["Hold on, let him cook.", "Someone cooked here."],
    variations: ["Getting cooked", "Being cooked"],
  },
  {
    word: "Cooked (adjective)",
    definition:
      'When a person or subject is "Cooked" (As an adjective), it\'s the state of being in any sort of danger, physical, emotional, of failure, or of reputation. Can be used in a similar fashion to "Doomed." It can also mean to have been humiliated, embarrassed, or messed up in some way.',
    origin:
      'Popularized on X (Formerly Twitter) in early 2023. Can mean something else given context (See "cook" above).',
    examples: [
      "We're down 20 points, we are so cooked.",
      "He just cooked her in the debate.",
      "This generation is cooked.",
    ],
    variations: ["Getting cooked", "Being cooked"],
  },
  {
    word: "Clapback",
    definition: "Swift and witty response to an insult or critique.",
    origin:
      'Derived from the eponymous 2003 song "Clap Back" by rapper Ja Rule, which was a diss track against 50 Cent and Eminem, where the term was used to describe how Ja Rule and his crew would shoot those who oppose him. Garnered popularity on X (Formerly Twitter).',
    examples: [
      "He was being mocked, so he clapped back and made the whole room go quiet.",
    ],
    variations: ["Clap back", "Clapped back"],
  },
  {
    word: "Dab",
    definition: "A dance move used as a gesture of triumph.",
    origin:
      "The move originated in Japanese popular culture with shows such as Dragon Ball and Super Sentai before being adopted by rap groups in the 2010s.",
    examples: ["He dabbed on the haters."],
    variations: ["Dabbed", "Dabbing"],
  },
  {
    word: "Dead",
    definition:
      'Used to describe something humorous to such an extent as to "kill you."',
    origin:
      "Laughter and death as a combined concept has been present since Ancient Greece, where it is held that Zeuxis died from laughing at a portrait of an ugly woman he was painting. Ded stems from a folk etymology for dead reckoning. Emerged on the Internet in the early 1990s as a representation for regional speech.",
    examples: ["I am literally dead, that was hilarious."],
    variations: ["Ded"],
  },
  {
    word: "Delulu",
    definition:
      "Used to describe someone who holds unrealistic or overly idealistic beliefs, especially in the realm of relationships.",
    origin:
      'Derived from the English word "delusional," and has its origins in Internet communities obsessed with K-pop culture. The phrase "delulu is the solulu," implying self-confidence is the solution, helped increase the popularity of the term.',
    examples: ["You are so delulu."],
    variations: ["Solulu", "Trululu"],
  },
  {
    word: "Dogs",
    definition: "Slang term for toes.",
    origin:
      'In 1913, a journalist well known for rhyming slang, for the New York Evening, by the name of "T.A. Dorgan," published the phrase "my dogs are barking" in reference to his feet. From that point forward the word has been used as slang for feet. In the early 2020s the term "dogs out" gained popularity referring to someone\'s toes being exposed.',
    examples: ["Ew, why are your dogs out?", "Get the dogs out"],
    variations: ["Dawgs", "Doggos"],
  },
  {
    word: "Drip",
    definition: "Trendy high-class fashion.",
    origin:
      'Origin is disputed; rap blog HipHopDX claims that it stems from the Atlanta Rap scene in the early 2000s; an Urban Dictionary entry states that it\'s early 2010s Jersey slang, and some state that it may originate from the late 2000s teen show Zoey 101, where dripping was a synonym for "cool."',
    examples: ["Cool drip, where'd you buy it"],
    variations: ["Dripper", "Drippy"],
  },
  {
    word: "Era",
    definition:
      "Term used to label a person's current interests or priorities.",
    origin:
      'Originated from the "In My Era" trend on TikTok in 2022, which involves users highlighting unique aspects or moments to showcase themselves as the "main character" of their lives.',
    examples: [
      "I've been working out, I'm in my fitness era.",
      "I'm in my villain era.",
    ],
    variations: [],
  },
  {
    word: "Extra",
    definition:
      "Someone or something that is over-the-top, excessive, or dramatic in behavior, appearance, or actions.",
    origin:
      "Has origins in African-American vernacular and gained popularity and usage in mainstream social media and pop culture.",
    examples: ["They are so extra."],
    variations: [],
  },
  {
    word: "Fire",
    definition:
      "Term used to describe that something is impressive, good, or cool. This is usually said to express that you very much enjoy something or that it is hot (shown with the fire emoji)",
    origin: "Popularized on social media since at least 2020.",
    examples: ["#fire", "This song is fire"],
    variations: [],
  },
  {
    word: "Fit",
    definition:
      'Term used to highlight or bring attention to one\'s outfit. Also used as a shortened version of "outfit."',
    origin: "Popularized on social media since at least 2017.",
    examples: ["#fitcheck", "This fit is iconic"],
    variations: ["Fit check"],
  },
  {
    word: "Flex",
    definition:
      "Meaning to showcase or boast about one's achievements, possessions, or skills to demonstrate confidence or superiority.",
    origin:
      "Originated from African-American Vernacular and gained wider usage in mainstream culture and social media.",
    examples: ["Not to flex, but I got a 98 on the test."],
    variations: ["Flexing", "Flexed", "Flex zone"],
  },
  {
    word: "Gagged",
    definition: "To be shocked, amazed, or at loss for words.",
    origin:
      'Came from the Black LGBTQ slang and originated within the drag scene. Originally, drag queens used "gagged" when complimenting amazing performances.',
    examples: ["The plot twist in that movie had me totally gagged!"],
    variations: ["Gag"],
  },
  {
    word: "Girlboss",
    definition:
      "A female entrepreneur who succeeds in the male-dominated business world, an empowered woman.",
    origin:
      "Popularized in 2014 through Sophia Amorusos autobiography #GIRLBOSS.",
    examples: ["She's such a girlboss!"],
    variations: ["Girlbossing", "Girlbossed", "Girlbossery"],
  },
  {
    word: "Ghost",
    definition: "Ending communication or contact with someone without warning.",
    origin:
      "Popularized around 2015 through articles on celebrity relationship dissolutions.",
    examples: ["Why do you keep ghosting me?"],
    variations: ["Ghosting", "Ghosted"],
  },
  {
    word: "Glaze",
    definition:
      "To over-hype, praise, or compliment someone to the point where it becomes annoying or cringeworthy.",
    origin:
      'First surfaced on Discord in late 2021 and was popularized on Twitch. The term made its way to YouTube, Twitter, and TikTok in 2023. The term is used similarly to "kiss-ass" or "suck-up."',
    examples: ["You need to stop glazing."],
    variations: ["Glazing", "Glazer", "Meatriding"],
  },
  {
    word: "Glow-up",
    definition:
      'A major improvement in one\'s self, usually an improvement in appearance, confidence, and style. Frequently used in a context relating to puberty. On the other hand, "glow-down" is a situation where someone’s appearance has declined.',
    origin:
      "Popularized (and possibly coined) by rapper Chief Keef in his 2013 single Gotta Glo Up One Day.",
    examples: [
      "Their glow-up over the summer was insane.",
      "Yeah, she had a glow-down.",
    ],
    variations: ["Glo up", "Glowed-up", "Glow-Down", "Glowed-Down"],
  },
  {
    word: "GOAT",
    definition: 'Acronym for the phrase "greatest of all time"',
    origin: "",
    examples: ["You're the GOAT."],
    variations: ["GOAT", "Goated", "🐐"],
  },
  {
    word: "Gucci",
    definition:
      "Meaning good, cool, fashionable, or excellent. Used to express approval or satisfaction for something.",
    origin: "Originated from the famous luxury brand Gucci.",
    examples: ["Those shoes are gucci.", "I'm gucci"],
    variations: ["Gooch"],
  },
  {
    word: "Glizzy",
    definition: "A hot dog",
    origin:
      'Popularized in 2020, possibly from the Washington metropolitan area, and possibly originating from the slang term "glizzy" for a Glock handgun (approximately the same length of a hot dog).',
    examples: [],
    variations: ["Glizzys"],
  },
  {
    word: "Hits different",
    definition: "Something that is better in a peculiar manner.",
    origin:
      'Originates from fans of YouTubers Daniel Howell and Phil Lester. In 2019, Howell came out as gay; his fans subsequently posted clips of him and Lester together, with the term "hits different" in the titles. Beginning in July 2019, it spread out of the gay community.',
    examples: ["Sprite from McDonald's just hits different."],
    variations: ["Hit different"],
  },
  {
    word: "Ick",
    definition:
      "Term used to refer to a sudden feeling of disgust or repulsion to a dating partner someone was previously attracted to.",
    origin:
      'The term in reference to dating comes from the 1999 episode "Once in a Lifetime" from the TV Show Ally McBeal. In the episode, Ally refers to not being attracted to someone as "the ick." The reality show Love Island helped popularize the term, as several cast members would use the phrase. By the early 2020s the term became very popular on social media and as a result was profiled by mainstream media outlets.',
    examples: ["He gave me the ick.", "Ew, that was icky"],
    variations: ["Icky"],
  },
  {
    word: "IJBOL",
    definition:
      'An acronym for the phrase "I just burst out laughing", a version of "lmao."',
    origin:
      'Dates back to 2009 as an alternate version of "lmao" or "lol" but is lately popularized into mainstream Twitter culture through the K-pop stan community in 2021, reaching its current level of use today.',
    examples: ["You're hilarious, IJBOL."],
    variations: ["IJBOL", "jbol"],
  },
  {
    word: "I oop",
    definition: "Used to express shock, embarrassment, and or amusement.",
    origin:
      'Originated from drag queen Jasmine Masters in a 2015 YouTube video, stated after she apparently "hit her balls." It went viral in March 2019 as an Internet meme and became associated with VSCO girls.',
    examples: ["Did she just fall? I oop."],
    variations: ["And I Oop"],
  },
  {
    word: "iPad kid",
    definition:
      "Derogatory term describing Generation Alpha children who spend most of their time staring at phone or tablet screens.",
    origin:
      "The term was popularized in January 2021 after a 21-year old Gen Z TikToker criticized Millennial parents for allowing excessive screen time for their children, saying \"I need everyone else in my generation to promise that we are not going to raise 'iPad children.' ... You've been shoving media and screens in these kids' faces since birth.\" He concludes: \"Gen Z isn’t allowed to raise iPad kids.\" The viral video garnered more than 525 million views on TikTok.",
    examples: [
      "That iPad kid went ballistic in the restaurant after his mom took his iPad away.",
    ],
    variations: ["iPad kids"],
  },
  {
    word: "It's giving",
    definition:
      "Describe the attitude or connotation of something or someone. Can also be used to give general admiration toward something.",
    origin:
      "Exact origin unknown. A possible start was with influencer Rolling Ray, a Black disabled gay man who repeatedly used the phrase in a 2019 appearance on Divorce Court. According to The Atlantic, the phrase was derived from Black and Brown ball culture. The phrase was heavily popularized in 2020 on Twitter was further popularized by a November 2022 article by Paper which used the phrase in the title of an article detailing Shawn Mendes and Camila Cabello's breakup.",
    examples: [
      "It's giving yuck.",
      "Your makeup today is giving",
      "It's giving boomer vibes",
    ],
    variations: ["It's giving very much", "very much giving"],
  },
  {
    word: "Iykyk",
    definition:
      'Acronym for "If you know, you know." Used to describe inside jokes.',
    origin:
      "Defined in Urban Dictionary in 2016. Became a popular hashtag on TikTok in 2019.",
    examples: ["I'm not saying this, but well....iykyk."],
    variations: ["If you know, you know"],
  },
  {
    word: "Jit",
    definition:
      "A younger person, usually used as an insult against someone who is seen as inexperienced.",
    origin:
      "Defined on Urban Dictionary in 2004, popularized on TikTok in late 2023.",
    examples: [
      "Sit down, jit.",
      "These jits don't know who they're messing with.",
    ],
    variations: [],
  },
  {
    word: "Karen",
    definition:
      "Pejorative term often describing an obnoxious, angry, or entitled White woman.",
    origin:
      'Originated among Black people to refer to an unreasonable White woman. The term became popular on Black Twitter as a meme used to describe White women who "tattle on Black kids\' lemonade stands." These days often used by people of all races.',
    examples: ["Okay, stop being a Karen."],
    variations: ["Karen haircut", "Karens", "Karen behaviour", "Karen cut"],
  },
  {
    word: "Lit",
    definition:
      'Colloquially: "Enlightened", "Hot", "Fire." The new hotness; something remarkable, interesting, fun or amusing. Generally positive.',
    origin:
      "Semantically the same as cool of earlier generations, but contradicts the former's normative semantics.",
    examples: ["That party was lit!"],
    variations: ["Litty", "Fire"],
  },
  {
    word: "Looksmaxxing",
    definition:
      "A term originating from incel message boards referring to attempts (often pseudoscientific ones) to maximize physical attractiveness.",
    origin:
      "Dates back as early as 2014 to incel Internet forums but was recently popularized on TikTok in 2023 alongside relevant terms like mewing and mogging.",
    examples: [
      "We should start looksmaxxing!",
      "Here's what I looked like before and after looksmaxxing.",
    ],
    variations: ["Looksmaxxer"],
  },
  {
    word: "Main character",
    definition:
      "Used to describe someone who is or wants to be the star of their own life. Often used to refer to someone who wants to be the center of attention.",
    origin:
      'Popularized by a TikTok video in May 2020 of someone jokingly singing and dancing about being the "main character" of their neighborhood.',
    examples: [
      "She thinks she's the main character.",
      "Driving with the windows down has main character energy.",
    ],
    variations: ["Main character energy", "Main character syndrome"],
  },
  {
    word: "Mew",
    definition:
      "A pseudoscientific method to restructure someone's jawline by pressing their tongue to the roof of their mouth.",
    origin:
      "Originally coined by controversial British dentist, John Mew, and his son, Mike. The term became popular in the late 2010's and on TikTok.",
    examples: ["Sorry, can't talk! I'm trying to learn how to mew."],
    variations: ["Mewing"],
  },
  {
    word: "Mid",
    definition:
      "Labeling something as average or not special. Sometimes used in a negative or insulting way.",
    origin:
      "Originally used in 20th and 21st-century cannabis culture to describe mid-tier or low-quality marijuana. The term became popular on TikTok in the early 2020s.",
    examples: ["That movie was so mid."],
    variations: [],
  },
  {
    word: "Netflix and chill",
    definition:
      "To watch Netflix with a romantic prospect, often with the eventual expectation of sexual activity.",
    origin:
      'The term was first recorded in a tweet in 2009 in a nonsexual way. By 2015, the phrase became an Internet meme and its use on teenage social media was commonly described as "sexual."',
    examples: ["Come on, let's Netflix and chill."],
    variations: [],
  },
  {
    word: "NPC",
    definition:
      "Someone who cannot think for themselves and/or has no or little control over their own life, is ready to agree with popular opinion unquestioningly, and always believes what they are told; someone who acts robotic, similar to an NPC (non-player character) in a video game.",
    origin:
      "First gained popularity in late 2018 around the United States Midterm elections, where it was frequently used by supporters of then U.S. president Donald Trump to mock his opponents. It experienced a resurgence in popularity again in 2022 via TikTok. Originates from non-player characters in video games which can only be interacted with in limited ways and have static, preprogrammed behaviors controlled by the game's developer.",
    examples: ["He's such an NPC. He has no personality."],
    variations: ["Non-playable Character", "Non-player Character"],
  },
  {
    word: "Nyaa",
    definition:
      "Kitty cat noise, it’s used to portray a cutesy vibe, often used ironically, sometimes not.",
    origin: "It’s a Japanese word similar to the word “Meow” in English.",
    examples: ["Nyaa!! >.< ^_^"],
    variations: ["Nyan"],
  },
  {
    word: "Ohio",
    definition: "Slang meaning for strange, weird, cringe, and dumb.",
    origin:
      "Originally referred to the U.S. State of Ohio. It gained widespread popularity in 2020 as a meme that humorously labelled Ohio as a weird place where only bizarre and random things happened.",
    examples: ["What you are doing is so Ohio."],
    variations: ['from Ohio (e.g., "that guy is acting so from Ohio.")'],
  },
  {
    word: "OK Boomer",
    definition:
      'Pejorative directed toward members of the "Baby Boomer" generation, used to dismiss or mock attitudes typically associated with baby boomers as out of date.',
    origin:
      "First recorded use dates back to January 29, 2009, comment on Reddit and appeared in 4chan in 2015. Gained widespread popularity in response to a 2019 rant by an unidentified man on TikTok, where he criticized younger generations.",
    examples: ["You think climate change doesn't exist? OK Boomer."],
    variations: ["Okay Boomer"],
  },
  {
    word: "Oomf",
    definition: "One of My Followers.",
    origin: "Abbreviation",
    examples: ["OOMF liked that post.", "Me and my oomfies all follow her."],
    variations: ["Oomfie"],
  },
  {
    word: "Oof",
    definition:
      "Used to express discomfort, surprise, dismay, or sympathy for someone else's pain.",
    origin:
      'The sound "oof" has been used when a player dies in video games since the early 2000s. It gained popularity from Roblox when characters would make the sound when dying or respawning.',
    examples: [
      "I oofed that math test.",
      "Oof! I can't believe he survived that fall.",
    ],
    variations: ["To oof", "oofed"],
  },
  {
    word: "Opp",
    definition:
      "Short for opposition or enemies; describes an individual's opponents. A secondary, older definition has the term be short for \"other peoples' pussy.\"",
    origin:
      'Originated from street and gang culture. Dexerto claims that the primary definition stems from the secondary one, which was derived from a 1991 Naughty by Nature song titled "O.P.P." The initialism was derived from the acronym "OPM," which was used in the neighborhood the group grew up in and stood for "other people\'s money." An example of the term being used in popular culture is also in the Gangsta Rap scene, with YBN Nahmir and his song "Opp Stoppa". Dictionary.com implies that the origins for the two meanings had little to do with each other.',
    examples: ["I have to be careful, my opps are over there."],
    variations: ["Opps", "Op", "Oppa"],
  },
  {
    word: "Out of pocket",
    definition:
      "To be crazy, wild, or extreme, sometimes to an extent which is considered too far.",
    origin:
      'Thought to originate in African-American vernacular in the 1940s as a piece of jargon related to playing pool. Being "out of pocket" was not desirable, because a shot that goes out of the pocket means that the offending player loses their next turn..',
    examples: ["That comment was out of pocket."],
    variations: ["Outta pocket"],
  },
  {
    word: "Owned",
    definition:
      "Used to refer to defeat in a video game, or domination of an opposition. Also less commonly used to describe defeat in sports.",
    origin:
      "Originated in the 1990s as a terms used to describe hackers gaining administrative control over another person's computer.",
    examples: ["Get owned noob!"],
    variations: [
      "Get owned",
      "own3d",
      "0wn3d",
      "pwned",
      "pwnt",
      "POWER OWNED",
      "pooned",
    ],
  },
  {
    word: "Periodt",
    definition:
      'Used as an interjection to indicate that the preceding statement is final and that there is nothing more to be said about it. Similar to the British term "full stop."',
    origin:
      'Originated as "period" in the early 1900s. The addition of the "t" stems from Southern Black Gay English. Spread in the 2010s via the City Girls rap duo. Entered into the mainstream in 2019, in part due to Black Twitter. The T is based on a common trend in black English where T is used as a replacement for D.',
    examples: ["You were awesome out there, periodt."],
    variations: ["Period't"],
  },
  {
    word: "Pick-me",
    definition:
      "Someone who seeks validation by trying to stand out, often putting down others in their own gender or group to gain favor or attention.",
    origin:
      "The term 'Pick-Me Girl' first appeared on X (Formerly Twitter) in 2016 with the hashtag #TweetLikeAPickMe, mocking girls who called themselves 'wifey material.' Pick-Me Girls intend to impress men and are typically referred to having 'PICK ME, CHOOSE ME, LOVE ME' energy. The term 'Pick-Me Boy' later gained popularity as a boy who emotionally manipulates women by intentionally putting themselves down to seek validation and compliments.",
    examples: ["She’s acting like such a pick-me."],
    variations: ["Pick-Me Girl", "Pick-Me Boy"],
  },
  {
    word: "Pluh",
    definition:
      "Used as a conversation stopper when there is nothing left to say.",
    origin:
      "Used to be pronounced 'Plug', but rap collective BeatPluggz used 'pluh' as a tag to mark his music and eventually became a meme on TikTok circa 2021.",
    examples: ['Person 1: "Soo...uhhh, yeah." Person 2: "Pluh" (walks away).'],
    variations: ["Pluh", "Plough", "Ploh", "Plugh"],
  },
  {
    word: "Pookie",
    definition: "An endearing nickname for a close friend or lover",
    origin:
      "Originates from a German term of endearment in the 1900s. Also used as a pet name.",
    examples: ["Hello, my pookie!", "Pookie is missing"],
    variations: ["Pookie bear"],
  },
  {
    word: "Queen (noun)",
    definition: "A person (usually female) deemed impressive or praiseworthy.",
    origin:
      'Originates from the noun term "queen" which is used to describe a person of high importance and royalty, in this case someone who did something of importance that “slayed”.',
    examples: ["Slay, you’re such a queen!"],
    variations: ["King", "Queenie"],
  },
  {
    word: "Ratio (noun)",
    definition:
      "When a post, particularly on X (Formerly Twitter), receives more replies than retweets and likes combined. This is usually a sign of intense negative reception.",
    origin:
      'Originates from the mathematical term "ratio" which compares the quantitative relationship between a set of numbers.',
    examples: ["How did I deserve this ratio?!"],
    variations: ["L+Ratio", "Ratioed"],
  },
  {
    word: "Ratio (verb)",
    definition:
      "When a reply, particularly on X (Formerly Twitter), has better reception and more likes than the original post being replied to.",
    origin:
      'Originates from the mathematical term "ratio" which compares the quantitative relationship between a set of numbers.',
    examples: ["I'm gonna ratio you!"],
    variations: ["L+Ratio", "Ratioed"],
  },
  {
    word: "Red flag",
    definition:
      "A warning sign indicating behaviors or characteristics within a relationship that may potentially be harmful or toxic. Oppositely, a green flag indicates positive aspects or healthy behaviors.",
    origin:
      "The use of the term red flag as a warning traces back to the 18th century. Historically, red flags were used as signals during wars or battles to indicate danger. The term green flag comes from the use of green-colored flags indicating permission to proceed. The concept of 'beige flags' has gained popularity to represent behaviors that are neither positive or negative, but rather depend on individual preferences or boundaries.",
    examples: [
      "How did I not notice all the red flags?",
      "The way he acts is such a green flag.",
      "What is your girlfriend's beige flag?",
    ],
    variations: [],
  },
  {
    word: "Rizz",
    definition: "One's charm/seduction skills.",
    origin:
      "Short for charisma. The term originated in Baltimore amongst the African-American community and spread throughout urban communities in the United States. In mid-2021, the term was further popularized by American Twitch streamer Kai Cenat.",
    examples: ["He has all the rizz, he gets every girl."],
    variations: [
      "Rizzed",
      "W Rizz",
      "L Rizz",
      "No Rizz",
      "Rizzler",
      "Unspoken Rizz",
      "Rizz Up",
    ],
  },
  {
    word: "Roman Empire",
    definition:
      "A random event, person, incident, or thing that fascinates or intrigues one to the point that one is frequently thinking about it.",
    origin:
      "Originated in 2023 after influencer Saskia Cort encouraged her Instagram followers to ask their male partners how often they thought about the Roman Empire, to which many answered quite often. The term spread internationally and evolved to mean something that frequently occupies one’s thoughts. It has also morphed into a joke about how often people think about/mention the Roman Empire.",
    examples: [
      "Clara Oswald is my Roman Empire.",
      "How often do you think about the Roman Empire?",
    ],
    variations: [],
  },
  {
    word: "Salty",
    definition:
      "Used to describe someone who is behaving or expressing themselves in a resentful, bitter, or irritated manner.",
    origin: 'Originally referred to "racy" or "vulgar" sailors in the 1800s.',
    examples: ["I don't know why she's being so salty."],
    variations: [],
  },
  {
    word: "Secure the bag",
    definition:
      "Working to reach your goals, usually referring to making money.",
    origin:
      'Started in hip-hop culture and used as the opposite of the phrase "fumble the bag." The phrase first appeared on Urban Dictionary in 2017. Likely popularized by songs with the same title by Gucci Mane and Lil Uzi Vert.',
    examples: ["I've gotta secure the bag."],
    variations: ["Bag secured", "Securing the bag"],
  },
  {
    word: "Sheesh",
    definition:
      'To praise someone when they are doing something good. The vowels are often emphasized, as in "sheeesh". The one being praised is to do the "ice in my veins" pose popularized by Basketball player D\'Angelo Russell.',
    origin:
      'Believed to be a variation of another word such as "jeez," "Jesus," or "shit." First used in 1955 as a word to express "disappointment, annoyance or surprise."',
    examples: ["Sheesh, those shoes are stylish."],
    variations: ["Shee", "Sheeesh"],
  },
  {
    word: "Shook",
    definition: "To be shocked, surprised, or bothered.",
    origin:
      "Became prominent in hip-hop starting in the 1990s, where it began to be used as a standalone adjective for uncontrollable emotions. One famous example is Mobb Deep's 1995 single Shook Ones, Part II.",
    examples: ["I am shook after that."],
    variations: ["Shooketh"],
  },
  {
    word: "Sigma",
    definition: "An independent male on top of the social hierarchy.",
    origin:
      "From the Greek letter, sigma (Σ), often used above A (as Latin S) in numerical tierlists.",
    examples: ["He is so sigma", "What the sigma?"],
    variations: [],
  },
  {
    word: "Simp",
    definition:
      "Sycophancy, being overly affectionate in pursuit of a sexual relationship.",
    origin:
      'Originally short term for simpering; first used to describe those who were "soft" and "overly affectionate" in the 1980s by West coast rappers. Has been a popular slang on the Internet since the late 2010s on Reddit and X (Formerly Twitter). Adopted by the manosphere community before appearing on TikTok.',
    examples: ["Stop simping for that girl, she doesn't even know you."],
    variations: ["Simper", "Simping", "Simped"],
  },
  {
    word: "Situationship",
    definition:
      "Refers to an ambiguous romantic relationship where all parties have mutual feelings for one another, but said feelings are not clearly defined; a mid-point between dating and not dating.",
    origin:
      "Coined by journalist Carina Hsieh in 2017 as the subject of a Cosmopolitan article amid the rise of dating apps. In 2022, it was validated as a legitimate relationship status by Tinder and experienced a glut of usage on TikTok around the same time as it became an increasingly common and controversial relationship status.",
    examples: [
      "I don't really know if he likes me or not, so for now it's a situationship.",
    ],
    variations: [],
  },
  {
    word: "Sksksk",
    definition: "Used to convey happiness/laughter.",
    origin:
      'A form of keysmashing. Earliest known usage is by Brazilian users on Twitter. Used by various British, African-American, and gay communities before becoming associated with stan Twitter in 2019. Became associated with VSCO girls. Similar forms can be found regionally, like the Indonesian "Wkwkwk" or the Korean "kkkk."',
    examples: ["OMG that's so funny sksksksk."],
    variations: [],
  },
  {
    word: "Skibidi",
    definition:
      "Nonce word, is often used for a comedic or exaggerating effect",
    origin:
      'First known usage was in 2018 when the song "Skibidi" by Little Big was popularized. In 2022, TikToker Yasin Cengiz renewed the trend with belly dancing videos to a remix inspired by "Dom Dom Yes Yes", created by Bulgarian artist Biser King, before exploding in popularity with the creation of Skibidi Toilet in 2023, which uses a mashup of the song and Give It to Me by Timbaland as the main theme of its titular antagonists. Has since been adopted by Gen A.',
    examples: ["That was so skibidi of you", "This song is so skibidi."],
    variations: ["skibdi", "skibbiri"],
  },
  {
    word: "Slaps",
    definition:
      "Used to refer to something that is perceived to be good, particularly used when referring to music.",
    origin:
      'Used in the 18th century to refer to "excellence," and in the 19th century for something that was "first-rate." It was first applied to music in the early 2000s.',
    examples: ["This song slaps."],
    variations: ["Slap", "Slapped"],
  },
  {
    word: "Slay",
    definition: "To do something well.",
    origin:
      "Possibly a 19th-century term for being fashionable, slay's modern origin stems from Black and Latino queer culture from the 1970s, which was used to describe when one's appearance was \"flawless.\" The term was popularized by American singer Beyoncé in 2016.",
    examples: ["She slayed in her new album."],
    variations: ["Slaying", "Slayed"],
  },
  {
    word: "Sleep on",
    definition:
      "When something of value is underestimated or overlooked but is deserving of attention.",
    origin:
      'Originated as early as the 1500s from the phrase "sleep on it" when it was believed that once well rested, a better decision could be made on an important matter.',
    examples: [
      "People always sleep on this song.",
      "Their talent is slept on.",
    ],
    variations: ["Sleeping on", "Slept on"],
  },
  {
    word: "Snatched",
    definition:
      "Amazing, attractive, or flawlessly styled. Sometimes used to particularly describe a person as having a narrow waist.",
    origin:
      "Originated in Black drag culture to describe someone as fashionable.",
    examples: ["Your eyebrows are snatched af."],
    variations: [],
  },
  {
    word: "Stan",
    definition:
      "Supporting something to an extreme degree. Specifically used in cases of overzealous or obsessive support of celebrities.",
    origin:
      'Portmanteau for "stalker" and "fan." Derived from the 2000 song of the same name by Eminem.',
    examples: ["Do you stan Taylor Swift?"],
    variations: ["Stanning", "Stanned"],
  },
  {
    word: "Sus",
    definition: "Short term for suspect/suspicious.",
    origin:
      "Popularized in 2018 by players of the online video game Among Us and received mainstream usage with the game's explosion in popularity in mid-2020 amidst the COVID-19 pandemic. According to the Merriam Websters, the term has been in use among English speakers since at least the 1960s.",
    examples: ["You're acting pretty sus."],
    variations: ["Sussy", "Sussy Baka"],
  },
  {
    word: "Tea",
    definition: "Secret information or rumors",
    origin:
      'Originates from Black drag culture of the 1990s. The letter "t" stood for "truth".',
    examples: ["So, what's the tea?", "Spill the tea."],
    variations: ["T", "That's tea", "Spill the tea"],
  },
  {
    word: "Touch grass",
    definition:
      'A way of telling someone to "go outside", usually after said person is believed to have been on social media for too long.',
    origin:
      "Believed to have originated in 2015, before experiencing a resurgence in 2020-2021.",
    examples: ["Yeah, he needs to go touch grass."],
    variations: [],
  },
  {
    word: "Tweaking",
    definition: "To be acting strangely or think you're hallucinating.",
    origin:
      'Originates from AAVE meaning "high on meth", now used to denote anyone acting weirdly.',
    examples: ["Am I tweaking?", "Bro are you tweaking?"],
    variations: ["Tweak", "Tweakin", "Tweaked"],
  },
  {
    word: "Understood the assignment",
    definition:
      "To understand what was supposed to be done; to do something well.",
    origin:
      'Popularized by American rapper Tay Money\'s 2021 song "The Assignment". She posted a video on TikTok stating that she "understood the assignment."',
    examples: ["When he got up on stage, he understood the assignment."],
    variations: [],
  },
  {
    word: "UwU",
    definition:
      "Used to portray happiness or one wanting to appear cute. Used more or less as an expression.",
    origin:
      "Became popular in the 2000s. The expression is commonly associated with furry, femboys and anime fandoms.",
    examples: ["UwU, soft kisses.", "OwO, what's this?"],
    variations: ["uwu", "UwU", "owo", "OwO"],
  },
  {
    word: "Valid",
    definition: "Seen as socially acceptable.",
    origin:
      "Gained prominence in Tumblr (and later, TikTok) discourse regarding the acceptability of a given behavior, person, or thing.",
    examples: ["I agree, your opinion is valid as hell."],
    variations: [],
  },
  {
    word: "Vibe check",
    definition: "To check one's personality or attitude.",
    origin:
      "First defined in an Urban Dictionary post on April 18, 2011. Remained largely obscure until a sudden uptick of usage on X (Formerly Twitter) in 2019.",
    examples: ["You need a vibe check.", "He has passed the vibe check"],
    variations: ["Vibe checked"],
  },
  {
    word: "VSCO Girl",
    definition:
      'A stereotypical white girl who often takes trendy and "basic" pictures of themself to later edit and post online.',
    origin:
      'Named after VSCO, a photography app released in 2011. The term "VSCO girl" originated in late 2018 and was popularized in 2019 on social media platforms such as TikTok where it became a trendy Internet aesthetic. The phrase has since fallen out of popularity in late 2019.',
    examples: ["I love your aesthetic! You're such a VSCO girl."],
    variations: [],
  },
  {
    word: "Wig",
    definition:
      'To do something so well as to "make one\'s wig fly off." Unrelated to wig out.',
    origin:
      "Originated from Black LGBT ballroom culture. American singer Katy Perry is generally credited with propagating the word into the mainstream after using it to compliment a contestant on American Idol in 2018.",
    examples: ["You always wig whenever you write a song."],
    variations: ["Wiggy"],
  },
  {
    word: "Yap",
    definition:
      "To talk too much; To say many words without the words meaning anything.",
    origin:
      "Speculated to be used as early as 1592 to express annoyance and irritation. Became a TikTok trend in 2023 for someone who talks too much, or whose talking doesn't make sense.",
    examples: [
      'Person 1: "So I just need a petroleum tank, and lighter fluid to construct..." Person 2: "Quit yapping."',
    ],
    variations: ["Yapping", "Yappin'", "Yapanese", "Yappachino"],
  },
  {
    word: "Yeet",
    definition:
      "To throw something with force and without regard. Also used as a generic positive exclamation.",
    origin:
      "Popularized in 2014 primarily over the video platforms Vine and YouTube, with a resurgence of popularity beginning in 2018.",
    examples: ["He yeeted that pencil across the classroom!"],
    variations: ["Yote (past tense)"],
  },
  {
    word: "Zesty",
    definition:
      "Effeminately or flamboyantly provocative. Usually carries a sexual connotation.",
    origin: "Popularized in 2022 on TikTok.",
    examples: ["He's acting zesty."],
    variations: ["Zooty", "fruity", "zestiful"],
  },
];

export function getWord(word: string): Word | undefined {
  return dictionaryData.find(
    (w) => w.word.toLowerCase() === word.toLowerCase(),
  );
}

export function getAllWords(): string[] {
  const words = [];
  for (let i = 0; i < dictionaryData.length; i++) {
    words.push(dictionaryData[i].word.toLowerCase());
  }
  return words;
}

export function getRandomWord(): Word {
  const randomIndex = Math.floor(Math.random() * dictionaryData.length);
  return dictionaryData[randomIndex];
}
