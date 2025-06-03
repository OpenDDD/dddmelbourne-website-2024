import React from 'react'
import { NextPage } from 'next'
import parseJson from 'parse-json'
import { AgendaProvider } from '../../components/Agenda/AgendaContext'
import Conference from '../../config/conference'
import {
  StyledAgendaContainer,
  StyledAgendaRow, StyledAgendaRowList, StyledTrackHeader,
} from '../../components/Agenda/Agenda.styled'
import { AgendaTime } from '../../components/Agenda/AgendaTime'
import { AgendaSession } from '../../components/Agenda/AgendaSession'
import { set } from 'date-fns'
import { StyledAgendaPresenter } from '../../components/Agenda/AgendaSession.styled'
import { Agenda } from '../../components/Agenda/Agenda'
import { zonedTimeToUtc } from 'date-fns-tz'
import { Presenter, Session } from '../../config/types'

const agenda = parseJson(`
{
  "sessions": [
    {
      "id": "581840",
      "title": "Will AI Coding Assistants like GitHub CoPilot Make Me Irrelevant?",
      "description": "Many of us are worrying about AI coding assistants, and specifically GitHub CoPilot. Will they erase the need for our coding experience. And also, isn't it cheating? How will we show off our skills? These were also concerns for Julie, who has over 30 years of building software under her belt. But minds were changed, worries erased. Let's see together how AI can be your partner and sous chef, not your competition.",
      "startsAt": "2024-03-16T09:00:00",
      "endsAt": "2024-03-16T09:45:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "282a4701-f128-4b1d-bd67-da5d1f8b3eb0"
      ],
      "categoryItems": [
        206914,
        206917,
        206920,
        206926
      ],
      "questionAnswers": [],
      "roomId": 39398,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": false,
      "isConfirmed": false
    },
    {
      "id": "564855",
      "title": "Scaling a Monolith - What to expect if your product idea actually takes off",
      "description": "There are many aspects of software development that we don't often talk about and instead must be experienced. Once the product is viable, the growth stage poses new architectural challenges that we thought we saw coming but are often not properly prepared for. \\r\\n\\r\\nWe will dissect 3 common but different monolithic product architectures and the decisions that were made to take them to market and the discuss the reality that got in the way. \\r\\n\\r\\nThere are good reasons to avoid micro-services in startups, for those applying the more traditional approach I hope you will leave this session knowing what to expect and how to avoid the mistakes I made as you scale your applications.",
      "startsAt": "2024-03-16T10:15:00",
      "endsAt": "2024-03-16T11:00:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "552565f9-9182-45c2-9db6-eaf0f894b522"
      ],
      "categoryItems": [
        206914,
        206916,
        206921,
        206922,
        206929,
        206937
      ],
      "questionAnswers": [],
      "roomId": 39398,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "566071",
      "title": "GitOps - The best thing since DevOps, but what's missing?",
      "description": "Now that the DevOps hype cycle has reached the \\"Plateau of Productivity\\", a GitOps wave has come along to solve all the other problems that we didn't know we had in our CD pipelines. \\r\\n\\r\\nLets take a look at what GitOps really solves for us through a live walkthrough. We will discuss the questions it doesn't answer, and misconceptions that can sow confusion or result in teams bending over to create processes that perhaps aren't really necessary.",
      "startsAt": "2024-03-16T10:15:00",
      "endsAt": "2024-03-16T11:00:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "4142b780-8f1d-4acc-8a22-c87e8a19d933"
      ],
      "categoryItems": [
        206914,
        206916,
        206931,
        206934
      ],
      "questionAnswers": [],
      "roomId": 39399,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "537623",
      "title": "Your website does not need JavaScript",
      "description": "When we build a website these days, there’s a 110% chance that it’s got some form of JavaScript on it. Whether it’s a full framework, for animations, to trigger a popup or as a tracking script, JavaScript is all around us.\\r\\n\\r\\nBut what if I told you that you didn’t have to use JavaScript at all? Not even as a build process? Thanks to updates in browser technologies, there’s now a plethora of native browser features that allow building modern, functional websites, sans JavaScript.\\r\\n\\r\\nSo together, we’ll build out a *completely* static website, a collection of HTML and CSS files, no tracking, no scripting, no servers, no third-party resources. Let’s build a website the way we used to (but no marquees).",
      "startsAt": "2024-03-16T10:15:00",
      "endsAt": "2024-03-16T11:00:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "d387e75c-ed26-4dc6-8612-0f18abdfd9f5"
      ],
      "categoryItems": [
        206914,
        206916,
        206935
      ],
      "questionAnswers": [],
      "roomId": 39400,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "567126",
      "title": "One password to rule them all (for a few minutes)",
      "description": "Find out how One-Time-Passwords (OTPs) can be a game-changer for your user accounts. With recent data breaches making news in Australia, it's more crucial than ever to think beyond traditional passwords which could leave you vulnerable to data leaks.\\r\\n\\r\\nThis talk will give you insights into why OTPs can serve as a viable alternative to traditional passwords. It will also show you practical steps for crafting an OTP system from scratch, along with the significance of implementing security measures such as timeouts and maximum login attempts. You’ll also hear the lessons learned from real-world challenges faced during the OTP system's development.\\r\\n\\r\\nThis talk is designed with authentication newcomers, rather than industry veterans in mind.\\r\\n",
      "startsAt": "2024-03-16T10:15:00",
      "endsAt": "2024-03-16T11:00:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "ae6eb71c-517c-44e4-94dc-8d90f199ac80"
      ],
      "categoryItems": [
        206914,
        206916,
        206921,
        206925,
        206944
      ],
      "questionAnswers": [],
      "roomId": 42741,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "559141",
      "title": "Coding your Career: Navigating and Evolving your Career",
      "description": "In an ever-evolving landscape of technology and development, my mission is to empower developers to traverse their career journeys with clarity and purpose. This presentation aims to equip developers with the knowledge and tools they need to make well-informed decisions regarding their career paths. We'll delve into strategies for not only choosing the right direction but also for addressing and overcoming the common concerns and challenges that inevitably arise as developers progress in their careers, take on new positions, and face unfamiliar terrain. How often we ask or tell ourselves about \\"Are we hands-on enough?\\" or \\"The role may not allow me to code!\\".\\r\\n\\r\\nThroughout the talk, we will explore various aspects of career growth, including skill development, job transitions, and professional advancement. By sharing practical insights, and real-world experiences, attendees will gain the confidence and resilience needed to thrive in an ever-changing tech ecosystem. The aim is to empower developers to proactively shape their destinies, seize opportunities, and have the right conversations. Join us on this journey to master the art of navigating the developer's career landscape.",
      "startsAt": "2024-03-16T11:15:00",
      "endsAt": "2024-03-16T12:00:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "55077c9c-af4b-4d71-b17a-39609ea1e534"
      ],
      "categoryItems": [
        206914,
        206917,
        206926,
        206939,
        206946
      ],
      "questionAnswers": [],
      "roomId": 39398,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "555691",
      "title": "The way you write dotnet is about to fundamentally change",
      "description": "Over the last two releases of C# more and more functional paradigms have made their way into the language. We are now able to easily work with immutable data via records which avoid entire classes of bug types through immutable guarantees. Following down the functional path, we also got pattern matching and most critically, pattern matching with switch expressions.\\r\\n\\r\\nAll of these changes that the language has seen over the last few years have been growing to a point of critical mass in which all that is needed is a final push for a fundamental re-working on how every day C# is written. I believe that Discriminating Unions is the final piece to this equation and when it becomes a part of the language, an entirely new way of writing API's and consuming them will take over the industry. With this one feature we will finally be able to rid ourselves of code that compiles but fails due to unhandled edge cases and start to write truly reliable code.\\r\\n\\r\\nIn this talk I will highlight how recent additions to the language have enabled safer, more elegant code to be written, but also their limitations and why maybe you are yet to see any of your team working on them. Next we will do a deep dive into a currently in progress feature: Discriminating Unions: What are they? What is the syntax going to look like? Finally, how can we use all of these together. The future is bright and it has a lot of hidden Exceptions being thrown!",
      "startsAt": "2024-03-16T11:15:00",
      "endsAt": "2024-03-16T12:00:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "f2283307-03ed-4bb7-a611-2f9a853bce98"
      ],
      "categoryItems": [
        206915,
        206917,
        206921,
        206922,
        206925
      ],
      "questionAnswers": [],
      "roomId": 39399,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "537420",
      "title": "Automate Your Way to a Zen-Like Workday",
      "description": "Mastering IT Efficiency: Strategies and Tools for Organizing Your Day*\\r\\n\\r\\nUnlock the secrets to supercharge your IT productivity and organization! In this dynamic session, you'll dive into a treasure trove of proven strategies and cutting-edge tools that will revolutionize the way you tackle your IT tasks.\\r\\n\\r\\nJoin us to discover the power of centralized task management, as we explore how to seamlessly integrate your emails, Teams messages, and recurring tasks into a single source of truth. Learn how to transform your workdays into agile sprints using Planner boards, even if you're not on an agile project.\\r\\n\\r\\nBut the magic doesn't stop there! We'll delve into the world of automation with Power Automate and reveal how to turn mundane, time-consuming tasks into a thing of the past. Say goodbye to tedious data entry and hello to efficiency as we walk you through setting up Power Automate for work tasks. \\r\\n\\r\\nWe'll also explore the psychology of habit formation, demonstrating how to incorporate proven habits into your IT routine for effortless daily organization. From blocking out your calendar to maintaining focus, you'll leave with an arsenal of tricks to give your brain a well-deserved rest.\\r\\n\\r\\nThis session isn't just about IT theory; it's about practical, real-world solutions that can be applied immediately to make a difference. Don't miss the chance to boost your IT efficiency and productivity - join us and transform your workday into a well-organized, highly productive IT powerhouse!",
      "startsAt": "2024-03-16T11:15:00",
      "endsAt": "2024-03-16T12:00:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "6a506e9c-93f6-4e57-8b38-91aed10e2c74"
      ],
      "categoryItems": [
        206915,
        206917,
        206922,
        206923,
        206924,
        206929,
        206937
      ],
      "questionAnswers": [],
      "roomId": 39400,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "554319",
      "title": "Databases Are Amazing",
      "description": "Most of us use databases regularly, but have you ever wondered how they work? Despite being the foundation of fifty years of technological progress databases are a black box to most people who use them, and that's sad, because they are awesome. Non-stop academic and industrial progress, from System R to Clickhouse, has made database systems outstanding monuments to the engineering excellence our field is capable of, but rarely achieves. \\r\\n\\r\\nYou may have heard that the data fetching and transformation within a database is performed by bearded gnomes. That's ridiculous. Database gnomes don't have beards. As the magical school bus shrunk us down for strange and wonderful journeys through the human body, so this presentation will be an action-packed, day-in-the-life blast through database query execution, including simplified, but real demonstrations of query parsing, planning and execution. \\r\\n\\r\\nEver wanted to know how an index actually works? What's the difference between row-oriented and column-oriented storage? How does schema vs schema-less affect database performance? Come learn why databases deserve your love and respect. \\r\\n\\r\\n",
      "startsAt": "2024-03-16T11:15:00",
      "endsAt": "2024-03-16T12:00:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "942f63b9-251f-4353-a020-f33b1ca205ab"
      ],
      "categoryItems": [
        206914,
        206917,
        206922,
        206925,
        206932,
        207530
      ],
      "questionAnswers": [],
      "roomId": 42741,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "564304",
      "title": "Continuous Improvement: Crafting the Habit of Self-Development",
      "description": "Dive deep into the transformative habit of continuous self-development with our CTO, uncovering its remarkable influence on accelerating career trajectories. This talk offers a roadmap, illustrating how to seamlessly integrate self-improvement into your daily routine, making career conversations and performance reviews not just effortless but empowering.\\r\\n\\r\\nKey Takeaways:\\r\\n - Strategic Self-Selection: Learn how to identify and prioritize areas for personal development, ensuring that your efforts align with career aspirations and organizational needs.\\r\\n - Securing Organizational Support: Discover effective strategies to garner necessary backing and resources from your organization, optimizing your self-development journey.\\r\\n - Visibility of Growth: Uncover the art of showcasing your continuous improvement, making your professional evolution apparent and valued by peers and managers alike.\\r\\n\\r\\nPropel your career to new heights by embedding the powerful habit of continuous self-improvement into the fabric of your professional life.",
      "startsAt": "2024-03-16T12:15:00",
      "endsAt": "2024-03-16T12:35:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "e8f15a67-c2f9-4b57-8698-5dde5b86a421"
      ],
      "categoryItems": [
        206913,
        206916,
        206946
      ],
      "questionAnswers": [],
      "roomId": 39398,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "542320",
      "title": "Technical Interview Processes - Surely We Can Do Better",
      "description": "A lot of people have known for a lot of years that the technical interview process has many, many flaws. From pseudo-code white boarding to writing complex algorithms, to multi-day take home tests, bad practices still abound. Additionally many interviewers suffer from lack of focused training (the belief that once you have 5 years coding experience you are a skilled interviewer), gatekeeping, and the belief that the interviewer should be the interrogator.\\r\\n\\r\\nThis talk will cover some better ways to set up the interview process (and culture) for technical hires. They include:\\r\\n\\r\\nWhat should be avoided\\r\\nHow to set up a interview training program\\r\\nWhat types and how many interviews should your process contain.\\r\\nUnderstanding candidate care and the philosophy that interviewing is a two way street.\\r\\nHow to evaluate your companies interviewers and how you can make them better",
      "startsAt": "2024-03-16T12:15:00",
      "endsAt": "2024-03-16T12:35:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "85d8a5ad-4aa7-4368-80de-4b148012ee72"
      ],
      "categoryItems": [
        206915,
        206916,
        206939,
        206946,
        206947
      ],
      "questionAnswers": [],
      "roomId": 39399,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "547679",
      "title": "Take your first step towards observability for your automated tests.",
      "description": "Test Automation has been growing so much over the last few years. It all started with unit testing and UI based testing. Over the years, it has grown so much so, that it’s become so hard to keep track of them and keep the relevant. The biggest puzzle here is to understand what value each of the tests provide compared to effort it requires.\\r\\nLately, I’ve been struggling to keep track of tests written at different levels by different people and different teams. \\r\\n\\r\\nHow do you make sure tests don’t overlap? How do you make sure someone is notified of something failed ? What if you have a company that has 20+ teams with so much happening around you.\\r\\n\\r\\nThis is when I can across observability, specifically for test automation. Abby Bangser has been instrumental in getting my understanding of observability for test frameworks up to the mark.\\r\\n\\r\\nAfter learning about it, I started implementing it slowly at my work and it has been a transformative journey.\\r\\nWe tried to implement it across different levels of testing but also try to balance between over doing and under valuing.\\r\\n\\r\\nIn this talk, with live demos, I’ll show you how I took my first step for implanting observability practices in test frameworks and I’ll explain how it provides value to you and your company as a whole.",
      "startsAt": "2024-03-16T12:15:00",
      "endsAt": "2024-03-16T12:35:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "1af82ba8-b72e-4e97-ac0a-2dcbc2d1a390"
      ],
      "categoryItems": [
        206913,
        206916,
        206923,
        206931,
        206934,
        206948,
        206949
      ],
      "questionAnswers": [],
      "roomId": 39400,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "563680",
      "title": "Minimum Viable Programmer",
      "description": "Life moves fast. There is overwhelming pressure to stay on top of technologies, and we feel like we need to know everything about our craft to be a productive programmer.\\r\\n\\r\\nHere's the big secret though: You don't need to.\\r\\n\\r\\nLearn about how to apply the principle of \\"Last Responsible Moment\\" to how you approach work, including reducing cognitive load, deferring learning, asking good questions, understanding cost vs benefit, logical and risk fallacies, and how to make good (or \\"good enough\\") decisions in the face of limited data. Know the rules so you know when to break them.",
      "startsAt": "2024-03-16T12:15:00",
      "endsAt": "2024-03-16T12:35:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "dfef13d6-b691-44f2-8044-d41cd94512e8"
      ],
      "categoryItems": [
        206915,
        206916,
        206919,
        206926,
        206939
      ],
      "questionAnswers": [],
      "roomId": 42741,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "537416",
      "title": "Arbitrary code execution, I choose you!",
      "description": "Did you hear about the arbitrary code execution hardware vulnerability in the Nintendo Switch discovered a few years back? In this talk we’re going to delve into this vulnerability in more detail and look at some other notorious home console security issues over the years from Nintendo, Sega, et al., the fallout from them and how they were fixed. This is not talk about breaking things but how companies got their act together, and how home consoles improved (or didn't) with tackling security issues over the years. This isn't a talk about homebrew stuff either.\\r\\n\\r\\nKey takeaways:\\r\\n\\r\\nUnderstand that security mistakes are a combination of human and technical failures\\r\\nDiscover that we have been making the same security mistakes since time immemorial and to become more conscious of this in every day work \\r\\nLearn about some fun security stories that show that security issues happen to everyone, no matter who you are.",
      "startsAt": "2024-03-16T13:30:00",
      "endsAt": "2024-03-16T14:15:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "e4381d7c-bfd5-43e6-bf77-37ce897413bc"
      ],
      "categoryItems": [
        206915,
        206916,
        206944
      ],
      "questionAnswers": [],
      "roomId": 39398,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "540385",
      "title": "I've burnt out, now what",
      "description": "I grew up a technologist and always loved technology. Whether it's pulling apart old radios to figure out they work or writing my first LOGO Writer application to see the turtle do something, I craved it, so becoming a software dev was always on the cards. Throughout my 20 years in the industry I've had a lot of jobs and always loved where I worked.\\r\\n\\r\\nCOVID came and like everyone, I had my struggles with lockdowns and home schooling, but I was already a remote worker so the isolation aspect wasn't a real \\"bother\\" for me, I'm naturally introverted after all.\\r\\n\\r\\nThen in late 2022 I just… stopped. I stopped enjoying my job. I stopped looking forward going to work. I avoided technology outside my scheduled work hours. I'd find myself losing hours a day just staring at a computer screen.\\r\\n\\r\\nIt took me probably 6 months to admit there was a problem, and that problem was I was burnt out.\\r\\n\\r\\nBut what comes next? It's one thing to accept you're burnt out but where do you go from there? Let me share my journey, from being on the cusp of a performance improvement plan to someone who is back do loving what they do and can't wait to get started every day.",
      "startsAt": "2024-03-16T13:30:00",
      "endsAt": "2024-03-16T14:15:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "9abda5b3-cde8-40aa-aa4c-933857e65ae6"
      ],
      "categoryItems": [
        206914,
        206916,
        206926
      ],
      "questionAnswers": [],
      "roomId": 39399,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "541314",
      "title": "Building a Culture of Healthy Conflict in Tech Teams",
      "description": "Conflict is a natural and inevitable part of working in teams, and as leaders it’s important to understand how to recognise and resolve both unhealthy and healthy conflict. In my experience, understanding the difference between these two types of conflict, and how to move between them, is key to creating a productive and collaborative team environment.\\r\\n\\r\\nIn this talk, I’ll cover the negative impacts of unhealthy conflict and the positive impacts of healthy conflict. I’ll discuss how to recognise and understand the differences between the two, and how to move from an unhealthy to a healthy conflict. I’ll also provide a model to help you move from an unhealthy conflict to a healthy one.\\r\\n\\r\\nHealthy conflict is essential for teams to thrive, and I believe that it’s one of the most important skills for leaders to develop. It’s how we can make a positive impact on our teams and our organisations.\\r\\n\\r\\n",
      "startsAt": "2024-03-16T13:30:00",
      "endsAt": "2024-03-16T14:15:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "58d5e7b2-b674-4063-8168-22b2fa29605a"
      ],
      "categoryItems": [
        206914,
        206916,
        206939,
        206946,
        206947
      ],
      "questionAnswers": [],
      "roomId": 39400,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "553231",
      "title": "How fast is your website really? Shining a light on web performance with real user monitoring",
      "description": "Monitoring web performance used to be easy - all you had to do was track how long it took for the page to load. However, the extensive use of client-side JavaScript has introduced a raft of new ways modern websites can suffer from poor performance.\\r\\n\\r\\nNew performance problems require new metrics.\\r\\nWith this in mind, Google promotes a set of new metrics known as Core Web Vitals. Core Web Vitals go well beyond directly tracking page load times, instead relying on a set of user-centric metrics that focus on loading, interactivity and visual stability.\\r\\n\\r\\nIn this talk, learn how to capture Core Web Vitals metrics from end users in real time and perform continuous monitoring to quickly react to performance regression as they happen.",
      "startsAt": "2024-03-16T13:30:00",
      "endsAt": "2024-03-16T14:15:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "57143542-a3e3-479d-a531-7235f4abac50"
      ],
      "categoryItems": [
        206914,
        206917,
        206931,
        206935,
        206942,
        206948,
        206950
      ],
      "questionAnswers": [],
      "roomId": 42741,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "551733",
      "title": "Why is Functional Programming so Hard?",
      "description": "Everything is easy - when you know how.\\r\\nIt's learning how that is difficult!\\r\\n\\r\\nIn this presentation I will look at some of the common approaches and problems encountered in helping programmers learn functional programming.\\r\\n\\r\\nWe will run through the progression I typically walk developers through in learning functional programming, examining what is significant at each step along the way. Examples will be primarily drawn from Typescript, incorporating the fp-ts library.\\r\\n\\r\\nIt will conclude with some observations on actual usage of services in a company using functional programming on an occasional basis, and the pro's and con's of doing so. Finally, I will answer the question, \\"is it worth it?\\" - but you already know the answer to that don't you (it depends :-) ).",
      "startsAt": "2024-03-16T14:30:00",
      "endsAt": "2024-03-16T15:15:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "00b87cbb-c26f-40f3-8dc1-56fbfd86f6f1"
      ],
      "categoryItems": [
        206914,
        206917,
        206936
      ],
      "questionAnswers": [],
      "roomId": 39398,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "553280",
      "title": "Choose your own pen-test adventure!",
      "description": "In this interactive talk, we'll perform a live pen-test on a vulnerable website, with the audience deciding what to try next.\\r\\n\\r\\nAt each stage, vote on what approach to take, witness the results, and learn what the website's developers did right/wrong in securing their website.\\r\\n\\r\\nEmbark together on an adventure taking us from website user to server admin, and learn some security and pen testing tips along the way!\\r\\n\\r\\nThis talk is aimed at developers with an interest in security/pen-testing.",
      "startsAt": "2024-03-16T14:30:00",
      "endsAt": "2024-03-16T15:15:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "a6dfb44b-37ce-452e-b8f4-6758213b83f4",
        "3ccb9090-b00e-4622-af7a-58bf19f251d3"
      ],
      "categoryItems": [
        206914,
        206917,
        206921,
        206969,
        206929,
        206944,
        206950
      ],
      "questionAnswers": [],
      "roomId": 39399,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "543657",
      "title": "Micro Frontends in Action!",
      "description": "Microservices have gained significant popularity in recent years as organizations seek to overcome the limitations of monolithic backends.\\r\\n\\r\\nHowever, the challenges of 'monolithic frontends' persist for many companies.\\r\\n\\r\\nIn this session, I delve into a growing trend that aims to break down front-end monoliths into smaller, more manageable pieces. This architectural approach not only enhances team effectiveness and efficiency but also unlocks new possibilities.\\r\\n\\r\\nI begin by sharing an engaging anecdote of my adventure with a rhinoceros in Nepal, drawing parallels with the concept of monoliths that need to be overcome before embracing micro frontends. The presentation then focuses on establishing a robust Micro Frontends architecture, providing attendees with valuable insights into best practices, determining when and why to utilize micro frontends, and taking the initial steps towards implementation.\\r\\n\\r\\nMoreover, I showcase strategies for converting a monolith into a micro frontend application, offering practical guidance and demonstrating real-world scenarios.\\r\\n\\r\\nOne of the key aspects covered is establishing seamless communication between Micro Frontends, ensuring smooth collaboration and integration within the architecture.",
      "startsAt": "2024-03-16T14:30:00",
      "endsAt": "2024-03-16T15:15:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "53acedba-ece6-4076-9795-4777f142d59c"
      ],
      "categoryItems": [
        206914,
        206916,
        206922,
        206935,
        206950
      ],
      "questionAnswers": [],
      "roomId": 39400,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "564745",
      "title": "System Thinking and Event Driven Architecture",
      "description": "Discover how system thinking combined with EDA can effortlessly bridge the gap between business architecture and  project implementation. Allowing you to come up with a socialtechnical architecture that will empower people on both sides of the equation.\\r\\nShowing how, and the importance of, keeping things simple to conquer the complexity of nowadays technology stacks.\\r\\nA no nonsense talk for people that want to extend their horizon and challenge their existing processes. Discover how you can remove bias from the requirements gathering process and in doing so lower risk, cost and delivery time.",
      "startsAt": "2024-03-16T14:30:00",
      "endsAt": "2024-03-16T15:15:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "7153a8ab-7a2d-4239-a66c-b0d1737e115c"
      ],
      "categoryItems": [
        206914,
        206917,
        206922,
        206925,
        206933
      ],
      "questionAnswers": [],
      "roomId": 42741,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "539719",
      "title": "Developer Smackdown",
      "description": "You know the drill, there are a lot of fundamentals Developers disagree on. Tabs vs Spaces, GraphQL vs REST, and Majestic Monoliths vs Micro Services - get behind your preferred point of view in this live on-stage, developer vs developer Smackdown!\\r\\n\\r\\nIn this animated presentation, two developers will debate and fight out both sides of various topics. Classics like Tabs vs Spaces to more modern arguments like SQL vs NoSQL, traditional vs new tech, TDD vs shipping written code, and Trunk vs Branches and you end up with quite a review of current practices, with all the pros and cons. There will also be some more nuanced topics like Agile vs Wagile (waterfall agile) and pairing vs soloing.\\r\\n\\r\\nFrom two presenters who both worked very closely in a strict pairing, trunk-based development shop and have since converged on new preferences, be ready for a roller coaster of thoughts and arguments as well as some late twists and even a bit of developer comedy. This will be a talk not to be missed.",
      "startsAt": "2024-03-16T15:45:00",
      "endsAt": "2024-03-16T16:30:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "2f059724-54a6-4b5d-b0a4-82483f788778",
        "df43e5cc-4574-43a3-b77c-94e6d690185c"
      ],
      "categoryItems": [
        206915,
        206917,
        206921,
        206922,
        206925,
        206931,
        206937,
        206947,
        206949,
        206950
      ],
      "questionAnswers": [],
      "roomId": 39398,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "556264",
      "title": "Documentation for Developers",
      "description": "It's well known that as developers we all cringe at the thought of documentation.  In my work as a consultant I've collated a number of code-first approaches to documentation that are light-weight, and easy to maintain. \\r\\n\\r\\nIn this talk I will cover topics including: tooling for creating documentation-as-code, Architecture Decision Records (ADRs), the C4 Model, Plant UML, Markdown and how all of this can be used together to minimise the onboarding time for new developers to your projects.",
      "startsAt": "2024-03-16T15:45:00",
      "endsAt": "2024-03-16T16:30:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "af7c247a-38ac-40a9-af0e-4e5022291854"
      ],
      "categoryItems": [
        206914,
        206916,
        206922,
        206939,
        206947
      ],
      "questionAnswers": [],
      "roomId": 39399,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "553864",
      "title": "Navigating salary reviews and promotions in a climate of redundancies.",
      "description": "The current economic climate has resulted in many companies undergoing redundancies, restructuring, and cost-cutting measures. This has created a challenging environment for employees seeking salary reviews and promotions. In this panel discussion (featuring a combined 50+ years experience in the tech industry) we will share strategies and best practices for individuals navigating these conversations and answer some of your burning questions with an interactive discussion. ",
      "startsAt": "2024-03-16T15:45:00",
      "endsAt": "2024-03-16T16:30:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "aff02f28-da1d-4681-817c-6cc42bf9484e",
        "3541fb1c-6caf-48d7-ac42-ae5ab2d442ca",
        "f322461e-1e07-4087-9508-499e5afdea7f"
      ],
      "categoryItems": [
        206914,
        206916,
        206939,
        206946
      ],
      "questionAnswers": [],
      "roomId": 39400,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "539213",
      "title": "\\"Is It a Bird? Is It a Plane?\\" — The Weird Shapes We Use To Talk About Testing",
      "description": "Are you a fan of the pyramid? Or the trophy? Or some other shape to describe your testing strategy? Or are you on the lookout, trying to find the shape that fits your project?\\r\\n\\r\\nThe truth is, there is no silver bullet for testing. Instead, let's have a look at all those different methodologies and learn from them. \\r\\n\\r\\nWhat do they have in common? What are their differences? And how do you choose the right elements to cater to your specific circumstances?",
      "startsAt": "2024-03-16T15:45:00",
      "endsAt": "2024-03-16T16:30:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "ad1ba922-e743-4c65-9068-385effed9e01"
      ],
      "categoryItems": [
        206914,
        206917,
        206948
      ],
      "questionAnswers": [],
      "roomId": 42741,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    },
    {
      "id": "547732",
      "title": "Software Disasters for Fun, Horror and Enlightenment",
      "description": "Software outages, failures and disruptions, big and small are often reported as software or technical issues. As software engineers, testers and developers, we are the humans behind the systems that broke down, and the stories we will share about software disasters will in turn entertain you, fill you horror... and perhaps help you understand a bit more about how and why software disasters happen. Only then, perhaps, we can better deal with them.",
      "startsAt": "2024-03-16T16:40:00",
      "endsAt": "2024-03-16T17:10:00",
      "isServiceSession": false,
      "isPlenumSession": false,
      "speakers": [
        "0f4dadee-9e6a-4fac-991b-e50dafb45f1b"
      ],
      "categoryItems": [
        206915,
        206916,
        206946,
        206948
      ],
      "questionAnswers": [],
      "roomId": 39398,
      "liveUrl": null,
      "recordingUrl": null,
      "status": "Accepted",
      "isInformed": true,
      "isConfirmed": true
    }
  ],
  "speakers": [
    {
      "id": "9abda5b3-cde8-40aa-aa4c-933857e65ae6",
      "firstName": "Aaron",
      "lastName": "Powell",
      "bio": "Aaron is a Developer Advocate at Microsoft. Having spent 15 years doing web development he's seen it all, from browser wars, the rise of AJAX and the fall of 20 JavaScript frameworks (and that was just yesterday!). Always tinkering with something new he explores crazy ideas like writing your own implementation of numbers in .NET, creating IoC in JavaScript or implementing tic-tac-toe using git commits.",
      "tagLine": "I like long walks on the beach talking about JavaScript",
      "profilePicture": "https://sessionize.com/image/3053-400o400o1-sxuVLvcBgKSwTZeerEBCz8.png",
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
        540385
      ],
      "fullName": "Aaron Powell",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "3541fb1c-6caf-48d7-ac42-ae5ab2d442ca",
      "firstName": "Akanksha",
      "lastName": "Malik",
      "bio": "Akanksha is a Data Consultant, a Microsoft AI MVP and an international speaker. After studying Financial Maths and Actuarial Science at UCC, Ireland, she realised she wanted to work with people as well as numbers. As a consultant, she works with clients to help them solve problems by making more informed decisions with data. \\r\\n\\r\\nShe is a firm believer of diversity and inclusivity. She loves machine learning, and that it is becoming more accessible to everyone. She is an avid advocate for women in STEM and is currently the network director of Women Who Code Melbourne and advisory board member for Tech Diversity Lab.",
      "tagLine": "Data Consultant and Microsoft AI MVP",
      "profilePicture": "https://sessionize.com/image/8fa2-400o400o1-RMwMDU4Tes2gxt1zvoApHt.jpeg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/akankshamalik96",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://www.pathsuncovered.com/",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        553864
      ],
      "fullName": "Akanksha Malik",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "d387e75c-ed26-4dc6-8612-0f18abdfd9f5",
      "firstName": "Amy",
      "lastName": "Kapernick",
      "bio": "Amy is a business owner,  senior developer, mentor and international conference speaker. She has a passion for sharing knowledge with the community with a focus on nurturing the next generation of developers. This has led to her organising and volunteering at events, running technical workshops, and writing and producing her own video content. She also regularly presents and keynotes at events all over the world, informing and entertaining audiences from a variety of industries and backgrounds.\\r\\n\\r\\nA familiar face in the developer community Amy volunteers her time with several groups, including DDD Perth as Vice Chair and Director of Conference Content, Perth Azure User Group as one of the organising team and She Codes as a regular mentor. These contributions are not unnoticed, as she’s been recognised as a Microsoft MVP and a Twilio Champion since 2019 for her contributions to the tech community and ongoing commitment to helping those around her.",
      "tagLine": "Senior front-end developer, Speaker, Mentor, Dog Lover",
      "profilePicture": "https://sessionize.com/image/deb6-400o400o1-QGFohiqJFBwktSCPBQmNZF.JPG",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/amys_kapers",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://amyskapers.dev",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        537623
      ],
      "fullName": "Amy Kapernick",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "58d5e7b2-b674-4063-8168-22b2fa29605a",
      "firstName": "Andrew",
      "lastName": "Murphy",
      "bio": "Andrew Murphy started his career as a Software Engineer but, after a decade in technology leadership, he decided to focus on teaching the skills that he learnt the hard way. When he moved into leadership there was no support, so he had to make all the mistakes (a lot of them!) and learn from them.\\r\\n\\r\\nHis goal is now to make sure that tech leaders don’t have to do things the hard way by providing them with the mindsets and skillsets that can make them happy, confident and effective leaders.\\r\\n\\r\\nHis company, Tech Leaders Launchpad, currently focuses specifically on the new and emerging leader space, as that's the place we can have the biggest impact on the students, and the industry.",
      "tagLine": "Helping new and emerging tech leaders become happy, confident and effective.",
      "profilePicture": "https://sessionize.com/image/0c8c-400o400o1-RrKDjhVHsSGbdXihDtqcoq.jpeg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "Company Website",
          "url": "https://techleaderslaunchpad.com",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        541314
      ],
      "fullName": "Andrew Murphy",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "7153a8ab-7a2d-4239-a66c-b0d1737e115c",
      "firstName": "Arjan",
      "lastName": "Noordhoek",
      "bio": "Based in a little town just North of Auckland, New Zealand, Arjan Noordhoek is a veteran in software development. From multi-national to a fast scaling start-up, in roles from Enterprise Architect to machine language developer,  he has been there. \\r\\nA central component in all of his experiences has been a love of simplifying complexity by finding the roots of a problem domain and translate these into a solution. \\r\\nEvent & Model driven development has been part of this journey for the last 20 years and he loves the fact that he can now translate his experience into tools and knowledge for others to find an easier road into the exciting world of Event Driven Architecture.",
      "tagLine": "Model My Code founder Arjan Noordhoek",
      "profilePicture": "https://sessionize.com/image/6718-400o400o1-TwodbM27x1UMnXP2Qky3bA.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/arjanno",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://ebdconnect.com",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        564745
      ],
      "fullName": "Arjan Noordhoek",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "552565f9-9182-45c2-9db6-eaf0f894b522",
      "firstName": "Chris",
      "lastName": "Schaller",
      "bio": "Father of 2 teenagers, Junior Basketball coach at 3 clubs, OData Evangelist, and crazy mad Collingwood Fan.\\r\\n\\r\\nMy preferences are Star Wars, dark mode, spaces and search driven interfaces.\\r\\n\\r\\nI've been a Full stack .Net developer since 2002, but long before that I have been working with robotics and automation systems to solve seemingly impractical and unnecessary tasks around the house. It took nearly 15 years to find a professional use for these skills in the realm of Industrial IoT, interfacing with PLCs, microcontrollers and SoCs like Raspberry Pi, mostly from the comfort of C#.\\r\\n\\r\\nI bring my IoT experience in designing and managing distributed APIs and Micro-Service style solutions to each new project and design the core APIs with extensibility, scalability and long-term maintenance as primary concerns. \\r\\n\\r\\nWhen I'm bored, I trawl StackOverflow for inspiration and the opportunity to flex my skills or try out new frameworks in an effort to help out my fellow developers.",
      "tagLine": "Chief Software Architect - Fin365.com.au",
      "profilePicture": "https://sessionize.com/image/cef4-400o400o1-92sfuNs6PXVKHmbeKMtV4L.png",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "Company Website",
          "url": "https://fin365.com.au",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        564855
      ],
      "fullName": "Chris Schaller",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "aff02f28-da1d-4681-817c-6cc42bf9484e",
      "firstName": "Donna",
      "lastName": "Edwards",
      "bio": "Donna has 20+ years’ experience working in the IT industry. She is the CEO of SHOUTOUT, a simple recognition program helping organisations retain their talent and a Manager at Amazon Web Services running untapped talent programs across APJ and EMEA including the global CloudUp for Her program. \\r\\n\\r\\nWith an MBA and MHRM, Donna is an international conference speaker and regular panelist on culture, talent development, diversity, leadership topics. She is an author and a WA Business News, 40 under 40 award winner for the Professional Services category.\\r\\n\\r\\n",
      "tagLine": "Manager @ Amazon Web Services | CEO @ SHOUTOUT | Community Leader",
      "profilePicture": "https://sessionize.com/image/4716-400o400o1-28-da1d-4681-817c-6cc42bf9484e.8546f53c-2de6-4e18-8c80-d6cbc9ba3e4c.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/Don_IsGood",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://www.shoutout.cloud/",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        553864
      ],
      "fullName": "Donna Edwards",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "55077c9c-af4b-4d71-b17a-39609ea1e534",
      "firstName": "Garima",
      "lastName": "Singh",
      "bio": "I am currently an Engineering Manager at Bunnings, Melbourne, where I oversee and drive the success of engineering teams responsible for the retail and trade websites. My journey in the tech industry has been a dynamic one, marked by a rich history of contributing to notable organisations.\\r\\n\\r\\nPrior to my current role, I made significant impacts at industry giants such as ThoughtWorks, JP Morgan, and SlideShare. Throughout my career, I've played pivotal roles as a Lead Design Authority and a hands-on Tech Lead. These roles have allowed me to cultivate a deep-rooted understanding of how to lead product teams in the creation and delivery of top-tier software solutions.\\r\\n\\r\\nMy professional strengths extend to the realm of architecting cloud-native applications, crafting sophisticated distributed systems, and implementing automated release pipelines. These technical proficiencies have been instrumental in my career and have enabled me to drive innovation and efficiency within the organisations I've served.\\r\\n\\r\\nMy professional journey has seen me take on a multitude of roles, each of which has enriched my perspective on software development. I've worn hats ranging from Consultant to Application Developer, Agile Coach, Business Analyst, and Infrastructure Developer.",
      "tagLine": "Engineering Manager, Bunnings",
      "profilePicture": "https://sessionize.com/image/f781-400o400o1-BNBr1J3Rxb35xWpDvnHD7x.png",
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
        559141
      ],
      "fullName": "Garima Singh",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "f322461e-1e07-4087-9508-499e5afdea7f",
      "firstName": "Gretchen",
      "lastName": "Scott",
      "bio": "Gretchen is a founder of Kaleida; the only platform with technology focused career growth architectures designed to help you implement best practice, retain key staff and drive engagement.\u2028Prior to this, she was the Community Manager at Cloudflare which acquired Linc.sh where Gretchen was the Chief Operating Officer, a startup that built a CI/CD tool especially designed for frontend development.  \\r\\nStarting out studying optimisation modelling, which she then used running one of New Zealand's biggest trade shows, she fell in love with software development after graduating a web development bootcamp. Her main passion is bringing more diversity to tech in all it forms such as gender, race, social economic and professional backgrounds. Over the years she has been involved in training more than 250 bootcamp graduates through Coder Academy, is currently a Director at Women Who Code Melbourne and on the Churchill Club Committee.",
      "tagLine": "Co-Founder @ Kaleida",
      "profilePicture": "https://sessionize.com/image/1f0b-400o400o1-806c9e9f-3d91-4c63-b247-dadb21028095.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/scott_gretchen",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://www.kaleida.team/",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        553864
      ],
      "fullName": "Gretchen Scott",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "0f4dadee-9e6a-4fac-991b-e50dafb45f1b",
      "firstName": "Ivan",
      "lastName": "Sun",
      "bio": "Multimedia artist, Software Engineer and Educator who has been bringing software engineers and testers to the real world since 2001 at RMIT. Founder and Creative Director of the Bauhaus Metaverse",
      "tagLine": "Aritst, Software Engineer, Educator",
      "profilePicture": "https://sessionize.com/image/5b9d-400o400o1-aN4EcPs1t22dfP8XUEncCT.png",
      "isTopSpeaker": false,
      "links": [],
      "sessions": [
        547732
      ],
      "fullName": "Ivan Sun",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "a6dfb44b-37ce-452e-b8f4-6758213b83f4",
      "firstName": "James",
      "lastName": "Hercock",
      "bio": "James is a software engineer at VGW whose career in technology started with developing train simulators. He went on to join Bankwest's graduate program in 2018, where a passion for cyber security was ignited in him while spending time in the incident response & security operations centre.\\r\\n\\r\\nWhen not working on tech, he enjoys tinkering with home automation, hacking, gymnastics, board games and copious amounts of video games.",
      "tagLine": "Engineer at VGW",
      "profilePicture": "https://sessionize.com/image/1f95-400o400o1-TKUB3Sf9MRAwATPPnVYSFN.jpg",
      "isTopSpeaker": false,
      "links": [],
      "sessions": [
        553280
      ],
      "fullName": "James Hercock",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "3ccb9090-b00e-4622-af7a-58bf19f251d3",
      "firstName": "James",
      "lastName": "Trotter",
      "bio": "James is a software developer at Bankwest. He is currently the tech lead for the Identity Platform, which provides identity as a service for the bank's applications.",
      "tagLine": "Software developer @ Bankwest",
      "profilePicture": "https://sessionize.com/image/a016-400o400o1-37fc386c-b616-416f-80c2-4955a5d3699a.jpg",
      "isTopSpeaker": false,
      "links": [],
      "sessions": [
        553280
      ],
      "fullName": "James Trotter",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "1af82ba8-b72e-4e97-ac0a-2dcbc2d1a390",
      "firstName": "Jaswanth",
      "lastName": "Manigundan",
      "bio": "I’m Jas from Melbourne. I currently work at Culture Amp as a Lead Quality Coach, specialising in test automation and testability. \\r\\n\\r\\nI have worked in the mobile app development space for almost a decade, where I saw mobile devices and operating systems get better and better by the day. My fascination towards mobile devices made me start my professional career as a mobile app developer. But my quest to build better apps and write code that is much more testable lead me to transition into a test automation engineer specialising in mobile. \\r\\n\\r\\nSince then, I’ve gradually explored a wide variety of test automation frameworks and have consulted for some of the leading mobile app teams in Australia to build efficient test automation suites for mobile apps. \\r\\n\\r\\nI have spoken about my mobile test automation journey in a variety of testing conferences like the Ministry of Testing’s Testbash and Saucelabs’ Saucecon. \\r\\n\\r\\nI now work at Culture Amp alongside the legendary Anne-Marie Charrett helping build a passionate quality enablement team.\\r\\n\\r\\nI currently work with test automation frameworks (functionality, contract and load) for APIs, microservices and event sourcing systems. \\r\\n\\r\\nLatest obsession… Observability within test frameworks. ",
      "tagLine": "Staff Quality Coach at Culture Amp",
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
        547679
      ],
      "fullName": "Jaswanth Manigundan",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "ad1ba922-e743-4c65-9068-385effed9e01",
      "firstName": "Julian",
      "lastName": "Burr",
      "bio": "Senior Developer from Germany, currently living and working down under in Australia. Pragmatic perfectionist, always looking for opportunities to learn and grow.",
      "tagLine": "Lead Frontend Developer @ Vouch",
      "profilePicture": "https://sessionize.com/image/a0cc-400o400o1-TqvGywGK9uw3KxT9u6UZPC.png",
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
        539213
      ],
      "fullName": "Julian Burr",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "282a4701-f128-4b1d-bd67-da5d1f8b3eb0",
      "firstName": "Julie",
      "lastName": "Lerman",
      "bio": "Julie Lerman is a Microsoft Regional Director, Docker Captain and long-time Microsoft MVP who now counts her years as a coder in decades.  She makes her living as a mentor and consultant to software teams around the world. You can find Julie presenting on Entity Framework, Domain Driven Design and other topics at user groups and conferences around the world. Julie blogs at thedatafarm.com/blog, is the author of the highly acclaimed “Programming Entity Framework” books, the MSDN Magazine Data Points column and popular videos on Pluralsight.com. Follow Julie on twitter at julielerman.",
      "tagLine": "Software Coach, Pluralsight Author, .NET & DDD",
      "profilePicture": "https://sessionize.com/image/1efc-400o400o1-01-f128-4b1d-bd67-da5d1f8b3eb0.8641eaab-6eb1-4ccc-9b93-7eaf968ef034.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "Twitter",
          "url": "http://twitter.com/julielerman",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "http://thedatafarm.com",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        581840
      ],
      "fullName": "Julie Lerman",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "942f63b9-251f-4353-a020-f33b1ca205ab",
      "firstName": "Liam",
      "lastName": "McLennan",
      "bio": "Liam is a successful CTO, technology leader, engineering manager and agile product delivery expert. He helps organizations to develop effective technology strategy, then implement that strategy to achieve their objectives. Other major interests are optimizing the impact of software delivery and building cross-functional, high-performance teams. \\r\\n\\r\\nHe is currently a Principal Software Engineer working on Seq - the best structured logging observability tool. Previously, he was Chief Technology Officer of an online media and travel company with 300,000 members. ",
      "tagLine": "Principal Software Engineer",
      "profilePicture": "https://sessionize.com/image/66e7-400o400o1-QSAY6RsVackPknREKKU4oE.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/liammclennan",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://datalust.co/seq",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        554319
      ],
      "fullName": "Liam McLennan",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "57143542-a3e3-479d-a531-7235f4abac50",
      "firstName": "Macklin",
      "lastName": "Hartley",
      "bio": "I help top-notch organisations by bringing together crystal-clear objectives, a culture of support, streamlined operations, and adaptable technology. I'm a firm believer in small, dynamic teams that embrace autonomy and take responsibility, prioritising outcomes over specific solutions. Above all, I believe in pursuing something you're passionate about alongside individuals you genuinely admire and respect. With a wide array of technology interests, I thrive on embracing new challenges.",
      "tagLine": "Principal Engineer @ WeMoney",
      "profilePicture": "https://sessionize.com/image/904e-400o400o1-ashrDfkZknxWLecjmrq4hE.jpg",
      "isTopSpeaker": false,
      "links": [],
      "sessions": [
        553231
      ],
      "fullName": "Macklin Hartley",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "00b87cbb-c26f-40f3-8dc1-56fbfd86f6f1",
      "firstName": "Mark",
      "lastName": "Cheeseman",
      "bio": "Mark is a Staff Engineer at SEEK working on a team that manages services in the BFF part of the seek.com.au system. His  interests include GraphQL, functional programming, and how to manage the on-going process of developing out services in increasingly complex and higher volume systems.",
      "tagLine": "Staff Engineer at SEEK",
      "profilePicture": "https://sessionize.com/image/d6bc-400o400o1-9xqZW9fHWSmSyGrLWPnc1r.jpg",
      "isTopSpeaker": false,
      "links": [],
      "sessions": [
        551733
      ],
      "fullName": "Mark Cheeseman",
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
        555691
      ],
      "fullName": "Michael Crook",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "df43e5cc-4574-43a3-b77c-94e6d690185c",
      "firstName": "Michael",
      "lastName": "Milewski",
      "bio": "Michael is a developer keen on the people side of things. He loves pairing, and in particular with people new to writing software. He especially likes driving software out with tests and directing the evolution of the design. In his spare time he does a bit of running, camping and watching any one of his 4 kids excel above anything he ever managed to achieve.",
      "tagLine": "software developer",
      "profilePicture": "https://sessionize.com/image/213a-400o400o1-Tm7ttA8pEf4jRLfC7fWcf9.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "Twitter",
          "url": "https://twitter.com/saramic",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://www.zepto.com.au/",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        539719
      ],
      "fullName": "Michael Milewski",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "53acedba-ece6-4076-9795-4777f142d59c",
      "firstName": "Peter",
      "lastName": "Eijgermans",
      "bio": "Peter Eijgermans is a long-time software developer and an adventurous and passionate CodeSmith Frontend at Ordina Netherlands. He likes to travel around the world with his bike. Always seeking for the unexpected and unknown. For his job he tries out the latest techniques and frameworks. He loves to share his experience by speaking at conferences all over the World and writing for the Dutch Java magazine and DZone. He believes that you as the front-end developer are the spider in the web to bring the user, the team and the product together.",
      "tagLine": "Ordina, JSRoots, JTech, position: CodeSmith and Google Developer",
      "profilePicture": "https://sessionize.com/image/4274-400o400o1-Ndyc92ayfq59QqQzQCsCsL.jpeg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/EijgermansPeter",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://petereijgermans11.github.io/portfolio/#about",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        543657
      ],
      "fullName": "Peter Eijgermans",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "dfef13d6-b691-44f2-8044-d41cd94512e8",
      "firstName": "Rebecca",
      "lastName": "Scott",
      "bio": "Rebecca has been working in the IT industry for 20 years, with a vast amount of experience in leadership and consulting roles working with small business, startups, and larger companies.",
      "tagLine": "Senior Consultant and professional development coach at SixPivot",
      "profilePicture": "https://sessionize.com/image/dd9d-400o400o1-WTqLSjKomNPfoEirWYUUnw.jpg",
      "isTopSpeaker": false,
      "links": [],
      "sessions": [
        563680
      ],
      "fullName": "Rebecca Scott",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "4142b780-8f1d-4acc-8a22-c87e8a19d933",
      "firstName": "Robert",
      "lastName": "Erez",
      "bio": "Robert has worked in the .Net space for over 15 years, improving CD pipelines working at big companies like Microsoft and startups like Octopus Deploy.",
      "tagLine": "Development Manager at Envirosuite",
      "profilePicture": "https://sessionize.com/image/0975-400o400o1-fe93a2f1-cb5d-40fa-bfee-92e8ae5869e2.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "Twitter",
          "url": "https://twitter.com/no_erez",
          "linkType": "Twitter"
        }
      ],
      "sessions": [
        566071
      ],
      "fullName": "Robert Erez",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "ae6eb71c-517c-44e4-94dc-8d90f199ac80",
      "firstName": "Samaa",
      "lastName": "Kanani",
      "bio": "Samaa has only recently become a developer. In a former life, she obtained a Masters degree in law.  After graduating she started out in the tech industry, working a range of jobs from Project Manager to UX Researcher. She went through a career change to become a developer in 2020, of all years.\\r\\nShe is currently a Software Development Engineer at Rome2Rio, with a focus on backend development, mainly using C# and .NET.\\r\\n\\r\\nTo this day, one of her proudest accomplishments is setting up a coding school for refugees. When she's not busy with code, you might find her at a ramen bar, singing karaoke, hiking, learning to play the guitar, or just binging the latest reality TV show.\\r\\n",
      "tagLine": "Software Development Engineer",
      "profilePicture": "https://sessionize.com/image/6abb-400o400o1-p7EZ5Uj5hM63gmv2r5eLU7.jfif",
      "isTopSpeaker": false,
      "links": [],
      "sessions": [
        567126
      ],
      "fullName": "Samaa Kanani",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "e4381d7c-bfd5-43e6-bf77-37ce897413bc",
      "firstName": "Sarah",
      "lastName": "Young",
      "bio": "Once described on Reddit as “technically challenged”, Sarah is a Senior Cloud Security Advocate working at Microsoft. She has lived all over the place but currently calls Melbourne home.\\r\\n\\r\\nSarah has been working in cyber security since before it was cool, has previously spoken at many security conferences including Black Hat and has co-authored a few Microsoft Press technical books. She is an active supporter of security communities across the globe and a co-host of the Microsoft Azure Security Podcast.\\r\\n\\r\\nSarah spends most of her spare time gaming, eating hipster brunches and high teas and spending a disproportionate amount of her income on her dogs.",
      "tagLine": "Sarah Young, Senior Cloud Security Advocate, Microsoft",
      "profilePicture": "https://sessionize.com/image/6f6e-400o400o1-Ti4SGXwA9dT2RNRLvf6AoJ.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/_sarahyo",
          "linkType": "Twitter"
        }
      ],
      "sessions": [
        537416
      ],
      "fullName": "Sarah Young",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "2f059724-54a6-4b5d-b0a4-82483f788778",
      "firstName": "Selena",
      "lastName": "Small",
      "bio": "Selena is a full-stack lead engineer at Fresho in Melbourne Australia who is particularly passionate about TDD. As a self-taught coder with a background in management, she is well-equipped to mentor others. She is a recently retired champion kickboxer and fills her spare time with international travel and speaking at tech conferences.",
      "tagLine": "Tech Lead | Software Engineer at Fresho",
      "profilePicture": "https://sessionize.com/image/ac04-400o400o1-wq4BCrMQsGUtYg92qPLcBg.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/selenasmall88",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://failure-driven.com/",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        539719
      ],
      "fullName": "Selena Small",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "af7c247a-38ac-40a9-af0e-4e5022291854",
      "firstName": "Shaw",
      "lastName": "Innes",
      "bio": "Shaw Innes (he/him) is a developer, consultant, and general tech-fan. He has worked in software development for 20+ years and in this time in a variety of roles including software developer, engineering manager, solution architect, and consultant. In his spare time he enjoys adventure travel and photography.",
      "tagLine": "Practice Director/Principal Consultant, SixPivot",
      "profilePicture": "https://sessionize.com/image/ab43-400o400o1-NNuz9GP4Zud5FXK87v5BnR.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/shawinnes",
          "linkType": "Twitter"
        }
      ],
      "sessions": [
        556264
      ],
      "fullName": "Shaw Innes",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "6a506e9c-93f6-4e57-8b38-91aed10e2c74",
      "firstName": "Simone",
      "lastName": "Bennett",
      "bio": "As a Principal Consultant at Arkahna and former solution Architect at Microsoft, I've championed successful cloud transformations. My passion extends beyond tech to diversity advocacy, fostering unconventional pathways into the industry. Unlock the potential of cloud transformation effortlessly. With 25+ years of IT expertise spanning cloud, DevOps, and consulting, \\r\\n\\r\\n🌈 Diversity Advocate:\\r\\nI'm committed to inclusivity. My involvement with initiatives like the Microsoft Traineeships Program and the She Works Tech Skilling Mentor program reflects my dedication to diverse tech journeys.\\r\\n\\r\\n📣 Join the Cloud Journey:\\r\\nLet's simplify cloud adoption together. Whether you're new or experienced, this session unveils accessible cloud transformation. Let's make innovation achievable.\\r\\n\\r\\n📧 Contact Me:\\r\\n📩 BSKY: simone_au\\r\\n🌐 LinkedIn https://www.linkedin.com/in/simonebennett/",
      "tagLine": "Principal Consultant at Arkahna",
      "profilePicture": "https://sessionize.com/image/3dc0-400o400o1-nYyGyyPqc5KL5vYeMB17FQ.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/simone_au",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://www.arkahna.io",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        537420
      ],
      "fullName": "Simone Bennett",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "e8f15a67-c2f9-4b57-8698-5dde5b86a421",
      "firstName": "Susan",
      "lastName": "Brander",
      "bio": "Susan is currently the cofounding CTO at Tech Diversity Lab, a start up passionate about bringing greater diversity, belonging and inclusion into the Software Industry. \\r\\n\\r\\nShe has a history of leading teams that delivers a cloud native platforms that balances the need to experiment and learn in an emerging market with reliability expected of customer focused systems. \\r\\n\\r\\nShe is also co-organiser of Tech Leading Ladies in Melbourne, a group focused on bridging the gender gap in technical leadership.",
      "tagLine": "Co-Founding CTO Tech Diversity Lab",
      "profilePicture": "https://sessionize.com/image/0b31-400o400o1-avuiAGn4PGbTB6UxzygBfR.jpeg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/SusanBrander",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://www.techdiversitylab.com/",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        564304
      ],
      "fullName": "Susan Brander",
      "categoryItems": [],
      "questionAnswers": []
    },
    {
      "id": "85d8a5ad-4aa7-4368-80de-4b148012ee72",
      "firstName": "Ted",
      "lastName": "Tencza",
      "bio": "Ted has over 25 years of experience in Software Development, the last thirteen of which have been in leadership roles. Currently serving as the founder of Code Purple Consulting, he has run multiple teams at Atlassian, Bigcommerce, finder.com and Prospa, with experience in both operational and development projects. He enjoys focusing specifically on the SaaS offerings, as well as working on improving the recruiting, hiring, and on boarding of new developers.",
      "tagLine": "Founder - Code Purple Consulting",
      "profilePicture": "https://sessionize.com/image/7eda-400o400o1-J5RhX7t4BV6xFfFRmCHoMm.jpg",
      "isTopSpeaker": false,
      "links": [
        {
          "title": "X (Twitter)",
          "url": "https://twitter.com/darthted",
          "linkType": "Twitter"
        },
        {
          "title": "Company Website",
          "url": "https://codepurpleconsulting.com/",
          "linkType": "Company_Website"
        }
      ],
      "sessions": [
        542320
      ],
      "fullName": "Ted Tencza",
      "categoryItems": [],
      "questionAnswers": []
    }
  ],
  "questions": [],
  "categories": [
    {
      "id": 59378,
      "title": "Session format",
      "items": [
        {
          "id": 206913,
          "name": "20 minutes",
          "sort": 1
        },
        {
          "id": 206914,
          "name": "45 minutes",
          "sort": 2
        },
        {
          "id": 206915,
          "name": "Either",
          "sort": 3
        }
      ],
      "sort": 0,
      "type": "session"
    },
    {
      "id": 59379,
      "title": "Level",
      "items": [
        {
          "id": 206916,
          "name": "No experience necessary",
          "sort": 1
        },
        {
          "id": 206917,
          "name": "Mostly intermediate",
          "sort": 2
        },
        {
          "id": 206918,
          "name": "Mostly advanced",
          "sort": 3
        }
      ],
      "sort": 1,
      "type": "session"
    },
    {
      "id": 59380,
      "title": "Tags",
      "items": [
        {
          "id": 206919,
          "name": "Agile",
          "sort": 1
        },
        {
          "id": 206920,
          "name": "AI",
          "sort": 2
        },
        {
          "id": 206921,
          "name": "APIs",
          "sort": 3
        },
        {
          "id": 206922,
          "name": "Architecture",
          "sort": 4
        },
        {
          "id": 206923,
          "name": "Automation",
          "sort": 5
        },
        {
          "id": 206969,
          "name": "AWS",
          "sort": 6
        },
        {
          "id": 206924,
          "name": "Azure",
          "sort": 7
        },
        {
          "id": 206925,
          "name": "Backend dev",
          "sort": 8
        },
        {
          "id": 206926,
          "name": "Career",
          "sort": 9
        },
        {
          "id": 206927,
          "name": "Chatbots",
          "sort": 10
        },
        {
          "id": 206928,
          "name": "Chef",
          "sort": 11
        },
        {
          "id": 206929,
          "name": "Cloud",
          "sort": 12
        },
        {
          "id": 207531,
          "name": "Containers",
          "sort": 13
        },
        {
          "id": 206931,
          "name": "Continuous delivery",
          "sort": 14
        },
        {
          "id": 206932,
          "name": "Data and analytics",
          "sort": 15
        },
        {
          "id": 207530,
          "name": "Data Engineering",
          "sort": 16
        },
        {
          "id": 206933,
          "name": "Design and UX",
          "sort": 17
        },
        {
          "id": 206934,
          "name": "DevOps",
          "sort": 18
        },
        {
          "id": 206935,
          "name": "Frontend dev",
          "sort": 19
        },
        {
          "id": 206936,
          "name": "Functional programming",
          "sort": 20
        },
        {
          "id": 206937,
          "name": "Infrastructure",
          "sort": 21
        },
        {
          "id": 206938,
          "name": "IoT",
          "sort": 22
        },
        {
          "id": 206939,
          "name": "Leadership",
          "sort": 23
        },
        {
          "id": 206940,
          "name": "Machine learning",
          "sort": 24
        },
        {
          "id": 206941,
          "name": "Microservices",
          "sort": 25
        },
        {
          "id": 206942,
          "name": "Mobile",
          "sort": 26
        },
        {
          "id": 206943,
          "name": "Puppet",
          "sort": 27
        },
        {
          "id": 206944,
          "name": "Security",
          "sort": 28
        },
        {
          "id": 206945,
          "name": "Severless",
          "sort": 29
        },
        {
          "id": 206946,
          "name": "Professional/soft skills",
          "sort": 30
        },
        {
          "id": 206947,
          "name": "Teams",
          "sort": 31
        },
        {
          "id": 206948,
          "name": "Testing",
          "sort": 32
        },
        {
          "id": 206949,
          "name": "Tooling",
          "sort": 33
        },
        {
          "id": 206950,
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
      "id": 39398,
      "name": "Grand Ultra Ballroom",
      "sort": 0
    },
    {
      "id": 39399,
      "name": "Supper (top)",
      "sort": 1
    },
    {
      "id": 39400,
      "name": "Yarra (big paintings)",
      "sort": 2
    },
    {
      "id": 42741,
      "name": "Hoddle (men's bar)",
      "sort": 4
    }
  ]
}
`)

