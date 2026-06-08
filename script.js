const GENERAL = "General";
const HEALTHCARE = "Healthcare / Hospital Operations";
const STORAGE_KEY = "ielts-speaking-topic-tab";

function c(phrase, meaning, example) {
  return { phrase, meaning, example };
}

const generalTopics = [
  {
    mainTopic: "Work and Study",
    category: GENERAL,
    part1Questions: [
      "Do you work or are you a student?",
      "What do you enjoy most about your work or study?",
      "Would you like to change your job or subject in the future?"
    ],
    part2CueCard: {
      task: "Describe a work or study task that you completed successfully.",
      bulletPoints: ["What the task was", "Why it was important", "How you completed it", "And explain how you felt afterwards"]
    },
    part3Questions: [
      "Why do some people find it difficult to balance work and study?",
      "What skills are important for young people entering the workplace?",
      "Should schools prepare students more for real working life?"
    ],
    collocations: [
      c("gain practical experience", "tích lũy kinh nghiệm thực tế", "Internships can help students gain practical experience."),
      c("meet a deadline", "hoàn thành đúng hạn", "I had to work carefully to meet a deadline."),
      c("develop professional skills", "phát triển kỹ năng nghề nghiệp", "Working in a team helps me develop professional skills."),
      c("handle daily tasks", "xử lý công việc hằng ngày", "Good planning helps me handle daily tasks better."),
      c("improve work performance", "cải thiện hiệu quả công việc", "Regular feedback can improve work performance.")
    ],
    sentenceFrames: [
      "In my current work or study, I usually have to...",
      "One thing I have learned from this experience is...",
      "I think this skill is useful because..."
    ]
  },
  {
    mainTopic: "Family Relationships",
    category: GENERAL,
    part1Questions: [
      "Do you live with your family?",
      "Who are you closest to in your family?",
      "How often do you spend time with your relatives?"
    ],
    part2CueCard: {
      task: "Describe a family member who has influenced you.",
      bulletPoints: ["Who this person is", "What kind of person they are", "What you learned from them", "And explain why they are important to you"]
    },
    part3Questions: [
      "How has family life changed in recent years?",
      "Why is family support important during difficult times?",
      "Should young adults live independently from their parents?"
    ],
    collocations: [
      c("build strong relationships", "xây dựng mối quan hệ bền chặt", "Families can build strong relationships by spending time together."),
      c("give emotional support", "hỗ trợ tinh thần", "My parents always give emotional support when I feel stressed."),
      c("share household responsibilities", "chia sẻ trách nhiệm gia đình", "Children should learn to share household responsibilities."),
      c("keep in close contact", "giữ liên lạc thường xuyên", "I try to keep in close contact with my grandparents."),
      c("solve family problems", "giải quyết vấn đề gia đình", "Good communication helps people solve family problems.")
    ],
    sentenceFrames: [
      "In my family, we usually...",
      "I am close to this person because...",
      "A strong family relationship can help people..."
    ]
  },
  {
    mainTopic: "Hometown",
    category: GENERAL,
    part1Questions: [
      "Where is your hometown?",
      "What do you like most about your hometown?",
      "Has your hometown changed much since you were a child?"
    ],
    part2CueCard: {
      task: "Describe a place in your hometown that you like visiting.",
      bulletPoints: ["Where it is", "What people do there", "How often you go there", "And explain why you like this place"]
    },
    part3Questions: [
      "Why do many people move from small towns to big cities?",
      "What can local governments do to improve hometowns?",
      "Is it important for people to feel proud of where they come from?"
    ],
    collocations: [
      c("a peaceful atmosphere", "bầu không khí yên bình", "My hometown has a peaceful atmosphere in the evening."),
      c("local community", "cộng đồng địa phương", "The local community is friendly and supportive."),
      c("improve public facilities", "cải thiện tiện ích công cộng", "The city should improve public facilities for residents."),
      c("preserve local culture", "giữ gìn văn hóa địa phương", "Festivals help preserve local culture."),
      c("a sense of belonging", "cảm giác thuộc về", "Living there gives me a strong sense of belonging.")
    ],
    sentenceFrames: [
      "My hometown is known for...",
      "Compared with the past, it has become...",
      "I feel attached to this place because..."
    ]
  },
  {
    mainTopic: "Maintaining Good Health",
    category: GENERAL,
    part1Questions: [
      "What do you do to stay healthy?",
      "Do people in your country care a lot about health?",
      "Is it easy to have a healthy lifestyle today?"
    ],
    part2CueCard: {
      task: "Describe a healthy habit that you have.",
      bulletPoints: ["What the habit is", "When you started it", "How it helps you", "And explain whether you will continue it"]
    },
    part3Questions: [
      "Why do some people find it hard to stay healthy?",
      "Should governments do more to encourage healthy living?",
      "How can workplaces support employees' health?"
    ],
    collocations: [
      c("maintain a healthy lifestyle", "duy trì lối sống lành mạnh", "I try to maintain a healthy lifestyle by exercising regularly."),
      c("reduce stress levels", "giảm mức độ căng thẳng", "Walking after work can reduce stress levels."),
      c("eat a balanced diet", "ăn chế độ cân bằng", "Children should learn to eat a balanced diet."),
      c("get enough sleep", "ngủ đủ giấc", "It is difficult to focus if I do not get enough sleep."),
      c("improve physical fitness", "cải thiện thể lực", "Regular exercise can improve physical fitness.")
    ],
    sentenceFrames: [
      "To stay healthy, I usually...",
      "This habit is helpful because...",
      "I believe health should be a priority because..."
    ]
  },
  {
    mainTopic: "Technology in Daily Life",
    category: GENERAL,
    part1Questions: [
      "What technology do you use every day?",
      "Do you think technology saves time?",
      "Are older people in your country comfortable with technology?"
    ],
    part2CueCard: {
      task: "Describe a useful piece of technology you often use.",
      bulletPoints: ["What it is", "When you use it", "How it helps you", "And explain why it is important in your daily life"]
    },
    part3Questions: [
      "How has technology changed the way people communicate?",
      "What are the disadvantages of depending too much on technology?",
      "Should schools teach students more digital skills?"
    ],
    collocations: [
      c("save valuable time", "tiết kiệm thời gian quý giá", "Online services can save valuable time."),
      c("stay connected", "giữ kết nối", "Messaging apps help people stay connected."),
      c("digital skills", "kỹ năng số", "Most jobs now require basic digital skills."),
      c("depend on technology", "phụ thuộc vào công nghệ", "Many people depend on technology for work and study."),
      c("improve efficiency", "cải thiện hiệu suất", "Simple apps can improve efficiency at work.")
    ],
    sentenceFrames: [
      "I use this technology mainly to...",
      "The biggest advantage is that...",
      "However, one problem is..."
    ]
  },
  {
    mainTopic: "Education and Learning",
    category: GENERAL,
    part1Questions: [
      "What subject did you enjoy at school?",
      "Do you prefer studying alone or with other people?",
      "Do you think learning should continue after university?"
    ],
    part2CueCard: {
      task: "Describe something useful you learned outside school.",
      bulletPoints: ["What you learned", "How you learned it", "Why it was useful", "And explain how you use it now"]
    },
    part3Questions: [
      "What makes a good teacher?",
      "Is online learning as effective as classroom learning?",
      "Why is lifelong learning important today?"
    ],
    collocations: [
      c("lifelong learning", "học tập suốt đời", "Lifelong learning is important in a changing job market."),
      c("broaden my knowledge", "mở rộng kiến thức", "Reading books can broaden my knowledge."),
      c("learning environment", "môi trường học tập", "A quiet learning environment helps students focus."),
      c("practical knowledge", "kiến thức thực tiễn", "Workshops can provide practical knowledge."),
      c("academic performance", "kết quả học tập", "Good study habits can improve academic performance.")
    ],
    sentenceFrames: [
      "I learned this skill when...",
      "It was useful because...",
      "In the future, I want to learn more about..."
    ]
  },
  {
    mainTopic: "Travel and Holidays",
    category: GENERAL,
    part1Questions: [
      "Do you like travelling?",
      "What kind of places do you like to visit?",
      "Do you prefer travelling alone or with other people?"
    ],
    part2CueCard: {
      task: "Describe a memorable trip you had.",
      bulletPoints: ["Where you went", "Who you went with", "What you did there", "And explain why it was memorable"]
    },
    part3Questions: [
      "Why do people enjoy travelling to new places?",
      "How can tourism benefit local communities?",
      "What problems can too much tourism create?"
    ],
    collocations: [
      c("explore new places", "khám phá địa điểm mới", "I enjoy travelling because I can explore new places."),
      c("local culture", "văn hóa địa phương", "Trying local food is a good way to learn about local culture."),
      c("travel experience", "trải nghiệm du lịch", "A good travel experience can help people relax."),
      c("tourist attractions", "điểm thu hút khách du lịch", "Famous tourist attractions are often crowded."),
      c("broaden my perspective", "mở rộng góc nhìn", "Travelling abroad can broaden my perspective.")
    ],
    sentenceFrames: [
      "The trip was special because...",
      "One thing I learned from travelling is...",
      "I prefer this kind of holiday because..."
    ]
  },
  {
    mainTopic: "Food and Eating Habits",
    category: GENERAL,
    part1Questions: [
      "What food do you like eating?",
      "Do you often cook at home?",
      "Are eating habits in your country changing?"
    ],
    part2CueCard: {
      task: "Describe a meal that you enjoyed.",
      bulletPoints: ["What the meal was", "Who you ate it with", "Where you had it", "And explain why you enjoyed it"]
    },
    part3Questions: [
      "Why do many people eat fast food today?",
      "Should schools teach children about healthy eating?",
      "How important is food in family life?"
    ],
    collocations: [
      c("home-cooked meal", "bữa ăn nấu tại nhà", "A home-cooked meal is usually healthier than fast food."),
      c("balanced diet", "chế độ ăn cân bằng", "A balanced diet helps people stay healthy."),
      c("eating habits", "thói quen ăn uống", "Eating habits can change because of busy lifestyles."),
      c("local dishes", "món ăn địa phương", "Tourists often want to try local dishes."),
      c("share a meal", "cùng ăn một bữa", "Families can talk and relax when they share a meal.")
    ],
    sentenceFrames: [
      "I usually choose this food because...",
      "In my country, people often eat...",
      "Food is important to me because..."
    ]
  },
  {
    mainTopic: "Protecting the Environment",
    category: GENERAL,
    part1Questions: [
      "Do you care about environmental problems?",
      "What do you do to protect the environment?",
      "Are people in your city interested in recycling?"
    ],
    part2CueCard: {
      task: "Describe an environmental problem in your area.",
      bulletPoints: ["What the problem is", "Where it happens", "How it affects people", "And explain what can be done about it"]
    },
    part3Questions: [
      "What environmental problems are most serious today?",
      "Should individuals or governments take more responsibility?",
      "How can companies become more environmentally friendly?"
    ],
    collocations: [
      c("protect the environment", "bảo vệ môi trường", "Everyone should do something to protect the environment."),
      c("reduce plastic waste", "giảm rác thải nhựa", "Using reusable bags can reduce plastic waste."),
      c("environmental awareness", "nhận thức về môi trường", "Schools can raise environmental awareness."),
      c("save natural resources", "tiết kiệm tài nguyên thiên nhiên", "Turning off lights helps save natural resources."),
      c("have a positive impact", "có tác động tích cực", "Small daily actions can have a positive impact.")
    ],
    sentenceFrames: [
      "One environmental issue in my area is...",
      "A practical solution would be to...",
      "I think people should change this habit because..."
    ]
  },
  {
    mainTopic: "Shopping Habits",
    category: GENERAL,
    part1Questions: [
      "Do you enjoy shopping?",
      "Do you prefer shopping online or in stores?",
      "What do you usually spend money on?"
    ],
    part2CueCard: {
      task: "Describe something useful you bought recently.",
      bulletPoints: ["What it was", "Where you bought it", "Why you needed it", "And explain whether it was worth the money"]
    },
    part3Questions: [
      "Why has online shopping become popular?",
      "Do advertisements influence people's buying decisions?",
      "Should people be taught how to spend money wisely?"
    ],
    collocations: [
      c("make a purchase", "mua hàng", "I usually read reviews before I make a purchase."),
      c("compare prices", "so sánh giá", "Online shopping makes it easy to compare prices."),
      c("buy unnecessary things", "mua những thứ không cần thiết", "Sales promotions can make people buy unnecessary things."),
      c("customer reviews", "đánh giá của khách hàng", "Customer reviews help me choose better products."),
      c("value for money", "đáng tiền", "The product was simple but good value for money.")
    ],
    sentenceFrames: [
      "Before buying something, I usually...",
      "I chose this product because...",
      "For me, value for money means..."
    ]
  },
  {
    mainTopic: "Social Media",
    category: GENERAL,
    part1Questions: [
      "Do you use social media often?",
      "What do you usually do on social media?",
      "Do you think social media is useful?"
    ],
    part2CueCard: {
      task: "Describe a time when social media helped you.",
      bulletPoints: ["What happened", "Which platform you used", "How it helped you", "And explain why the experience was useful"]
    },
    part3Questions: [
      "How does social media affect communication?",
      "What are the risks of using social media too much?",
      "Should children have limits on social media use?"
    ],
    collocations: [
      c("share information quickly", "chia sẻ thông tin nhanh chóng", "Social media allows people to share information quickly."),
      c("stay updated", "cập nhật thông tin", "I use social media to stay updated about news."),
      c("online community", "cộng đồng trực tuyến", "An online community can support people with similar interests."),
      c("spend too much time online", "dành quá nhiều thời gian trên mạng", "Some teenagers spend too much time online."),
      c("protect personal information", "bảo vệ thông tin cá nhân", "Users should protect personal information on social media.")
    ],
    sentenceFrames: [
      "I mainly use social media to...",
      "One benefit is that...",
      "One drawback is that..."
    ]
  },
  {
    mainTopic: "Public Transport",
    category: GENERAL,
    part1Questions: [
      "What public transport do you usually use?",
      "Is public transport in your city convenient?",
      "Do you prefer buses, trains, or taxis?"
    ],
    part2CueCard: {
      task: "Describe a journey you took by public transport.",
      bulletPoints: ["Where you went", "What transport you used", "What happened during the journey", "And explain how you felt about it"]
    },
    part3Questions: [
      "Why should cities improve public transport?",
      "How can public transport reduce traffic problems?",
      "Would people use public transport more if it were cheaper?"
    ],
    collocations: [
      c("public transport system", "hệ thống giao thông công cộng", "A good public transport system can reduce traffic."),
      c("rush hour", "giờ cao điểm", "Buses are often crowded during rush hour."),
      c("traffic congestion", "ùn tắc giao thông", "Traffic congestion wastes a lot of time."),
      c("affordable fares", "giá vé phải chăng", "Affordable fares encourage more people to use buses."),
      c("daily commute", "việc đi lại hằng ngày", "My daily commute takes about thirty minutes.")
    ],
    sentenceFrames: [
      "I usually travel by...",
      "The main problem with public transport is...",
      "It would be better if..."
    ]
  },
  {
    mainTopic: "Sports and Exercise",
    category: GENERAL,
    part1Questions: [
      "Do you play any sports?",
      "Do you prefer watching or playing sports?",
      "How often do you exercise?"
    ],
    part2CueCard: {
      task: "Describe a sport or exercise activity you enjoy.",
      bulletPoints: ["What it is", "Where you do it", "Who you do it with", "And explain why you enjoy it"]
    },
    part3Questions: [
      "Why is sport important for young people?",
      "Should companies encourage employees to exercise?",
      "Do professional athletes have too much pressure?"
    ],
    collocations: [
      c("stay physically active", "duy trì vận động thể chất", "People should stay physically active to protect their health."),
      c("team spirit", "tinh thần đồng đội", "Team sports can build team spirit."),
      c("regular exercise", "tập thể dục đều đặn", "Regular exercise helps me sleep better."),
      c("improve mental health", "cải thiện sức khỏe tinh thần", "Sport can improve mental health and reduce stress."),
      c("healthy competition", "sự cạnh tranh lành mạnh", "School sports teach healthy competition.")
    ],
    sentenceFrames: [
      "I enjoy this activity because...",
      "Sport is useful because it helps people...",
      "In my opinion, exercise should be..."
    ]
  },
  {
    mainTopic: "Books and Reading",
    category: GENERAL,
    part1Questions: [
      "Do you like reading books?",
      "What kinds of books do you prefer?",
      "Do you read more now than when you were younger?"
    ],
    part2CueCard: {
      task: "Describe a book that you found useful or interesting.",
      bulletPoints: ["What the book was about", "When you read it", "What you learned from it", "And explain why you would recommend it"]
    },
    part3Questions: [
      "Why do some people read less today?",
      "Should children be encouraged to read more books?",
      "Are printed books still important in the digital age?"
    ],
    collocations: [
      c("reading habit", "thói quen đọc sách", "A reading habit can improve language skills."),
      c("gain new knowledge", "thu nhận kiến thức mới", "Books help readers gain new knowledge."),
      c("improve concentration", "cải thiện sự tập trung", "Reading can improve concentration."),
      c("fiction and non-fiction", "sách hư cấu và phi hư cấu", "I enjoy both fiction and non-fiction."),
      c("recommend a book", "giới thiệu một cuốn sách", "I often recommend a book to my friends.")
    ],
    sentenceFrames: [
      "The book was mainly about...",
      "I liked it because...",
      "Reading is valuable because..."
    ]
  },
  {
    mainTopic: "Movies and Entertainment",
    category: GENERAL,
    part1Questions: [
      "Do you like watching movies?",
      "What kind of movies do you enjoy?",
      "Do you prefer watching films at home or in a cinema?"
    ],
    part2CueCard: {
      task: "Describe a movie that made a strong impression on you.",
      bulletPoints: ["What the movie was", "When you watched it", "What it was about", "And explain why you remember it"]
    },
    part3Questions: [
      "How do movies influence people's ideas?",
      "Why do people need entertainment?",
      "Are local films important for a country's culture?"
    ],
    collocations: [
      c("watch a film", "xem một bộ phim", "I usually watch a film at weekends."),
      c("strong message", "thông điệp mạnh mẽ", "The movie had a strong message about family."),
      c("entertainment industry", "ngành giải trí", "The entertainment industry creates many jobs."),
      c("relax after work", "thư giãn sau giờ làm", "Movies help me relax after work."),
      c("share cultural values", "chia sẻ giá trị văn hóa", "Films can share cultural values with the world.")
    ],
    sentenceFrames: [
      "The movie impressed me because...",
      "I usually watch this kind of film when...",
      "Entertainment is important because..."
    ]
  },
  {
    mainTopic: "Weather and Seasons",
    category: GENERAL,
    part1Questions: [
      "What kind of weather do you like?",
      "Does weather affect your mood?",
      "What is the weather usually like in your city?"
    ],
    part2CueCard: {
      task: "Describe a day when the weather affected your plans.",
      bulletPoints: ["What the weather was like", "What you planned to do", "How your plans changed", "And explain how you felt"]
    },
    part3Questions: [
      "How does weather affect people's daily lives?",
      "Do you think climate change is changing local weather?",
      "Should people prepare more carefully for extreme weather?"
    ],
    collocations: [
      c("pleasant weather", "thời tiết dễ chịu", "Pleasant weather makes outdoor activities more enjoyable."),
      c("heavy rain", "mưa lớn", "Heavy rain can cause traffic problems."),
      c("extreme weather", "thời tiết cực đoan", "Extreme weather is becoming more common."),
      c("change my plans", "thay đổi kế hoạch", "Bad weather can change my plans quickly."),
      c("affect my mood", "ảnh hưởng tâm trạng", "Sunny days often affect my mood in a positive way.")
    ],
    sentenceFrames: [
      "I prefer this weather because...",
      "When the weather is bad, I usually...",
      "Weather can influence daily life because..."
    ]
  },
  {
    mainTopic: "Childhood Memories",
    category: GENERAL,
    part1Questions: [
      "Did you enjoy your childhood?",
      "What games did you play as a child?",
      "Do you still keep in touch with childhood friends?"
    ],
    part2CueCard: {
      task: "Describe a happy memory from your childhood.",
      bulletPoints: ["What happened", "Where it happened", "Who was with you", "And explain why you still remember it"]
    },
    part3Questions: [
      "Why are childhood experiences important?",
      "Do children today have a different childhood from the past?",
      "Should parents give children more freedom?"
    ],
    collocations: [
      c("happy childhood", "tuổi thơ hạnh phúc", "I was lucky to have a happy childhood."),
      c("childhood memory", "ký ức tuổi thơ", "This childhood memory is still very clear to me."),
      c("play outdoors", "chơi ngoài trời", "Children in the past often played outdoors."),
      c("learn social skills", "học kỹ năng xã hội", "Playing with friends helps children learn social skills."),
      c("family tradition", "truyền thống gia đình", "New Year meals were an important family tradition.")
    ],
    sentenceFrames: [
      "When I was a child, I often...",
      "This memory is special because...",
      "Childhood experiences can shape people because..."
    ]
  },
  {
    mainTopic: "Future Plans",
    category: GENERAL,
    part1Questions: [
      "Do you like making plans for the future?",
      "What is one goal you have for the next few years?",
      "Do your plans often change?"
    ],
    part2CueCard: {
      task: "Describe an important plan you have for the future.",
      bulletPoints: ["What the plan is", "Why you want to do it", "What steps you need to take", "And explain how it may change your life"]
    },
    part3Questions: [
      "Why do some people avoid planning for the future?",
      "Should young people make career plans early?",
      "How can people stay flexible when plans change?"
    ],
    collocations: [
      c("set clear goals", "đặt mục tiêu rõ ràng", "It is easier to make progress when I set clear goals."),
      c("make a long-term plan", "lập kế hoạch dài hạn", "I want to make a long-term plan for my career."),
      c("take small steps", "thực hiện từng bước nhỏ", "Taking small steps can make a big goal easier."),
      c("career path", "con đường sự nghiệp", "I am still thinking about my career path."),
      c("stay flexible", "giữ sự linh hoạt", "People need to stay flexible when life changes.")
    ],
    sentenceFrames: [
      "In the next few years, I hope to...",
      "To achieve this, I need to...",
      "This plan matters to me because..."
    ]
  },
  {
    mainTopic: "Daily Routine",
    category: GENERAL,
    part1Questions: [
      "What is your daily routine like?",
      "What is your favorite time of the day?",
      "Do you prefer a fixed routine or a flexible schedule?"
    ],
    part2CueCard: {
      task: "Describe a part of your daily routine that you enjoy.",
      bulletPoints: ["What it is", "When you do it", "Why you enjoy it", "And explain how it affects your day"]
    },
    part3Questions: [
      "Why do people need routines?",
      "Can a strict routine be stressful?",
      "How has technology changed people's daily routines?"
    ],
    collocations: [
      c("daily routine", "thói quen hằng ngày", "My daily routine starts with checking my schedule."),
      c("manage my time", "quản lý thời gian", "A morning plan helps me manage my time."),
      c("stay organized", "giữ sự ngăn nắp", "Writing a to-do list helps me stay organized."),
      c("productive day", "ngày làm việc hiệu quả", "Exercise in the morning can lead to a productive day."),
      c("healthy habit", "thói quen lành mạnh", "Drinking enough water is a simple healthy habit.")
    ],
    sentenceFrames: [
      "On a normal day, I usually...",
      "This routine helps me because...",
      "If my routine changes, I feel..."
    ]
  },
  {
    mainTopic: "Success",
    category: GENERAL,
    part1Questions: [
      "What does success mean to you?",
      "Do you think successful people are always happy?",
      "Have you achieved anything recently?"
    ],
    part2CueCard: {
      task: "Describe a success you are proud of.",
      bulletPoints: ["What you achieved", "How you achieved it", "Who helped you", "And explain why it was meaningful"]
    },
    part3Questions: [
      "Why do people define success differently?",
      "Is hard work more important than talent?",
      "Should society put less pressure on people to be successful?"
    ],
    collocations: [
      c("achieve a goal", "đạt được mục tiêu", "I felt proud when I achieved a goal."),
      c("work hard", "làm việc chăm chỉ", "Most people need to work hard to succeed."),
      c("personal achievement", "thành tựu cá nhân", "Passing an exam was a personal achievement for me."),
      c("measure success", "đo lường thành công", "People measure success in different ways."),
      c("stay motivated", "duy trì động lực", "Clear goals help me stay motivated.")
    ],
    sentenceFrames: [
      "For me, success means...",
      "I achieved this by...",
      "This experience taught me that..."
    ]
  },
  {
    mainTopic: "Teamwork",
    category: GENERAL,
    part1Questions: [
      "Do you like working in a team?",
      "What makes a good team member?",
      "Have you ever had problems in a team?"
    ],
    part2CueCard: {
      task: "Describe a time when you worked well with a team.",
      bulletPoints: ["What the team was doing", "What your role was", "How the team worked together", "And explain why the result was good"]
    },
    part3Questions: [
      "Why is teamwork important in the workplace?",
      "What problems can happen when people work in groups?",
      "How can leaders build effective teams?"
    ],
    collocations: [
      c("work as a team", "làm việc như một đội", "We had to work as a team to finish the project."),
      c("share responsibilities", "chia sẻ trách nhiệm", "Good teams share responsibilities clearly."),
      c("common goal", "mục tiêu chung", "A common goal helps people cooperate."),
      c("team member", "thành viên nhóm", "A good team member listens to others."),
      c("solve problems together", "cùng nhau giải quyết vấn đề", "Teams can solve problems together more effectively.")
    ],
    sentenceFrames: [
      "In this team, my role was to...",
      "We worked well together because...",
      "Teamwork is important because..."
    ]
  },
  {
    mainTopic: "Leadership",
    category: GENERAL,
    part1Questions: [
      "Have you ever been a leader?",
      "What qualities should a leader have?",
      "Do you prefer being a leader or a team member?"
    ],
    part2CueCard: {
      task: "Describe a person who is a good leader.",
      bulletPoints: ["Who this person is", "What they do", "How they lead others", "And explain why you respect them"]
    },
    part3Questions: [
      "Are leaders born or made?",
      "Why is communication important for leaders?",
      "Should leaders always make decisions quickly?"
    ],
    collocations: [
      c("lead by example", "lãnh đạo bằng việc làm gương", "Good managers lead by example."),
      c("make clear decisions", "đưa ra quyết định rõ ràng", "A leader should make clear decisions in difficult situations."),
      c("motivate other people", "tạo động lực cho người khác", "A good leader can motivate other people."),
      c("take responsibility", "chịu trách nhiệm", "Leaders need to take responsibility for results."),
      c("build trust", "xây dựng lòng tin", "Honest communication can build trust.")
    ],
    sentenceFrames: [
      "A good leader should be able to...",
      "I respect this person because...",
      "Leadership is challenging because..."
    ]
  },
  {
    mainTopic: "Time Management",
    category: GENERAL,
    part1Questions: [
      "Are you good at managing your time?",
      "Do you use a planner or an app?",
      "What do you do when you are very busy?"
    ],
    part2CueCard: {
      task: "Describe a time when you had to manage your time carefully.",
      bulletPoints: ["What you had to do", "Why time was limited", "How you organized your work", "And explain what the result was"]
    },
    part3Questions: [
      "Why do many people waste time?",
      "Is time management more important for students or workers?",
      "How can employers help staff manage time better?"
    ],
    collocations: [
      c("manage time effectively", "quản lý thời gian hiệu quả", "I use a calendar to manage time effectively."),
      c("set priorities", "đặt thứ tự ưu tiên", "When I am busy, I set priorities first."),
      c("avoid distractions", "tránh xao nhãng", "Turning off notifications helps me avoid distractions."),
      c("finish tasks on time", "hoàn thành việc đúng hạn", "Planning helps me finish tasks on time."),
      c("busy schedule", "lịch trình bận rộn", "A busy schedule can be stressful without planning.")
    ],
    sentenceFrames: [
      "When I have many tasks, I usually...",
      "The most important thing is to...",
      "This method helps me because..."
    ]
  },
  {
    mainTopic: "Decision Making",
    category: GENERAL,
    part1Questions: [
      "Do you find it easy to make decisions?",
      "Do you prefer making decisions alone or with advice?",
      "What was the last important decision you made?"
    ],
    part2CueCard: {
      task: "Describe an important decision you made.",
      bulletPoints: ["What the decision was", "Why you had to make it", "Who you discussed it with", "And explain whether it was a good decision"]
    },
    part3Questions: [
      "Why do some people make decisions slowly?",
      "Should important decisions be based on emotion or logic?",
      "How can companies make better decisions?"
    ],
    collocations: [
      c("make an informed decision", "đưa ra quyết định có đủ thông tin", "I read different opinions to make an informed decision."),
      c("weigh the options", "cân nhắc các lựa chọn", "It took me time to weigh the options."),
      c("consider the consequences", "xem xét hậu quả", "People should consider the consequences before acting."),
      c("ask for advice", "xin lời khuyên", "I often ask for advice from experienced colleagues."),
      c("take a risk", "chấp nhận rủi ro", "Sometimes people need to take a risk to grow.")
    ],
    sentenceFrames: [
      "Before making the decision, I had to...",
      "I chose this option because...",
      "Looking back, I think..."
    ]
  },
  {
    mainTopic: "Facing Challenges",
    category: GENERAL,
    part1Questions: [
      "Do you enjoy challenges?",
      "What kind of challenges do people face at work or school?",
      "How do you usually deal with difficult situations?"
    ],
    part2CueCard: {
      task: "Describe a challenging situation you faced.",
      bulletPoints: ["What the challenge was", "Why it was difficult", "What you did", "And explain what you learned"]
    },
    part3Questions: [
      "Why are challenges important for personal growth?",
      "Should parents protect children from difficulties?",
      "How can people stay calm under pressure?"
    ],
    collocations: [
      c("face a challenging situation", "đối mặt với tình huống thử thách", "Everyone has to face a challenging situation sometimes."),
      c("stay calm", "giữ bình tĩnh", "It is important to stay calm under pressure."),
      c("learn from failure", "học từ thất bại", "People can learn from failure if they reflect on it."),
      c("overcome difficulties", "vượt qua khó khăn", "Support from friends can help people overcome difficulties."),
      c("develop confidence", "phát triển sự tự tin", "Solving problems can develop confidence.")
    ],
    sentenceFrames: [
      "The biggest challenge was...",
      "I handled it by...",
      "This experience helped me become..."
    ]
  },
  {
    mainTopic: "Communication Skills",
    category: GENERAL,
    part1Questions: [
      "Are you good at communicating with others?",
      "Do you prefer texting or talking face to face?",
      "What makes communication difficult?"
    ],
    part2CueCard: {
      task: "Describe a time when good communication helped you.",
      bulletPoints: ["What happened", "Who you communicated with", "What you said or did", "And explain why communication was important"]
    },
    part3Questions: [
      "Why are communication skills important at work?",
      "Has technology improved or reduced communication quality?",
      "How can people communicate better during conflicts?"
    ],
    collocations: [
      c("clear communication", "giao tiếp rõ ràng", "Clear communication can prevent misunderstandings."),
      c("listen carefully", "lắng nghe cẩn thận", "People should listen carefully before replying."),
      c("express ideas clearly", "diễn đạt ý tưởng rõ ràng", "Good speakers express ideas clearly."),
      c("avoid misunderstandings", "tránh hiểu lầm", "Simple language helps avoid misunderstandings."),
      c("give constructive feedback", "đưa ra phản hồi mang tính xây dựng", "Managers should give constructive feedback.")
    ],
    sentenceFrames: [
      "In this situation, I had to explain...",
      "Good communication helped because...",
      "When there is a misunderstanding, I usually..."
    ]
  },
  {
    mainTopic: "Personal Development",
    category: GENERAL,
    part1Questions: [
      "Do you often try to improve yourself?",
      "What skill would you like to develop?",
      "Do you prefer learning from books or from experience?"
    ],
    part2CueCard: {
      task: "Describe a skill you improved recently.",
      bulletPoints: ["What the skill was", "Why you wanted to improve it", "How you practiced", "And explain how it helped you"]
    },
    part3Questions: [
      "Why is self-improvement popular today?",
      "Can people improve without feedback from others?",
      "Should companies invest in employee development?"
    ],
    collocations: [
      c("personal growth", "sự phát triển cá nhân", "Learning new skills supports personal growth."),
      c("improve myself", "cải thiện bản thân", "I try to improve myself by reading and practicing."),
      c("receive feedback", "nhận phản hồi", "It is useful to receive feedback from others."),
      c("build confidence", "xây dựng sự tự tin", "Practice can build confidence."),
      c("make steady progress", "tiến bộ đều đặn", "Small daily actions help me make steady progress.")
    ],
    sentenceFrames: [
      "I wanted to improve this skill because...",
      "I practiced by...",
      "The biggest change was..."
    ]
  },
  {
    mainTopic: "Money and Spending",
    category: GENERAL,
    part1Questions: [
      "Are you good at saving money?",
      "What do you usually spend money on?",
      "Do you prefer using cash or digital payment?"
    ],
    part2CueCard: {
      task: "Describe something you saved money to buy.",
      bulletPoints: ["What it was", "How long you saved for it", "Why you wanted it", "And explain whether it was worth buying"]
    },
    part3Questions: [
      "Why do some people find it difficult to save money?",
      "Should schools teach children about money management?",
      "How has online payment changed spending habits?"
    ],
    collocations: [
      c("save money", "tiết kiệm tiền", "I try to save money every month."),
      c("manage personal finances", "quản lý tài chính cá nhân", "Young people should learn to manage personal finances."),
      c("spending habits", "thói quen chi tiêu", "Online shopping can change spending habits."),
      c("financial pressure", "áp lực tài chính", "High living costs create financial pressure."),
      c("make a budget", "lập ngân sách", "I make a budget before a holiday.")
    ],
    sentenceFrames: [
      "I usually spend money on...",
      "To control my spending, I...",
      "Financial planning is important because..."
    ]
  },
  {
    mainTopic: "Community Life",
    category: GENERAL,
    part1Questions: [
      "Do you know many people in your neighborhood?",
      "Are there community events where you live?",
      "Do you think communities are important?"
    ],
    part2CueCard: {
      task: "Describe a community activity you joined or heard about.",
      bulletPoints: ["What the activity was", "Who took part", "What people did", "And explain why it was useful"]
    },
    part3Questions: [
      "Why are strong communities important?",
      "How can people help their local area?",
      "Has modern life made communities weaker?"
    ],
    collocations: [
      c("local community", "cộng đồng địa phương", "A strong local community can support older people."),
      c("take part in activities", "tham gia hoạt động", "Residents should take part in activities."),
      c("help people in need", "giúp người khó khăn", "Community groups often help people in need."),
      c("create a friendly environment", "tạo môi trường thân thiện", "Public events can create a friendly environment."),
      c("sense of community", "tinh thần cộng đồng", "Shared projects build a sense of community.")
    ],
    sentenceFrames: [
      "In my neighborhood, people usually...",
      "This activity was useful because...",
      "A good community should..."
    ]
  },
  {
    mainTopic: "Work-Life Balance",
    category: GENERAL,
    part1Questions: [
      "Do you think you have a good work-life balance?",
      "What do you do after work or study?",
      "Do people in your country work long hours?"
    ],
    part2CueCard: {
      task: "Describe a time when you balanced work or study with personal life.",
      bulletPoints: ["What you had to do", "What personal activity was important", "How you balanced both", "And explain what you learned"]
    },
    part3Questions: [
      "Why is work-life balance difficult for many people?",
      "Should companies offer flexible working hours?",
      "How can people avoid burnout?"
    ],
    collocations: [
      c("work-life balance", "cân bằng công việc và cuộc sống", "A good work-life balance helps people stay healthy."),
      c("flexible working hours", "giờ làm linh hoạt", "Flexible working hours can reduce stress."),
      c("spend quality time", "dành thời gian chất lượng", "I try to spend quality time with my family."),
      c("avoid burnout", "tránh kiệt sức", "Employees need rest to avoid burnout."),
      c("set boundaries", "đặt ranh giới", "It is healthy to set boundaries between work and home.")
    ],
    sentenceFrames: [
      "For me, balance means...",
      "When I am busy, I try to...",
      "Companies can support balance by..."
    ]
  }
];

