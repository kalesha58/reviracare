export interface IBlogSection {
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
}

export interface IBlogPost {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
  category: string;
  readTimeMinutes: number;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  sections: IBlogSection[];
  kidsVersion: {
    title: string;
    content: string;
    funFact: string;
  };
}

export const ALL_BLOG_POSTS: IBlogPost[] = [
  {
    id: "home-modifications",
    title: "What Steps Do You Take To Make Home Modifications Accessible And Affordable?",
    excerpt:
      "Creating an accessible living environment shouldn't be a financial burden. Discover ReviraCare's structured approach to affordable home modifications.",
    href: "/blogs/home-modifications",
    image: "/images/blogs/accessibility-kitchen-v2.png",
    imageAlt: "Ultra-modern accessible kitchen",
    category: "Home & Living",
    readTimeMinutes: 10,
    date: "March 1, 2026",
    author: {
      name: "Sarah Jenkins",
      role: "Occupational Therapist",
      avatar: "/images/blogs/life-skills-workshop-v2.png",
    },
    sections: [
      {
        title: "Introduction",
        content: "Creating an accessible and comfortable living environment for individuals with disabilities or specific needs is a critical component of fostering independence and well-being. At ReviraCare, we understand the transformative impact that home modifications can have on daily living. However, accessibility alone is not enough; affordability is equally important to ensure these modifications are available to everyone who needs them. ReviraCare has developed a structured, thoughtful approach to make home modifications both accessible and affordable, ensuring that clients can enjoy safe, functional, and supportive spaces without financial strain.",
      },
      {
        title: "Comprehensive Needs Assessment",
        content: "The first step in any successful home modification project is understanding the unique needs and goals of the individual. ReviraCare begins with a comprehensive needs assessment, during which our experts evaluate the client’s living environment, mobility requirements, and functional limitations. This assessment involves consultations with the client, their caregivers, and, if necessary, medical or occupational therapists.",
      },
      {
        title: "Client-Centered Design Solutions",
        content: "Once the needs assessment is complete, our team works closely with the client to develop design solutions that align with their preferences and lifestyle. ReviraCare prioritizes client involvement throughout the planning process, ensuring that modifications reflect their personal tastes and daily routines. Whether it’s installing a wheelchair ramp, widening doorways, or creating an accessible bathroom, our goal is to create functional spaces that feel like home.",
      },
      {
        title: "Leveraging Cost-Effective Materials And Techniques",
        content: "Affordability is a key consideration in every project, and ReviraCare is committed to finding cost-effective solutions without compromising quality or safety. We leverage our expertise to identify materials and techniques that provide durability and functionality at a reasonable cost. By working with trusted suppliers and contractors, we negotiate competitive pricing for essential components, such as grab bars, non-slip flooring, and accessible fixtures.",
      },
      {
        title: "Utilizing Government Programs And Funding Assistance",
        content: "Many clients are eligible for financial assistance through government programs, grants, or insurance plans like the NDIS. ReviraCare takes an active role in helping clients navigate these resources, ensuring they can access the funding they need. Our team assists with applications, documentation, and communication with funding agencies, simplifying what can often be a complex process.",
      },
      {
        title: "Prioritizing Essential Modifications",
        content: "For clients with budget constraints, ReviraCare focuses on implementing the most critical modifications first. By prioritizing essential changes that have the greatest impact on safety and functionality, we ensure that clients experience immediate improvements in their living conditions. For example, installing a stairlift or modifying a bathroom for wheelchair accessibility may take precedence over cosmetic updates.",
      },
      {
        title: "Emphasizing Energy Efficiency And Long-Term Savings",
        content: "In addition to immediate accessibility improvements, ReviraCare considers the long-term financial implications of home modifications. By incorporating energy-efficient solutions, such as LED lighting, insulated windows, or water-saving fixtures, we help clients reduce utility costs over time. This forward-thinking approach ensures that clients benefit from both immediate and lasting value.",
      },
      {
        title: "Partnering With Community Organizations And Charities",
        content: "ReviraCare collaborates with local community organizations and charities to extend financial support and resources to clients in need. These partnerships allow us to connect clients with additional funding opportunities, volunteer labor, or donated materials that can significantly reduce project costs. This collaborative spirit reflects our commitment to inclusivity and social responsibility.",
      },
      {
        title: "Offering Flexible Payment Plans",
        content: "To further ease the financial burden on clients, ReviraCare offers flexible payment plans that allow modifications to be completed without upfront payment in full. These plans are tailored to each client’s financial situation, providing manageable installment options that fit within their budget.",
      },
      {
        title: "Ensuring Quality And Compliance",
        content: "Affordability should never come at the expense of quality or safety. ReviraCare is dedicated to upholding the highest standards of workmanship and compliance with accessibility regulations. Our team of skilled professionals ensures that every modification meets relevant building codes, safety standards, and disability guidelines.",
      },
      {
        title: "Providing Education And Training",
        content: "For many clients, adapting to a newly modified home requires a period of adjustment. ReviraCare provides education and training to help clients and their families make the most of their new environment. This includes guidance on using adaptive equipment, maintaining accessible features, and optimizing the functionality of the space.",
      },
      {
        title: "Fostering Innovation In Accessibility Design",
        content: "ReviraCare stays at the forefront of accessibility design by exploring new technologies and solutions that enhance functionality and affordability. From smart home systems that improve convenience to modular designs that adapt to changing needs, we embrace innovation to deliver cutting-edge solutions.",
      },
      {
        title: "Continuous Improvement And Client Feedback",
        content: "ReviraCare values feedback from clients as an essential component of our commitment to excellence. After each project, we actively seek input to evaluate the effectiveness of our processes, materials, and designs. By continuously refining our approach, we ensure that our services remain responsive to the evolving needs of our clients.",
      },
    ],
    kidsVersion: {
      title: "How to Make Your Home a Super-Easy Playground!",
      content: "Did you know your house can have super-powers? We help put in magic ramps and special buttons so you can reach everything yourself! It's like turning your home into a space-ship where you are the captain and can go anywhere!",
      funFact: "A special 'Smart Shower' can remember exactly how warm you like your water. It's like it has a tiny brain just for your bath time!",
    },
  },
  {
    id: "life-skills",
    title: "Empowering Futures through Modern Life Skills Development",
    excerpt:
      "Discover how our tailored programs bridge the gap between goals and reality, equipping individuals with the practical tools for independent daily living.",
    href: "/blogs/life-skills",
    image: "/images/blogs/life-skills-workshop-v2.png",
    imageAlt: "Modern life skills development studio",
    category: "Growth & Independence",
    readTimeMinutes: 5,
    date: "Oct 28, 2025",
    author: {
      name: "David Chen",
      role: "Support Coordinator",
      avatar: "/images/blogs/life-skills-workshop-v2.png",
    },
    sections: [
      {
        title: "The Journey to Independence",
        content: "Learning new skills is a lifelong journey. For our participants, it's about gaining the confidence to handle everyday tasks independently.",
      },
      {
        title: "Workshops for Real-World Success",
        content: "Our workshops cover everything from digital literacy to cooking, budgeting, and travel training. We focus on modern life skills that are relevant in today's fast-paced world.",
      },
    ],
    kidsVersion: {
      title: "Learning Superpowers for Growing Up!",
      content: "Life skills are like little superpowers you learn to do things on your own. Like learning how to make a yummy sandwich or how to use a computer to draw amazing pictures!",
      funFact: "Cooking is actually a bit like science. When you bake a cake, you're doing a chemistry experiment!",
    },
  },
  {
    id: "community-integration",
    title: "The Heart of Inclusion: Building Stronger Community Ties",
    excerpt:
      "Social participation is vital for well-being. Explore how we facilitate meaningful connections and foster a sense of belonging in every community.",
    href: "/blogs/community-integration",
    image: "/images/blogs/community-socialization-v2.png",
    imageAlt: "Premium community social rooftop gathering",
    category: "Community",
    readTimeMinutes: 7,
    date: "Oct 12, 2025",
    author: {
      name: "Emma Wilson",
      role: "Community Engagement Manager",
      avatar: "/images/blogs/life-skills-workshop-v2.png",
    },
    sections: [
      {
        title: "The Importance of Belonging",
        content: "Being part of a community is what makes life rich and fulfilling. No one should ever feel like an outsider.",
      },
      {
        title: "Facilitating Connections",
        content: "We organize local meetups, sports groups, and creative workshops to bring people together. Inclusion is a practice we live every single day.",
      },
    ],
    kidsVersion: {
      title: "Making New Friends Everywhere!",
      content: "Community means all the people who live near you. Inclusion means making sure everyone gets to play and have fun together, no matter what!",
      funFact: "Sharing a laugh with a friend actually makes your heart happy and your body stronger!",
    },
  },
  {
    id: "nursing-care",
    title: "How Is Nursing Care Tailored To Individuals With Complex Health Needs?",
    excerpt:
      "Complex health needs require a meticulous, patient-centered approach. Discover how ReviraCare designs nursing care plans that prioritize physical and emotional well-being.",
    href: "/blogs/nursing-care",
    image: "/images/blogs/nursing-care-v2.png",
    imageAlt: "Professional nursing care in a modern home",
    category: "Health & Care",
    readTimeMinutes: 7,
    date: "Feb 15, 2026",
    author: {
      name: "Emma Wilson",
      role: "Care Manager",
      avatar: "/images/blogs/life-skills-workshop-v2.png",
    },
    sections: [
      {
        title: "Introduction to Complex Care",
        content: "Nursing care for individuals with complex health needs requires a meticulous, patient-centered approach that addresses their unique medical, physical, emotional, and social challenges.",
      },
      {
        title: "Personalized Care Planning",
        content: "We believe that no two individuals are the same. Our clinical team works with families to create specialized care plans that evolve with the participant's needs.",
      },
    ],
    kidsVersion: {
      title: "Having a Super-Helper Friend at Home!",
      content: "Some people need a little extra help to stay strong and healthy. A nurse is like a super-helper friend who comes to your house to make sure you feel your best every single day!",
      funFact: "Drinking enough water and getting plenty of sleep are two of the best ways to help your super-helper nurse keep you healthy!",
    },
  },
  {
    id: "ndis-planning",
    title: "How to Get the Most Out of Your NDIS Plan",
    excerpt:
      "Practical tips and strategies to maximise your NDIS funding and align your plan with your goals for independence and wellbeing.",
    href: "/blogs/ndis-planning",
    image: "/images/blogs/accessibility-kitchen.png",
    imageAlt: "Accessible home planning",
    category: "NDIS",
    readTimeMinutes: 8,
    date: "Oct 5, 2025",
    author: {
      name: "Michael Ross",
      role: "NDIS Consultant",
      avatar: "/images/blogs/life-skills-workshop-v2.png",
    },
    sections: [
      {
        title: "Understanding Your Map",
        content: "The NDIS can be complex, but with the right guidance, it's a powerful tool for positive change. Understanding your budget is key.",
      },
    ],
    kidsVersion: {
      title: "Planning for Big Adventures!",
      content: "A plan is like a treasure map. It shows you where you want to go and what you need to get there. NDIS helps you get the tools you need!",
      funFact: "The best plans always have room for a little bit of surprise fun!",
    },
  },
  {
    id: "supported-living",
    title: "Supported Independent Living: What to Expect",
    excerpt:
      "A clear guide to SIL services, how they work, and how ReviraCare supports you to live independently in a shared or solo setting.",
    href: "/blogs/supported-living",
    image: "/images/blogs/life-skills-workshop.png",
    imageAlt: "Supported living and life skills",
    category: "SIL",
    readTimeMinutes: 6,
    date: "Sep 22, 2025",
    author: {
      name: "Lisa Thompson",
      role: "SIL Manager",
      avatar: "/images/blogs/life-skills-workshop-v2.png",
    },
    sections: [
      {
        title: "Living Your Way",
        content: "SIL is all about choosing how and where you live, with just the right amount of support to thrive in your own space.",
      },
    ],
    kidsVersion: {
      title: "Living in Your Own Cozy Space!",
      content: "Imagine having your very own room where you can decide what color the walls are! Supported living means you live on your own, but nice helpers come over when you need a hand.",
      funFact: "Decorating your own room is the best way to show who you are!",
    },
  },
  {
    id: "social-outings",
    title: "Building Confidence Through Social Outings and Activities",
    excerpt:
      "Why social participation matters for mental health and how we design outings and activities that suit your interests and pace.",
    href: "/blogs/social-outings",
    image: "/images/blogs/community-socialization.png",
    imageAlt: "Community and social activities",
    category: "Community",
    readTimeMinutes: 5,
    date: "Sep 10, 2025",
    author: {
      name: "Sam Parker",
      role: "Activity Leader",
      avatar: "/images/blogs/life-skills-workshop-v2.png",
    },
    sections: [
      {
        title: "Boost Your Mood",
        content: "Getting out and about is a great way to boost your mood and build lasting friendships through shared experiences.",
      },
    ],
    kidsVersion: {
      title: "Fun Field Trips with Friends!",
      content: "Going on an outing is like going on a mini vacation! Whether it's the park or a movie, doing it with friends makes it ten times better.",
      funFact: "Smiling at someone you don't know might just make their whole day better!",
    },
  },
  {
    id: "daily-living-skills",
    title: "Daily Living and Life Skills: Where to Start",
    excerpt:
      "From budgeting to meal prep and personal care—how our life skills programs are tailored to your goals and NDIS plan.",
    href: "/blogs/daily-living-skills",
    image: "/images/blogs/life-skills-workshop-v2.png",
    imageAlt: "Life skills workshop",
    category: "Growth & Independence",
    readTimeMinutes: 7,
    date: "Aug 28, 2025",
    author: {
      name: "David Chen",
      role: "Support Coordinator",
      avatar: "/images/blogs/life-skills-workshop-v2.png",
    },
    sections: [
      {
        title: "Building Blocks",
        content: "Daily living skills are the building blocks of independence. We help you master small tasks that lead to big changes.",
      },
    ],
    kidsVersion: {
      title: "Mastering the 'Big Kid' Skills!",
      content: "These are things you do every day, like brushing your teeth. When you get really good at them, you feel like a pro!",
      funFact: "Making your bed in the morning actually helps your brain stay organized all day!",
    },
  },
  {
    id: "accessible-housing",
    title: "Understanding SDA: Specialist Disability Accommodation",
    excerpt:
      "What SDA is, who it's for, and how ReviraCare helps you find and settle into accommodation that supports your needs.",
    href: "/blogs/accessible-housing",
    image: "/images/blogs/accessibility-kitchen-v2.png",
    imageAlt: "Accessible housing",
    category: "SDA",
    readTimeMinutes: 6,
    date: "Aug 15, 2025",
    author: {
      name: "Kirsty Miller",
      role: "Housing Specialist",
      avatar: "/images/blogs/life-skills-workshop-v2.png",
    },
    sections: [
      {
        title: "High Support Needs",
        content: "SDA is housing designed for people with very high support needs, incorporating special features for safety and ease of life.",
      },
    ],
    kidsVersion: {
      title: "Super-Powered Houses!",
      content: "Some houses have super-powers! They might have doors that open themselves. These houses are made for very special people.",
      funFact: "Some SDA homes have kitchens where the whole stove can move up and down! Magic!",
    },
  },
  {
    id: "carer-wellbeing",
    title: "Supporting Carers and Families: Resources and Respite",
    excerpt:
      "How we work with families and carers to ensure sustainable support and access to respite when it's needed.",
    href: "/blogs/carer-wellbeing",
    image: "/images/blogs/community-socialization-v2.png",
    imageAlt: "Carers and community support",
    category: "Family & Carers",
    readTimeMinutes: 5,
    date: "Aug 2, 2025",
    author: {
      name: "Emma Wilson",
      role: "Community Engagement Manager",
      avatar: "/images/blogs/life-skills-workshop-v2.png",
    },
    sections: [
      {
        title: "Unsung Heroes",
        content: "Carers' wellbeing is just as important as our participants'. We provide respite services that allow families to take a breath.",
      },
    ],
    kidsVersion: {
      title: "Being a Super Helper for Your Family!",
      content: "Helpers and families do a lot of hard work. Sometimes they need a little break too. We help them rest so they stay strong!",
      funFact: "A warm hug is one of the best ways to say 'Thank You' to a helper!",
    },
  },
];
