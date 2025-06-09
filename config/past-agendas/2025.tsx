import parseJson from 'parse-json'

const agenda = parseJson(`
{

  "sessions": [

    {

      "id": "852916",

      "title": "Emerging trends in robotics",

      "description": "In the last decade, technology companies have reshaped the global economy, dominating the world’s top 10 companies by market capitalisation, with 8 of the 10 investing in or developing underpinning technology in robotics (Nvidia, Apple, Microsoft, Amazon, Alphabet, MetaPlatforms, Taiwan Semiconductor Manufacturing Company, Tesla). In Australia, our top 10 companies remain dominated by traditional sectors such as mining and banking, but we have our own specialisation in robotics. This talk will explore emerging trends in robotics, the Australian robotics landscape and what the opportunities will look like if we harness the talent and technology that is being developed on our shores.",

      "startsAt": "2025-02-22T09:00:00",

      "endsAt": "2025-02-22T09:45:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "f27081ee-8940-4e2e-a614-daba78ec79be"

      ],

      "categoryItems": [],

      "questionAnswers": [],

      "roomId": 53747,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": false,

      "isConfirmed": false

    },

    {

      "id": "774291",

      "title": "Are you overcomplicating software development? I certainly have been...",

      "description": "As someone who spends their days untangling software complexity, I've seen some serious messes. My last project involved dismantling a kubernetes/microservices setup with a two-day deployment cycle that cost the entire GPD of a small country to run-all because it looked good on someone's resume.\\r\\n\\r\\nI've even had debates with architects whose entire argument boiled down to: “Netflix does it, so why don't we” Except you're not Netflix and you do not have 200+ million subscribers. And yes, I used to be that kind of architect too.\\r\\n\\r\\nLook, I get it — we are engineers. We LOVE complexity; it's why we chose this career path. Pondering this question has led me to eat some seriously bad-tasting humbling pie. Sometimes you must set your ego aside and do what's best for your team and organisation.\\r\\n\\r\\nIn this talk, I'll share why I believe software has become overcomplicated, the role I've played in it, and how we can start simplifying things by sticking to core principles like YAGNI, KISS, and more.\\r\\n\\r\\nBy the end, I hope to have shared a slice of that humble pie along with practical tips for becoming a better, more pragmatic developer. As engineers, it's our duty to lead by example and keep things simple — because complexity isn't always better.\\r\\n",

      "startsAt": "2025-02-22T10:15:00",

      "endsAt": "2025-02-22T11:00:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "6a64a38a-7fc5-430b-bd85-ff374e1db264"

      ],

      "categoryItems": [

        288557,

        288560,

        288565,

        288568

      ],

      "questionAnswers": [],

      "roomId": 53747,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "775614",

      "title": "All your secrets are belong to us",

      "description": "Admit it: we've all checked in an API key or password to a repo at some point... Oops... No one wants their secrets to accidentally leak, so this session is your essential refresher on secret management (and mismanagement!) for your applications and beyond!\\r\\n\\r\\nLet's explore the range of methods and benefits of securely handling secrets for local development: from features baked into your IDE (Visual Studio, Rider), to secret management services (Azure KeyVault, AWS / GCP Secret Manager), and even loading them from your password manager of choice (i.e. 1Password). We'll progress to look at accessing secrets as part of a CI/CD pipeline, or loading them into infrastructure at runtime, to eliminate hard-coded secrets from every aspect of our projects.\\r\\n\\r\\nI will discuss the processes for managing secrets on a large scale – including following a least trust approach, methods for revoking and cycling credentials, and appropriately mapping our dependencies so we can measure the impact of a change.",

      "startsAt": "2025-02-22T10:15:00",

      "endsAt": "2025-02-22T11:00:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "3f01a9fa-4c71-4efe-871f-8e0ced1471d0"

      ],

      "categoryItems": [

        288557,

        288560,

        288586,

        288591

      ],

      "questionAnswers": [],

      "roomId": 53748,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "776269",

      "title": "Up and atom: building modular components through atomic design",

      "description": "Atomic design thinking has revolutionised the way we structure and scale modular design systems, but translating this thinking from design to development has remained a challenge.\\r\\n\\r\\nIn this talk, we’ll share our own journey of building a robust modular design system for an ASX-listed enterprise. We’ll discuss leveraging atomic design principles to create scalable components with React and Tailwind CSS that correspond perfectly across Figma and Storybook.\\r\\n\\r\\nAttendees will gain an understanding of modular design principles and challenges, the implementation approach, and learnings for fostering better collaboration between design and development.",

      "startsAt": "2025-02-22T10:15:00",

      "endsAt": "2025-02-22T11:00:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "e3398fd3-e487-494b-a27f-f19e4faa7fe9",

        "f5669dcb-e40d-435c-a9b9-45e05cdc1df7"

      ],

      "categoryItems": [

        288557,

        288559,

        288575,

        288577,

        288592

      ],

      "questionAnswers": [],

      "roomId": 56964,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "776112",

      "title": "Beyond Continuous Delivery - Our journey from Gitflow to Continuous Deployment",

      "description": "Evolving beyond CI/CD requires dedication and intent. Our quest to expand from continuous delivery to continuous deployment, where every passing merge goes directly to production, was not without its challenges. However, the benefits of streamlining our processes—eliminating release overhead, obtaining faster feedback from customers, reducing risk with smaller changes—compelled us to embark on this path of continuous improvement.\\r\\n\\r\\nJoin me as I share shares my journey, hurdles encountered, and practical tips to enhance your deployment processes and chart your own course toward continuous deployment. Topics covered include strengthening your testing strategy, adapting processes to align with the new approach, and automating all the things. This session aims to provide you with a clear understanding of the advantages of continuous deployment and actionable insights to implement within your team.\\r\\n\\r\\nWalk away with newfound inspiration and ideas to drive your organization forward on the path to continuous deployment.",

      "startsAt": "2025-02-22T10:15:00",

      "endsAt": "2025-02-22T11:00:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "f98b9f73-2b19-4888-a522-c206b8c46db7"

      ],

      "categoryItems": [

        288558,

        288559,

        288566,

        288573,

        288576

      ],

      "questionAnswers": [],

      "roomId": 53749,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "774369",

      "title": "Beginner's Guide to Event Storming",

      "description": "Event Storming is an increasingly popular technique for helping developers and business stakeholders collaborate on exploring domains and designing solutions.\\r\\n\\r\\nIn this experiential workshop, we'll briefly talk through the fundamental principals of how to run an event storming session & why it works so well, and then spend most of our time event storming together.\\r\\n\\r\\nThis will suit first timers or folk looking to level up their event storming practice and will position you to start using this powerful technique at work immediately.",

      "startsAt": "2025-02-22T10:15:00",

      "endsAt": "2025-02-22T12:00:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "7ad6fd74-58ec-4fbd-a785-4d635ac41d89"

      ],

      "categoryItems": [

        296992,

        288559,

        288562,

        288565,

        288583

      ],

      "questionAnswers": [],

      "roomId": 56965,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "744515",

      "title": "Write secure code, sleep better at nights",

      "description": "If you get a call that the code you have written has caused a security breach or found in a vulnerability scanning, what is your reaction? Would you feel stressed, embarrassed, or motivated to fix it.\\r\\n\\r\\nCome join me going through some industry standards when it comes to writing secure code and make sure you are protected against common attacks. We will review:\\r\\n* Where to start.\\r\\n* Handling sensitive data within your apps.\\r\\n* Validating use input.\\r\\n* Tools which allow you to scan and validate your code even in your dev machine.\\r\\n\\r\\nIf this is something that piques your interest, get your coffee and join me, I need you wide awake throughout 🍵.\\r\\n",

      "startsAt": "2025-02-22T11:15:00",

      "endsAt": "2025-02-22T12:00:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "a127e924-82ac-42df-8761-ecb106c8ef61"

      ],

      "categoryItems": [

        288557,

        288560,

        288568,

        288577,

        288586

      ],

      "questionAnswers": [],

      "roomId": 53747,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "747576",

      "title": "Top Database Performance Techniques",

      "description": "Discover the secrets to unlocking lightning-fast database performance! In this engaging presentation, I will guide you through a range of tried-and-true techniques that will revolutionize the way you approach database optimization. With plenty of live demos along the way, you'll gain a deep understanding of each technique and learn how to apply them to your own databases. From the simplest tips to more advanced techniques, this session has something for everyone. Get ready to take your database performance to the next level!",

      "startsAt": "2025-02-22T11:15:00",

      "endsAt": "2025-02-22T12:00:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "8341c431-b01d-4208-83ba-0e50d141a346"

      ],

      "categoryItems": [

        288557,

        288560,

        288568,

        288574

      ],

      "questionAnswers": [],

      "roomId": 53748,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "745344",

      "title": "How to Design Your Next Career Move",

      "description": "What are the decided factors in making your next career move? \\r\\n\\r\\nDo you actively think about it? Do you wait for the tap on the shoulder from a recruiter?  Do you have one bad day at work and then decide you want to start applying for jobs? \\r\\n\\r\\nIn this session, I'll take you through my career design method. There are key questions and activities I go through to make a strategic decision about my next move and I want to share this process with you! \\r\\n\\r\\nBy the end of this session, you'll have a clear scaffold to help you get clarity about where you're heading and more importantly, why you're heading there. ",

      "startsAt": "2025-02-22T11:15:00",

      "endsAt": "2025-02-22T12:00:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "a1673eba-b85b-402c-91e7-ef3f4f781c20"

      ],

      "categoryItems": [

        288558,

        288559,

        288569,

        288588

      ],

      "questionAnswers": [],

      "roomId": 56964,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "775599",

      "title": "Choose Your Own Design Patterns!",

      "description": "Readers beware! You choose the object-oriented design pattern that we will dare! This interactive \\"myth-buster-esque\\" talk will take you through a haunted mansion of object-oriented Java design patterns from the Gang-of-Four book and debunk the myths of their relavence with Kotlin. \\r\\n\\r\\nWould you like to go to the kitchen to look at the cake builder and learn about the Builder Pattern? Or do you want to visit the friendly ghost lurking in the basement and learn about the Visitor Pattern? Or perhaps you want to help out with some housekeeping and accidentally shock yourself trying to plug in the vacuum cleaner while learning the Adapter Pattern? The possibilities are endless, so choose wisely! Choose your own design patterns!  ",

      "startsAt": "2025-02-22T11:15:00",

      "endsAt": "2025-02-22T12:00:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "406d30d0-9757-47d9-94d7-667e11ac803b"

      ],

      "categoryItems": [

        288557,

        288559,

        288564,

        288565,

        288568,

        288577

      ],

      "questionAnswers": [],

      "roomId": 53749,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "776199",

      "title": "Secure by Design: Integrating Security into Development",

      "description": "Cyber security (or lack of) has been covered extensively in the news. Hacker attacks range from bored school kids toying around to state-sponsored ransom-driven targeted strikes. As software engineers it’s our responsibility to incorporate cyber security best practices into the development cycle. \\r\\n\\r\\nSecure by design initiative is being adopted by more and more countries including Australia. Products designed with Secure by Design principles prioritise the security of customers as a core business requirement, rather than merely treating it as a technical feature.\\r\\n\\r\\nI’ll provide a list of resources, best practices, tools for designing and implementing more secure applications and to prepare for penetration testing.",

      "startsAt": "2025-02-22T12:15:00",

      "endsAt": "2025-02-22T12:35:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "46af1dd7-fc1d-477d-8406-99a6403f59b5"

      ],

      "categoryItems": [

        288556,

        288559,

        288581,

        288586

      ],

      "questionAnswers": [],

      "roomId": 53747,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "750339",

      "title": "Refactoring Careers: Migrating Successfully Into Tech Roles",

      "description": "In an age where technology is reshaping every facet of our lives, many professionals find themselves contemplating a significant career shift—refactoring their paths to migrate into tech roles. Whether you're transitioning from a non-technical background or shifting within the tech landscape, this journey is both challenging and rewarding.\\r\\n\\r\\nThis talk explores the strategies and mindset needed to successfully navigate a career migration into technology. Drawing from my personal experience transitioning from business administration to an ICT Developer professional—and now moving towards DevOps and Solutions Architecture—I'll share insights gained from working across three continents: Brazil, Japan, and Australia.\\r\\n\\r\\nWe'll dive into embracing career shifts, the power of continuous learning and certifications, and how to leverage diverse cultural experiences to enhance problem-solving skills and adaptability. By sharing my experiences in organising tech meetups and fostering community engagement, we'll explore how building strong professional networks can open doors and provide support during transitions. Additionally, we'll discuss the growing importance of emotional intelligence (EQ) and soft skills in tech roles—skills that are essential for effective collaboration, leadership, and driving innovation.\\r\\n\\r\\nWhether you're at a crossroads in your career or seeking to evolve within the tech industry, this session will provide you with practical guidance and inspiration to refactor your career code, harness the power of both technical and interpersonal skills, and successfully migrate into tech roles.",

      "startsAt": "2025-02-22T12:15:00",

      "endsAt": "2025-02-22T12:35:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "a74bf957-36fb-4dc6-87ee-41c5ace9671b"

      ],

      "categoryItems": [

        288558,

        288559,

        288562,

        288563,

        288565,

        288569,

        288572,

        288581,

        288582,

        288588,

        288589

      ],

      "questionAnswers": [],

      "roomId": 53748,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "774545",

      "title": "The life hack of being a developer",

      "description": "Engineers, developers, programmers, what ever you want to call us, we have a different way of thinking and a different way of viewing the world. Sometimes this can be a curse but other times it's the ultimate life hack.\\r\\n\\r\\nCome with me on a journey where I turn everyday household tasks into automated magic. Where simple connectivity with a bit of know-how and developer mindset gives you productivity benefits in your personal life. Use data like never before to turn your house into a home.",

      "startsAt": "2025-02-22T12:15:00",

      "endsAt": "2025-02-22T12:35:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "d9ca0d47-27c9-426b-a3eb-af3dfebaaf5e"

      ],

      "categoryItems": [

        288558,

        288559,

        288566

      ],

      "questionAnswers": [],

      "roomId": 56964,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "774347",

      "title": "The Lost Art of good README documentation",

      "description": "READMEs are deceptively simple files. Often written as text files, they are often lightweight and regularly overlooked, but, make no mistake, they are their worth in gold.\\r\\n\\r\\nDeveloper projects, in fact, millions on them are built on a premise that some other developer will most likely stumble upon it, clone it, and use it to solve their own tech challenges. The first stumbling block usually arrives in the form of supporting documentation (or lack, thereof).\\r\\n\\r\\nHow can developers ensure that they use good documentation practices to create a simple and straight-forward file (the README) that will be the make-or-break moment for their project's usefulness? \\r\\n\\r\\nIn this short talk, a technical writer who has worked with a number of software teams, and helped draft and review good README files, will dust off the cobwebs off the lost art of good README documentation, and provide some tips on how to create docs that work for multiple audiences.",

      "startsAt": "2025-02-22T12:15:00",

      "endsAt": "2025-02-22T12:35:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "3603de64-855d-4bc0-a9c4-2044cee3e85e"

      ],

      "categoryItems": [

        288556,

        288560,

        288588,

        288591,

        288592

      ],

      "questionAnswers": [],

      "roomId": 53749,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "774981",

      "title": "A Lap Around an 8 Year Old Payments Company Codebase",

      "description": "It's so rare to see real world examples of actual code being run in actual businesses. Luckily as the founder of my business, I'm free to share as much as I can.\\r\\n\\r\\nAs an accounting integrated payments company, the movement of money and handling of financials are our key tasks.\\r\\n\\r\\nThis session will dive into the workings of some key parts of the system and it's architecture, while pointing out coding patterns and solutions that have stood the test of time.\\r\\n\\r\\nOne of the key values of our business is simplicity, and I hope this session can guide juniors down a good path, challenge the opinions of intermediates, and give seniors a fresh perspective (as well as a laugh I'm sure).",

      "startsAt": "2025-02-22T13:30:00",

      "endsAt": "2025-02-22T14:15:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "e443f768-c1a7-4593-9812-9afe8705f5ca"

      ],

      "categoryItems": [

        288557,

        288561,

        288564,

        288565,

        288568,

        288572,

        288577,

        288592

      ],

      "questionAnswers": [],

      "roomId": 53747,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "773735",

      "title": "Being consistently wrong",

      "description": "Estimates suck.\\r\\n\\r\\nWhat if I said you didn't have to play endless rounds of estimation poker? What if you just accepted you were wrong?\\r\\n\\r\\nWe spend hours trying to get our estimates right but we inevitably miss the mark resulting in stressed teams, stakeholder conflict and low-quality software. How do we make it so being wrong actually makes it right?\\r\\n\\r\\nCome find out how just one estimate, a little math, and accepting that we're always wrong changed our team. It turned us from a team that released twice in a year, to one that released ten times in as many months.\\r\\n\\r\\nYou'll leave this session with actionable advice on how your team can say goodbye to planning poker, and how you can give accurate deadlines, all whilst still being wrong. We'll see the positive impacts these techniques can have on your team, your culture and the software you build.",

      "startsAt": "2025-02-22T13:30:00",

      "endsAt": "2025-02-22T14:15:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "204f4c71-4c65-45e2-ab33-ec52ef0e5fcb"

      ],

      "categoryItems": [

        288557,

        288560,

        288562,

        288581,

        288589

      ],

      "questionAnswers": [],

      "roomId": 53748,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "750368",

      "title": "Burnout, Masking and Energy Management for Neurodivergent IT professionals",

      "description": "I will dive into the struggles of masking, burnout and fatigue especially in high demand industries such as IT. I will discuss coping strategies, self care, and finding balance that may not be designed for neurodivergent people. I will weave in my real life personal story and insights that are informative, deeply relatable and inspiring. I will provide actional insights from my own experience living with the rest of the forgotten generation of unidentified neurodivergent women.",

      "startsAt": "2025-02-22T13:30:00",

      "endsAt": "2025-02-22T14:15:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "fad19046-a162-461d-a057-17d0ad7b8f8f"

      ],

      "categoryItems": [

        288558,

        288559,

        288562,

        288569,

        288581,

        288588,

        288589

      ],

      "questionAnswers": [],

      "roomId": 56964,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "768907",

      "title": "Performance, Profiling and Optimisation",

      "description": "A slow app sucks. Figuring out what's slow and then fixing it can be difficult, time consuming and error prone. Fortunately you don't need to be a genius or super experienced to make your app go a lot faster!\\r\\n\\r\\nIn this talk I'll run through:\\r\\n\\r\\n* Tools that I've found most useful for finding performance issues - visual studio's profiler, perfmon, perfview, benchmark.net and nbomber \\r\\n\\r\\n* Techniques for fixing your performance problems\\r\\n\\r\\n* How to avoid the biggest pitfalls and red herrings\\r\\n\\r\\n* How to prove that you've definitely made a difference\\r\\n\\r\\n",

      "startsAt": "2025-02-22T13:30:00",

      "endsAt": "2025-02-22T14:15:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "0c849af8-f449-4823-a942-d8f749cbfa6b"

      ],

      "categoryItems": [

        288557,

        288560,

        288590,

        288591

      ],

      "questionAnswers": [],

      "roomId": 53749,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "769785",

      "title": "Hands on Accessibility testing with your browser",

      "description": "Do you care about making your site more accessible but don't know where to start? Have you tried to read the WCAG accessiblity guidelines or use a screen reader but got lost? \\r\\n\\r\\nIf you want to start you accessiblity journey here or brush up on some techniques then join me in this hands on workshop.\\r\\n\\r\\nI will show you some easy to access and use accessibility tooling from the browser. Give you some real experience in assessing a website for accessibility thereby making you more comfortable with the guidelines and standards in an easy to understand and practical way.",

      "startsAt": "2025-02-22T13:30:00",

      "endsAt": "2025-02-22T15:15:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "8972a33f-1f73-42fa-a20b-322a22de4a96"

      ],

      "categoryItems": [

        296992,

        288559,

        288575,

        288577,

        288591,

        288592

      ],

      "questionAnswers": [],

      "roomId": 56965,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "744998",

      "title": "Service Oriented Architecture - Slice and Dice",

      "description": "\\"We have microservices!\\" they say. But when we sit down and discuss, the question often becomes: \\"Is it though?”. This talk aims to clarify the distinction between Service-Oriented Architecture (SOA) and microservices, emphasising that microservices are an implementation style within the broader SOA paradigm.\\r\\n\\r\\nWe will take a step back to explore the foundational concepts of SOA, then dive into microservices, domain APIs, and experience APIs. By understanding these core elements, we can better align architectural approaches with the specific needs of your organisation.\\r\\n\\r\\nThis presentation will delve into the \\"slicing and dicing\\" of SOA, offering a comprehensive view of how to assess and implement these architectures effectively. ",

      "startsAt": "2025-02-22T14:30:00",

      "endsAt": "2025-02-22T15:15:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "55077c9c-af4b-4d71-b17a-39609ea1e534"

      ],

      "categoryItems": [

        288557,

        288560,

        288565,

        288583

      ],

      "questionAnswers": [],

      "roomId": 53747,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "761847",

      "title": "Git Blame or Team Blame? The Tech Career Crisis",

      "description": "In the tech world, few career decisions create more existential dread than the one where you must choose between becoming a Staff Engineer or an Engineering Manager. It’s a crossroads that feels akin to deciding between two different operating systems—one promises sleek, technical prowess, while the other gives you...meetings. Lots of meetings. This talk will unpack the mental gymnastics that go into making this decision: do you stay deeply technical, solving complex architectural puzzles and pushing the boundaries of innovation as a Staff Engineer? Or do you venture into the wild world of managing people, where you can no longer \\"git blame\\" your teammates, but instead must inspire and lead them?\\r\\n\\r\\nOn the one hand, as a Staff Engineer, you’ll be the go-to expert, keeping your hands on the keyboard and getting that dopamine hit from solving tough problems. On the other hand, the Engineering Manager role lets you grow teams, mentor juniors, and, yes, become intimately familiar with the nuances of calendar scheduling. But is the loss of direct technical involvement worth the gain of team-building satisfaction? In this light-hearted yet insightful session, we’ll explore the perks, pitfalls, and politics of both paths.\\r\\n\\r\\nBy the end, you'll leave with a clearer sense of what suits your personality and career aspirations better—a Staff Engineer keeping the codebase clean, or an Engineering Manager keeping the codebase creators sane. Whichever path you choose, remember: both are essential to the company, and the end of the day its your decision.",

      "startsAt": "2025-02-22T14:30:00",

      "endsAt": "2025-02-22T15:15:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "1af82ba8-b72e-4e97-ac0a-2dcbc2d1a390"

      ],

      "categoryItems": [

        288557,

        288559,

        288569,

        288581,

        288589

      ],

      "questionAnswers": [],

      "roomId": 53748,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "774675",

      "title": "On The Shoulders Of Giants — A Look At Modern Web Development",

      "description": "It’s in our nature to get used to things that are constantly around us and start taking them for granted. But I think it’s also healthy to take a step back every now and then to reflect and appreciate all those things around us, in general, but also specifically as software engineers.\\r\\n\\r\\nSo, let’s go on that journey together and look at some of the most influential milestones in the evolution of web development. How did they shape the path to modern development as we know it, and what might the future bring next?",

      "startsAt": "2025-02-22T14:30:00",

      "endsAt": "2025-02-22T15:15:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "ad1ba922-e743-4c65-9068-385effed9e01"

      ],

      "categoryItems": [

        288557,

        288559,

        288592

      ],

      "questionAnswers": [],

      "roomId": 56964,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "760229",

      "title": "Unlocking Hidden Efficiency: Seamless Solutions with TDD You Didn't Know You Needed",

      "description": "Test Driven Development (TDD) is largely being dismissed by large swaths of developers, and in some cases, it's applied without a clear understanding of when and how to use its varying styles effectively. In this talk I will go into the origins TDD and how you can fully leverage its powers become a better developer. \\r\\n\\r\\nWith one (or maybe a few) simple tricks you can completely revolutionise how you write code and at the same time unlock the ability to split up tickets that normally could take you 3 days or more into several smaller ones which can be worked on in parallel, each only taking only hours to complete. \u2028\u2028First I will go over the two main approaches to TDD being the Detroit School and the London School, from there I will go over each approaches primary strengths and weaknesses. \\r\\n\\r\\nFinally we explore a more detailed deep dive into how one of these approaches can be fully leveraged inside of C# to revolutionise not only how you write your code but also how you write your tickets.\\r\\n\\r\\nIf you’ve never tried TDD or found that it wasn’t right for you or your team, then I cannot wait to give you some insights into how TDD revolutionised my coding life.\\r\\n\\r\\nIf you’re already rockin’ TDD this talk will give you a deeper understanding of the history of how TDD first came to be and  and might even help unlock entire different approaches to how not only you write your tests but how you approach software as a whole.\\r\\n\\r\\n#DDDMelbourne? More like #TDDMelbourne!",

      "startsAt": "2025-02-22T14:30:00",

      "endsAt": "2025-02-22T15:15:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "f2283307-03ed-4bb7-a611-2f9a853bce98"

      ],

      "categoryItems": [

        288558,

        288559,

        288562,

        288565,

        288568,

        288590

      ],

      "questionAnswers": [],

      "roomId": 53749,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "775123",

      "title": "Dungeons and…Developers? Building skills in tech teams with table top role playing games",

      "description": "Finding new ways for your team to develop \\"core skills\\"—communication, problem-solving, teamwork, and leadership—can be tough. Traditional activities often feel stale, but what if we could make skill-building fun and impactful? \\r\\n\\r\\nIn this session, we introduce ‘Ultimate Tech Team’, a tabletop role-playing game (TTRPG) designed specifically for tech teams. Inspired by games like Dungeons & Dragons, this TTRPG creates a playful, immersive environment where tech professionals can develop core skills through engaging gameplay. Instead of awkward role-playing scenarios, ‘Ultimate Tech Team’ allows participants to use their imagination, work together, and roll some dice as they navigate challenges set in a “make-believe” company.\\r\\n\\r\\nWe’ll explore research-backed benefits of TTRPGs—like enhanced collaboration and critical thinking—along with real-world insights on their effectiveness in team settings. Volunteers from the audience will also join a live demonstration, tackling an interactive scenario chosen by audience vote, to show firsthand how TTRPG mechanics help players solve problems and build core skills.\\r\\n\\r\\nAttendees will leave with a new approach to team-building, practical tips, and example scenarios to bring back to their own teams—no prior TTRPG experience required! Whether you’re a manager or an individual contributor, join us to see how imagination and a few dice rolls can boost your team’s dynamics.",

      "startsAt": "2025-02-22T15:45:00",

      "endsAt": "2025-02-22T16:30:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "1a52d15a-4015-4169-8d86-51a6870d53a0"

      ],

      "categoryItems": [

        288557,

        288559,

        288562,

        288581,

        288588,

        288589

      ],

      "questionAnswers": [],

      "roomId": 53747,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "775610",

      "title": "How to sabotage an internal product",

      "description": "Most larger tech companies have successful home-grown platform products. Things like front-end boilerplates, one-click environment builders, data generators, and design systems. You might be working on one of them!\\r\\n\\r\\nOnce they’re established, these tools get a lot of use. They have off-the-charts ROI. People can no longer code without them! They’re so ubiquitous that everyone in the company has an opinion about them. Team members behind those tools become subject-matter experts and highly valued.\\r\\n\\r\\nLet’s play a corporate spy, and explore ways to take down these beloved tools. \\r\\nWhat could contribute to their early demise?\\r\\nWhat could get in the way of the teams working on them?\\r\\n\\r\\nKnowing how a spy would act, will help us build healthier and more resilient platform products.",

      "startsAt": "2025-02-22T15:45:00",

      "endsAt": "2025-02-22T16:30:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "212d0607-284f-4d7e-9e84-7a8f1d6e28bf"

      ],

      "categoryItems": [

        288557,

        288561,

        288569,

        288573,

        288576,

        288577,

        288581,

        288585,

        288588,

        288589,

        288591

      ],

      "questionAnswers": [],

      "roomId": 53748,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "775770",

      "title": "Decisions, Risk, and Reversibility: Strategic Decision-Making for Tech Leaders and Developers",

      "description": "Not all decisions are created equal, and in tech, knowing when a decision is reversible can mean the difference between rapid innovation and avoidable setbacks.\\r\\n\\r\\nJoin us to explore the principles of ‘one-way’ and ‘two-way’ door decisions, and learn how to apply these insights to strategic tech choices.\\r\\n\\r\\nWhether it’s selecting a cloud provider, defining a tech stack, or developing agile workflows, this talk will equip you with techniques to assess risks, enhance adaptability, and foster a culture that balances stability with agility.",

      "startsAt": "2025-02-22T15:45:00",

      "endsAt": "2025-02-22T16:30:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "81af0915-885c-4534-9169-0515216da650"

      ],

      "categoryItems": [

        288557,

        288560,

        288565,

        288593,

        288567,

        288572,

        288581

      ],

      "questionAnswers": [],

      "roomId": 56964,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "774651",

      "title": "Why Your Projects Are Failing Before They Start - The Discovery Crisis",

      "description": "Why do so many tech projects fail despite talented teams and big budgets? The answer often lies in poor discovery. Drawing from real experience leading major digital transformation projects, I explain why discovery is the most crucial phase - yet most misunderstood - part of any project. Through practical case studies and real project examples, learn how to transform your discovery process from a checkbox exercise into a genuine foundation for project success.\\r\\n\\r\\nYou'll learn:\\r\\n\\r\\n- Common discovery phase failures that doom projects from day one\\r\\n- How to identify and map hidden requirements that typically surface too late\\r\\n- Real examples of projects saved (and lost) during discovery\\r\\n- Practical frameworks for running effective discovery sessions\\r\\n- Methods to get genuine stakeholder engagement, not just nodding heads\\r\\n- Ways to translate business problems into technical requirements without losing meaning",

      "startsAt": "2025-02-22T15:45:00",

      "endsAt": "2025-02-22T16:30:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "5f154c26-fb2b-4892-bde2-308a63a33d80"

      ],

      "categoryItems": [

        288557,

        288560,

        288565,

        288575,

        288581,

        288588,

        288589

      ],

      "questionAnswers": [],

      "roomId": 53749,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": true,

      "isConfirmed": true

    },

    {

      "id": "835658",

      "title": "Coding Like it's 2005",

      "description": "In 2005, I got my first full-time programming job. Checks notes—wow, that was 20 years ago (or at least 10, depending on your grasp of math). It was a glorious time of ASP.NET Web Forms, the fiery remains of the browser wars, and JavaScript barely holding itself together.\\r\\n\\r\\nTo celebrate, I’m throwing caution, modern tooling, and my sanity to the wind. Let’s build something using only the tools of the time—no AI copilots, no sleek IDEs, and absolutely no frameworks with names like “Blazor” or “Vue.”\\r\\n\\r\\nWill we triumph and ship a masterpiece, or will it devolve into me yelling at an uncooperative browser and weeping into a pile of printouts? Will the demo gods show mercy, or will they laugh in my face? Who knows! But one thing’s for sure: we’ll learn something about how far we’ve come—and maybe even appreciate the madness that got us here.",

      "startsAt": "2025-02-22T16:45:00",

      "endsAt": "2025-02-22T17:15:00",

      "isServiceSession": false,

      "isPlenumSession": false,

      "speakers": [

        "9abda5b3-cde8-40aa-aa4c-933857e65ae6"

      ],

      "categoryItems": [],

      "questionAnswers": [],

      "roomId": 53747,

      "liveUrl": null,

      "recordingUrl": null,

      "status": "Accepted",

      "isInformed": false,

      "isConfirmed": false

    }

  ],

  "speakers": [

    {

      "id": "9abda5b3-cde8-40aa-aa4c-933857e65ae6",

      "firstName": "Aaron",

      "lastName": "Powell",

      "bio": "Aaron is a Developer Advocate at Microsoft, focusing on .NET and Azure. Having spent 20 years doing web development he's seen it all, from browser wars, the rise of AJAX and the fall of 20 JavaScript frameworks (and that was just yesterday!). Always tinkering with something new he explores crazy ideas like writing your own implementation of numbers in .NET, creating IoC in JavaScript or implementing tic-tac-toe using git commits.",

      "tagLine": "I like long walks on the beach talking about .NET",

      "profilePicture": "https://sessionize.com/image/7d03-400o400o1-4fwprRkYgUPqavbbQY1XUz.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/slace",

          "linkType": "Twitter"

        },

        {

          "title": "Company Website",

          "url": "https://www.aaron-powell.com",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        835658

      ],

      "fullName": "Aaron Powell",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "e443f768-c1a7-4593-9812-9afe8705f5ca",

      "firstName": "Ben",

      "lastName": "Cull",

      "bio": "Ben Cull has left the comfortable consultant lifestyle at SSW Australia for the untamed mountains and treacherous valleys of the startup world with his payments platform, Pinch Payments.\\r\\n\\r\\nHe has extensive experience developing enterprise web solutions, but is now free to apply his efforts to the bleeding edge of today's technologies. He wrestles with Alphas, fights with betas, and reminisces with RTMs so that you don't have to. You can find him talking at conferences around the world about his favourite topics: Payments, Web, and Beer.\\r\\n\\r\\nOh boy the beer! If you get caught anywhere near him, you'll definitely get into a discussion about either beer or brewing :)",

      "tagLine": "Co-Founder - Pinch Payments",

      "profilePicture": "https://sessionize.com/image/dc64-400o400o1-pg4ddYNwPKnLjryFony9iu.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/BenWhoLikesBeer",

          "linkType": "Twitter"

        }

      ],

      "sessions": [

        774981

      ],

      "fullName": "Ben Cull",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "8341c431-b01d-4208-83ba-0e50d141a346",

      "firstName": "Bryden",

      "lastName": "Oliver",

      "bio": "Bryden is a Solution Architect with over 25 years professional experience. He has a wealth of knowledge from a diverse range of areas but with particular focus on database, web services, Microsoft Azure and SaaS based solutions. He has an enormous amount of experience working with developers on database performance. He's had dealings with customers ranging from the world's largest companies right through to small business. He has a strong understanding of how software will deliver business value to his customers.",

      "tagLine": "Bryden Oliver - SSW Cloud Solution Architect",

      "profilePicture": "https://sessionize.com/image/6331-400o400o1-a7Mq8zuh64snwnRmUMVper.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/brydenoliver",

          "linkType": "Twitter"

        },

        {

          "title": "Company Website",

          "url": "https://atlassian.com",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        747576

      ],

      "fullName": "Bryden Oliver",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "3f01a9fa-4c71-4efe-871f-8e0ced1471d0",

      "firstName": "Callum",

      "lastName": "Whyte",

      "bio": "Callum Whyte is a x5 Microsoft MVP and x7 Umbraco MVP specialising in building robust scalable solutions on Azure and the .NET stack, as well as websites with the open-source Umbraco CMS.\\r\\n\\r\\nAway from his desk you can find him organising community events; from local meetups and hackathons, to global conferences and roadshows. He’s an active contributor to open source projects, a regular speaker at events all over the world, as well as co-host of a weekly YouTube series “UmbraCoffee”!",

      "tagLine": ".NET Developer, Microsoft MVP",

      "profilePicture": "https://sessionize.com/image/9c36-400o400o1-UVs9qJnM6fRNiA7Xc8wBpa.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/callumbwhyte",

          "linkType": "Twitter"

        }

      ],

      "sessions": [

        775614

      ],

      "fullName": "Callum Whyte",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "7ad6fd74-58ec-4fbd-a785-4d635ac41d89",

      "firstName": "Chris",

      "lastName": "Simon",

      "bio": "Chris is a technology coach and advisor helping technology teams drive business success.  He has a particular focus on helping startups realise their vision and new CTOs flourish in their roles. He also supports executives & boards with strategic technology advice, and engineering teams with training, mentoring and consulting in architecture, quality, domain-driven design and test driven development.\\r\\n\\r\\nHe is a regular meetup & conference speaker (https://chrissimon.au/speaking/) and to support teams using Domain-Driven Design, he recently launched https://contextive.tech & co-founded the DDD Australia meetup.\\r\\n\\r\\nHe is the technical co-founder of https://www.inloop.com.au, home of Australian Fintech success stories https://www.flexischools.com.au and https://www.lanternpay.com (recently acquired by NAB).",

      "tagLine": "Technology Coach and Advisor",

      "profilePicture": "https://sessionize.com/image/2b9a-400o400o1-PzM2de9ivxkaebkAs4n5rK.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/ChrisSimonAu",

          "linkType": "Twitter"

        },

        {

          "title": "Company Website",

          "url": "https://chrissimon.au",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        774369

      ],

      "fullName": "Chris Simon",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "d9ca0d47-27c9-426b-a3eb-af3dfebaaf5e",

      "firstName": "Damian",

      "lastName": "Karzon",

      "bio": "With years of experience as a developer and running development teams, Damian manages the Developer Program at Pinch Payments.",

      "tagLine": "Developer Advocate @ Pinch Payments",

      "profilePicture": "https://sessionize.com/image/25d4-400o400o1-UaRKf8UwCD8udNS5PJS75U.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/dkarzon",

          "linkType": "Twitter"

        },

        {

          "title": "Company Website",

          "url": "https://getpinch.com.au",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        774545

      ],

      "fullName": "Damian Karzon",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "fad19046-a162-461d-a057-17d0ad7b8f8f",

      "firstName": "Ellie",

      "lastName": "McGowan",

      "bio": "Ellie McGowan is an experienced Scrum Master with a passion for empowering neurodivergent individuals in the tech industry. A late-diagnosed autistic and ADHD professional, Ellie brings a unique perspective to agile practices, combining her deep understanding of neurodiversity with years of coaching expertise. She is a strong advocate for creating inclusive, supportive environments where neurodivergent teams can thrive. With a personal journey shaped by the challenges of burnout, misdiagnosis, and resilience, Ellie's talks offer actionable insights for leaders and organisations aiming to foster innovation through diversity.",

      "tagLine": "Ellie McGowan, Championing Neurodiversity and Agility in Tech",

      "profilePicture": "https://sessionize.com/image/9622-400o400o1-hi5P1aZJSrqtHYCBDvmGpG.jpg",

      "isTopSpeaker": false,

      "links": [],

      "sessions": [

        750368

      ],

      "fullName": "Ellie McGowan",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "a1673eba-b85b-402c-91e7-ef3f4f781c20",

      "firstName": "Emily",

      "lastName": "Conaghan",

      "bio": "Emily sits in open waters between people and technology. After graduating with a Bachelor in Human Resource Management, she's slowly been making her way closer and closer to technology with the help of a previous life as a Technical Recruiter and the SheCodes Australia Plus Program.\\r\\n\\r\\nNow, Emily runs Auto & General's Technology Academy where she helps non-technical folk become the next generation of software developers. \\r\\n\\r\\nIn her free time, Emily can be found over-committing to how many book clubs one can realistically join and nurturing a dill plant that's teetering on the edge of a delicious potato salad. ",

      "tagLine": "Technology Academy Lead @ Auto & General",

      "profilePicture": "https://sessionize.com/image/eb48-400o400o1-LEAVyNCcWrvMSzxtPdAqbV.jpeg",

      "isTopSpeaker": false,

      "links": [],

      "sessions": [

        745344

      ],

      "fullName": "Emily Conaghan",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "55077c9c-af4b-4d71-b17a-39609ea1e534",

      "firstName": "Garima",

      "lastName": "Singh",

      "bio": "I am currently an Engineering Manager at Bunnings, Melbourne, where I oversee and drive the success of engineering teams responsible for the retail and trade websites. My journey in the tech industry has been a dynamic one, marked by a rich history of contributing to notable organisations.\\r\\n\\r\\nPrior to my current role, I made significant impacts at industry giants such as ThoughtWorks, JP Morgan, and SlideShare. Throughout my career, I've played pivotal roles as a Lead Design Authority and a hands-on Tech Lead. These roles have allowed me to cultivate a deep-rooted understanding of how to lead product teams in the creation and delivery of top-tier software solutions.\\r\\n\\r\\nMy professional strengths extend to the realm of architecting cloud-native applications, crafting sophisticated distributed systems, and implementing automated release pipelines. These technical proficiencies have been instrumental in my career and have enabled me to drive innovation and efficiency within the organisations I've served.\\r\\n\\r\\nMy professional journey has seen me take on a multitude of roles, each of which has enriched my perspective on software development. I've worn hats ranging from Consultant to Application Developer, Agile Coach, Business Analyst, and Infrastructure Developer.",

      "tagLine": "Engineering Manager, Bunnings",

      "profilePicture": "https://sessionize.com/image/91fb-400o400o1-fQz7USqBVknevcv6HVLupG.png",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/ssgarima",

          "linkType": "Twitter"

        },

        {

          "title": "Company Website",

          "url": "https://garimasingh.dev",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        744998

      ],

      "fullName": "Garima Singh",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "6a64a38a-7fc5-430b-bd85-ff374e1db264",

      "firstName": "Ian",

      "lastName": "Newmarch",

      "bio": "Tech Advisory at Twana",

      "tagLine": "Tech Advisor @ TWANA",

      "profilePicture": "https://sessionize.com/image/fb74-400o400o1-JAQG9W3MbkB4KTCwVnMsFW.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "Company Website",

          "url": "https://www.twana.com.au/",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        774291

      ],

      "fullName": "Ian Newmarch",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "406d30d0-9757-47d9-94d7-667e11ac803b",

      "firstName": "Isuru",

      "lastName": "Rajapakse",

      "bio": "Isuru Rajapakse is an Android Developer at Motorola Solutions based in Melbourne, Australia - specializing in creating mobility solutions for public safety. With over 8 years of experience in mobile application and web development - Isuru has won several awards for his software projects, including the winner of WSA-mobile in 2015, Oracle's Thinkquest in 2011, APICTA in 2012, and many others.",

      "tagLine": "Motorola Solutions, Android Developer",

      "profilePicture": "https://sessionize.com/image/e893-400o400o1-Vx8DafNU5pMjKBc39WZDr2.png",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/IsuruKusumal",

          "linkType": "Twitter"

        },

        {

          "title": "Company Website",

          "url": "https://www.motorolasolutions.com/en_xa/products/public-sector-applications/public-safety-applications/mobile-data-applications/pscore.html",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        775599

      ],

      "fullName": "Isuru Rajapakse",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "46af1dd7-fc1d-477d-8406-99a6403f59b5",

      "firstName": "Janna",

      "lastName": "Malikova",

      "bio": "Janna is software developer and frontend performance specialist at Tomato Elephant Studio based in Brisbane, Australia. She makes web applications run fast and shares her knowledge with the world at local meetups and conferences. \\r\\nShe is a co-maintainer of Bootstrap 5 theme for Drupal. She is an avid volunteer and organiser of local Drupal events.",

      "tagLine": "Drupal builder at Tomato Elephant Studio",

      "profilePicture": "https://sessionize.com/image/21c2-400o400o1-DLC68KWECWAj5Qufx4YHQS.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "Company Website",

          "url": "https://www.tomato-elephant-studio.com/",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        776199

      ],

      "fullName": "Janna Malikova",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "1af82ba8-b72e-4e97-ac0a-2dcbc2d1a390",

      "firstName": "Jaswanth",

      "lastName": "Manigundan",

      "bio": "I’m Jas from Melbourne. I currently work at Culture Amp as an Engineering Manager for the Sales Engineering Team. I have previously worked across native mobile and web apps in Engineering and Automation based roles. \\r\\n\\r\\nI have worked in the mobile app development space for almost a decade, where I saw mobile devices and operating systems get better and better by the day. My fascination towards mobile devices made me start my professional career as a mobile app developer. But my quest to build better apps and write code that is much more testable lead me to transition into a test automation engineer specialising in mobile. \\r\\n\\r\\nSince then, I’ve gradually explored a wide variety of test automation frameworks and have consulted for some of the leading mobile app teams in Australia to build efficient test automation suites for mobile apps. \\r\\n\\r\\nI have spoken about my mobile test automation journey in a variety of testing conferences like the Ministry of Testing’s Testbash and Saucelabs’ Saucecon. \\r\\n\\r\\nI now work at Culture Amp as an Engineering Manager after working alongside the legendary Anne-Marie Charrett helping build a passionate quality enablement team.",

      "tagLine": "Engineering Manager at Culture Amp",

      "profilePicture": "https://sessionize.com/image/dcc7-400o400o1-RUVeYtMZmvRNaf7Bkhi78s.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://www.twitter.com/jaswanth_m",

          "linkType": "Twitter"

        },

        {

          "title": "Company Website",

          "url": "https://www.jaswanth.xyz",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        761847

      ],

      "fullName": "Jaswanth Manigundan",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "e3398fd3-e487-494b-a27f-f19e4faa7fe9",

      "firstName": "Joshua",

      "lastName": "Braines-Mead",

      "bio": "Josh and Will are from Southpaw, a digital design and development agency within the Breakthrough Innovation Group (BIG) offering an unorthodox approach to the web for a competitive advantage.\\r\\n\\r\\nJosh is a digital designer with 6+ years experience creating engaging online experiences. He’s passionate about strengthening design-dev relationships, and has previously taught both UI design and frontend development at Monash University.\\r\\n\\r\\nWill is a frontend developer who loves the challenge of translating design requirements into usable UI. He’s worked on site builds of a variety of sizes over his career, while his previous 5 years as a copywriter means he understands the importance of cross-functional communication.",

      "tagLine": "Digital Designer @ Southpaw",

      "profilePicture": "https://sessionize.com/image/6bdf-400o400o1-a3M3EaNKDo616X6cPZ7H7d.jpg",

      "isTopSpeaker": false,

      "links": [],

      "sessions": [

        776269

      ],

      "fullName": "Joshua Braines-Mead",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "ad1ba922-e743-4c65-9068-385effed9e01",

      "firstName": "Julian",

      "lastName": "Burr",

      "bio": "Senior Developer from Germany with over 15 years of experience building web apps and leading frontend teams, currently living and working down under in Australia. Pragmatic perfectionist, always looking for opportunities to learn and grow.",

      "tagLine": "Senior Developer @ Vouch",

      "profilePicture": "https://sessionize.com/image/48ee-400o400o1-U9rFsydCtoFJnofZkEGXks.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/jburr90",

          "linkType": "Twitter"

        },

        {

          "title": "Company Website",

          "url": "https://www.askable.com/",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        774675

      ],

      "fullName": "Julian Burr",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "5f154c26-fb2b-4892-bde2-308a63a33d80",

      "firstName": "Julian",

      "lastName": "Wallis",

      "bio": "Julian Wallis is the founder and CEO of Intuji, a global Customer Experience Transformation Partner specialising in helping B2B companies innovate, optimise, and scale through technology. A self-taught technologist who began his journey at age 12 building websites, Julian founded what would become Intuji (originally WEBO Designs) at just 15 years old.\\r\\n\\r\\nAs the visionary behind the 4DCX Framework®, Julian has developed an innovative methodology for creating winning products and digital experiences. Under his leadership, Intuji has evolved to become a leader in customer experience and digital transformation, offering services across web development, software engineering, artificial intelligence, and more.\\r\\n\\r\\nJulian is also the host of \\"Pulse by Intuji,\\" a podcast exploring the intersection of strategy, data, commerce, and technology. The show features in-depth conversations with industry leaders about enhancing brand and customer experience to scale effectively.\\r\\n\\r\\nCurrently serving as both CEO and CRO of Intuji, Julian remains hands-on in fostering an environment where team members are empowered to contribute their unique insights and skills.\\r\\n\\r\\nKnown for his direct and authentic communication style, Julian frequently shares insights about customer experience, technological innovation, and entrepreneurship. His perspective is particularly valuable as someone who has grown from a teenage entrepreneur to a successful tech CEO, offering a unique blend of technical expertise and practical business acumen.",

      "tagLine": "CEO @ Intuji",

      "profilePicture": "https://sessionize.com/image/43ee-400o400o1-TTegLoPEybbdtgxeGW5r5J.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "Company Website",

          "url": "https://intuji.com/",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        774651

      ],

      "fullName": "Julian Wallis",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "1a52d15a-4015-4169-8d86-51a6870d53a0",

      "firstName": "Kirsty",

      "lastName": "McDonald",

      "bio": "Kirsty brings a love of learning and continuous improvement into every team she works with, as well as a drive to see individuals within those teams flourish.\\r\\n\\r\\nWith a decade-long journey in the technology sector, she has learned there is never a shortage of opportunities for people who love to solve tricky problems. Her core expertise resides in platform and cloud engineering, where she engineers resilient, reliable platforms in cloud environments.\\r\\n\\r\\nKirsty believes a well-rounded skill set is the key maker of a great technologist, having worked in many roles: tech strategy, iteration manager, quality analyst, business analyst and most recently for a couple of years as a software developer. ",

      "tagLine": "Senior Platform Engineer - Up Bank / Ferocia",

      "profilePicture": "https://sessionize.com/image/a18e-400o400o1-GsebNDEG3sNJBfpQQUWT9C.jpg",

      "isTopSpeaker": false,

      "links": [],

      "sessions": [

        775123

      ],

      "fullName": "Kirsty McDonald",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "0c849af8-f449-4823-a942-d8f749cbfa6b",

      "firstName": "Lachlan",

      "lastName": "Barclay",

      "bio": "Professional software developer of 25 years, currently working at Rome2rio. I have worked for Mercer, CSIRO, Telstra, Fosters, Sensis, Intrepid Travel, CBM, Defence, Crown Casino & HP. I love 한글 but I'm really bad at it. I've written articles for oWasp, volunteered at Rhok, been the guitarist in Toehider and played guitar, bass and drums many times at church. I've written mobile apps, built an Arduino MIDI foot pedal, released a few albums, been on TV, ascended nethack and got a Grand Master rank in tetris. I don't care what you say, I'm definitely not a nerd.",

      "tagLine": "Principal Software Engineer",

      "profilePicture": "https://sessionize.com/image/a7a2-400o400o1-f8-f449-4823-a942-d8f749cbfa6b.00ed6777-b593-4f27-9516-94f72002edb2.png",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/rocklan",

          "linkType": "Twitter"

        }

      ],

      "sessions": [

        768907

      ],

      "fullName": "Lachlan Barclay",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "f2283307-03ed-4bb7-a611-2f9a853bce98",

      "firstName": "Michael",

      "lastName": "Crook",

      "bio": "Michael is a fullstack developer with a passion for software architecture and functional programming. He aspires to use what he has learn throughout his career to help direct the future of how code is written and meet great people while he is at it.",

      "tagLine": "Senior Fullstack consultant ",

      "profilePicture": "https://sessionize.com/image/f417-400o400o1-NvFA9guMdP9qYFSGr9t35U.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/falconmick",

          "linkType": "Twitter"

        },

        {

          "title": "Company Website",

          "url": "https://www.mcrook.com/blog",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        760229

      ],

      "fullName": "Michael Crook",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "212d0607-284f-4d7e-9e84-7a8f1d6e28bf",

      "firstName": "Prae",

      "lastName": "Songprasit",

      "bio": "Prae is a UX Developer, on a mission to help people create more accessible and beloved web experiences.\\r\\n\\r\\nShe regularly speaks about crafting user interactions, accessibility, working with other disciplines, and growing front-end capabilities.\\r\\n\\r\\nPrae spends her free time on Kyudo (Japanese archery), and eating around town.\\r\\n",

      "tagLine": "UX Developer",

      "profilePicture": "https://sessionize.com/image/d2ce-400o400o1-NQFkBPTEBTsvELrgg3Ps8o.jpg",

      "isTopSpeaker": false,

      "links": [],

      "sessions": [

        775610

      ],

      "fullName": "Prae Songprasit",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "8972a33f-1f73-42fa-a20b-322a22de4a96",

      "firstName": "Rhiana",

      "lastName": "Heppenstall",

      "bio": "Rhiana has a background in educational psychology before switching to front end development. She then got introduced to accessiblity and hasn't looked back. Combining her knowledge of disabilities and love of technology she champions improvements to accessiblity wherever she goes, for as long as people will listen to her.\\r\\nBased in Melbourne when she isn't working she's going to the latest festival, museum or zoo with her two children.",

      "tagLine": "Frontend developer at 3pLearning",

      "profilePicture": "https://sessionize.com/image/d900-400o400o1-GEWxmki1f4HKEYmZEY6FLs.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "Company Website",

          "url": "https://www.3plearning.com/",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        769785

      ],

      "fullName": "Rhiana Heppenstall",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "81af0915-885c-4534-9169-0515216da650",

      "firstName": "Stephen",

      "lastName": "Sennett",

      "bio": "Stephen Sennett is a cloud technology leader, content creator, educator, and speaker. He has spent over a decade working in the industry in a variety of roles. He holds high-level certifications across multiple technologies, has been recognized as an AWS Community Builder, and authors technical content with A Cloud Guru (a Pluralsight company)",

      "tagLine": "Consultant, AWS Community Builder, Tech Content Creator",

      "profilePicture": "https://sessionize.com/image/fc42-400o400o1-DTA7znsVDhLUpJBfAUz1KS.jpg",

      "isTopSpeaker": false,

      "links": [],

      "sessions": [

        775770

      ],

      "fullName": "Stephen Sennett",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "f27081ee-8940-4e2e-a614-daba78ec79be",

      "firstName": "Sue",

      "lastName": "Keay",

      "bio": "Acknowledged as one of Queensland's most influential people, Dr Sue is an experienced leader with high credibility and respect in the digital domain. Dr Sue consults, advises and speaks on how organisations and individuals can embrace technological change. She is a partner at Future Work Group, a fellow of the Australian Academy of Technology and Engineering (ATSE), a member of the prestigious Kingston AI Group, Founder and Chair of Robotics Australia Group and an Adjunct Professor at QUT Centre for Robotics. Dr Sue holds a range of board and advisory roles in the robotics, AI and emerging technology space, including for Australia's National Robotics Strategy.\\r\\n\\r\\nAcclaimed by SME on their global list of 20 women making their mark in robotics and automation in 2021, as an outstanding contributor to the drone and robotics industry (2020) and as a Superstar of STEM by Science & Technology Australia, Dr Sue is an influential thought leader and champion of diversity. She is adept at leading technology-savvy enterprises that have integrity, prioritise people before profit and make impact; and passionate about meeting people, building connections and making things work better.",

      "tagLine": null,

      "profilePicture": "https://sessionize.com/image/578d-400o400o1-V8iqNmGAtzctumh45WQ4L7.jpg",

      "isTopSpeaker": false,

      "links": [],

      "sessions": [

        852916

      ],

      "fullName": "Sue Keay",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "3603de64-855d-4bc0-a9c4-2044cee3e85e",

      "firstName": "Swapnil",

      "lastName": "Ogale",

      "bio": "Swapnil has over 17 years of technical documentation experience across a range of industries in Australia and globally. He currently works as a Technical Writer with Amazon Web Services (AWS), documenting solutions for engineering teams. He initiated the Write the Docs community in Australia in 2016 and has been organising local meetups and the annual conference for the community.  \\r\\n \\r\\nSwapnil loves spending time reading books, travelling, trying out new food and organizing documentation events. Sometimes, he even manages to combine all of this in a single trip!\\r\\n \\r\\nWhile he is not doing any of that, he presents at technical meetups and conferences about various things around technical writing, and raising the profile of documentarians globally.",

      "tagLine": "Technical Writer, Amazon Web Services",

      "profilePicture": "https://sessionize.com/image/86d7-400o400o1-ML26oe7UrhpcoHeQKTaFBJ.png",

      "isTopSpeaker": false,

      "links": [],

      "sessions": [

        774347

      ],

      "fullName": "Swapnil Ogale",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "a74bf957-36fb-4dc6-87ee-41c5ace9671b",

      "firstName": "Thiago",

      "lastName": "Shimada Ramos",

      "bio": "I've been navigating the tech world for over a decade. My journey has taken me from Brazil to Japan and now Australia, exposing me to diverse perspectives and approaches to problem-solving.\\r\\nI'm fascinated by the intersection of strategy and technology. When I'm not immersed in Kubernetes and Cloud, you'll often find me playing Go or solving Rubik's cubes. My love for Go also sparks my interest in AI, especially the advancements made by AlphaGo.",

      "tagLine": "Cloud Native BizDevOps",

      "profilePicture": "https://sessionize.com/image/ec73-400o400o1-QcmV1KbNLQVCneMQPgjkFw.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "Company Website",

          "url": "https://www.linkedin.com/company/cloud-native-melbourne/",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        750339

      ],

      "fullName": "Thiago Shimada Ramos",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "204f4c71-4c65-45e2-ab33-ec52ef0e5fcb",

      "firstName": "Tom",

      "lastName": "Ridge",

      "bio": "Tom Ridge is a father of 4, an engineer, aspiring entrepreneur, and long time remote worker and leader. \\r\\n\\r\\nWhen he does find a scrap of time, he's known to run a D&D game or three.",

      "tagLine": "Staff engineer at Culture Amp",

      "profilePicture": "https://sessionize.com/image/2722-400o400o1-sTprAmPYUsF7oKEwHVNQyS.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/tjridge",

          "linkType": "Twitter"

        },

        {

          "title": "Company Website",

          "url": "https://www.cultureamp.com/",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        773735

      ],

      "fullName": "Tom Ridge",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "f98b9f73-2b19-4888-a522-c206b8c46db7",

      "firstName": "Tracy",

      "lastName": "Bongiorno",

      "bio": "Tracy Bongiorno is an experienced engineering leader passionate about building high-performing teams and creating enjoyable, intuitive software. With over 15 years of experience scaling engineering teams and products, she focuses on team culture, customer experience, continuous improvement, and automation. Tracy's expertise lies in team building, optimizing software delivery, and leveraging innovative technologies. Her commitment to collaborative and inclusive tech communities drives positive change and inspires innovation.",

      "tagLine": "CTO @ Mentorloop",

      "profilePicture": "https://sessionize.com/image/f388-400o400o1-J7zjMD8PrrCSHd5XxbYgvf.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "Company Website",

          "url": "https://mentorloop.com",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        776112

      ],

      "fullName": "Tracy Bongiorno",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "f5669dcb-e40d-435c-a9b9-45e05cdc1df7",

      "firstName": "Will",

      "lastName": "Robertson",

      "bio": "Will's been building frontend applications for three years. Before that, he worked as a copywriter so he knows a thing or two about naming variables.",

      "tagLine": "Junior Developer @ Southpaw",

      "profilePicture": "https://sessionize.com/image/8fdf-400o400o1-Z9bqRMs8iT7QhaFrDXcmU.jpg",

      "isTopSpeaker": false,

      "links": [],

      "sessions": [

        776269

      ],

      "fullName": "Will Robertson",

      "categoryItems": [],

      "questionAnswers": []

    },

    {

      "id": "a127e924-82ac-42df-8761-ecb106c8ef61",

      "firstName": "Yaser",

      "lastName": "Adel Mehraban",

      "bio": "Although it doesn’t look like it, Yaser is an almond croissant addict cleverly disguised as a successful web developer. Since it was relatively clear early on that it would be slightly more than difficult to make a living out of thin air and sitting in a café eating a croissant and drinking a cappuccino, he’s focused his energy on the web, which happily has proven itself to be a wonderful decision.\\r\\n\\r\\nApart from that, he has a hunger for public speaking, hence a number of talks in big conferences like NDC and Voxxed Days around the world under his belt.",

      "tagLine": "Lead front end engineer, speaker, technologist, blogger, almond croissant addict, nut not in that order.",

      "profilePicture": "https://sessionize.com/image/cce1-400o400o1-24-82ac-42df-8761-ecb106c8ef61.1a2e96ca-6232-431a-b552-9b8eb518416c.jpg",

      "isTopSpeaker": false,

      "links": [

        {

          "title": "X (Twitter)",

          "url": "https://twitter.com/yashints",

          "linkType": "Twitter"

        },

        {

          "title": "Company Website",

          "url": "https://innovategpt.com.au",

          "linkType": "Company_Website"

        }

      ],

      "sessions": [

        744515

      ],

      "fullName": "Yaser Adel Mehraban",

      "categoryItems": [],

      "questionAnswers": []

    }

  ],

  "questions": [],

  "categories": [

    {

      "id": 81155,

      "title": "Session format",

      "items": [

        {

          "id": 288556,

          "name": "20 minutes",

          "sort": 1

        },

        {

          "id": 288557,

          "name": "45 minutes",

          "sort": 2

        },

        {

          "id": 296992,

          "name": "Workshop (105 minutes)",

          "sort": 3

        },

        {

          "id": 288558,

          "name": "Either",

          "sort": 4

        }

      ],

      "sort": 0,

      "type": "session"

    },

    {

      "id": 81156,

      "title": "Level",

      "items": [

        {

          "id": 288559,

          "name": "No experience necessary",

          "sort": 1

        },

        {

          "id": 288560,

          "name": "Mostly intermediate",

          "sort": 2

        },

        {

          "id": 288561,

          "name": "Mostly advanced",

          "sort": 3

        }

      ],

      "sort": 1,

      "type": "session"

    },

    {

      "id": 81157,

      "title": "Tags",

      "items": [

        {

          "id": 288562,

          "name": "Agile",

          "sort": 1

        },

        {

          "id": 288563,

          "name": "AI",

          "sort": 2

        },

        {

          "id": 288564,

          "name": "APIs",

          "sort": 3

        },

        {

          "id": 288565,

          "name": "Architecture",

          "sort": 4

        },

        {

          "id": 288566,

          "name": "Automation",

          "sort": 5

        },

        {

          "id": 288593,

          "name": "AWS",

          "sort": 6

        },

        {

          "id": 288567,

          "name": "Azure",

          "sort": 7

        },

        {

          "id": 288568,

          "name": "Backend dev",

          "sort": 8

        },

        {

          "id": 288569,

          "name": "Career",

          "sort": 9

        },

        {

          "id": 288570,

          "name": "Chatbots",

          "sort": 10

        },

        {

          "id": 288571,

          "name": "Chef",

          "sort": 11

        },

        {

          "id": 288572,

          "name": "Cloud",

          "sort": 12

        },

        {

          "id": 288595,

          "name": "Containers",

          "sort": 13

        },

        {

          "id": 288573,

          "name": "Continuous delivery",

          "sort": 14

        },

        {

          "id": 288574,

          "name": "Data and analytics",

          "sort": 15

        },

        {

          "id": 288594,

          "name": "Data Engineering",

          "sort": 16

        },

        {

          "id": 288575,

          "name": "Design and UX",

          "sort": 17

        },

        {

          "id": 288576,

          "name": "DevOps",

          "sort": 18

        },

        {

          "id": 288577,

          "name": "Frontend dev",

          "sort": 19

        },

        {

          "id": 288578,

          "name": "Functional programming",

          "sort": 20

        },

        {

          "id": 288579,

          "name": "Infrastructure",

          "sort": 21

        },

        {

          "id": 288580,

          "name": "IoT",

          "sort": 22

        },

        {

          "id": 288581,

          "name": "Leadership",

          "sort": 23

        },

        {

          "id": 288582,

          "name": "Machine learning",

          "sort": 24

        },

        {

          "id": 288583,

          "name": "Microservices",

          "sort": 25

        },

        {

          "id": 288584,

          "name": "Mobile",

          "sort": 26

        },

        {

          "id": 288585,

          "name": "Puppet",

          "sort": 27

        },

        {

          "id": 288586,

          "name": "Security",

          "sort": 28

        },

        {

          "id": 288587,

          "name": "Serverless",

          "sort": 29

        },

        {

          "id": 288588,

          "name": "Professional/soft skills",

          "sort": 30

        },

        {

          "id": 288589,

          "name": "Teams",

          "sort": 31

        },

        {

          "id": 288590,

          "name": "Testing",

          "sort": 32

        },

        {

          "id": 288591,

          "name": "Tooling",

          "sort": 33

        },

        {

          "id": 288592,

          "name": "Web",

          "sort": 34

        }

      ],

      "sort": 2,

      "type": "session"

    }

  ],

  "rooms": [

    {

      "id": 53747,

      "name": "Main hall",

      "sort": -2

    },

    {

      "id": 53748,

      "name": "Swanston room",

      "sort": -1

    },

    {

      "id": 56964,

      "name": "Supper room",

      "sort": 1

    },

    {

      "id": 53749,

      "name": "Yarra room",

      "sort": 2

    },

    {

      "id": 56965,

      "name": "Hoddle room",

      "sort": 4

    }

  ]

}
`)

export {agenda};