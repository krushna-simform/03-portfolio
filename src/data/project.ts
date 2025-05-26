import { Project } from "@/types/types";

export const PROJECT: Array<Project> = [
  {
    id: crypto.randomUUID(),
    title: "Slack Skeleton UI",
    description:
      "This Project is a single-page skeleton UI clone of slack's main conversation page. It is build using HTML and CSS with focus on: Learn html and css, Accessibility, Responsive Design. This design replicates the slack interface. ",
    githubLink: "https://github.com/krushna-simform/slack-clone/tree/dev",
    liveLink: "https://slack-clone-skeleton.netlify.app",
    techStack: ["HTML", "CSS"],
  },
  {
    id: crypto.randomUUID(),
    title: "CaAAL Skeleton UI",
    description:
      "This project is a skeleton UI representation of CaALL mail section, show casting multiple products in a structured layout. It is build using HTML and CSS with a focus on accessibility and responsive design.",
    githubLink: "https://github.com/krushna-simform/CaALL/tree/dev",
    liveLink: "https://caall-practical.netlify.app",
    techStack: ["HTML", "CSS"],
  },
  {
    id: crypto.randomUUID(),
    title: "Flipkart Skeleton UI",
    description:
      "This project is a skeleton UI representation of Flipkart's main feed, show casting multiple products in a structured layout. It is build using HTML and CSS with a focus on accessibility and responsive design.",
    githubLink:
      "https://github.com/krushna-simform/flipkart-skeleton-ui/tree/dev",
    liveLink: "https://deploy-preview-5--flip-kart-skeleton.netlify.app",
    techStack: ["HTML", "CSS", "BootStrep"],
  },
  {
    id: crypto.randomUUID(),
    title: "Jira Custom Scrollbar",
    description:
      "This is a simple project which clones the Horizontal Scrollbar in Jira Board.",
    githubLink:
      "https://github.com/krushna-simform/jira-custom-scrollbar/tree/main",
    liveLink: "https://jira-custom-scrollbar.netlify.app",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: crypto.randomUUID(),
    title: "Youtube Video Hover Preview",
    description:
      "This project mimics the functionality of a YouTube feed page. When you hover over a video thumbnail, it automatically starts playing the video. You can also pause and play the video",
    githubLink: "https://github.com/krushna-simform/youTube-hover-preview",
    liveLink: "https://youtube-hover-preview.netlify.app",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: crypto.randomUUID(),
    title: "MagnifEye",
    description:
      "In this project, I created a library that uses the GitHub CDN. By using this library, you can apply image zoom functionality in your project. For more information, please refer to the documentation website.",
    githubLink: "https://github.com/krushna-simform/magnifEye",
    liveLink: "https://magnifeye.netlify.app",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: crypto.randomUUID(),
    title: "Scientific Calculator",
    description:
      "This is a web-based Scientific Calculator built using vanilla JavaScript. It supports basic arithmetic operations, advanced mathematical functions, trigonometry operations and parentheses for complex calculations.",
    githubLink:
      "https://github.com/krushna-simform/scientific-calculator/tree/dev",
    liveLink: "https://scientific-abacus.netlify.app",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: crypto.randomUUID(),
    title: "Scientific Calculator with Typescript",
    description:
      "This is a web-based Scientific Calculator built using vanilla TypeScript. It supports basic arithmetic operations, advanced mathematical functions, trigonometry operations and parentheses for complex calculations.",
    githubLink:
      "https://github.com/krushna-simform/scientific-calculator-ts/tree/dev",
    liveLink: "https://scientific-abacus-ts.netlify.app",
    techStack: ["HTML", "CSS", "TypeScript"],
  },
  {
    id: crypto.randomUUID(),
    title: "Product Management System",
    description:
      "This is a web application built with HTML, CSS, and TypeScript, using JSON demo product API data. The application follows the Model-View-Controller (MVC) approach.",
    githubLink:
      "https://github.com/krushna-simform/product-management-system/tree/dev",
    liveLink: "https://product-management-system-ts.netlify.app",
    techStack: ["HTML", "CSS", "TypeScript"],
  },
  {
    id: crypto.randomUUID(),
    title: "Chaos Monkey",
    description:
      "This project showcases the basic functionality of Netflix's Chaos Monkey. It dynamically takes down running servers to simulate and test the resilience and fault tolerance of applications.",
    githubLink: "https://github.com/krushna-simform/choas-monkey/tree/main",
    liveLink: null,
    techStack: ["JavaScript", "Express"],
  },
  {
    id: crypto.randomUUID(),
    title: "Adaptive Video Streaming",
    description:
      "This project mimics the functionality of a video streaming platform. It dynamically adjusts the video quality based on the speed of the internet connection, ensuring seamless playback even during slowdowns.",
    githubLink:
      "https://github.com/krushna-simform/adaptive-video-streaming/tree/main",
    liveLink: null,
    techStack: ["JavaScript", "Express"],
  },
  {
    id: crypto.randomUUID(),
    title: "FairShare",
    description:
      "Fair Share is a TypeScript-powered expense tracker that automatically splits group costs and tracks who owes what, with data saved in localStorage.",
    githubLink: "https://github.com/dhruvdhaduk-simform/fair-share/tree/dev",
    liveLink: "https://fair-shaare.vercel.app/",
    techStack: ["HTML", "CSS", "TypeScript"],
  },
  {
    id: crypto.randomUUID(),
    title: "Tic Tac Toe with React",
    description:
      "This project is built using React and implements the classic game of Tic-Tac-Toe.",
    githubLink: "https://github.com/krushna-simform/tic-tac-toe",
    liveLink: "https://tictactoe-with-js.netlify.app",
    techStack: ["React"],
  },
] as const;