const healthcareTopics = [
  {
    mainTopic: "Hospital Operations",
    category: HEALTHCARE,
    part1Questions: [
      "Do people in your country expect hospitals to work quickly and smoothly?",
      "What part of a hospital visit is usually stressful for patients?",
      "Have you ever noticed a hospital service that was well organized?"
    ],
    part2CueCard: {
      task: "Describe a hospital process that needs to be well organized.",
      bulletPoints: ["What the process is", "Who is involved", "Why it matters to patients", "And explain how it could be improved"]
    },
    part3Questions: [
      "Why are daily operations important in hospitals?",
      "What can managers do to make hospital services smoother?",
      "How can hospitals balance speed, quality, and patient care?"
    ],
    collocations: [
      c("run hospital operations", "vận hành hoạt động bệnh viện", "Managers need clear systems to run hospital operations well."),
      c("improve service quality", "cải thiện chất lượng dịch vụ", "Small process changes can improve service quality."),
      c("coordinate across departments", "phối hợp giữa các khoa phòng", "Hospitals must coordinate across departments during busy hours."),
      c("manage daily workload", "quản lý khối lượng công việc hằng ngày", "Good scheduling helps teams manage daily workload."),
      c("deliver reliable care", "cung cấp chăm sóc đáng tin cậy", "A stable process helps hospitals deliver reliable care.")
    ],
    sentenceFrames: [
      "From my experience, hospital operations are important because...",
      "One practical improvement would be to...",
      "Managers need to look at both patient feedback and daily data."
    ]
  },
  {
    mainTopic: "Improving Patient Waiting Time",
    category: HEALTHCARE,
    part1Questions: [
      "Do people in your country often complain about waiting time in hospitals?",
      "What do patients usually do while waiting?",
      "Do you think technology can reduce waiting time?"
    ],
    part2CueCard: {
      task: "Describe a time when a hospital or clinic improved its service process.",
      bulletPoints: ["What the problem was", "What changes were made", "Who was involved", "And explain why the improvement was useful"]
    },
    part3Questions: [
      "Why is waiting time an important factor in patient satisfaction?",
      "Should hospitals invest more in technology or staff training?",
      "What challenges do managers face when improving hospital operations?"
    ],
    collocations: [
      c("reduce waiting time", "giảm thời gian chờ", "Hospitals should use appointment systems to reduce waiting time."),
      c("improve patient experience", "cải thiện trải nghiệm người bệnh", "Clear communication can improve patient experience."),
      c("manage patient flow", "quản lý luồng bệnh nhân", "A good triage system helps manage patient flow."),
      c("identify operational bottlenecks", "xác định điểm nghẽn vận hành", "Managers need data to identify operational bottlenecks."),
      c("allocate resources effectively", "phân bổ nguồn lực hiệu quả", "Hospitals must allocate resources effectively during peak hours.")
    ],
    sentenceFrames: [
      "From my experience, this issue is quite common in hospitals because...",
      "One practical solution would be to...",
      "This can have a direct impact on patient satisfaction because..."
    ]
  },
  {
    mainTopic: "Patient Flow",
    category: HEALTHCARE,
    part1Questions: [
      "Have you ever seen a hospital that handled many patients efficiently?",
      "Why do patients sometimes move slowly through a hospital?",
      "Do you think clear signs can help patients move around a hospital?"
    ],
    part2CueCard: {
      task: "Describe a situation where many people needed service at the same time.",
      bulletPoints: ["Where it happened", "What caused the crowd", "How staff handled it", "And explain what could be improved"]
    },
    part3Questions: [
      "Why is patient flow important for service quality?",
      "How can hospitals reduce crowding at peak times?",
      "What role should front-line staff play in improving patient flow?"
    ],
    collocations: [
      c("manage patient flow", "quản lý luồng bệnh nhân", "Hospitals need simple rules to manage patient flow."),
      c("reduce crowding", "giảm tình trạng đông đúc", "Online booking can reduce crowding in outpatient areas."),
      c("guide patients clearly", "hướng dẫn bệnh nhân rõ ràng", "Signs and staff support can guide patients clearly."),
      c("smooth service process", "quy trình dịch vụ trơn tru", "A smooth service process reduces stress for patients."),
      c("peak hours", "giờ cao điểm", "More staff may be needed during peak hours.")
    ],
    sentenceFrames: [
      "Patient flow can become difficult when...",
      "A simple way to improve it is to...",
      "This matters because patients often feel..."
    ]
  },
  {
    mainTopic: "Patient Experience",
    category: HEALTHCARE,
    part1Questions: [
      "What makes a hospital visit comfortable for patients?",
      "Do you think staff attitude affects patient experience?",
      "Have hospital services in your area improved recently?"
    ],
    part2CueCard: {
      task: "Describe a good service experience at a hospital, clinic, or public service place.",
      bulletPoints: ["Where it happened", "What the staff did well", "How you or other people felt", "And explain why the experience was positive"]
    },
    part3Questions: [
      "Why should hospitals pay attention to patient experience?",
      "How can managers measure patient experience?",
      "Is medical quality enough if service experience is poor?"
    ],
    collocations: [
      c("improve patient experience", "cải thiện trải nghiệm người bệnh", "Friendly staff can improve patient experience."),
      c("patient-centered service", "dịch vụ lấy bệnh nhân làm trung tâm", "Patient-centered service focuses on comfort and respect."),
      c("listen to feedback", "lắng nghe phản hồi", "Hospitals should listen to feedback from patients."),
      c("clear communication", "giao tiếp rõ ràng", "Clear communication reduces anxiety."),
      c("build patient trust", "xây dựng niềm tin của bệnh nhân", "Good service helps build patient trust.")
    ],
    sentenceFrames: [
      "A positive patient experience usually includes...",
      "Patients may feel more confident when...",
      "In my workplace, service quality depends on..."
    ]
  },
  {
    mainTopic: "Customer Service in Hospitals",
    category: HEALTHCARE,
    part1Questions: [
      "Do you think hospitals need good customer service?",
      "What should reception staff do to help patients?",
      "Have you ever received helpful service in a hospital?"
    ],
    part2CueCard: {
      task: "Describe a person who provided good customer service.",
      bulletPoints: ["Who the person was", "Where the service happened", "What they did", "And explain why it was good service"]
    },
    part3Questions: [
      "How is customer service in hospitals different from other businesses?",
      "Why is empathy important when serving patients?",
      "How can hospitals train staff to communicate better?"
    ],
    collocations: [
      c("provide compassionate service", "cung cấp dịch vụ tận tâm", "Hospital staff should provide compassionate service."),
      c("handle patient questions", "xử lý câu hỏi của bệnh nhân", "Reception teams handle patient questions every day."),
      c("show empathy", "thể hiện sự đồng cảm", "Staff should show empathy when patients are worried."),
      c("service attitude", "thái độ phục vụ", "A positive service attitude can calm patients."),
      c("create a welcoming environment", "tạo môi trường thân thiện", "Clean spaces and polite staff create a welcoming environment.")
    ],
    sentenceFrames: [
      "Good customer service in hospitals means...",
      "Patients appreciate it when staff...",
      "Training can help staff become more..."
    ]
  },
  {
    mainTopic: "Emergency Department Coordination",
    category: HEALTHCARE,
    part1Questions: [
      "Have you ever visited an emergency department?",
      "Why are emergency departments often busy?",
      "What do patients expect in an emergency situation?"
    ],
    part2CueCard: {
      task: "Describe a situation where people had to act quickly and work together.",
      bulletPoints: ["What happened", "Who was involved", "How people coordinated", "And explain why quick action was important"]
    },
    part3Questions: [
      "Why is coordination important in emergency care?",
      "How can hospitals prepare for sudden increases in patients?",
      "What skills do staff need in high-pressure situations?"
    ],
    collocations: [
      c("respond quickly", "phản ứng nhanh", "Emergency teams need to respond quickly."),
      c("coordinate care", "phối hợp chăm sóc", "Doctors and nurses must coordinate care closely."),
      c("high-pressure situation", "tình huống áp lực cao", "Clear roles help staff in a high-pressure situation."),
      c("prioritize urgent cases", "ưu tiên ca khẩn cấp", "Triage helps hospitals prioritize urgent cases."),
      c("communicate in real time", "giao tiếp theo thời gian thực", "Teams need to communicate in real time during emergencies.")
    ],
    sentenceFrames: [
      "In an emergency department, speed is important because...",
      "Staff can work better if they...",
      "One challenge during peak times is..."
    ]
  },
  {
    mainTopic: "Outpatient Department Management",
    category: HEALTHCARE,
    part1Questions: [
      "Do many people in your country visit outpatient departments?",
      "What problems can happen in an outpatient clinic?",
      "Would appointment booking make outpatient visits easier?"
    ],
    part2CueCard: {
      task: "Describe a busy service area that needs good management.",
      bulletPoints: ["Where it is", "Why it is busy", "How staff manage customers or patients", "And explain what could make it better"]
    },
    part3Questions: [
      "Why are outpatient departments difficult to manage?",
      "How can hospitals make outpatient visits faster?",
      "Should patients be encouraged to book appointments online?"
    ],
    collocations: [
      c("outpatient visit", "lần khám ngoại trú", "An outpatient visit should be simple and clear."),
      c("appointment system", "hệ thống đặt lịch hẹn", "An appointment system can reduce waiting."),
      c("registration process", "quy trình đăng ký", "A clear registration process saves time."),
      c("clinic schedule", "lịch khám", "Managers need to monitor the clinic schedule."),
      c("patient queue", "hàng chờ bệnh nhân", "Digital numbers can organize the patient queue.")
    ],
    sentenceFrames: [
      "Outpatient departments are busy because...",
      "A better appointment system could...",
      "Patients would feel more satisfied if..."
    ]
  },
  {
    mainTopic: "Inpatient Services",
    category: HEALTHCARE,
    part1Questions: [
      "What support do inpatients need during a hospital stay?",
      "Do family members usually visit patients in hospitals in your country?",
      "How can hospitals make inpatient rooms more comfortable?"
    ],
    part2CueCard: {
      task: "Describe a place where people need care for several days.",
      bulletPoints: ["What the place is", "Who provides support", "What services are important", "And explain how people can feel more comfortable there"]
    },
    part3Questions: [
      "Why is comfort important for inpatients?",
      "How can hospitals coordinate inpatient care better?",
      "What should hospitals do when wards are full?"
    ],
    collocations: [
      c("inpatient care", "chăm sóc nội trú", "Good inpatient care requires teamwork."),
      c("bed availability", "tình trạng giường bệnh sẵn có", "Bed availability affects admission decisions."),
      c("patient comfort", "sự thoải mái của bệnh nhân", "Clean rooms improve patient comfort."),
      c("ward coordination", "phối hợp tại khoa nội trú", "Ward coordination helps nurses respond faster."),
      c("discharge planning", "kế hoạch xuất viện", "Early discharge planning can free beds safely.")
    ],
    sentenceFrames: [
      "For inpatient services, patients usually need...",
      "One common pressure is...",
      "Hospitals can improve comfort by..."
    ]
  },
  {
    mainTopic: "Doctor Availability",
    category: HEALTHCARE,
    part1Questions: [
      "Is it easy to see a doctor quickly in your area?",
      "Do patients prefer seeing the same doctor each time?",
      "What happens when a doctor is very busy?"
    ],
    part2CueCard: {
      task: "Describe a time when someone needed professional help quickly.",
      bulletPoints: ["Who needed help", "What kind of help was needed", "How they got support", "And explain whether the service was fast enough"]
    },
    part3Questions: [
      "Why is doctor availability important for hospitals?",
      "How can managers plan doctor schedules more effectively?",
      "Should hospitals use teleconsultation when doctors are busy?"
    ],
    collocations: [
      c("doctor availability", "sự sẵn có của bác sĩ", "Doctor availability affects patient waiting time."),
      c("manage doctor schedules", "quản lý lịch bác sĩ", "Hospitals need software to manage doctor schedules."),
      c("specialist consultation", "tư vấn chuyên khoa", "Some patients wait longer for specialist consultation."),
      c("meet patient demand", "đáp ứng nhu cầu bệnh nhân", "More clinic hours can help meet patient demand."),
      c("teleconsultation option", "lựa chọn tư vấn từ xa", "A teleconsultation option can support follow-up care.")
    ],
    sentenceFrames: [
      "Patients may feel worried when...",
      "A hospital can improve doctor availability by...",
      "Technology may help because..."
    ]
  },
  {
    mainTopic: "Nurse Coordination",
    category: HEALTHCARE,
    part1Questions: [
      "What qualities should a good nurse have?",
      "Do nurses communicate a lot with patients?",
      "Why is teamwork important for nurses?"
    ],
    part2CueCard: {
      task: "Describe a time when a team member helped others work better.",
      bulletPoints: ["Who the person was", "What situation happened", "How they helped the team", "And explain why their role was important"]
    },
    part3Questions: [
      "Why is nurse coordination important in hospitals?",
      "How can managers support nurses during busy shifts?",
      "What can happen if communication between nurses is poor?"
    ],
    collocations: [
      c("nursing team", "đội ngũ điều dưỡng", "The nursing team supports patients throughout the day."),
      c("coordinate patient care", "phối hợp chăm sóc bệnh nhân", "Nurses coordinate patient care with doctors."),
      c("shift handover", "bàn giao ca trực", "A clear shift handover prevents mistakes."),
      c("support front-line staff", "hỗ trợ nhân viên tuyến đầu", "Managers should support front-line staff during peak times."),
      c("respond to patient needs", "đáp ứng nhu cầu bệnh nhân", "Nurses respond to patient needs quickly.")
    ],
    sentenceFrames: [
      "Nurse coordination is important because...",
      "During a busy shift, staff need to...",
      "A good handover can help teams..."
    ]
  },
  {
    mainTopic: "Medical Equipment Management",
    category: HEALTHCARE,
    part1Questions: [
      "Have you ever seen modern equipment in a hospital?",
      "Why is it important to maintain hospital equipment?",
      "Do patients notice whether a hospital has good equipment?"
    ],
    part2CueCard: {
      task: "Describe a useful machine or tool in a workplace.",
      bulletPoints: ["What it is", "Who uses it", "How it helps people", "And explain why it should be maintained well"]
    },
    part3Questions: [
      "Why is equipment management important for patient care?",
      "How can hospitals decide which equipment to buy?",
      "What problems happen when equipment is not available?"
    ],
    collocations: [
      c("medical equipment", "thiết bị y tế", "Medical equipment must be safe and reliable."),
      c("maintenance schedule", "lịch bảo trì", "A maintenance schedule prevents breakdowns."),
      c("equipment availability", "sự sẵn có của thiết bị", "Equipment availability affects service speed."),
      c("purchase decision", "quyết định mua sắm", "Data should support each purchase decision."),
      c("use resources wisely", "sử dụng nguồn lực hợp lý", "Hospitals need to use resources wisely.")
    ],
    sentenceFrames: [
      "This equipment is important because...",
      "Managers should consider both cost and quality when...",
      "If equipment is not available, patients may..."
    ]
  },
  {
    mainTopic: "Hospital Facility Management",
    category: HEALTHCARE,
    part1Questions: [
      "What makes a hospital building comfortable for patients?",
      "Do you think cleanliness affects hospital reputation?",
      "Are signs and directions important in large hospitals?"
    ],
    part2CueCard: {
      task: "Describe a public building that is easy to use.",
      bulletPoints: ["What building it is", "How it is organized", "What facilities are useful", "And explain why people find it convenient"]
    },
    part3Questions: [
      "Why is facility management important in hospitals?",
      "How can hospitals make their buildings safer and cleaner?",
      "Should hospitals invest more in patient comfort areas?"
    ],
    collocations: [
      c("facility management", "quản lý cơ sở vật chất", "Facility management affects safety and comfort."),
      c("clean environment", "môi trường sạch sẽ", "Patients expect a clean environment."),
      c("clear signage", "biển chỉ dẫn rõ ràng", "Clear signage helps patients find departments."),
      c("safe hospital space", "không gian bệnh viện an toàn", "A safe hospital space reduces accidents."),
      c("patient comfort area", "khu vực tiện nghi cho bệnh nhân", "A patient comfort area improves the waiting experience.")
    ],
    sentenceFrames: [
      "Hospital facilities can affect patients because...",
      "A small improvement in the building could...",
      "Cleanliness is especially important because..."
    ]
  },
  {
    mainTopic: "Digital Transformation in Hospitals",
    category: HEALTHCARE,
    part1Questions: [
      "Do hospitals in your country use many digital services?",
      "Would you prefer booking a hospital appointment online?",
      "Do older patients find digital hospital services difficult?"
    ],
    part2CueCard: {
      task: "Describe a digital service that made a process easier.",
      bulletPoints: ["What the service was", "Where you used it", "How it changed the process", "And explain why it was useful"]
    },
    part3Questions: [
      "How can digital tools improve hospital services?",
      "What are the challenges of digital transformation in healthcare?",
      "Should hospitals keep some face-to-face services for patients?"
    ],
    collocations: [
      c("digital transformation", "chuyển đổi số", "Digital transformation can make hospital services faster."),
      c("online appointment booking", "đặt lịch hẹn trực tuyến", "Online appointment booking is convenient for patients."),
      c("paperless process", "quy trình không giấy tờ", "A paperless process can reduce errors."),
      c("train staff properly", "đào tạo nhân viên đúng cách", "Hospitals need to train staff properly before using new systems."),
      c("improve access to services", "cải thiện khả năng tiếp cận dịch vụ", "Digital channels can improve access to services.")
    ],
    sentenceFrames: [
      "Digital tools can help hospitals by...",
      "However, some patients may struggle because...",
      "A successful digital project should..."
    ]
  },
  {
    mainTopic: "Electronic Medical Records",
    category: HEALTHCARE,
    part1Questions: [
      "Do you think patient records should be digital?",
      "Have you ever had to repeat the same information at a clinic?",
      "Why is accurate patient information important?"
    ],
    part2CueCard: {
      task: "Describe a time when having the right information helped solve a problem.",
      bulletPoints: ["What information was needed", "Who used it", "How it helped", "And explain why accuracy was important"]
    },
    part3Questions: [
      "How can electronic records improve patient care?",
      "What risks should hospitals manage when using patient data?",
      "How can staff be encouraged to record information accurately?"
    ],
    collocations: [
      c("electronic medical records", "hồ sơ bệnh án điện tử", "Electronic medical records help doctors see patient history."),
      c("accurate patient data", "dữ liệu bệnh nhân chính xác", "Accurate patient data supports better decisions."),
      c("protect patient privacy", "bảo vệ quyền riêng tư của bệnh nhân", "Hospitals must protect patient privacy."),
      c("share information safely", "chia sẻ thông tin an toàn", "Departments need to share information safely."),
      c("reduce paperwork", "giảm giấy tờ", "Digital records can reduce paperwork.")
    ],
    sentenceFrames: [
      "Electronic records are useful because...",
      "Hospitals should be careful about privacy because...",
      "When information is accurate, staff can..."
    ]
  },
  {
    mainTopic: "Hospital Information Systems",
    category: HEALTHCARE,
    part1Questions: [
      "Do you think hospitals need good computer systems?",
      "What problems happen when a hospital system is slow?",
      "Should hospital staff receive regular technology training?"
    ],
    part2CueCard: {
      task: "Describe a system or app that helps people work faster.",
      bulletPoints: ["What it is", "Who uses it", "What problem it solves", "And explain how it improves daily work"]
    },
    part3Questions: [
      "Why are hospital information systems important?",
      "How can managers choose a good information system?",
      "What should hospitals do when staff resist new systems?"
    ],
    collocations: [
      c("hospital information system", "hệ thống thông tin bệnh viện", "A hospital information system connects many departments."),
      c("system downtime", "thời gian hệ thống ngừng hoạt động", "System downtime can delay patient service."),
      c("user-friendly design", "thiết kế dễ sử dụng", "A user-friendly design helps staff work faster."),
      c("staff training", "đào tạo nhân viên", "Staff training is needed before launching a new system."),
      c("improve data accuracy", "cải thiện độ chính xác dữ liệu", "Digital systems can improve data accuracy.")
    ],
    sentenceFrames: [
      "A good hospital system should...",
      "If the system is difficult to use, staff may...",
      "Managers can support adoption by..."
    ]
  },
  {
    mainTopic: "Data-Driven Decision Making",
    category: HEALTHCARE,
    part1Questions: [
      "Do you think managers should use data before making decisions?",
      "What kind of information can help improve hospital services?",
      "Do patients benefit when hospitals use data well?"
    ],
    part2CueCard: {
      task: "Describe a time when data or information helped people make a better decision.",
      bulletPoints: ["What the decision was", "What data was used", "Who used it", "And explain why the decision improved"]
    },
    part3Questions: [
      "Why is data useful for hospital managers?",
      "Can managers rely too much on numbers?",
      "How should hospitals combine data with patient feedback?"
    ],
    collocations: [
      c("make data-driven decisions", "đưa ra quyết định dựa trên dữ liệu", "Managers should make data-driven decisions when planning resources."),
      c("track key indicators", "theo dõi chỉ số chính", "Hospitals track key indicators such as waiting time."),
      c("patient feedback", "phản hồi của bệnh nhân", "Patient feedback adds context to the numbers."),
      c("monitor performance", "theo dõi hiệu quả hoạt động", "Dashboards help managers monitor performance."),
      c("identify trends", "xác định xu hướng", "Monthly reports help identify trends.")
    ],
    sentenceFrames: [
      "Data can help managers understand...",
      "However, numbers alone may not show...",
      "I believe decisions should combine data and real experience."
    ]
  },
  {
    mainTopic: "Healthcare Quality Improvement",
    category: HEALTHCARE,
    part1Questions: [
      "What does good quality mean in healthcare?",
      "Do patients notice small improvements in hospital service?",
      "Should hospitals ask patients for feedback regularly?"
    ],
    part2CueCard: {
      task: "Describe a service improvement that made people happier.",
      bulletPoints: ["What was improved", "Why the change was needed", "Who was involved", "And explain what result it created"]
    },
    part3Questions: [
      "Why should hospitals improve quality continuously?",
      "How can staff be involved in quality improvement?",
      "Is it better to make many small improvements or one big change?"
    ],
    collocations: [
      c("quality improvement", "cải tiến chất lượng", "Quality improvement should be part of daily work."),
      c("continuous improvement", "cải tiến liên tục", "Continuous improvement helps hospitals become safer."),
      c("standard process", "quy trình chuẩn", "A standard process reduces variation."),
      c("measure results", "đo lường kết quả", "Teams should measure results after making changes."),
      c("improve service quality", "cải thiện chất lượng dịch vụ", "Feedback can improve service quality.")
    ],
    sentenceFrames: [
      "Quality improvement is necessary because...",
      "A small but useful change would be...",
      "After making a change, hospitals should..."
    ]
  },
  {
    mainTopic: "Patient Safety",
    category: HEALTHCARE,
    part1Questions: [
      "Do you think patients worry about safety in hospitals?",
      "What can hospitals do to make patients feel safe?",
      "Is communication important for patient safety?"
    ],
    part2CueCard: {
      task: "Describe a situation where safety rules were important.",
      bulletPoints: ["Where it happened", "What the safety rule was", "Who followed it", "And explain what it prevented"]
    },
    part3Questions: [
      "Why is patient safety a top priority in healthcare?",
      "How can hospitals encourage staff to report safety problems?",
      "What role do patients play in their own safety?"
    ],
    collocations: [
      c("ensure patient safety", "đảm bảo an toàn người bệnh", "Hospitals must ensure patient safety in every process."),
      c("follow safety protocols", "tuân thủ quy trình an toàn", "Staff should follow safety protocols carefully."),
      c("report safety incidents", "báo cáo sự cố an toàn", "A good culture encourages staff to report safety incidents."),
      c("prevent mistakes", "ngăn ngừa sai sót", "Checklists help prevent mistakes."),
      c("create a safety culture", "tạo văn hóa an toàn", "Leaders need to create a safety culture.")
    ],
    sentenceFrames: [
      "Patient safety matters because...",
      "One way to prevent mistakes is to...",
      "A strong safety culture means..."
    ]
  },
  {
    mainTopic: "Infection Control",
    category: HEALTHCARE,
    part1Questions: [
      "Do you think cleanliness is very important in hospitals?",
      "What habits help prevent infection?",
      "Did people in your country become more aware of infection control after the pandemic?"
    ],
    part2CueCard: {
      task: "Describe a place where cleanliness is especially important.",
      bulletPoints: ["What the place is", "Why cleanliness matters there", "What people should do", "And explain how it protects others"]
    },
    part3Questions: [
      "Why is infection control important for hospitals?",
      "How can hospitals encourage visitors to follow hygiene rules?",
      "What challenges do staff face when maintaining cleanliness?"
    ],
    collocations: [
      c("infection control", "kiểm soát nhiễm khuẩn", "Infection control protects patients and staff."),
      c("hand hygiene", "vệ sinh tay", "Hand hygiene is a simple but important habit."),
      c("clean hospital environment", "môi trường bệnh viện sạch", "A clean hospital environment reduces risk."),
      c("follow hygiene rules", "tuân thủ quy định vệ sinh", "Visitors should follow hygiene rules."),
      c("prevent cross-infection", "ngăn ngừa lây nhiễm chéo", "Separate areas can help prevent cross-infection.")
    ],
    sentenceFrames: [
      "Infection control is important because...",
      "A simple action like hand hygiene can...",
      "Hospitals can remind people by..."
    ]
  },
  {
    mainTopic: "Service Recovery",
    category: HEALTHCARE,
    part1Questions: [
      "What should a hospital do when a patient has a bad experience?",
      "Do people appreciate an apology after poor service?",
      "Have you ever seen a company fix a service problem well?"
    ],
    part2CueCard: {
      task: "Describe a time when a service problem was solved well.",
      bulletPoints: ["What the problem was", "Who handled it", "What solution was offered", "And explain how you felt about the result"]
    },
    part3Questions: [
      "Why is service recovery important in hospitals?",
      "How can staff rebuild trust after a mistake?",
      "Should hospitals follow up with patients after complaints?"
    ],
    collocations: [
      c("service recovery", "khôi phục dịch vụ sau sự cố", "Service recovery can rebuild patient trust."),
      c("offer a sincere apology", "đưa ra lời xin lỗi chân thành", "Staff should offer a sincere apology when service fails."),
      c("resolve the issue", "giải quyết vấn đề", "Managers need to resolve the issue quickly."),
      c("follow up with patients", "theo dõi lại với bệnh nhân", "Hospitals should follow up with patients after a complaint."),
      c("restore confidence", "khôi phục niềm tin", "A clear solution can restore confidence.")
    ],
    sentenceFrames: [
      "When service fails, the first step should be...",
      "Patients may forgive a problem if...",
      "A good recovery process can..."
    ]
  },
  {
    mainTopic: "Complaint Handling",
    category: HEALTHCARE,
    part1Questions: [
      "Do people in your country complain when hospital service is poor?",
      "What kinds of hospital complaints are common?",
      "Should hospitals make it easy for patients to give complaints?"
    ],
    part2CueCard: {
      task: "Describe a time when you or someone else made a complaint.",
      bulletPoints: ["What the complaint was about", "Who received it", "How it was handled", "And explain whether the result was fair"]
    },
    part3Questions: [
      "Why should hospitals take complaints seriously?",
      "How can complaints help improve hospital services?",
      "What skills are needed to handle angry patients?"
    ],
    collocations: [
      c("handle patient complaints", "xử lý khiếu nại của bệnh nhân", "Staff need training to handle patient complaints."),
      c("listen patiently", "lắng nghe kiên nhẫn", "It is important to listen patiently before responding."),
      c("find the root cause", "tìm nguyên nhân gốc rễ", "Managers should find the root cause of repeated complaints."),
      c("provide a clear explanation", "cung cấp giải thích rõ ràng", "Patients expect staff to provide a clear explanation."),
      c("turn feedback into action", "biến phản hồi thành hành động", "Hospitals should turn feedback into action.")
    ],
    sentenceFrames: [
      "Complaints are useful because...",
      "When a patient is upset, staff should...",
      "The hospital can prevent similar complaints by..."
    ]
  },
  {
    mainTopic: "Referral Network",
    category: HEALTHCARE,
    part1Questions: [
      "Do patients in your country often get referred to other hospitals?",
      "Why might a clinic send a patient to a larger hospital?",
      "Do you think referral information should be shared digitally?"
    ],
    part2CueCard: {
      task: "Describe a situation where one organization helped connect people to another service.",
      bulletPoints: ["What the service was", "Why the connection was needed", "How people communicated", "And explain why the connection was helpful"]
    },
    part3Questions: [
      "Why are referral networks important in healthcare?",
      "How can hospitals build stronger relationships with clinics?",
      "What problems happen when referral information is incomplete?"
    ],
    collocations: [
      c("referral network", "mạng lưới chuyển tuyến", "A strong referral network helps patients get the right care."),
      c("coordinate with clinics", "phối hợp với phòng khám", "Hospitals should coordinate with clinics in nearby areas."),
      c("share patient information", "chia sẻ thông tin bệnh nhân", "Teams need to share patient information safely."),
      c("smooth referral process", "quy trình chuyển tuyến trơn tru", "A smooth referral process saves time."),
      c("continuity of care", "sự liên tục trong chăm sóc", "Good referrals support continuity of care.")
    ],
    sentenceFrames: [
      "Referral networks are useful because...",
      "A common problem is that...",
      "Hospitals can strengthen referrals by..."
    ]
  },
  {
    mainTopic: "Community Healthcare",
    category: HEALTHCARE,
    part1Questions: [
      "Are community health services common in your area?",
      "Do people trust local clinics?",
      "What health education do communities need?"
    ],
    part2CueCard: {
      task: "Describe a health activity or campaign in a community.",
      bulletPoints: ["What the activity was", "Who organized it", "Who joined it", "And explain why it was useful"]
    },
    part3Questions: [
      "Why is community healthcare important?",
      "How can hospitals support local clinics?",
      "Should more health services be available near people's homes?"
    ],
    collocations: [
      c("community healthcare", "chăm sóc sức khỏe cộng đồng", "Community healthcare helps people receive care earlier."),
      c("health education", "giáo dục sức khỏe", "Health education can prevent disease."),
      c("local clinic", "phòng khám địa phương", "A local clinic is convenient for basic care."),
      c("preventive care", "chăm sóc dự phòng", "Preventive care can reduce hospital admissions."),
      c("reach vulnerable groups", "tiếp cận nhóm dễ bị tổn thương", "Mobile teams can reach vulnerable groups.")
    ],
    sentenceFrames: [
      "Community healthcare is important because...",
      "Hospitals can support the community by...",
      "Preventive care helps people..."
    ]
  },
  {
    mainTopic: "Private Hospital Development",
    category: HEALTHCARE,
    part1Questions: [
      "Are private hospitals popular in your country?",
      "Why do some people choose private hospitals?",
      "What should a new hospital focus on first?"
    ],
    part2CueCard: {
      task: "Describe a new service or facility that opened in your area.",
      bulletPoints: ["What it was", "Who used it", "What made it different", "And explain whether it was useful for the community"]
    },
    part3Questions: [
      "What factors help a private hospital succeed?",
      "How can private hospitals build trust with local people?",
      "Should private hospitals cooperate with public healthcare providers?"
    ],
    collocations: [
      c("private hospital", "bệnh viện tư nhân", "A private hospital needs to offer reliable service."),
      c("meet local demand", "đáp ứng nhu cầu địa phương", "New services should meet local demand."),
      c("build a strong reputation", "xây dựng danh tiếng tốt", "Good outcomes help build a strong reputation."),
      c("service differentiation", "sự khác biệt dịch vụ", "Friendly service can be a form of service differentiation."),
      c("long-term development", "phát triển dài hạn", "Long-term development requires careful investment.")
    ],
    sentenceFrames: [
      "A private hospital can attract patients by...",
      "Local demand is important because...",
      "Trust can be built through..."
    ]
  },
  {
    mainTopic: "Cost Control in Healthcare",
    category: HEALTHCARE,
    part1Questions: [
      "Do people worry about healthcare costs in your country?",
      "Should hospitals explain costs clearly to patients?",
      "How can patients avoid unnecessary spending?"
    ],
    part2CueCard: {
      task: "Describe a time when someone had to control costs carefully.",
      bulletPoints: ["What the situation was", "What costs were involved", "What choices were made", "And explain whether the result was good"]
    },
    part3Questions: [
      "Why is cost control difficult in hospitals?",
      "How can hospitals reduce waste without reducing quality?",
      "Should healthcare be affordable for everyone?"
    ],
    collocations: [
      c("control healthcare costs", "kiểm soát chi phí y tế", "Hospitals need to control healthcare costs carefully."),
      c("reduce waste", "giảm lãng phí", "Better stock control can reduce waste."),
      c("maintain service quality", "duy trì chất lượng dịch vụ", "Managers must maintain service quality while saving costs."),
      c("transparent pricing", "giá cả minh bạch", "Transparent pricing helps patients plan."),
      c("use resources efficiently", "sử dụng nguồn lực hiệu quả", "Hospitals should use resources efficiently.")
    ],
    sentenceFrames: [
      "Cost control is difficult because...",
      "Hospitals can save money by...",
      "The challenge is to balance cost and quality."
    ]
  },
  {
    mainTopic: "Revenue Growth in Hospitals",
    category: HEALTHCARE,
    part1Questions: [
      "Do you think hospitals should think about financial performance?",
      "What services can attract more patients to a hospital?",
      "Should hospitals advertise their services?"
    ],
    part2CueCard: {
      task: "Describe a service that became more popular over time.",
      bulletPoints: ["What the service was", "Why people started using it", "How the organization promoted it", "And explain why it became successful"]
    },
    part3Questions: [
      "How can hospitals grow revenue in an ethical way?",
      "Why is patient trust important for financial growth?",
      "Should hospitals focus more on existing patients or new services?"
    ],
    collocations: [
      c("grow hospital revenue", "tăng doanh thu bệnh viện", "Good service can help grow hospital revenue."),
      c("attract new patients", "thu hút bệnh nhân mới", "Strong specialties can attract new patients."),
      c("ethical growth", "tăng trưởng có đạo đức", "Hospitals should focus on ethical growth."),
      c("develop new services", "phát triển dịch vụ mới", "Hospitals may develop new services based on demand."),
      c("retain existing patients", "giữ chân bệnh nhân hiện tại", "A better experience can retain existing patients.")
    ],
    sentenceFrames: [
      "Revenue growth should come from...",
      "Hospitals can attract patients by...",
      "It is important to stay ethical because..."
    ]
  },
  {
    mainTopic: "Budgeting and Resource Allocation",
    category: HEALTHCARE,
    part1Questions: [
      "Do you make budgets in your personal life?",
      "Why do hospitals need to plan resources carefully?",
      "What resources are most important in a hospital?"
    ],
    part2CueCard: {
      task: "Describe a time when you had to use limited resources wisely.",
      bulletPoints: ["What resources were limited", "What you needed to achieve", "How you made choices", "And explain what you learned"]
    },
    part3Questions: [
      "How should hospitals decide where to spend money?",
      "Why is resource allocation difficult during busy periods?",
      "Should patient needs or financial limits come first?"
    ],
    collocations: [
      c("allocate resources effectively", "phân bổ nguồn lực hiệu quả", "Hospitals must allocate resources effectively."),
      c("annual budget", "ngân sách hằng năm", "The annual budget should reflect patient needs."),
      c("limited resources", "nguồn lực hạn chế", "Managers often work with limited resources."),
      c("set spending priorities", "đặt ưu tiên chi tiêu", "Hospitals need to set spending priorities."),
      c("balance quality and cost", "cân bằng chất lượng và chi phí", "Good planning helps balance quality and cost.")
    ],
    sentenceFrames: [
      "When resources are limited, managers should...",
      "A budget is useful because...",
      "The main trade-off is between..."
    ]
  },
  {
    mainTopic: "Staff Engagement",
    category: HEALTHCARE,
    part1Questions: [
      "What makes employees feel engaged at work?",
      "Do hospital staff need recognition?",
      "How can managers support tired employees?"
    ],
    part2CueCard: {
      task: "Describe a workplace activity that motivated staff.",
      bulletPoints: ["What the activity was", "Who joined it", "How people reacted", "And explain why it improved motivation"]
    },
    part3Questions: [
      "Why is staff engagement important in hospitals?",
      "How can managers reduce stress among healthcare workers?",
      "Does staff satisfaction affect patient satisfaction?"
    ],
    collocations: [
      c("staff engagement", "sự gắn kết của nhân viên", "Staff engagement affects service quality."),
      c("recognize hard work", "ghi nhận sự chăm chỉ", "Managers should recognize hard work."),
      c("reduce staff burnout", "giảm kiệt sức nhân viên", "Better scheduling can reduce staff burnout."),
      c("create a supportive culture", "tạo văn hóa hỗ trợ", "A supportive culture helps employees stay motivated."),
      c("improve staff morale", "cải thiện tinh thần nhân viên", "Regular feedback can improve staff morale.")
    ],
    sentenceFrames: [
      "Staff feel engaged when...",
      "This affects patients because...",
      "Managers can support employees by..."
    ]
  },
  {
    mainTopic: "Cross-Functional Teamwork",
    category: HEALTHCARE,
    part1Questions: [
      "Do people in hospitals need to work across departments?",
      "What makes teamwork difficult in a large organization?",
      "Do you prefer working with people from different teams?"
    ],
    part2CueCard: {
      task: "Describe a time when different teams worked together.",
      bulletPoints: ["What the task was", "Which teams were involved", "How they communicated", "And explain what result they achieved"]
    },
    part3Questions: [
      "Why is cross-functional teamwork important in hospitals?",
      "What can managers do when departments have different priorities?",
      "How can shared goals improve teamwork?"
    ],
    collocations: [
      c("cross-functional teamwork", "làm việc nhóm liên chức năng", "Cross-functional teamwork is common in hospital projects."),
      c("coordinate across departments", "phối hợp giữa các khoa phòng", "Teams must coordinate across departments."),
      c("shared goal", "mục tiêu chung", "A shared goal helps reduce conflict."),
      c("clear roles", "vai trò rõ ràng", "Clear roles make teamwork easier."),
      c("solve problems together", "cùng giải quyết vấn đề", "Departments need to solve problems together.")
    ],
    sentenceFrames: [
      "Different departments need to work together because...",
      "A common challenge is...",
      "Teamwork improves when everyone understands..."
    ]
  },
  {
    mainTopic: "Leadership in Healthcare",
    category: HEALTHCARE,
    part1Questions: [
      "What qualities should a hospital leader have?",
      "Do healthcare leaders need to be good listeners?",
      "Have you worked with a manager who supported the team well?"
    ],
    part2CueCard: {
      task: "Describe a leader who handled a difficult situation well.",
      bulletPoints: ["Who the leader was", "What the difficult situation was", "What they did", "And explain why their leadership was effective"]
    },
    part3Questions: [
      "Why is leadership important in healthcare?",
      "How can leaders balance staff needs and patient needs?",
      "Should hospital leaders use data or experience when making decisions?"
    ],
    collocations: [
      c("healthcare leadership", "lãnh đạo trong y tế", "Healthcare leadership requires both empathy and discipline."),
      c("make timely decisions", "đưa ra quyết định kịp thời", "Hospital leaders must make timely decisions."),
      c("support front-line teams", "hỗ trợ đội ngũ tuyến đầu", "Leaders should support front-line teams."),
      c("lead through change", "lãnh đạo trong quá trình thay đổi", "Managers need to lead through change during digital projects."),
      c("build trust with staff", "xây dựng niềm tin với nhân viên", "Open communication helps build trust with staff.")
    ],
    sentenceFrames: [
      "A healthcare leader needs to...",
      "In difficult situations, leaders should...",
      "I believe leaders need to balance..."
    ]
  },
  {
    mainTopic: "Operational Bottlenecks",
    category: HEALTHCARE,
    part1Questions: [
      "Have you ever waited because a service process was slow?",
      "What causes delays in hospitals?",
      "Do you think managers can find delays by observing daily work?"
    ],
    part2CueCard: {
      task: "Describe a process that became slow because of one problem.",
      bulletPoints: ["What the process was", "What caused the delay", "How people reacted", "And explain how it could be fixed"]
    },
    part3Questions: [
      "Why do bottlenecks happen in hospital operations?",
      "How can managers identify operational bottlenecks?",
      "Should hospitals redesign processes when delays repeat?"
    ],
    collocations: [
      c("operational bottleneck", "điểm nghẽn vận hành", "Registration can become an operational bottleneck."),
      c("delay patient service", "làm chậm dịch vụ bệnh nhân", "Missing information can delay patient service."),
      c("analyze the process", "phân tích quy trình", "Managers should analyze the process before changing it."),
      c("remove unnecessary steps", "loại bỏ bước không cần thiết", "Teams can remove unnecessary steps to save time."),
      c("improve turnaround time", "cải thiện thời gian hoàn thành", "Better coordination can improve turnaround time.")
    ],
    sentenceFrames: [
      "A bottleneck usually happens when...",
      "To solve it, managers should first...",
      "The result would be..."
    ]
  },
  {
    mainTopic: "Process Improvement",
    category: HEALTHCARE,
    part1Questions: [
      "Do you like improving the way you do daily tasks?",
      "What kind of hospital processes should be simple?",
      "Can small changes make a big difference in service?"
    ],
    part2CueCard: {
      task: "Describe a process you improved or wanted to improve.",
      bulletPoints: ["What the process was", "What problem it had", "What change was made or suggested", "And explain why the change helped"]
    },
    part3Questions: [
      "Why is process improvement important in hospitals?",
      "How can staff be encouraged to suggest improvements?",
      "Should hospitals test changes before applying them widely?"
    ],
    collocations: [
      c("process improvement", "cải tiến quy trình", "Process improvement can make hospital visits easier."),
      c("streamline the workflow", "tinh gọn luồng công việc", "Digital forms can streamline the workflow."),
      c("reduce unnecessary steps", "giảm các bước không cần thiết", "Teams should reduce unnecessary steps."),
      c("test a new approach", "thử nghiệm cách làm mới", "Hospitals can test a new approach in one department."),
      c("make a significant improvement", "tạo cải thiện đáng kể", "A small change can make a significant improvement.")
    ],
    sentenceFrames: [
      "The process could be improved by...",
      "Before changing it, we should understand...",
      "A successful improvement should make things..."
    ]
  },
  {
    mainTopic: "Healthcare Accessibility in Provincial Areas",
    category: HEALTHCARE,
    part1Questions: [
      "Is it easy for people in rural areas to access healthcare?",
      "Do people travel far to see specialists in your country?",
      "How can technology support patients outside big cities?"
    ],
    part2CueCard: {
      task: "Describe a service that should be easier for people in smaller towns to access.",
      bulletPoints: ["What the service is", "Who needs it", "Why access is difficult", "And explain how access could be improved"]
    },
    part3Questions: [
      "Why is healthcare accessibility important in provincial areas?",
      "How can hospitals support patients who live far away?",
      "Should governments invest more in local health services?"
    ],
    collocations: [
      c("healthcare accessibility", "khả năng tiếp cận y tế", "Healthcare accessibility is a major issue in provincial areas."),
      c("provincial areas", "khu vực tỉnh lẻ", "People in provincial areas may need more local services."),
      c("travel long distances", "di chuyển quãng đường xa", "Some patients travel long distances for specialist care."),
      c("local health services", "dịch vụ y tế địa phương", "Local health services should be strengthened."),
      c("telehealth support", "hỗ trợ y tế từ xa", "Telehealth support can reduce travel time.")
    ],
    sentenceFrames: [
      "Access is difficult for some patients because...",
      "One solution for provincial areas is...",
      "Technology can help, but hospitals also need..."
    ]
  },
  {
    mainTopic: "Building Trust with Patients",
    category: HEALTHCARE,
    part1Questions: [
      "What makes patients trust a hospital?",
      "Do patients trust doctors more when explanations are clear?",
      "Can a bad service experience reduce trust?"
    ],
    part2CueCard: {
      task: "Describe a time when someone earned your trust.",
      bulletPoints: ["Who the person was", "What they did", "How they communicated", "And explain why you trusted them"]
    },
    part3Questions: [
      "Why is patient trust important for hospitals?",
      "How can hospitals rebuild trust after complaints?",
      "Is trust more important than modern facilities?"
    ],
    collocations: [
      c("build patient trust", "xây dựng niềm tin của bệnh nhân", "Clear explanations help build patient trust."),
      c("honest communication", "giao tiếp trung thực", "Honest communication is important in healthcare."),
      c("keep patients informed", "giữ bệnh nhân được cập nhật thông tin", "Nurses should keep patients informed."),
      c("professional behavior", "hành vi chuyên nghiệp", "Professional behavior creates confidence."),
      c("reliable service", "dịch vụ đáng tin cậy", "Reliable service brings patients back.")
    ],
    sentenceFrames: [
      "Patients trust hospitals when...",
      "Trust can be damaged if...",
      "To rebuild trust, hospitals should..."
    ]
  },
  {
    mainTopic: "Hospital Branding and Reputation",
    category: HEALTHCARE,
    part1Questions: [
      "Do people choose hospitals based on reputation?",
      "What makes a hospital brand strong?",
      "Do online reviews affect hospital choice?"
    ],
    part2CueCard: {
      task: "Describe a company or service provider with a good reputation.",
      bulletPoints: ["What it is", "Why people trust it", "How it communicates with customers", "And explain what other organizations can learn from it"]
    },
    part3Questions: [
      "Why is reputation important for hospitals?",
      "How can hospitals improve their public image?",
      "Should hospitals promote services through social media?"
    ],
    collocations: [
      c("hospital reputation", "danh tiếng bệnh viện", "Hospital reputation influences patient choice."),
      c("strong hospital brand", "thương hiệu bệnh viện mạnh", "A strong hospital brand is built over time."),
      c("word of mouth", "truyền miệng", "Word of mouth is powerful in healthcare."),
      c("online reviews", "đánh giá trực tuyến", "Online reviews can affect trust."),
      c("public image", "hình ảnh công chúng", "Good communication improves public image.")
    ],
    sentenceFrames: [
      "A hospital's reputation depends on...",
      "Patients may choose a hospital because...",
      "Branding should be based on real quality because..."
    ]
  }
];

