import { Category } from '@/types';

// English - A1 Level
const englishA1: Category = {
  id: 'cat-eng-a1',
  title: 'English - Beginner',
  description: '英語学習（初級レベル A1）。',
  level: 'A1',
  topicCategoryId: 'topic-english',
  courses: [{
    id: 'eng-a1-1',
    title: 'Chapter 1: Foundations',
    lessons: [
      {
        id: 'l1',
        title: 'Greetings & Self-Introduction',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Greetings', 'Self-intro'],
        sections: [
          { type: 'info-box', content: 'Master the essential greetings that form the foundation of English communication. You\'ll learn how to greet people at different times of day, and introduce yourself in both formal and casual situations. These phrases are used in everyday conversations, first meetings, and professional settings.' },
          { type: 'heading', level: 2, content: 'Time-Based Greetings' },
          { type: 'text', content: '• Good morning (6 AM - 12 PM) | Example: "Good morning! How are you?" | Formal / Professional\n• Good afternoon (12 PM - 6 PM) | Example: "Good afternoon, nice to see you." | Formal\n• Good evening (6 PM - 11 PM) | Example: "Good evening, everyone!" | Formal / Polite\n• Goodnight (when leaving to sleep) | Example: "Goodnight, sleep well!" | Casual / Intimate' },
          { type: 'heading', level: 2, content: 'Casual Greetings' },
          { type: 'text', content: '• Hello | Example: "Hello, how are you?" | Universal / Polite\n• Hi | Example: "Hi! What\'s up?" | Casual / Friendly\n• Hey | Example: "Hey, long time no see!" | Very Casual / Friends only\n• How\'s it going? | Example: "How\'s it going with you?" | Casual / Contemporary' },
          { type: 'heading', level: 2, content: 'Farewells' },
          { type: 'text', content: '• Goodbye | Example: "Goodbye! See you soon." | Formal / Standard\n• Bye | Example: "Bye! Have a great day!" | Casual\n• See you later | Example: "See you later, alligator!" | Friendly / Modern\n• Take care | Example: "Take care of yourself!" | Warm / Caring\n• Catch you later | Example: "Catch you later, gotta go!" | Very Casual / Friends' },
          { type: 'heading', level: 2, content: 'Self-Introduction Patterns' },
          { type: 'text', content: '• My name is [Name]. | Example: "My name is Sarah. I\'m from Canada." | Formal / Complete\n• I\'m [Name]. | Example: "I\'m John. I\'m a teacher." | Casual / Friendly\n• You can call me [Name]. | Example: "You can call me Alex." | Warm / Open\n• Nice to meet you. | Example: "Nice to meet you! I\'m excited to work here." | Always after introduction\n• Where are you from? | Example: "Where are you from originally?" | Conversation starter\n• What do you do? | Example: "What do you do for work?" | Professional context' },
          { type: 'heading', level: 2, content: 'First Conversation Example' },
          { type: 'text', content: 'Person A: "Hello! My name is Emma."\nPerson B: "Hi Emma! I\'m Michael. Nice to meet you!"\nPerson A: "Nice to meet you too! Where are you from?"\nPerson B: "I\'m from Australia. What about you?"\nPerson A: "I\'m from Japan. What do you do?"\nPerson B: "I\'m a software engineer. And you?"' },
          { type: 'heading', level: 2, content: 'Pronunciation Tips' },
          { type: 'text', content: '• "Good morning" = /ɡʊd ˈmɔːrnɪŋ/ | Stress first syllable of "morning"\n• "Goodbye" = /ɡʊdˈbaɪ/ | One fluid word, not two\n• "Nice to meet you" = /naɪs tə mit juː/ | "to" is unstressed, "meet" is clear\n• "Where are you from?" = /weər ɑːr juː frʌm/ | "from" has short \'u\' sound' },
          { type: 'heading', level: 2, content: 'Practice Dialogue: At a Party' },
          { type: 'text', content: 'Scenario: You\'re at a party and see someone new.\n\n→ You: "Hi! I\'m [your name]. I haven\'t seen you here before."\n← New person: "Hello! I\'m [their name]. This is my first time."\n→ You: "Nice to meet you! Where are you from?"\n← New person: "I\'m from Mexico. And you?"\n→ You: "I\'m from [place]. What do you do?"\n← New person: "I\'m a designer. What about you?"\n→ You: "I work in marketing. Hope to see you again soon!"' },
        ],
      },
      {
        id: 'l2',
        title: 'Numbers & Colors',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['Numbers 1-20', 'Basic colors'],
        sections: [
          { type: 'info-box', content: 'Numbers and colors are fundamental vocabulary for everyday situations like shopping, telling time, and describing objects. This lesson covers counting basics (1-20), color names, and how to use them naturally in real conversations like ordering food or describing clothing.' },
          { type: 'heading', level: 2, content: 'Numbers (1-20) with Pronunciation' },
          { type: 'text', content: '1 one /wʌn/ | 2 two /tuː/ | 3 three /θriː/ | 4 four /fɔːr/ | 5 five /faɪv/\n6 six /sɪks/ | 7 seven /ˈsevən/ | 8 eight /eɪt/ | 9 nine /naɪn/ | 10 ten /ten/\n11 eleven /ɪˈlevən/ | 12 twelve /twelv/ | 13 thirteen /θɜːrˈtiːn/ | 14 fourteen /fɔːrˈtiːn/ | 15 fifteen /fɪfˈtiːn/\n16 sixteen /sɪksˈtiːn/ | 17 seventeen /sevənˈtiːn/ | 18 eighteen /eɪˈtiːn/ | 19 nineteen /naɪnˈtiːn/ | 20 twenty /ˈtwenti/' },
          { type: 'heading', level: 2, content: 'Important Number Rules' },
          { type: 'text', content: '• Numbers 13-19 END IN "-teen" (teen sounds like "ten")\n• Twenty is the bridge to tens (20, 30, 40...)\n• Pronunciation tip: "thirteen" vs "thirty" — "th-ir-TEEN" vs "THIR-ty"\n• Common mistake: "fourteen" (NOT "fourtheen")\n• In questions: "How many?" or "Which number?"' },
          { type: 'heading', level: 2, content: 'Colors (Primary & Secondary)' },
          { type: 'text', content: '• Red /red/ | Example: "I like red apples."\n• Blue /bluː/ | Example: "The sky is blue."\n• Yellow /ˈjeloʊ/ | Example: "Bananas are yellow."\n• Green /ɡriːn/ | Example: "Green is a calm color."\n• Orange /ˈɔːrɪndʒ/ | Example: "I prefer orange juice."\n• Purple /ˈpɜːrpəl/ | Example: "Purple flowers are beautiful."' },
          { type: 'heading', level: 2, content: 'Neutral & Mixed Colors' },
          { type: 'text', content: '• Black /blæk/ | Example: "I have a black cat."\n• White /waɪt/ | Example: "White snow is pure."\n• Gray/Grey /ɡreɪ/ | Example: "Gray clouds mean rain."\n• Brown /braʊn/ | Example: "Brown chocolate is sweet."\n• Pink /pɪŋk/ | Example: "Pink is often associated with love."' },
          { type: 'heading', level: 2, content: 'Using Numbers in Context' },
          { type: 'text', content: '• "I have three cats." → Numbers come before nouns\n• "There are five apples." → Use "there are" for plural counts\n• "I\'m 25 years old." → Age uses "I\'m [number]"\n• "The price is $10." → Money: "dollars/pounds/euros"\n• "It\'s open from 9 to 5." → Time ranges\n• "Room number 15" → Addresses and room numbers' },
          { type: 'heading', level: 2, content: 'Using Colors in Context' },
          { type: 'text', content: '• Noun + color: "a red car" (NOT "a car red")\n• With "be": "The flowers are pink."\n• Color preference: "My favorite color is blue."\n• Describing multiple things: "I have red and green pens."\n• Asking about color: "What color is your phone?" → "It\'s black."' },
          { type: 'heading', level: 2, content: 'Conversation Example' },
          { type: 'text', content: 'Salesperson: "How many bags do you want?"\nCustomer: "I\'d like five, please."\nSalesperson: "What color? We have red, blue, or green."\nCustomer: "I like the green one. How much is it?"\nSalesperson: "It\'s $15 each. So five bags = $75 total."\nCustomer: "Great! I\'ll take them."' },
          { type: 'heading', level: 2, content: 'Shopping Practice Dialogue' },
          { type: 'text', content: 'Scene: At a flower shop\n\n→ You: "Hello! I\'d like to buy some flowers."\n← Florist: "Of course! What color do you prefer?"\n→ You: "I like red and yellow. How many do you have?"\n← Florist: "We have twelve red roses and eight yellow sunflowers."\n→ You: "Perfect! I\'ll take all of them. How much?"\n← Florist: "That\'s $40 total."\n→ You: "Here you are. Thank you!"' },
        ],
      },
      {
        id: 'l3',
        title: 'Family & Occupations',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Family members', 'Jobs'],
        sections: [
          { type: 'info-box', content: 'Family vocabulary and job titles are essential for personal conversations and professional networking. In this lesson, you\'ll learn how to describe family relationships and talk about different careers. These topics appear frequently in interviews, casual chat, and storytelling about your life.' },
          { type: 'heading', level: 2, content: 'Immediate Family (Close Relations)' },
          { type: 'text', content: '• Father /ˈfɑːðər/ | Male parent | "My father is a doctor."\n• Mother /ˈmʌðər/ | Female parent | "My mother works in finance."\n• Brother /ˈbrʌðər/ | Male sibling | "I have two brothers."\n• Sister /ˈsɪstər/ | Female sibling | "My sister is younger than me."\n• Son /sʌn/ | Male child | "They have one son and two daughters."\n• Daughter /ˈdɔːtər/ | Female child | "Our daughter studies engineering."' },
          { type: 'heading', level: 2, content: 'Extended Family (Grandparents, Aunts, Uncles)' },
          { type: 'text', content: '• Grandmother /ˈɡrænmʌðər/ | Mother\'s/Father\'s mother | "My grandmother loves gardening."\n• Grandfather /ˈɡrænfɑːðər/ | Mother\'s/Father\'s father | "Grandfather told us stories."\n• Aunt /ænt/ | Father\'s/Mother\'s sister | "My aunt lives in Paris."\n• Uncle /ˈʌŋkəl/ | Father\'s/Mother\'s brother | "Uncle Mike is visiting next week."\n• Cousin /ˈkʌzən/ | Aunt\'s/Uncle\'s child | "My cousin and I grew up together."' },
          { type: 'heading', level: 2, content: 'Other Family Relations' },
          { type: 'text', content: '• Husband /ˈhʌzbənd/ | Married partner (male) | "My husband is a musician."\n• Wife /waɪf/ | Married partner (female) | "His wife is a lawyer."\n• Baby /ˈbeɪbi/ | Newborn or young child | "They just had a baby!"\n• Grandchild /ˈɡrænʃaɪld/ | Grandson/Granddaughter | "The grandparents love their grandchild."' },
          { type: 'heading', level: 2, content: 'Common Occupations (Healthcare & Education)' },
          { type: 'text', content: '• Doctor /ˈdɑːktər/ | Medical professional | "She\'s a doctor at City Hospital."\n• Nurse /nɜːrs/ | Healthcare support | "Nurses care for patients day and night."\n• Teacher /ˈtiːtʃər/ | Education professional | "My teacher makes learning fun."\n• Professor /prəˈfesər/ | University teacher | "He\'s a professor of physics."' },
          { type: 'heading', level: 2, content: 'Common Occupations (Business & Technology)' },
          { type: 'text', content: '• Engineer /ˌendʒɪˈnɪr/ | Technical problem-solver | "Software engineers build apps."\n• Lawyer /ˈlɔːjər/ | Legal professional | "The lawyer reviewed the contract."\n• Manager /ˈmænɪdʒər/ | Leadership role | "Our manager leads the team."\n• Accountant /əˈkaʊntənt/ | Finance professional | "The accountant manages our budget."' },
          { type: 'heading', level: 2, content: 'Common Occupations (Creative & Service)' },
          { type: 'text', content: '• Artist /ˈɑːrtɪst/ | Creative professional | "The artist paints beautiful landscapes."\n• Chef /ʃef/ | Professional cook | "The chef prepares gourmet meals."\n• Writer /ˈraɪtər/ | Author of texts | "She\'s a writer for magazines."\n• Musician /mjuːˈzɪʃən/ | Music performer | "The musician plays piano."' },
          { type: 'heading', level: 2, content: 'Talking About Occupations' },
          { type: 'text', content: '• "What do you do?" → Job/career question\n• "I\'m a [job]." → Standard answer\n• "What does your [family member] do?" → Ask about others\n• "I work in [field]." → Industry context (healthcare, tech, finance)\n• "I work for [company]." → Employer name\n• "I\'ve been a teacher for 5 years." → Experience duration' },
          { type: 'heading', level: 2, content: 'Family Discussion Phrases' },
          { type: 'text', content: '• "I come from a family of five." → Family size\n• "My father is a manager, and my mother is a doctor." → Parallel description\n• "I have two brothers and one sister." → Sibling description\n• "I\'m the oldest / youngest." → Birth order\n• "My cousin is also an engineer." → Extended family details\n• "They work together as a family business." → Family enterprise' },
          { type: 'heading', level: 2, content: 'Introduction Dialogue' },
          { type: 'text', content: 'Person A: "Tell me about your family."\nPerson B: "I have four family members: my parents and a younger sister."\nPerson A: "That\'s nice! What do your parents do?"\nPerson B: "My father is an engineer, and my mother is a teacher."\nPerson A: "And your sister?"\nPerson B: "She\'s still in school. She wants to be a lawyer."\nPerson A: "What about you? What\'s your job?"\nPerson B: "I\'m a graphic designer. I create visuals for companies."' },
          { type: 'heading', level: 2, content: 'Workplace Introduction Dialogue' },
          { type: 'text', content: 'Scenario: First day at a new job\n\n→ Coworker: "Hi! I\'m Alex. What\'s your role here?"\n← You: "I\'m Emma. I\'m a project manager."\n→ Coworker: "Nice! How long have you been a project manager?"\n← You: "About three years. I used to work in finance."\n→ Coworker: "Interesting! Do you have a family?"\n← You: "Yes, I have a husband and one daughter. She\'s five years old."\n→ Coworker: "That\'s wonderful! Let me show you around."' },
        ],
      },
      {
        id: 'l4',
        title: 'Food & Drinks',
        duration: '7:45',
        videoId: '',
        isPremium: false,
        checkItems: ['Food vocabulary', 'Drink vocabulary'],
        sections: [
          { type: 'info-box', content: 'Food and drink vocabulary is practical for dining out, grocery shopping, and everyday conversations. This lesson covers common foods, beverages, and phrases for ordering at restaurants or expressing food preferences. You\'ll learn both the food items and how to talk about them naturally.' },
          { type: 'heading', level: 2, content: 'Grains & Bread' },
          { type: 'text', content: '• Bread /bred/ | Baked grain product | "I eat bread every morning."\n• Rice /raɪs/ | Grain staple | "Rice is popular in Asia."\n• Pasta /ˈpɑːstə/ | Noodle dish | "Italian pasta is delicious."\n• Cereal /ˈsɪriəl/ | Breakfast grain | "I have cereal with milk."' },
          { type: 'heading', level: 2, content: 'Proteins & Meat' },
          { type: 'text', content: '• Chicken /ˈtʃɪkən/ | Poultry | "I like grilled chicken."\n• Fish /fɪʃ/ | Seafood | "Fish is high in omega-3."\n• Meat /miːt/ | General flesh food | "Some people don\'t eat meat."\n• Beef /biːf/ | Cow meat | "Beef is used in many dishes."\n• Pork /pɔːrk/ | Pig meat | "Pork is popular in many cuisines."\n• Egg /eɡ/ | Poultry product | "Eggs are a breakfast staple."' },
          { type: 'heading', level: 2, content: 'Dairy Products' },
          { type: 'text', content: '• Milk /mɪlk/ | Dairy liquid | "I drink milk for calcium."\n• Cheese /tʃiːz/ | Fermented dairy | "Cheddar cheese is my favorite."\n• Butter /ˈbʌtər/ | Dairy fat | "Butter makes food taste better."\n• Yogurt /ˈjoʊɡərt/ | Cultured dairy | "Yogurt is a healthy snack."' },
          { type: 'heading', level: 2, content: 'Vegetables' },
          { type: 'text', content: '• Carrot /ˈkærət/ | Orange root vegetable | "Carrots are good for eyesight."\n• Tomato /təˈmɑːtoʊ/ | Red fruit (used as veg) | "Tomatoes are juicy and fresh."\n• Lettuce /ˈletɪs/ | Leafy green | "Lettuce is low in calories."\n• Potato /pəˈteɪtoʊ/ | Starchy root | "Potatoes go with almost everything."\n• Broccoli /ˈbrɑːkəli/ | Green cruciferous | "Broccoli is nutritious."\n• Onion /ˈʌnjən/ | Pungent bulb | "Onions make me cry!"' },
          { type: 'heading', level: 2, content: 'Fruits' },
          { type: 'text', content: '• Apple /ˈæpəl/ | Red or green round fruit | "An apple a day keeps the doctor away."\n• Banana /bəˈnænə/ | Yellow tropical fruit | "Bananas are rich in potassium."\n• Orange /ˈɔːrɪndʒ/ | Citrus fruit | "Orange juice is refreshing."\n• Strawberry /ˈstrɔːberi/ | Red berry | "Strawberries are sweet."\n• Grape /ɡreɪp/ | Small clustered fruit | "Grapes come in purple, red, or green."\n• Watermelon /ˈwɔːtərˌmelon/ | Large summery fruit | "Watermelon is perfect for hot days."' },
          { type: 'heading', level: 2, content: 'Hot Beverages' },
          { type: 'text', content: '• Coffee /ˈkɔːfi/ | Caffeinated brown drink | "I drink coffee every morning."\n• Tea /tiː/ | Steeped leaf drink | "British people love tea at 4 PM."\n• Hot chocolate /ˌhɑːt ˈtʃɔːklit/ | Warm cocoa drink | "Hot chocolate is cozy in winter."\n• Water /ˈwɔːtər/ | Essential liquid | "Drink plenty of water daily."' },
          { type: 'heading', level: 2, content: 'Cold & Alcoholic Beverages' },
          { type: 'text', content: '• Juice /dʒuːs/ | Fruit or vegetable liquid | "Orange juice is fresh and healthy."\n• Milk (cold) | Served cold | "Cold milk with cookies is great."\n• Beer /bɪr/ | Fermented grain drink | "Beer is popular at parties."\n• Wine /waɪn/ | Fermented grape drink | "Red wine goes with steak."\n• Soda /ˈsoʊdə/ | Fizzy sweetened drink | "I rarely drink soda."\n• Smoothie /ˈsmuːði/ | Blended fruit drink | "A smoothie is a healthy breakfast."' },
          { type: 'heading', level: 2, content: 'Food Preferences & Ordering' },
          { type: 'text', content: '• "I like [food]." → Preference\n• "I don\'t like [food]." → Negative preference\n• "I\'m allergic to [food]." → Safety concern\n• "I\'m vegetarian." → No meat\n• "I\'m vegan." → No animal products\n• "I\'m lactose intolerant." → Can\'t digest dairy\n• "I\'d like [food], please." → Polite request\n• "Can I have [food]?" → Permission request' },
          { type: 'heading', level: 2, content: 'Restaurant Ordering Phrases' },
          { type: 'text', content: '• "What do you recommend?" → Ask for suggestion\n• "I\'ll have the chicken, please." → Clear order\n• "Can I get that without [ingredient]?" → Modify order\n• "I\'m still eating." → Not ready for check\n• "The check, please." → Ask for bill\n• "It was delicious!" → Compliment the food' },
          { type: 'heading', level: 2, content: 'Restaurant Dialogue Example' },
          { type: 'text', content: 'Waiter: "Good evening! Welcome. Can I start you with drinks?"\nYou: "I\'ll have water and coffee, please."\nWaiter: "Great! Are you ready to order?"\nYou: "What do you recommend?"\nWaiter: "Our grilled fish with vegetables is excellent."\nYou: "Perfect! I\'ll have that. No onions, please."\nWaiter: "And do you want bread?"\nYou: "Yes, some bread with butter. Thank you."' },
          { type: 'heading', level: 2, content: 'Grocery Shopping Dialogue' },
          { type: 'text', content: 'Scene: At a supermarket\n\n→ You: "Where are the fruits and vegetables?"\n← Cashier: "Aisle 3, on the left side."\n→ You: "Do you have fresh bananas?"\n← Cashier: "Yes, they came in this morning."\n→ You: "Great! I\'ll also get chicken, cheese, and milk."\n← Cashier: "Anything else?"\n→ You: "Just bread and coffee. How much is all this?"\n← Cashier: "That comes to $52.50."\n→ You: "Here you go. Thank you!"' },
        ],
      },
      {
        id: 'l5',
        title: 'Days & Time',
        duration: '8:15',
        videoId: '',
        isPremium: false,
        checkItems: ['Days of week', 'Time expressions'],
        sections: [
          { type: 'info-box', content: 'Understanding days and time is essential for scheduling, appointments, and planning. This lesson covers the days of the week, telling time on a clock, and common time-related phrases used in daily life. You\'ll learn to read time in both 12-hour and context-appropriate formats and use proper grammar for temporal expressions.' },
          { type: 'heading', level: 2, content: 'Days of the Week (7 Days)' },
          { type: 'text', content: '• Monday /ˈmʌndeɪ/ | First weekday | "Work usually starts on Monday."\n• Tuesday /ˈtuːzdeɪ/ | Second weekday | "I have a meeting on Tuesday."\n• Wednesday /ˈwɛnzdeɪ/ | Middle weekday | "Wednesday is hump day!"\n• Thursday /ˈθɜːrzdeɪ/ | Fourth weekday | "Thursday is almost Friday."\n• Friday /ˈfraɪdeɪ/ | Last weekday | "Friday is my favorite day!"\n• Saturday /ˈsætərdeɪ/ | First weekend day | "I relax on Saturday."\n• Sunday /ˈsʌndeɪ/ | Second weekend day | "Sunday is family day."' },
          { type: 'heading', level: 2, content: 'Key Time Periods' },
          { type: 'text', content: '• Morning /ˈmɔːrnɪŋ/ | Early part of day (6 AM - 12 PM) | "Good morning!"\n• Afternoon /ˌæftərˈnuːn/ | Mid-day (12 PM - 6 PM) | "I work in the afternoon."\n• Evening /ˈiːvnɪŋ/ | Later part of day (6 PM - 11 PM) | "We eat dinner in the evening."\n• Night /naɪt/ | Dark hours (11 PM - 6 AM) | "I sleep at night."\n• Midnight /ˈmɪdnaɪt/ | 12:00 AM | "Midnight is when the day changes."\n• Noon /nuːn/ | 12:00 PM | "Let\'s meet at noon for lunch."' },
          { type: 'heading', level: 2, content: 'Basic Time Telling' },
          { type: 'text', content: '• "What time is it?" → Question about current time\n• "It\'s 3 o\'clock." → On the hour (3:00)\n• "It\'s 3:15 / It\'s quarter past 3." → 15 minutes after\n• "It\'s 3:30 / It\'s half past 3." → 30 minutes after\n• "It\'s 3:45 / It\'s quarter to 4." → 15 minutes before next hour\n• "It\'s 2:20." → 20 minutes after\n• "It\'s 4:40." → 20 minutes before next hour' },
          { type: 'heading', level: 2, content: 'AM vs PM (12-Hour Format)' },
          { type: 'text', content: '• AM (Ante Meridiem) | Morning hours (12:00 AM - 11:59 AM)\n  - 6:00 AM = Early morning wake-up time\n  - 9:00 AM = Mid-morning work time\n  - 12:00 PM (Noon) = Lunchtime\n\n• PM (Post Meridiem) | Afternoon/Evening hours (12:00 PM - 11:59 PM)\n  - 3:00 PM = Afternoon work time\n  - 6:00 PM = Evening dinner time\n  - 9:00 PM = Night wind-down time' },
          { type: 'heading', level: 2, content: 'Common Time Expressions' },
          { type: 'text', content: '• "What time do you wake up?" → Morning routine question\n• "I wake up at 7:00 AM." → Morning time answer\n• "When do you have lunch?" → Meal time question\n• "I have lunch at 12:30 PM." → Meal time answer\n• "What time does the movie start?" → Event timing\n• "The movie starts at 7:00 PM." → Event timing answer\n• "See you at 5:00 PM." → Future appointment' },
          { type: 'heading', level: 2, content: 'Days + Time Combinations' },
          { type: 'text', content: '• "I work Monday to Friday." → Weekday schedule\n• "I\'m free on Saturday and Sunday." → Weekend availability\n• "I go shopping every Wednesday." → Weekly routine\n• "Tuesday at 2:00 PM?" → Specific appointment proposal\n• "Friday evening is good for me." → Time slot preference\n• "Let\'s meet next Monday at 3:00." → Future arrangement' },
          { type: 'heading', level: 2, content: 'Time Measurement Words' },
          { type: 'text', content: '• Hour /aʊər/ | 60 minutes | "The meeting is two hours long."\n• Minute /ˈmɪnɪt/ | 60 seconds | "Wait just a minute!"\n• Second /ˈsɛkənd/ | Basic time unit | "That took only five seconds!"\n• Week /wiːk/ | 7 days | "See you next week."\n• Month /mʌnθ/ | ~30 days | "The project takes two months."\n• Year /jɪr/ | 12 months | "I\'ve lived here for three years."' },
          { type: 'heading', level: 2, content: 'Telling Time Pronunciation Drill' },
          { type: 'text', content: '3:00 = "It\'s three o\'clock" /ɪts θriː əˈklɑːk/\n3:15 = "It\'s quarter past three" /ɪts ˈkwɔːrtər pæst θriː/\n3:30 = "It\'s half past three" /ɪts hæf pæst θriː/\n3:45 = "It\'s quarter to four" /ɪts ˈkwɔːrtər tu fɔːr/\n4:20 = "It\'s twenty past four" /ɪts ˈtwenti pæst fɔːr/\n4:40 = "It\'s twenty to five" /ɪts ˈtwenti tu faɪv/' },
          { type: 'heading', level: 2, content: 'Scheduling Dialogue' },
          { type: 'text', content: 'Person A: "When can we meet next week?"\nPerson B: "I\'m free on Monday, Tuesday, or Thursday."\nPerson A: "What time works best for you?"\nPerson B: "Afternoon is better. Maybe 2:00 PM or 3:00 PM?"\nPerson A: "Tuesday at 2:30 PM is perfect for me."\nPerson B: "Great! Tuesday at 2:30 PM. I\'ll put it in my calendar."\nPerson A: "See you then! Don\'t be late!"' },
          { type: 'heading', level: 2, content: 'Daily Routine Dialogue' },
          { type: 'text', content: 'Scene: Friends discussing their schedules\n\n→ Friend A: "What time do you usually wake up?"\n← Friend B: "I wake up at 6:30 AM on weekdays."\n→ Friend A: "That\'s early! What do you do then?"\n← Friend B: "I exercise from 7:00 to 8:00 AM, then shower and eat breakfast."\n→ Friend A: "What time do you start work?"\n← Friend B: "I start at 9:00 AM. I work until 5:00 PM."\n→ Friend A: "When do you relax?"\n← Friend B: "I relax in the evening after dinner, around 7:00 PM."\n→ Friend A: "And on weekends?"\n← Friend B: "On Saturday and Sunday, I sleep until 9:00 AM. Much better!"' },
        ],
      },
    ],
  }],
};

