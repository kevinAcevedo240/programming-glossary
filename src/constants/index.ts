import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  googledrive,
  googlesheets,
  github,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "Glossary",
    url: "#glossary",
  },
  
  {
    id: "2",
    title: "About Us",
    url: "#about",
  },
  
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "June 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "June 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "June 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "June 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Google Drive",
    icon: googledrive,
    width: 34,
    height: 34,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Google Sheets",
    icon: googlesheets,
    width: 23,
    height: 23,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot with essential features for small businesses.",
    price: "0",
    features: [
      "up to 1 chatbot",
      "2,000 messages",
      "Up to 2 team members",
      "Integration with 2 channels (e.g., website, WhatsApp)",
      "Limited chat history (up to 7 days)",
      "Access to predefined chat templates",
      "20 MB of vector database storage",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot with enhanced support and analytics.",
    price: "$30",
    features: [
      "6 chatbots",
      "15,000 messages per month",
      "Up to 5 team members",
      "Integration with 5 channels",
      "Extended chat history (up to 30 days)",
      "Priority email support",
      "Customizable chat templates",
      "1 GB of vector database storage",
      "Access to basic analytics dashboard",
      "Monthly usage reports",
      "API access",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Tailored AI chatbot solution with full customization and support.",
    price: "",
    features: [
      "Fully customizable chatbots and workflows",
      "Unlimited messages per month",
      "Unlimited team members",
      "Integration with unlimited channels",
      "Unlimited chat history",
      "Dedicated account manager",
      "Advanced analytics dashboard with detailed insights",
      "Real-time monitoring and alerts",
      "24/7 premium support",
      "Custom integrations and API access",
      "Monthly strategy sessions and training",
      "10 GB of vector database storage",
      "Custom AI training and deployment",
      "Single Sign-On (SSO) capability",
    ],
  },
];




export const benefits = [
  {
    id: "0",
    title: "Effortless Conversations",
    text: "Empower users to get instant, accurate responses without the hassle of searching through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Multi-Channel Integration",
    text: "Easily integrate with various tools and use across multiple channels, including websites, WhatsApp, and more.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Universal Accessibility",
    text: "Access from any device, anywhere, ensuring support and engagement is always at your fingertips.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Instant Answers",
    text: "Get quick, reliable answers to your questions, streamlining your search for information.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Limitless Inquiries",
    text: "No question is too complex. Experience seamless interaction with our highly responsive chatbot.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Adaptive Intelligence",
    text: "Continually refines its understanding, offering increasingly accurate and context-aware responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [

  {
    id: "0",
    title: "github",
    iconUrl: github,
    url: "https://github.com/DavidRobledo24",
  },
];