const speakingMissions = [
  "Speak for 2 minutes without stopping.",
  "Use at least 3 collocations from the list.",
  "Record yourself and listen again.",
  "Answer Part 3 with one real workplace example.",
  "Try to avoid long pauses.",
  "Use one example from hospital operations.",
  "Explain one problem, one action, and one result.",
  "Give one personal example and one general opinion.",
  "Use a linking phrase such as however, for example, or as a result.",
  "Finish with a short conclusion sentence."
];

const state = {
  categoryKey: "general",
  currentTopic: null,
  currentMission: "",
  lastTopicIndexes: {
    general: -1,
    healthcare: -1
  },
  lastMissionIndex: -1,
  toastTimer: null
};

const elements = {
  body: document.body,
  tabs: Array.from(document.querySelectorAll(".tab-button")),
  missionText: document.querySelector("#mission-text"),
  categoryBadge: document.querySelector("#category-badge"),
  mainTopic: document.querySelector("#main-topic"),
  part1List: document.querySelector("#part1-list"),
  cueTask: document.querySelector("#cue-task"),
  cueBullets: document.querySelector("#cue-bullets"),
  part3List: document.querySelector("#part3-list"),
  collocationList: document.querySelector("#collocation-list"),
  sentenceFrameList: document.querySelector("#sentence-frame-list"),
  generateButton: document.querySelector("#generate-button"),
  copyButton: document.querySelector("#copy-button"),
  toast: document.querySelector("#toast")
};

