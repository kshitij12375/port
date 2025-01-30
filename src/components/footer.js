import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="social-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="copyright">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>

        {/* Back-to-Top Button */}
        <div className="back-to-top">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="top-button"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
