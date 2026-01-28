import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">CarePlus Clinic</Link>
          </div>
          <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/appointments">Appointments</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
