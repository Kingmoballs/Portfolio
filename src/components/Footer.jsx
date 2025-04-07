import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer mt-5 py-4 ">
      <div className="container text-center">
        <div className="row">
          {/* Left Section - Brand Name */}
          <div className="col-md-4">
            <h5 className="footer-brand">Mobolaji Samuel</h5>
          </div>

          {/* Middle Section - Links */}
          <div className="col-md-4">
            <ul className="list-unstyled d-flex justify-content-center gap-3">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/project" className="footer-link">Project</a></li>
            </ul>
          </div>

          {/* Right Section - Social Links */}
          <div className="col-md-4">
            <ul className="list-unstyled d-flex justify-content-center gap-3">
              <li>
                <a href="mailto:mobolajiadebola@yahoo.com">
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/samuel-mobolaji/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Kingmoballs" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-3">
        <p className="footer-text">&copy; 2025 Mobolaji Samuel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
