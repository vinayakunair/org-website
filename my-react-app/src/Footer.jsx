import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Row */}
        <div className="footer-top">
          
          <div className="footer-stats">
            <p className="stats-title">Questions Attempted by Learners</p>
            <h2>1,867+</h2>
          </div>

          <div className="footer-brand">
            <img src="/images/Logo-footer.png" alt="logo" className="Logo-footer" />
            <h2>Abhivrddhi</h2>
          </div>

          <div className="footer-app">
            <img
              src="/images/Playstore-icon.png"
              alt="Google Play"
              className="play-btn"
            />
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Services</a>
          <a href="#">Disclaimer</a>
        </div>

        <hr />

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © 2025 DEE & LEE SERVICES (INDIA) PRIVATE LIMITED. All Rights Reserved
          </p>

          <button className="scroll-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;