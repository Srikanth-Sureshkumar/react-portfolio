const Contact = () => {

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="contact-glow"></div>

      <div
        className="section-label"
        style={{ justifyContent: "center" }}
      >
        Contact
      </div>

      <h2>
        Let's build <br />
        <span
          style={{
            WebkitTextStroke: "1px rgba(232,232,240,0.3)",
            color: "transparent",
          }}
        >
          something
        </span>
        <br />
        together.
      </h2>

      <p>
        Available for freelance projects, full-time roles, and open source
        collaboration. Let's talk.
      </p>

      <div className="contact-links">

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=skanth.suresh@gmail.com"
          className="contact-card"
          target="_blank"
        >
          <i className="fa-solid fa-envelope"></i>
          <span>Email Me</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Srikanth-Sureshkumar"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/srikanth-sureshkumar/"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>

      </div>
    </section>
  );
};

export default Contact;