// English - A2 Level
const englishA2: Category = {
  id: 'cat-eng-a2',
  title: 'English - Elementary',
  description: '英語学習（初中級レベル A2）。',
  level: 'A2',
  topicCategoryId: 'topic-english',
  courses: [{
    id: 'eng-a2-1',
    title: 'Chapter 1: Daily Life',
    lessons: [
      {
        id: 'l1',
        title: 'Present Tense & Daily Routines',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Present tense', 'Daily routines'],
        sections: [
          { type: 'info-box', content: 'Learn present tense and talk about daily routines.' },
          { type: 'heading', level: 2, content: 'Present Tense' },
          { type: 'text', content: 'I work / You play / He/She eats / We study / They sleep' },
          { type: 'heading', level: 2, content: 'Daily Routines' },
          { type: 'text', content: 'Wake up / Eat breakfast / Go to work / Have lunch / Go home / Dinner / Sleep' },
        ],
      },
      {
        id: 'l2',
        title: 'Shopping & Money',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['Shopping', 'Money'],
        sections: [
          { type: 'info-box', content: 'Shopping expressions and money vocabulary.' },
          { type: 'heading', level: 2, content: 'Shopping' },
          { type: 'text', content: 'How much is it? / That\'s expensive / I want to buy... / Do you have...?' },
          { type: 'heading', level: 2, content: 'Money' },
          { type: 'text', content: 'Dollar / Euro / Pound / Cash / Card / Price / Cost' },
        ],
      },
    ],
  }],
};

