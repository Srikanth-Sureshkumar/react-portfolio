import React, { useState, useEffect } from "react";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`scroll-top ${show ? "show" : ""}`}
      onClick={scrollTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollTop;