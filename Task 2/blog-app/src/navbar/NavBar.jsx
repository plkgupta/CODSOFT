import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./navbar.css";

export default function navbar() {
  const user = true;
  return (
    <div>
      <div className="navbar">
        <div className="nav1">
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="myimg"></div>
          </Link>
          <i className="searchicon fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="nav2">
          <li className="navli">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li className="navli">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
          </li>
          <li className="navli">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </li>
          <li className="navli">
            <Link
              to="/create"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Create
            </Link>
          </li>
          <li className="navli">
            <Link
              to="/update"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Update
            </Link>
          </li>
        </div>
        <div className="nav3">
          <a href="https://www.linkedin.com/in/palak-gupta-90674b238">
            <i className="navicon fa-brands fa-linkedin"></i>
          </a>
          <i className="navicon fa-brands fa-instagram"></i>
          <i className="navicon fa-solid fa-envelope"></i>
          <a href="https://github.com/plkgupta">
            <i className="navicon fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
