import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/javascript.png";
import reactLogo from "../assets/logos/react.png";
import reduxLogo from "../assets/logos/redux.png";
import nodeLogo from "../assets/logos/node.png";
import expressLogo from "../assets/logos/express.png";
import mongoLogo from "../assets/logos/mongodb.png";
import gitLogo from "../assets/logos/git.png";
import jwtLogo from "../assets/logos/jwt.png";
import tailwindLogo from "../assets/logos/tailwind.png";
import bootstrapLogo from "../assets/logos/bootstrap.png";

import "../styles/About.scss";

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        {/* About Me */}
        {/* Introduction */}
        <p className="lead">
          Hi, I'm <span className="text-highlight">Mobolaji Samuel</span>, a passionate Full-Stack Developer with a strong focus on the frontend using React, and growing expertise in backend development with Node.js and Express.
          I love crafting beautiful and functional web applications that deliver great user experiences and solid backend performance.
        </p>

        {/* Tech Journey */}
        <div className="mt-5">
          <h3 className="text-highlight">My Tech Journey</h3>
          <p>
            I've always had a strong interest in tech since my university days,
            even though I studied <span className="fw-semibold">Accounting & Finance</span>. I was surrounded by many
            tech enthusiasts, and I found their work fascinating. The idea of creating
            full applications with just lines of code amazed me! That curiosity led me
            to start learning <span className="fw-semibold">HTML</span>, and from there, I never looked back. Today, I'm
            a dedicated <span className="fw-semibold">Frontend Developer</span> growing into a capable <span className="fw-semibold">Full-Stack Engineer</span>.
          </p>
        </div>

        {/* My Skillset */}
        <div className="mt-5">
          <h3 className="text-highlight">My Skillset</h3>
          <ul className="skills-list">
            <li><img src={htmlLogo} alt="HTML" /> HTML</li>
            <li><img src={cssLogo} alt="CSS" /> CSS</li>
            <li><img src={jsLogo} alt="JavaScript" /> JavaScript (ES6+)</li>
            <li><img src={reactLogo} alt="React" /> React.js & Hooks</li>
            <li><img src={reduxLogo} alt="Redux" /> State Management (Context API, Redux)</li>
            <li><img src={bootstrapLogo} alt="Bootstrap" /> Bootstrap</li>
            <li><img src={tailwindLogo} alt="Tailwind CSS" /> Tailwind CSS</li>
            <li><img src={gitLogo} alt="Git" /> Git & GitHub</li>
            <li><img src={nodeLogo} alt="Node.js" /> Node.js</li>
            <li><img src={expressLogo} alt="Express.js" /> Express.js</li>
            <li><img src={mongoLogo} alt="MongoDB" /> MongoDB & Mongoose</li>
            <li><img src={jwtLogo} alt="JWT" /> JWT Auth & HttpOnly Cookies</li>
          </ul>

        </div>

        {/* My Achievements */}
        <div className="mt-5">
          <h3 className="text-highlight">My Achievements</h3>
          <p>
            Throughout my journey, I've worked on some exciting projects, including:
          </p>
          <ul>
            <li>🚛 <span className="fw-semibold">Distriserve Project</span> – A logistics tracking system</li>
            <li>🚐 <span className="fw-semibold">Vanlife Project</span> – A web platform for van rentals</li>
            <li>📝 <span className="fw-semibold">Quizzicle Project</span> – A quiz app built while learning React</li>
            <li>📚 <span className="fw-semibold">Blog Project</span> – A full-stack blog platform with authentication, CRUD functionality, and MongoDB integration</li>
          </ul>
          <p>I also hold certifications from <span className="fw-semibold">freeCodeCamp</span>.</p>
        </div>

        {/* My Passion & Goals */}
        <div className="mt-5">
          <h3 className="text-highlight">My Passion & Goals</h3>
          <p>
            My goal is to become a <span className="fw-semibold">well-rounded software developer</span>. 
            I'm currently expanding my knowledge in <span className="fw-semibold">backend development</span> to build robust, scalable, and secure <span className="fw-semibold">full-stack applications</span> that solve real-world problems.
          </p>
        </div>

        {/* A Personal Touch */}
        <div className="mt-5">
          <h3 className="text-highlight">A Personal Touch</h3>
          <p>
            I thrive in <span className="fw-semibold">collaborative environments</span> and believe in <span className="fw-semibold">continuous learning</span>.
            I'm always open to networking, sharing knowledge, and working on <span className="fw-semibold">exciting projects</span>.
            If you're looking for a dedicated developer who can handle both frontend finesse and backend logic—let's connect!
          </p>
        </div>
      </div>
    </section>
  );
}
