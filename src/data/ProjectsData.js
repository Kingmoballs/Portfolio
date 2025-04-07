import distriserveImg from "../assets/distriserve-img.png";
import distriserveImg1 from "../assets/distriserve-img1.png";
import distriserveImg2 from "../assets/distriserve-img2.png";
import distriserveImg3 from "../assets/distriserve-img3.png";
import distriserveImg4 from "../assets/distriserve-img4.png";
import distriserveImg5 from "../assets/distriserve-img5.png";
import distriserveImg6 from "../assets/distriserve-img6.png";
import distriserveImg7 from "../assets/distriserve-img7.png";
import vanlifeImg from "../assets/vanlife-img.png";
import vanlifeImg1 from "../assets/vanlife-img1.png";
import vanlifeImg2 from "../assets/vanlife-img2.png";
import vanlifeImg3 from "../assets/vanlife-img3.png";
import quizzicleImg from "../assets/quiz-img.png";
import quizzicleImg1 from "../assets/quiz-img1.png";

const projectsData = [
  {
    id: 1,
    title: "Distriserve Logistics Tracker",
    shortDescription: "A logistics tracking system with real-time updates and API integration.",
    description: [
      "Distriserve is a logistics platform connecting truck owners with business owners in need of shipping services. The platform facilitates shipment booking, real-time tracking, and enables truck owners to accept orders, update tracking statuses, and receive payment upon trip completion",
      "Key Contributions:",
      [
        "Developed core pages: Log-In, Sign-Up,How-It-Works and all the pages on the carrier side of the website",
        "Designed the UI with React, SCSS, and Bootstrap to enhance responsiveness.",
        "Integrated APIs for real-time booking tracking, driver assignments, fleet management, status updates and all other APIs in the project",
        "Implemented and ensured seamless user authentication."
      ]
    ],
    image: distriserveImg,
    images: [distriserveImg, distriserveImg1, distriserveImg2, distriserveImg3, distriserveImg4, distriserveImg5, distriserveImg6, distriserveImg7], // Use the correct imported image
    technologies: ["React", "JavaScript", "Bootstrap", "SCSS", "API Integration"],
    githubLink: "https://github.com/Motolani/Distriserve_frontend",
    liveDemo: "https://distriserve.com",
  },
  {
    id: 2,
    title: "VanLife App",
    shortDescription: "A van rental marketplace for digital nomads with mock API integration.",
    description: [
      "VanLife is a van rental application that allows users to find and rent vans for travel.",
      "Key Features:",
      [
        "Built with React for a seamless frontend experience.",
        
        "Responsive design using Bootstrap, ensuring usability across devices."
      ]
    ],
    image: vanlifeImg,
    images: [vanlifeImg, vanlifeImg1, vanlifeImg2, vanlifeImg3],
    technologies: ["React", "Bootstrap"],
    githubLink: "https://github.com/Kingmoballs/vanLife",
    liveDemo: "https://bookvan.netlify.app",
  },
  {
    id: 3,
    title: "Quizzicle App",
    shortDescription: "A fun quiz app built with React and API integration.",
    description: [
      "Quizzicle is a trivia quiz game that fetches questions from an external API, allowing users to test their knowledge in different categories.",
      "Key Features:",
      [
        "Dynamic quiz generation using an external trivia API.",
        "Interactive UI built with React and styled with Bootstrap.",
        "Score tracking system to evaluate user performance."
      ]
    ],
    image: quizzicleImg,
    images: [quizzicleImg, quizzicleImg1],
    technologies: ["React", "API Integration"],
    githubLink: "https://github.com/Kingmoballs/quizzical-react",
    liveDemo: "https://mob-quizzical.netlify.app/",
  }
];

export default projectsData;
