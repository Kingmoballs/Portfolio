import { Link } from "react-router-dom";
import "../styles/ThankYou.scss";

export default function ThankYou() {
  return (
    <div className="thank-you-wrapper d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h2 className="text-success mb-3">Thank You!</h2>
        <p className="thank-you-message mb-4">
          Your message has been sent successfully.<br />I’ll get back to you as soon as possible.
        </p>
        <Link to="/" className="btn btn-primary px-4 py-2">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
