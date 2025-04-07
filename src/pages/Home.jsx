import "../styles/HomePage.scss";
import { Link } from "react-router-dom"
import SAMMY from "../assets/moballs-pic.jpg"

export default function Home() {
    return (
      <div className="container mt-5  " >
        <div className="row align-items-center text-center text-md-start home">
          {/* Left Column - Text Section */}
          <div className="col-md-6">
            <p className="lead">Hello,</p>
            <h1 className="text-primary fw-bold">
              I am Mobolaji Samuel. <br /> Welcome to my Portfolio
            </h1>
          </div>
  
          {/* Right Column - Image Section */}
          <div className="col-md-3">
            <img
              src={SAMMY}
              className="img-fluid rounded shadow-sm profile-img"
              alt="Mobolaji's img"
            />
          </div>
        </div>
  
        {/* Button Section */}
        <div className="text-center mt-4">
          <Link to="/about">
            <button className="btn btn-success px-4 py-2 fw-bold">About Me</button>
          </Link>
          
        </div>
      </div>
    );
  }