// English - B1 Level
const englishB1: Category = {
  id: 'cat-eng-b1',
  title: 'English - Intermediate',
  description: '英語学習（中級レベル B1）。',
  level: 'B1',
  topicCategoryId: 'topic-english',
  courses: [{
    id: 'eng-b1-1',
    title: 'Chapter 1: Advanced Conversations',
    lessons: [
      {
        id: 'l1',
        title: 'Past Tense & Storytelling',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Past tense', 'Storytelling'],
        sections: [
          { type: 'info-box', content: 'Master past tense and tell stories.' },
          { type: 'heading', level: 2, content: 'Past Tense' },
          { type: 'text', content: 'I went / You saw / He/She ate / We lived / They played' },
          { type: 'heading', level: 2, content: 'Storytelling' },
          { type: 'text', content: 'Once upon a time / Then / After that / Finally / It was amazing' },
        ],
      },
    ],
  }],
};

// English - B2 Level
const englishB2: Category = {
  id: 'cat-eng-b2',
  title: 'English - Upper-Intermediate',
  description: '英語学習（中上級レベル B2）。',
  level: 'B2',
  topicCategoryId: 'topic-english',
  courses: [{
    id: 'eng-b2-1',
    title: 'Chapter 1: Advanced Topics',
    lessons: [
      {
        id: 'l1',
        title: 'Complex Sentences & Debate',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Complex grammar', 'Debate skills'],
        sections: [
          { type: 'info-box', content: 'Complex sentence structures and debate.' },
          { type: 'heading', level: 2, content: 'Complex Sentences' },
          { type: 'text', content: 'Although / Because / However / Therefore / In addition / On the other hand' },
          { type: 'heading', level: 2, content: 'Debate' },
          { type: 'text', content: 'I agree/disagree / My point is / Consider this / To sum up / In conclusion' },
        ],
      },
    ],
  }],
};

