import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-success">Thank You!</h2>
      <p>Your message has been sent successfully. I will get back to you soon.</p>
      <Link to="/" className="btn btn-primary">Go Back to Home</Link>
    </div>
  );
}