function getTopicsForCategory(categoryKey) {
  return categoryKey === "healthcare" ? healthcareTopics : generalTopics;
}

function getStoredCategoryKey() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "healthcare" || saved === "general" ? saved : "general";
  } catch {
    return "general";
  }
}

function storeCategoryKey(categoryKey) {
  try {
    localStorage.setItem(STORAGE_KEY, categoryKey);
  } catch {
    // Local files may run in browsers with restricted storage.
  }
}

function getRandomIndex(length, previousIndex) {
  if (length <= 1) return 0;

  let nextIndex = previousIndex;
  while (nextIndex === previousIndex) {
    nextIndex = Math.floor(Math.random() * length);
  }
  return nextIndex;
}

function setActiveCategory(categoryKey, shouldGenerate = true) {
  state.categoryKey = categoryKey;
  storeCategoryKey(categoryKey);

  elements.tabs.forEach((tab) => {
    const isSelected = tab.dataset.categoryKey === categoryKey;
    tab.setAttribute("aria-selected", String(isSelected));
  });

  elements.body.classList.toggle("healthcare-mode", categoryKey === "healthcare");

  if (shouldGenerate) {
    generateTopic();
  }
}

function generateTopic() {
  const topics = getTopicsForCategory(state.categoryKey);
  const topicIndex = getRandomIndex(topics.length, state.lastTopicIndexes[state.categoryKey]);
  const missionIndex = getRandomIndex(speakingMissions.length, state.lastMissionIndex);

  state.lastTopicIndexes[state.categoryKey] = topicIndex;
  state.lastMissionIndex = missionIndex;
  state.currentTopic = topics[topicIndex];
  state.currentMission = speakingMissions[missionIndex];

  renderTopic(state.currentTopic, state.currentMission);
}

