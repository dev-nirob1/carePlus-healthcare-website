import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import BaseButton from "../../Element/BaseButton";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  // Handle scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content flex justify-between align-center">
          <div className="logo">
            <Link to="/" className="flex align-center gap-1">
              <span className="logo-icon bg-primary"></span>
              <span className="logo-text">CarePlus</span>
            </Link>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <nav
            className={`navigation flex align-center gap-2 ${isMenuOpen ? "open" : ""}`}
          >
            <ul className="nav-links flex gap-2">
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={location.pathname === "/services" ? "active" : ""}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className={location.pathname === "/doctors" ? "active" : ""}
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={location.pathname === "/blog" ? "active" : ""}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <Link to="/appointments">
              <BaseButton className="bg-primary">Book Appointment</BaseButton>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
