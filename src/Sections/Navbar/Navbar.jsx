import { useState } from "react";
import styles from "./navbar.module.css"; // Import the CSS Module
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Hamburger Menu Button */}
      <button
        className={styles.menuBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><Link to="education" smooth={true} duration={500}>
            Education
          </Link></li>
        <li> 
        <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          </li>
        <li><Link to="skills" smooth={true} duration={500}>
            Skills
          </Link></li>
        <li><Link to="work" smooth={true} duration={500}>
            Work Experience
          </Link></li>
        <li><Link to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