function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function renderList(node, items, tagName = "li") {
  clearNode(node);

  items.forEach((item) => {
    const listItem = document.createElement(tagName);
    listItem.textContent = item;
    node.appendChild(listItem);
  });
}

function renderCollocations(collocations) {
  clearNode(elements.collocationList);

  collocations.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "collocation-item";

    const phrase = document.createElement("strong");
    phrase.textContent = item.phrase;

    const meaning = document.createElement("span");
    meaning.className = "meaning";
    meaning.textContent = item.meaning;

    const example = document.createElement("p");
    example.className = "example";
    example.textContent = `Example: ${item.example}`;

    wrapper.append(phrase, meaning, example);
    elements.collocationList.appendChild(wrapper);
  });
}

function renderTopic(topic, mission) {
  elements.categoryBadge.textContent = topic.category;
  elements.mainTopic.textContent = topic.mainTopic;
  elements.missionText.textContent = mission;
  elements.cueTask.textContent = topic.part2CueCard.task;

  renderList(elements.part1List, topic.part1Questions);
  renderList(elements.cueBullets, topic.part2CueCard.bulletPoints);
  renderList(elements.part3List, topic.part3Questions);
  renderList(elements.sentenceFrameList, topic.sentenceFrames);
  renderCollocations(topic.collocations);
}

