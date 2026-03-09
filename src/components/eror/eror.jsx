import { Link } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <div className="error-page">

      <h1 className="error-number">404</h1>

      <h2 className="error-title">Page Not Found</h2>

      <p className="error-text">
        Sorry, the page you are looking for does not exist.
      </p>

      <div className="error-icon">⚠️</div>

      <Link to="/">
        <button className="error-btn">
          Go To Home
        </button>
      </Link>

    </div>
  );
}

export default Error;