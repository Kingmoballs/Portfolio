import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Project from "./pages/Project"
import ProjectDetails from "./pages/ProjectDetails"
import ThankYou from "./pages/ThankYou"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/global.scss";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
