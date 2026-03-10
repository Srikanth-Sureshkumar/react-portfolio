import { useEffect } from "react";

const Navbar = () => {
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
      <div className="nav-logo"><a href="/">SK/</a></div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;