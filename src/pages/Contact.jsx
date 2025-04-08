import "../styles/Contact.scss";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="text-center">
          <h2 className="text-highlight">Contact Me</h2>
          <p>
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        {/* Contact Details */}
        <div className="row mt-5 text-center">
          {/* Email */}
          <div className="col-md-4">
            <i className="bi bi-envelope contact-icon"></i>
            <p>Email</p>
            <a href="mailto:mobolajiadebola@yahoo.com" className="contact-link">
              mobolajiadebola@yahoo.com
            </a>
          </div>

          {/* Phone */}
          <div className="col-md-4">
            <i className="bi bi-telephone contact-icon"></i>
            <p>Phone</p>
            <a href="tel:+2349135901760" className="contact-link">
              +2349135901760
            </a>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <i className="bi bi-chat-dots contact-icon"></i>
            <p>Socials</p>
            <div className="social-links">
              <a href="https://x.com/Iam_moballs" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://www.linkedin.com/in/samuel-mobolaji/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/Kingmoballs" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
          <form action="https://formsubmit.co/mobolajiadebola@yahoo.com" method="POST">
            <input type="hidden" name="_next" value="https://mobportfolio.netlify.app/thank-you" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" name="name" required />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required />
            </div>

            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          </div>
        </div>
      </div>
    </section>
  );
}