// Japanese - A1 Level
const japaneseA1: Category = {
  id: 'cat-jpn-a1',
  title: '日本語 - 初級',
  description: '日本語学習（初級レベル A1）。',
  level: 'A1',
  topicCategoryId: 'topic-japanese',
  courses: [{
    id: 'jpn-a1-1',
    title: '第1章：基礎',
    lessons: [
      {
        id: 'l1',
        title: '挨拶と自己紹介',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['挨拶ができる', '自己紹介できる'],
        sections: [
          { type: 'info-box', content: '日本語の基本挨拶と自己紹介を習得します。' },
          { type: 'heading', level: 2, content: '基本挨拶' },
          { type: 'text', content: 'おはよう / こんにちは / こんばんは / さようなら / ありがとう' },
          { type: 'heading', level: 2, content: '自己紹介' },
          { type: 'text', content: '私は...です / 〇〇から来ました / はじめまして / どうぞよろしく' },
        ],
      },
      {
        id: 'l2',
        title: '数字と色',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['数字が言える', '色が言える'],
        sections: [
          { type: 'info-box', content: '日常に必須の数字と色を学びます。' },
          { type: 'heading', level: 2, content: '数字 (1-20)' },
          { type: 'text', content: 'ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, とう, じゅういち, じゅうに, じゅうさん, じゅうし, じゅうご, じゅうろく, じゅうしち, じゅうはち, じゅうく, にじゅう' },
          { type: 'heading', level: 2, content: '色' },
          { type: 'text', content: '赤, 青, 緑, 黄色, 黒, 白, 灰色, オレンジ' },
        ],
      },
    ],
  }],
};

