import { useParams } from "react-router-dom";
import projectsData from "../data/ProjectsData";
import { Carousel } from "react-bootstrap";
import "../styles/ProjectDetails.scss";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id)); // Convert ID to number

  if (!project) {
    return <div className="container text-light mt-5">Project not found</div>;
  }

  return (
    <div className="container mt-5 text-light">
      <h2 className="text-center mb-3">{project.title}</h2>

      {/* Project Description with Formatting */}
      <div className="project-description">
        {project.description.map((item, index) => 
          Array.isArray(item) ? (
            <ul key={index} className="project-points">
              {item.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          ) : (
            <p key={index} className="mb-3">{item}</p>
          )
        )}
      </div>

      {/* Image Carousel */}
      <Carousel className="project-carousel mt-4">
        {project.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} className="d-block w-100" alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Technologies Used */}
      <div className="mt-4">
        <h4 className="text-center">Technologies Used:</h4>
        <ul className="list-inline text-center">
          {project.technologies.map((tech, index) => (
            <li key={index} className="list-inline-item badge bg-warning text-dark me-2 px-3 py-2">{tech}</li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="mt-4 text-center">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-3 px-4 py-2">
          View GitHub
        </a>
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-success px-4 py-2">
          Live Demo
        </a>
      </div>
    </div>
  );
}
