import {
  mobile,
  backend,
  creator,
  web,
  logistic,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  cpp,
  docker,
  meta,
  starbucks,
  axia,
  tesla,
  shopify,
  carrent,
  numpy,
  NotGeminia,
  jobit,
  scikitlearn,
  pandas,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analysis",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "pandas",
    icon: pandas,
  },
  {
    name: "scikitlearn",
    icon: scikitlearn,
  },
];

const experiences = [
  {
    title: "FullStack Developer (Intern)",
    company_name: "axia",
    icon: axia,
    iconBg: "#383E56",
    date: "June 2024 - Pressent",
    points: [
      `Worked on companies wedsite using react.js talwind css ${"https://www.ax-ia.ai/"}`,
      "Developing and maintaining web applications using React.js and other related technologies and also used wix studio.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real_TimeChatRoom",
    description:
      "The Real_TimeChatRoom_AIGemini project is a real-time chat application that allows users to communicate instantly. It has two main parts: the backend and the frontend. This setup ensures smooth and real-time communication between users. user can also chat with AI and AI can build proper file strucer of code.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongo db",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/sohamtapse/Real_TimeChatRoom_AIGemini",
  },
  {
    name: "NOT-Gemini",
    description:
      "NOT-Gemini is a web development project that utilizes modern JavaScript technologies to build dynamic user interfaces.It is the clone of Gemini website but using some personal changes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: NotGeminia,
    source_code_link: "https://github.com/sohamtapse/NOT-Gemini",
  },

  {
    name: "c++ compiler",
    description:
      "It is a C++ L-Graph compiler. I created this because using L-Graph typically requires installing libraries, which can be inconvenient. To simplify the process, I developed an online compiler that allows users to run L-Graph code without any installations.",
    tags: [
      {
        name: "reat",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cpp,
    source_code_link: "https://github.com/rusil3473/PBL-SEM-IV/tree/soham",
  },
  {
    name: "number_Predictor",
    description:
      "This Project is about trains neural network models to recognize handwritten digits from the MNIST dataset. It includes data loading, preprocessing (scaling and flattening), model creation (using keras.Sequential), training, evaluation, and visualization of results using confusion matrices and heatmaps.",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "matplot",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
    ],
    image: numpy,
    source_code_link:
      "https://github.com/sohamtapse/number_Predictor_tensorflow",
  },
  {
    name: "Breast_Cancer_prediction",
    description:
      "This code trains a Logistic Regression model to predict breast cancer diagnosis (malignant/benign). It preprocesses the data by scaling features and converting the diagnosis to numerical values, then evaluates the model's accuracy and performance using a classification report. It also includes basic data exploration, like checking for missing values and visualizing the diagnosis distribution.",
    tags: [
      {
        name: "sklearn",
        color: "blue-text-gradient",
      },
      {
        name: "matplot",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: logistic,
    source_code_link: "https://github.com/sohamtapse/Breast_Cancer_prediction",
  },
];

export { services, technologies, experiences, testimonials, projects };
