import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import projectsData from "../data/ProjectsData";
import distriserveImg from "../assets/distriserve-img.png"; // Add real images
import vanlifeImg from "../assets/vanlife-img.png";
import quizzicleImg from "../assets/quiz-img.png";
import "../styles/Project.scss"; // Custom styles

export default function Project() {
  return (
    <div className="projects-page container text-center">
      {/* Header Section */}
      <header className="my-5">
        <h1 className="project-header">My Projects</h1>
        <p className="lead text-light">
          Here are some of the projects I’ve worked on, showcasing my skills in frontend and full-stack development.
        </p>
      </header>

      {/* Project Showcase */}
      <section className="project-showcase">
        {/* Bootstrap Carousel */}
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 img" src={distriserveImg} alt="DistriServe Project" />
            
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img" src={vanlifeImg} alt="VanLife Project" />
            
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img" src={quizzicleImg} alt="Quizzicle Project" />
            
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Projects List */}
      <section className="row my-5">
        {projectsData.map((project) => (
          <div key={project.id} className="col-md-4">
            <div className="card project-card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.shortDescription}</p>
                <Link to={`/project/${project.id}`} className="btn btn-warning">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