function formatTopicForCopy(topic, mission) {
  const part1 = topic.part1Questions.map((question, index) => `${index + 1}. ${question}`);
  const cueBullets = topic.part2CueCard.bulletPoints.map((point) => `- ${point}`);
  const part3 = topic.part3Questions.map((question, index) => `${index + 1}. ${question}`);
  const collocations = topic.collocations.map(
    (item) => `- ${item.phrase}: ${item.meaning}\n  Example: ${item.example}`
  );
  const frames = topic.sentenceFrames.map((frame) => `- ${frame}`);

  return [
    `Main Topic: ${topic.mainTopic}`,
    `Category: ${topic.category}`,
    "",
    "IELTS Speaking Part 1 Questions:",
    ...part1,
    "",
    "IELTS Speaking Part 2 Cue Card:",
    topic.part2CueCard.task,
    "You should say:",
    ...cueBullets,
    "",
    "IELTS Speaking Part 3 Discussion Questions:",
    ...part3,
    "",
    "Suggested Band 6.5 Collocations:",
    ...collocations,
    "",
    "Useful Sentence Frames:",
    ...frames,
    "",
    `Today's Speaking Mission: ${mission}`
  ].join("\n");
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  textArea.style.top = "0";
  document.body.appendChild(textArea);
  textArea.select();
  const success = document.execCommand("copy");
  textArea.remove();
  return success;
}

async function copyCurrentTopic() {
  if (!state.currentTopic) return;

  const text = formatTopicForCopy(state.currentTopic, state.currentMission);

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      showToast("Topic copied.");
      return;
    }

    if (fallbackCopy(text)) {
      showToast("Topic copied.");
      return;
    }
  } catch {
    if (fallbackCopy(text)) {
      showToast("Topic copied.");
      return;
    }
  }

  showToast("Copy failed. Please select and copy manually.");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");

  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2200);
}

function bindEvents() {
  elements.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveCategory(tab.dataset.categoryKey);
    });
  });

  elements.generateButton.addEventListener("click", generateTopic);
  elements.copyButton.addEventListener("click", copyCurrentTopic);
}

function init() {
  bindEvents();
  setActiveCategory(getStoredCategoryKey(), true);
}

init();
