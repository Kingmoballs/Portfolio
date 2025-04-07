import "../styles/About.scss";

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        {/* About Me */}
        {/* Introduction */}
        <p className="lead">
          Hi, I'm <span className="text-highlight">Mobolaji Samuel</span>, a passionate Frontend Developer specializing in React. 
          I love crafting beautiful and functional web applications that enhance user experiences.
        </p>
        <div className="mt-5">
          <h3 className="text-highlight">My Tech Journey</h3>
          <p>
            I've always had a strong interest in tech since my university days, 
            even though I studied <span className="fw-semibold">Accounting & Finance</span>. I was surrounded by many 
            tech enthusiasts, and I found their work fascinating. The idea of creating 
            full applications with just lines of code amazed me! That curiosity led me 
            to start learning <span className="fw-semibold">HTML</span>, and from there, I never looked back. Today, I'm 
            a passionate <span className="fw-semibold">Frontend Developer specializing in React</span>.
          </p>
        </div>

        {/* My Skillset */}
        <div className="mt-5">
          <h3 className="text-highlight">My Skillset</h3>
          <ul className="skills-list">
            <li>✔ HTML, CSS, and JavaScript (ES6+)</li>
            <li>✔ React.js & React Hooks</li>
            <li>✔ State Management (Context API, Redux)</li>
            <li>✔ Bootstrap & Tailwind CSS</li>
            <li>✔ API Integration (REST & GraphQL)</li>
            <li>✔ Version Control (Git & GitHub)</li>
            <li>✔ Responsive & Mobile-First Design</li>
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
          </ul>
          <p>I also hold certifications from <span className="fw-semibold">freeCodeCamp</span>.</p>
        </div>

        {/* My Passion & Goals */}
        <div className="mt-5">
          <h3 className="text-highlight">My Passion & Goals</h3>
          <p>
            My goal is to become a <span className="fw-semibold">successful software developer</span>. I'm currently 
            mastering <span className="fw-semibold">backend development</span> to create <span className="fw-semibold">full-stack applications </span>  
            that solve real-world problems.
          </p>
        </div>

        {/* A Personal Touch */}
        <div className="mt-5">
          <h3 className="text-highlight">A Personal Touch</h3>
          <p>
            I thrive in <span className="fw-semibold">collaborative environments</span> and believe in <span className="fw-semibold">continuous learning</span>. 
            I'm always open to networking, sharing knowledge, and working on <span className="fw-semibold">exciting projects</span>. 
            If you're looking for a dedicated developer, let's connect!
          </p>
        </div>
      </div>
    </section>
  );
}
