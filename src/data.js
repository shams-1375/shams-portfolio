
export const profile = {
  name: "Mohammed Shams Ahmed",
  role: "MERN Stack Developer",
  roles: ["Web Developer", "Frontend Developer", "MERN Stack Developer"],
  location: "Hyderabad, India",
  email: "ahmedshams1375@gmail.com",
  phone: "+91 6304820497",
  tagline:
    "Computer Science graduate with 1 year of experience building production-ready web apps with React.js, Node.js, Express.js, MongoDB and other web development technologies across international remote teams.",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/shams-1375",
    linkedin: "https://www.linkedin.com/in/shams-s13/",
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  {
    group: "Languages & Frontend",
    icon: "code",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "shadcn/ui",
      "DaisyUI",
    ],
  },
  {
    group: "Backend & Database",
    icon: "server",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "SQL", "MySQL", "REST APIs", "JWT"],
  },
  {
    group: "Tools & Platforms",
    icon: "tools",
    items: ["Git", "GitHub", "Figma", "FlutterFlow", "Postman", "Render", "Jira", "Slack"],
  },
];

export const projects = [
  {
    title: "Bazario",
    subtitle: "A Full-Stack E-Commerce Platform",
    period: "Feb 2026",
    image: "/projects/bazario.png",
    description:
      "Responsive full-stack e-commerce platform with user authentication, user management, product catalog, shopping cart, order management and Razorpay payment integration. Includes an admin dashboard to manage products, users, roles and order processing.",
    tech: ["MERN Stack", "Redux", "Cloudinary","Tailwind CSS", "shadcn/ui", "Razorpay"],
    live: "https://bazario-e-commerce-frontend.onrender.com/",
    repo: "https://github.com/shams-1375/Bazario---E-Commerce",
  },
  {
    title: "Taskify",
    subtitle: "Full-Stack Task Management System",
    period: "Dec 2025",
    image: "/projects/taskify.png",
    description:
      "MERN-based task management app with profile management, task creation, assignment and status tracking, plus dedicated pages for pending and completed tasks for efficient organization and progress management.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "React-router", "Tailwind CSS"],
    live: "https://taskify-frontend-c7lm.onrender.com/",
    repo: "https://github.com/shams-1375/Taskify-frontend",

  },
  {
    title: "NexChat",
    subtitle: "A real-time chat & vide-calling application",
    period: "Jan 2026",
    image: "/projects/nexchat.png",
    description:
      "MERN-based language exchange platform that connects users worldwide for language practice through real-time chat and video calling, with JWT authentication, friend requests, protected routes, onboarding, and customizable UI themes.",
    tech: [
      "MERN Stack", 
      "Zustand",
      "TanStack Query",
      "Tailwind CSS",
      "Stream API"
    ],
    live: "https://nexchat-42fb.onrender.com/",
    repo: "https://github.com/shams-1375/NexChat",
  },
];

export const experience = [
  {
    company: "PitchMatter (USA | Dubai)",
    location: "Remote",
    role: "Frontend Developer Intern",
    period: "Apr 2026 – Jul 2026 (3+ months)",
    points: [
      "Developed ~80% of the UI for the Refer & Earn module of the zynk.ing platform, building Recent Transactions, Unlock Tiers, Rewards and Referral History pages from scratch using React, TypeScript, Tailwind CSS and shadcn/ui.",
      "Built ~60% of the Subscription Management module for the PitchMatter Admin Dashboard, integrating REST APIs to manage plans, subscriptions, subscription status and real-time dashboard data through efficient state management.",
    ],
  },
  {
    company: "Avijo HealthCare Services (India)",
    location: "Remote",
    role: "Full Stack Developer Intern",
    period: "Mar 2026 – Jun 2026 (3+ months)",
    points: [
      "Designed and developed controllers and middleware using Node.js and Express.js, enhancing authentication, authorization and route security while collaborating with QA and deployment teams to deliver production-ready backend features.",
      "Implemented ~85% of the Login and Registration modules for alpha.avijo.in using React.js, integrating email/mobile OTP authentication, password-based login and ABDM services while redesigning the UI to improve user experience.",
    ],
  },
  {
    company: "Proceedit (Spain)",
    location: "Remote",
    role: "Frontend Developer Intern",
    period: "Mar 2025 – Sep 2025 (6+ months)",
    points: [
      "Collaborated with an international team to redesign the company's website, improving user interface consistency. Designed and prototyped responsive interfaces in Figma, creating reusable components and design systems.",
      "Implemented frontend screens with FlutterFlow for the production-ready trading platform Continuous Market Insights (CMI).",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (CSE)",
    school: "Jawaharlal Nehru Technological University Hyderabad",
    period: "Sep 2022 – Jun 2026",
    score: "CGPA: 8.0/10.0",
  },
  {
    degree: "Class XII",
    school: "Sri Chaitanya Junior Kalasala",
    period: "Jun 2020 – Mar 2022",
    score: "Aggregate: 91.5%",
  },
];