interface AgendaPageProps {
  selectedSessionId?: string
}

const AgendaPage: NextPage = ({
  selectedSessionId
} : AgendaPageProps) => {
  const date = zonedTimeToUtc('2024-03-16T09:00', 'Australia/Melbourne')
  const presentersById = {}
  agenda.speakers.forEach((p) => {
    presentersById[p.id] = {
      Id: p.id,
      Name: p.fullName,
      Tagline: p.tagLine,
      Bio: p.bio,
      ProfilePhotoUrl: p.profilePicture,
    } as Presenter
  })
  const agendaSessions = agenda.sessions.map((s) => {
    return {
      Id: s.id,
      ExternalId: s.id,
      Title: s.title,
      Abstract: s.description,
      Presenters: s.speakers.map(speakerId => presentersById[speakerId]),
      Format: "TODO",
      Level: "TODO",
      Tags: ["TODO"],
    } as Session
  })

  return <Agenda
    sessions={agendaSessions}
    acceptingFeedback={false}
    feedbackLink={null}
    selectedSessionId={selectedSessionId}
    render={(agendaSessions, _, onSelect) => {
      return (
        <AgendaProvider
          onSelect={onSelect}
          getSession={(id) => agendaSessions.find((session) => session.Id === id)}
          sessions={agendaSessions}
          sponsors={[]}
          rooms={[]}
          livestreams={null}
        >
          <StyledAgendaContainer>
            <StyledAgendaRowList>
              <li>Time</li>
              {Conference.RoomNames.map((name) => (
                <li style={{ backgroundColor: `${Conference.RoomColors[name]}`, color: 'inherit' }} key={name}>
                  {name}
                </li>
              ))}
            </StyledAgendaRowList>
            <StyledAgendaRow>
              <AgendaTime time={set(date, { hours: 8, minutes: 0 })} />
              <AgendaSession room="" alwaysShowRoom fullWidth>
                <StyledTrackHeader>Registration</StyledTrackHeader>
              </AgendaSession>
            </StyledAgendaRow>
            <StyledAgendaRow>
              <AgendaTime time={set(date, { hours: 8, minutes: 45 })} />
              <AgendaSession room={0} alwaysShowRoom fullWidth>
                <StyledTrackHeader>Welcome and Housekeeping</StyledTrackHeader>
              </AgendaSession>
            </StyledAgendaRow>
            <StyledAgendaRow>
              <AgendaTime time={set(date, { hours: 9, minutes: 0 })} duration={45} />
              <AgendaSession
                sessionId="581840"
                room={0}
                renderPresenters={(presenters) => (
                  <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                )}
                fullWidth
                isKeynote
                alwaysShowRoom
              />
            </StyledAgendaRow>
            <StyledAgendaRow>
              <AgendaTime time={set(date, { hours: 9, minutes: 45 })} />
              <AgendaSession fullWidth>
                <StyledTrackHeader>Morning Tea</StyledTrackHeader>
              </AgendaSession>
            </StyledAgendaRow>
            <StyledAgendaRow>
              <AgendaTime time={set(date, { hours: 10, minutes: 15 })} duration={45} />
              <AgendaSession room={0} sessionId="564855" />
              <AgendaSession room={1} sessionId="566071" />
              <AgendaSession room={2} sessionId="537623" />
              <AgendaSession room={3} sessionId="567126" />
            </StyledAgendaRow>
          </StyledAgendaContainer>
        </AgendaProvider>
      )
    }}
  />
}

export default AgendaPage
