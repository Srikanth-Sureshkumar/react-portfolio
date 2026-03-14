import { useEffect, useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("nav");

    const handleScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="nav">

      {/* LOGO */}
      <div className="nav-logo">
        <div className="logo-box">S</div>
        <span className="logo-text">
          Srikanth<span className="logo-dot">.</span>
        </span>
      </div>

      {/* MOBILE TOGGLE */}
      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>
        <li><a href="#experience" onClick={()=>setMenuOpen(false)}>Experience</a></li>
        <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;