// Japanese - A2 Level
const japaneseA2: Category = {
  id: 'cat-jpn-a2',
  title: '日本語 - 初中級',
  description: '日本語学習（初中級レベル A2）。',
  level: 'A2',
  topicCategoryId: 'topic-japanese',
  courses: [{
    id: 'jpn-a2-1',
    title: '第1章：日常会話',
    lessons: [
      {
        id: 'l1',
        title: '過去形・経験',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['過去形', '経験表現'],
        sections: [
          { type: 'info-box', content: '過去形と経験を表現します。' },
          { type: 'heading', level: 2, content: '過去形' },
          { type: 'text', content: '食べました / 飲みました / 行きました / 見ました' },
          { type: 'heading', level: 2, content: '経験' },
          { type: 'text', content: '〜ことがあります / 〜たことがあります / 昨年 / 去年' },
        ],
      },
      {
        id: 'l2',
        title: '買い物と値段',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['買い物表現', '値段'],
        sections: [
          { type: 'info-box', content: '買い物での会話と値段表現。' },
          { type: 'heading', level: 2, content: '買い物' },
          { type: 'text', content: 'いくらですか / 高いです / 安いです / これください' },
          { type: 'heading', level: 2, content: '値段' },
          { type: 'text', content: '100円 / 1000円 / 10000円 / 高い / 安い' },
        ],
      },
    ],
  }],
};

// Japanese - B1 Level
const japaneseB1: Category = {
  id: 'cat-jpn-b1',
  title: '日本語 - 中級',
  description: '日本語学習（中級レベル B1）。',
  level: 'B1',
  topicCategoryId: 'topic-japanese',
  courses: [{
    id: 'jpn-b1-1',
    title: '第1章：より高度な会話',
    lessons: [
      {
        id: 'l1',
        title: '条件形・仮定',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['条件形', '仮定表現'],
        sections: [
          { type: 'info-box', content: '条件形と仮定を学びます。' },
          { type: 'heading', level: 2, content: '条件形' },
          { type: 'text', content: 'もし〜たら / 〜ば / 〜なら / 〜た場合' },
          { type: 'heading', level: 2, content: '仮定' },
          { type: 'text', content: 'もしかして / もし〜だったら / 仮に' },
        ],
      },
    ],
  }],
};

// Japanese - B2 Level
const japaneseB2: Category = {
  id: 'cat-jpn-b2',
  title: '日本語 - 中上級',
  description: '日本語学習（中上級レベル B2）。',
  level: 'B2',
  topicCategoryId: 'topic-japanese',
  courses: [{
    id: 'jpn-b2-1',
    title: '第1章：論文的表現',
    lessons: [
      {
        id: 'l1',
        title: '敬語と論理表現',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['敬語', '論理表現'],
        sections: [
          { type: 'info-box', content: '敬語と論理的表現を習得します。' },
          { type: 'heading', level: 2, content: '敬語' },
          { type: 'text', content: 'いたします / おります / いらっしゃる / 申し上げます' },
          { type: 'heading', level: 2, content: '論理表現' },
          { type: 'text', content: 'したがって / とはいえ / むしろ / 要するに' },
        ],
      },
    ],
  }],
};

// Chinese - A1 Level
const chineseA1: Category = {
  id: 'cat-chs-a1',
  title: '中国語 - 初級',
  description: '中国語学習（初級レベル A1）。',
  level: 'A1',
  topicCategoryId: 'topic-chinese',
  courses: [{
    id: 'chs-a1-1',
    title: '第1章：基础',
    lessons: [
      {
        id: 'l1',
        title: '问候和自我介绍',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['会问候', '会自我介绍'],
        sections: [
          { type: 'info-box', content: '学习中文基本问候和自我介绍。' },
          { type: 'heading', level: 2, content: '问候' },
          { type: 'text', content: '早上好 / 你好 / 晚上好 / 再见 / 谢谢' },
          { type: 'heading', level: 2, content: '自我介绍' },
          { type: 'text', content: '我叫... / 我来自... / 认识你很高兴 / 请多指教' },
        ],
      },
    ],
  }],
};

// Chinese - A2 Level
const chineseA2: Category = {
  id: 'cat-chs-a2',
  title: '中国語 - 初中級',
  description: '中国語学習（初中級レベル A2）。',
  level: 'A2',
  topicCategoryId: 'topic-chinese',
  courses: [{
    id: 'chs-a2-1',
    title: '第1章：日常交流',
    lessons: [
      {
        id: 'l1',
        title: '過去形と経験',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['過去形', '経験表現'],
        sections: [
          { type: 'info-box', content: '過去形と経験を表現します。' },
          { type: 'heading', level: 2, content: '過去形' },
          { type: 'text', content: '吃了 / 喝了 / 去了 / 看了' },
          { type: 'heading', level: 2, content: '経験' },
          { type: 'text', content: '去过 / 吃过 / 见过 / 做过' },
        ],
      },
      {
        id: 'l2',
        title: '買い物と値段',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['買い物', '値段'],
        sections: [
          { type: 'info-box', content: '買い物での会話。' },
          { type: 'heading', level: 2, content: '買い物' },
          { type: 'text', content: '多少钱 / 便宜 / 贵 / 要这个' },
          { type: 'heading', level: 2, content: '値段' },
          { type: 'text', content: '100块 / 1000块 / 便宜 / 很便宜' },
        ],
      },
    ],
  }],
};

// Chinese - B1 Level
const chineseB1: Category = {
  id: 'cat-chs-b1',
  title: '中国語 - 中級',
  description: '中国語学習（中級レベル B1）。',
  level: 'B1',
  topicCategoryId: 'topic-chinese',
  courses: [{
    id: 'chs-b1-1',
    title: '第1章：高度な会話',
    lessons: [
      {
        id: 'l1',
        title: '条件形と仮定',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['条件形', '仮定'],
        sections: [
          { type: 'info-box', content: '条件形と仮定を学びます。' },
          { type: 'heading', level: 2, content: '条件形' },
          { type: 'text', content: '如果...就 / 要是...就 / 假如...的话' },
          { type: 'heading', level: 2, content: '仮定' },
          { type: 'text', content: '如果 / 要是 / 假如 / 要不是' },
        ],
      },
    ],
  }],
};

// Chinese - B2 Level
const chineseB2: Category = {
  id: 'cat-chs-b2',
  title: '中国語 - 中上級',
  description: '中国語学習（中上級レベル B2）。',
  level: 'B2',
  topicCategoryId: 'topic-chinese',
  courses: [{
    id: 'chs-b2-1',
    title: '第1章：論文的表現',
    lessons: [
      {
        id: 'l1',
        title: '複雑な構文と論理',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['複雑な構文', '論理表現'],
        sections: [
          { type: 'info-box', content: '複雑な構文と論理的表現。' },
          { type: 'heading', level: 2, content: '複雑な構文' },
          { type: 'text', content: '虽然...但是 / 即使...也 / 因为...所以' },
          { type: 'heading', level: 2, content: '論理表現' },
          { type: 'text', content: '因此 / 然而 / 相反 / 总之' },
        ],
      },
    ],
  }],
};

