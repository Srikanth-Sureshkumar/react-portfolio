import heroImg from "../assets/images/working-with-laptop.png";

const Hero = () => {
  const techStack = ["React", "Node.js", "MongoDB", "Express"];

  return (
    <section className="hero" id="home" data-aos="fade-right">

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


      {/* Floating Developer Visual */}

      <div className="hero-visual">

        <div className="hero-blob">

          <div className="dev-emoji">
            <img src={heroImg} alt="Developer" style={{height: "180px"}}/>
          </div>

          {techStack.map((tech, i) => (
            <div
              key={tech}
              className="tech-tag"
              style={{
                top: `${[5,10,75,80][i]}%`,
                left: `${[65,5,70,5][i]}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + i}s`
              }}
            >
              {tech}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Hero;