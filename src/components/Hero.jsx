const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-glow"></div>
      <div className="hero-content">
        <div className="hero-tag">Srikanth Sureshkumar</div>
        <h1>
          MERN <br />
          <span className="outline">Full stack</span> <br />
          <span className="green">Dev.</span>
        </h1>
        <p className="hero-desc">
          Building scalable web applications with MongoDB, Express, React,
          and Node.js.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">↓ View Work</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;