// Korean - A1 Level
const koreanA1: Category = {
  id: 'cat-kor-a1',
  title: '한국어 - 초급',
  description: '한국어 학습 (초급 레벨 A1).',
  level: 'A1',
  topicCategoryId: 'topic-korean',
  courses: [{
    id: 'kor-a1-1',
    title: '제1장: 기초',
    lessons: [
      {
        id: 'l1',
        title: '인사와 자기소개',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['인사할 수 있다', '자기소개할 수 있다'],
        sections: [
          { type: 'info-box', content: '한국어 기본 인사와 자기소개를 배웁니다.' },
          { type: 'heading', level: 2, content: '인사' },
          { type: 'text', content: '안녕하세요 / 안녕 / 감사합니다 / 안녕히 가세요' },
          { type: 'heading', level: 2, content: '자기소개' },
          { type: 'text', content: '저는...입니다 / 저는...에서 왔습니다 / 만나서 반갑습니다' },
        ],
      },
    ],
  }],
};

// Korean - A2 Level
const koreanA2: Category = {
  id: 'cat-kor-a2',
  title: '한국어 - 초중급',
  description: '한국어 학습 (초중급 A2).',
  level: 'A2',
  topicCategoryId: 'topic-korean',
  courses: [{
    id: 'kor-a2-1',
    title: '제1장: 일상 대화',
    lessons: [
      {
        id: 'l1',
        title: '과거형과 경험',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['과거형', '경험'],
        sections: [
          { type: 'info-box', content: '과거형과 경험을 배웁니다.' },
          { type: 'heading', level: 2, content: '과거형' },
          { type: 'text', content: '먹었어요 / 마셨어요 / 갔어요 / 봤어요' },
          { type: 'heading', level: 2, content: '경험' },
          { type: 'text', content: '본 적 있어요 / 먹어본 적 있어요' },
        ],
      },
      {
        id: 'l2',
        title: '쇼핑과 가격',
        duration: '8:30',
        videoId: '',
        isPremium: false,
        checkItems: ['쇼핑', '가격'],
        sections: [
          { type: 'info-box', content: '쇼핑 표현과 가격.' },
          { type: 'heading', level: 2, content: '쇼핑' },
          { type: 'text', content: '얼마예요 / 비싸요 / 싸요 / 이거 주세요' },
          { type: 'heading', level: 2, content: '가격' },
          { type: 'text', content: '100원 / 1000원 / 싼 / 비싼' },
        ],
      },
    ],
  }],
};

// Korean - B1 Level
const koreanB1: Category = {
  id: 'cat-kor-b1',
  title: '한국어 - 중급',
  description: '한국어 학습 (중급 B1).',
  level: 'B1',
  topicCategoryId: 'topic-korean',
  courses: [{
    id: 'kor-b1-1',
    title: '제1장: 고급 회화',
    lessons: [
      {
        id: 'l1',
        title: '조건형과 가정',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['조건형', '가정'],
        sections: [
          { type: 'info-box', content: '조건형과 가정을 배웁니다.' },
          { type: 'heading', level: 2, content: '조건형' },
          { type: 'text', content: '만약...면 / 만약...다면 / ...면' },
          { type: 'heading', level: 2, content: '가정' },
          { type: 'text', content: '만약 / 혹시 / 실은' },
        ],
      },
    ],
  }],
};

// Korean - B2 Level
const koreanB2: Category = {
  id: 'cat-kor-b2',
  title: '한국어 - 중상급',
  description: '한국어 학습 (중상급 B2).',
  level: 'B2',
  topicCategoryId: 'topic-korean',
  courses: [{
    id: 'kor-b2-1',
    title: '제1장: 논문적 표현',
    lessons: [
      {
        id: 'l1',
        title: '복잡한 문법과 논리',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['복잡한 문법', '논리'],
        sections: [
          { type: 'info-box', content: '복잡한 문법과 논리 표현.' },
          { type: 'heading', level: 2, content: '복잡한 문법' },
          { type: 'text', content: '비록...지만 / 설령...도 / 때문에 / 그러므로' },
          { type: 'heading', level: 2, content: '논리 표현' },
          { type: 'text', content: '따라서 / 그러나 / 반대로 / 요약하면' },
        ],
      },
    ],
  }],
};

// German - A2/B1/B2
const germanA2: Category = {
  id: 'cat-deu-a2',
  title: 'Deutsch - Anfänger+',
  description: 'Deutschkurs A2.',
  level: 'A2',
  topicCategoryId: 'topic-german',
  courses: [{
    id: 'deu-a2-1',
    title: 'Kapitel 1',
    lessons: [{
      id: 'l1',
      title: 'Vergangenheit & Einkaufen',
      duration: '9:00',
      videoId: '',
      isPremium: false,
      checkItems: ['Präteritum', 'Einkaufen'],
      sections: [
        { type: 'info-box', content: 'Vergangenheit und Einkaufen lernen.' },
        { type: 'heading', level: 2, content: 'Präteritum' },
        { type: 'text', content: 'ich aß / du trankst / er ging / wir sahen' },
        { type: 'heading', level: 2, content: 'Einkaufen' },
        { type: 'text', content: 'Wie viel kostet das? / Das ist teuer / Das ist billig' },
      ],
    }],
  }],
};

const germanB1: Category = {
  id: 'cat-deu-b1',
  title: 'Deutsch - Mittelstufe',
  description: 'Deutschkurs B1.',
  level: 'B1',
  topicCategoryId: 'topic-german',
  courses: [{
    id: 'deu-b1-1',
    title: 'Kapitel 1',
    lessons: [{
      id: 'l1',
      title: 'Bedingungsformen',
      duration: '10:00',
      videoId: '',
      isPremium: false,
      checkItems: ['Bedingungsformen'],
      sections: [
        { type: 'info-box', content: 'Bedingungsformen lernen.' },
        { type: 'heading', level: 2, content: 'Wenn-Sätze' },
        { type: 'text', content: 'Wenn...dann / Falls...würde / Sollte...so' },
      ],
    }],
  }],
};

const germanB2: Category = {
  id: 'cat-deu-b2',
  title: 'Deutsch - Oberstufe',
  description: 'Deutschkurs B2.',
  level: 'B2',
  topicCategoryId: 'topic-german',
  courses: [{
    id: 'deu-b2-1',
    title: 'Kapitel 1',
    lessons: [{
      id: 'l1',
      title: 'Komplexe Strukturen',
      duration: '11:00',
      videoId: '',
      isPremium: false,
      checkItems: ['Komplexe Strukturen'],
      sections: [
        { type: 'info-box', content: 'Komplexe Strukturen und Logik.' },
        { type: 'heading', level: 2, content: 'Komplexe Sätze' },
        { type: 'text', content: 'Obwohl...aber / Trotzdem...jedoch / Daher...somit' },
      ],
    }],
  }],
};

// Additional languages - placeholder A1
const otherLanguagesA1: Category[] = [
  {
    id: 'cat-deu-a1',
    title: 'Deutsch - Anfänger',
    description: 'Deutschkurs für Anfänger (A1).',
    level: 'A1',
    topicCategoryId: 'topic-german',
    courses: [{
      id: 'deu-a1-1',
      title: 'Kapitel 1',
      lessons: [{
        id: 'l1',
        title: 'Grüße und Vorstellung',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Grüße'],
        sections: [{ type: 'info-box', content: 'Deutschunterricht A1' }],
      }],
    }],
  },
  {
    id: 'cat-fra-a1',
    title: 'Français - Débutant',
    description: 'Cours de français pour débutants (A1).',
    level: 'A1',
    topicCategoryId: 'topic-french',
    courses: [{
      id: 'fra-a1-1',
      title: 'Chapitre 1',
      lessons: [{
        id: 'l1',
        title: 'Salutations et présentation',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Salutations'],
        sections: [{ type: 'info-box', content: 'Cours de français A1' }],
      }],
    }],
  },
  {
    id: 'cat-spa-a1',
    title: 'Español - Principiante',
    description: 'Curso de español para principiantes (A1).',
    level: 'A1',
    topicCategoryId: 'topic-spanish',
    courses: [{
      id: 'spa-a1-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Saludos y presentación',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Saludos'],
        sections: [{ type: 'info-box', content: 'Curso de español A1' }],
      }],
    }],
  },
  {
    id: 'cat-ita-a1',
    title: 'Italiano - Principiante',
    description: 'Corso di italiano per principianti (A1).',
    level: 'A1',
    topicCategoryId: 'topic-italian',
    courses: [{
      id: 'ita-a1-1',
      title: 'Capitolo 1',
      lessons: [{
        id: 'l1',
        title: 'Saluti e presentazione',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Saluti'],
        sections: [{ type: 'info-box', content: 'Corso di italiano A1' }],
      }],
    }],
  },
  {
    id: 'cat-ara-a1',
    title: 'العربية - مبتدئ',
    description: 'دورة اللغة العربية للمبتدئين (A1).',
    level: 'A1',
    topicCategoryId: 'topic-arabic',
    courses: [{
      id: 'ara-a1-1',
      title: 'الفصل الأول',
      lessons: [{
        id: 'l1',
        title: 'التحيات والتعريف بالنفس',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['التحيات'],
        sections: [{ type: 'info-box', content: 'دورة اللغة العربية A1' }],
      }],
    }],
  },
  {
    id: 'cat-por-a1',
    title: 'Português - Iniciante',
    description: 'Curso de português para iniciantes (A1).',
    level: 'A1',
    topicCategoryId: 'topic-portuguese',
    courses: [{
      id: 'por-a1-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Saudações e apresentação',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Saudações'],
        sections: [{ type: 'info-box', content: 'Curso de português A1' }],
      }],
    }],
  },
  {
    id: 'cat-cyc-a1',
    title: '古文・漢文 - 初級',
    description: '古典中国語学習（初級レベル A1）。',
    level: 'A1',
    topicCategoryId: 'topic-classical-chinese',
    courses: [{
      id: 'cyc-a1-1',
      title: '第1章：基礎',
      lessons: [{
        id: 'l1',
        title: '基本文法',
        duration: '8:00',
        videoId: '',
        isPremium: false,
        checkItems: ['基本文法'],
        sections: [{ type: 'info-box', content: '古典中国語の基礎' }],
      }],
    }],
  },
  {
    id: 'cat-cyc-a2',
    title: '古文・漢文 - 初中級',
    description: '古典中国語学習（初中級レベル A2）。',
    level: 'A2',
    topicCategoryId: 'topic-classical-chinese',
    courses: [{
      id: 'cyc-a2-1',
      title: '第1章：古典表現',
      lessons: [{
        id: 'l1',
        title: '過去形と経験',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['過去形', '経験'],
        sections: [
          { type: 'info-box', content: '古典中国語の過去形と経験表現。' },
          { type: 'heading', level: 2, content: '過去形' },
          { type: 'text', content: '曾 / 嘗 / 過 / 昔日' },
          { type: 'heading', level: 2, content: '経験' },
          { type: 'text', content: '前日 / 昨時 / 往昔 / 往日' },
        ],
      }],
    }],
  },
  {
    id: 'cat-cyc-b1',
    title: '古文・漢文 - 中級',
    description: '古典中国語学習（中級レベル B1）。',
    level: 'B1',
    topicCategoryId: 'topic-classical-chinese',
    courses: [{
      id: 'cyc-b1-1',
      title: '第1章：古文解読',
      lessons: [{
        id: 'l1',
        title: '条件形と仮定',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['条件形', '仮定'],
        sections: [
          { type: 'info-box', content: '古典中国語の条件形と仮定。' },
          { type: 'heading', level: 2, content: '条件形' },
          { type: 'text', content: '若...則 / 如...則 / 若夫' },
          { type: 'heading', level: 2, content: '仮定' },
          { type: 'text', content: '假如 / 若是 / 設令 / 倘若' },
        ],
      }],
    }],
  },
  {
    id: 'cat-cyc-b2',
    title: '古文・漢文 - 中上級',
    description: '古典中国語学習（中上級レベル B2）。',
    level: 'B2',
    topicCategoryId: 'topic-classical-chinese',
    courses: [{
      id: 'cyc-b2-1',
      title: '第1章：古籍研究',
      lessons: [{
        id: 'l1',
        title: '複雑な構文と論理',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['複雑な構文', '論理'],
        sections: [
          { type: 'info-box', content: '古典中国語の複雑な構文と論理。' },
          { type: 'heading', level: 2, content: '複雑な構文' },
          { type: 'text', content: '雖然...然而 / 縱然...亦 / 由於...因此' },
          { type: 'heading', level: 2, content: '論理表現' },
          { type: 'text', content: '故 / 是以 / 然 / 諸 / 總而言之' },
        ],
      }],
    }],
  },
];

