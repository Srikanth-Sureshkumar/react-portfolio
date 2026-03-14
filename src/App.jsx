import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ScrollTop from "./components/ScrollTop";
import { Loader } from "./components/Loader";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    // loader timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;