export const allCategories: Category[] = [
  englishA1,
  englishA2,
  englishB1,
  englishB2,
  japaneseA1,
  japaneseA2,
  japaneseB1,
  japaneseB2,
  chineseA1,
  chineseA2,
  chineseB1,
  chineseB2,
  koreanA1,
  koreanA2,
  koreanB1,
  koreanB2,
  germanA2,
  germanB1,
  germanB2,
  {
    id: 'cat-fra-a2',
    title: 'Français - Élémentaire',
    level: 'A2',
    topicCategoryId: 'topic-french',
    courses: [{
      id: 'fra-a2-1',
      title: 'Chapitre 1',
      lessons: [{
        id: 'l1',
        title: 'Passé & Shopping',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Passé', 'Shopping'],
        sections: [
          { type: 'info-box', content: 'Passé composé et shopping.' },
          { type: 'heading', level: 2, content: 'Passé' },
          { type: 'text', content: 'J\'ai mangé / Tu as bu / Il est allé' },
          { type: 'heading', level: 2, content: 'Shopping' },
          { type: 'text', content: 'Combien ça coûte? / C\'est cher / C\'est bon marché' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-fra-b1',
    title: 'Français - Intermédiaire',
    level: 'B1',
    topicCategoryId: 'topic-french',
    courses: [{
      id: 'fra-b1-1',
      title: 'Chapitre 1',
      lessons: [{
        id: 'l1',
        title: 'Conditions',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Conditions'],
        sections: [
          { type: 'info-box', content: 'Phrases conditionnelles.' },
          { type: 'heading', level: 2, content: 'Si' },
          { type: 'text', content: 'Si...alors / Si j\'étais' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-fra-b2',
    title: 'Français - Supérieur',
    level: 'B2',
    topicCategoryId: 'topic-french',
    courses: [{
      id: 'fra-b2-1',
      title: 'Chapitre 1',
      lessons: [{
        id: 'l1',
        title: 'Structures Complexes',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Structures'],
        sections: [
          { type: 'info-box', content: 'Structures complexes et logique.' },
          { type: 'heading', level: 2, content: 'Logique' },
          { type: 'text', content: 'Bien que / Cependant / Par conséquent' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-spa-a2',
    title: 'Español - Elemental',
    level: 'A2',
    topicCategoryId: 'topic-spanish',
    courses: [{
      id: 'spa-a2-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Pasado & Compras',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Pasado', 'Compras'],
        sections: [
          { type: 'info-box', content: 'Pasado preterito y compras.' },
          { type: 'heading', level: 2, content: 'Pasado' },
          { type: 'text', content: 'Comí / Bebiste / Fue / Vimos' },
          { type: 'heading', level: 2, content: 'Compras' },
          { type: 'text', content: '¿Cuánto cuesta? / Es caro / Es barato' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-spa-b1',
    title: 'Español - Intermedio',
    level: 'B1',
    topicCategoryId: 'topic-spanish',
    courses: [{
      id: 'spa-b1-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Condicionales',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Condicionales'],
        sections: [
          { type: 'info-box', content: 'Oraciones condicionales.' },
          { type: 'heading', level: 2, content: 'Si clauses' },
          { type: 'text', content: 'Si...entonces / Si fuera / Aunque' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-spa-b2',
    title: 'Español - Superior',
    level: 'B2',
    topicCategoryId: 'topic-spanish',
    courses: [{
      id: 'spa-b2-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Estructuras Complejas',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Estructuras'],
        sections: [
          { type: 'info-box', content: 'Estructuras complejas y lógica.' },
          { type: 'heading', level: 2, content: 'Lógica' },
          { type: 'text', content: 'Aunque / Sin embargo / Por lo tanto' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ita-a2',
    title: 'Italiano - Elementare',
    level: 'A2',
    topicCategoryId: 'topic-italian',
    courses: [{
      id: 'ita-a2-1',
      title: 'Capitolo 1',
      lessons: [{
        id: 'l1',
        title: 'Passato & Shopping',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Passato', 'Shopping'],
        sections: [
          { type: 'info-box', content: 'Passato prossimo e shopping.' },
          { type: 'heading', level: 2, content: 'Passato' },
          { type: 'text', content: 'Ho mangiato / Hai bevuto / È andato' },
          { type: 'heading', level: 2, content: 'Shopping' },
          { type: 'text', content: 'Quanto costa? / È caro / È economico' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ita-b1',
    title: 'Italiano - Intermedio',
    level: 'B1',
    topicCategoryId: 'topic-italian',
    courses: [{
      id: 'ita-b1-1',
      title: 'Capitolo 1',
      lessons: [{
        id: 'l1',
        title: 'Condizionali',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Condizionali'],
        sections: [
          { type: 'info-box', content: 'Frasi condizionali.' },
          { type: 'heading', level: 2, content: 'Se clauses' },
          { type: 'text', content: 'Se...allora / Se fossi / Benché' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ita-b2',
    title: 'Italiano - Superiore',
    level: 'B2',
    topicCategoryId: 'topic-italian',
    courses: [{
      id: 'ita-b2-1',
      title: 'Capitolo 1',
      lessons: [{
        id: 'l1',
        title: 'Strutture Complesse',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Strutture'],
        sections: [
          { type: 'info-box', content: 'Strutture complesse e logica.' },
          { type: 'heading', level: 2, content: 'Logica' },
          { type: 'text', content: 'Sebbene / Tuttavia / Perciò' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ara-a2',
    title: 'العربية - مبتدئ متقدم',
    level: 'A2',
    topicCategoryId: 'topic-arabic',
    courses: [{
      id: 'ara-a2-1',
      title: 'الفصل الأول',
      lessons: [{
        id: 'l1',
        title: 'الماضي والتسوق',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['الماضي', 'التسوق'],
        sections: [
          { type: 'info-box', content: 'الماضي والتسوق بالعربية.' },
          { type: 'heading', level: 2, content: 'الماضي' },
          { type: 'text', content: 'أكلت / شربت / ذهبت / رأيت' },
          { type: 'heading', level: 2, content: 'التسوق' },
          { type: 'text', content: 'كم السعر؟ / غالي / رخيص' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ara-b1',
    title: 'العربية - متوسط',
    level: 'B1',
    topicCategoryId: 'topic-arabic',
    courses: [{
      id: 'ara-b1-1',
      title: 'الفصل الأول',
      lessons: [{
        id: 'l1',
        title: 'الشروط والافتراضات',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['الشروط'],
        sections: [
          { type: 'info-box', content: 'جمل شرطية.' },
          { type: 'heading', level: 2, content: 'إذا' },
          { type: 'text', content: 'إذا...فإن / لو...لكان / إن' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-ara-b2',
    title: 'العربية - متقدم',
    level: 'B2',
    topicCategoryId: 'topic-arabic',
    courses: [{
      id: 'ara-b2-1',
      title: 'الفصل الأول',
      lessons: [{
        id: 'l1',
        title: 'التراكيب المعقدة',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['التراكيب'],
        sections: [
          { type: 'info-box', content: 'تراكيب معقدة ومنطق.' },
          { type: 'heading', level: 2, content: 'المنطق' },
          { type: 'text', content: 'مع أن / لكن / لذلك / بناءً على' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-por-a2',
    title: 'Português - Elementar',
    level: 'A2',
    topicCategoryId: 'topic-portuguese',
    courses: [{
      id: 'por-a2-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Passado & Compras',
        duration: '9:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Passado', 'Compras'],
        sections: [
          { type: 'info-box', content: 'Passado e compras em português.' },
          { type: 'heading', level: 2, content: 'Passado' },
          { type: 'text', content: 'Comi / Bebi / Fui / Vi' },
          { type: 'heading', level: 2, content: 'Compras' },
          { type: 'text', content: 'Quanto custa? / É caro / É barato' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-por-b1',
    title: 'Português - Intermediário',
    level: 'B1',
    topicCategoryId: 'topic-portuguese',
    courses: [{
      id: 'por-b1-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Condicionais',
        duration: '10:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Condicionais'],
        sections: [
          { type: 'info-box', content: 'Frases condicionais.' },
          { type: 'heading', level: 2, content: 'Se clauses' },
          { type: 'text', content: 'Se...então / Se fosse / Mesmo que' },
        ],
      }],
    }],
  } as Category,
  {
    id: 'cat-por-b2',
    title: 'Português - Superior',
    level: 'B2',
    topicCategoryId: 'topic-portuguese',
    courses: [{
      id: 'por-b2-1',
      title: 'Capítulo 1',
      lessons: [{
        id: 'l1',
        title: 'Estruturas Complexas',
        duration: '11:00',
        videoId: '',
        isPremium: false,
        checkItems: ['Estruturas'],
        sections: [
          { type: 'info-box', content: 'Estruturas complexas e lógica.' },
          { type: 'heading', level: 2, content: 'Lógica' },
          { type: 'text', content: 'Embora / Porém / Portanto' },
        ],
      }],
    }],
  } as Category,
  ...otherLanguagesA1,
];

// Alias for backwards compatibility
export const categories = allCategories;

export const topicCategories = [
  { id: 'topic-english', name: 'English', icon: 'genre-english' },
  { id: 'topic-japanese', name: '日本語', icon: 'genre-japanese-modern' },
  { id: 'topic-chinese', name: '中国語', icon: 'genre-chinese' },
  { id: 'topic-korean', name: '한국어', icon: 'genre-korean' },
  { id: 'topic-german', name: 'Deutsch', icon: 'genre-german' },
  { id: 'topic-french', name: 'Français', icon: 'genre-french' },
  { id: 'topic-spanish', name: 'Español', icon: 'genre-spanish' },
  { id: 'topic-italian', name: 'Italiano', icon: 'genre-italian' },
  { id: 'topic-arabic', name: 'العربية', icon: 'genre-arabic' },
  { id: 'topic-portuguese', name: 'Português', icon: 'genre-portuguese' },
  { id: 'topic-classical-chinese', name: '古文・漢文', icon: 'genre-classical' },
];

// Utility functions
export function getCourse(courseId: string) {
  for (const category of allCategories) {
    for (const course of category.courses) {
      if (course.id === courseId) {
        return { course, category };
      }
    }
  }
  return null;
}

export function getLesson(courseId: string, lessonId: string) {
  for (const category of allCategories) {
    for (const course of category.courses) {
      if (course.id === courseId) {
        for (const lesson of course.lessons) {
          if (lesson.id === lessonId) {
            return { lesson, course, category };
          }
        }
      }
    }
  }
  return null;
}

export function getAdjacentLessons(courseId: string, lessonId: string) {
  const courseResult = getCourse(courseId);
  if (!courseResult) return { prev: null, next: null };

  const { course, category } = courseResult;
  const currentIndex = course.lessons.findIndex(l => l.id === lessonId);

  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex > 0 ? {
      lesson: course.lessons[currentIndex - 1],
      courseId,
      chapterTitle: course.title,
    } : null,
    next: currentIndex < course.lessons.length - 1 ? {
      lesson: course.lessons[currentIndex + 1],
      courseId,
      chapterTitle: course.title,
    } : null,
  };
}
