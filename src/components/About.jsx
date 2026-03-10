import HTML from "../assets/images/html-icon.png";
import CSS from "../assets/images/css-icon.png";
import BOOTSTRAP from "../assets/images/bootstrap-5-logo-icon.png";
import JAVASCRIPT from "../assets/images/javascript-programming-language-icon.png";
import REACT from "../assets/images/react-js-icon.png";
import NODE from "../assets/images/node-js-icon.png";
import EXPRESS from "../assets/images/express-js.svg";
import MONGODB from "../assets/images/mongodb-icon.png";
import POSTMAN from "../assets/images/postman-icon.png";
import MONGOOSE from "../assets/images/Mongoose.js.png";
import GIT from "../assets/images/Git-logo.png";
import GITHUB from "../assets/images/github-white-icon.png";


const About = () => {
  return (
    <section className="about" id="about">
      <div>
        <div className="section-label">About me</div>
        <h2>Full-stack engineer, problem solver.</h2>

        <p>
          I'm Srikanth Sureshkumar — a MERN Stack Developer with practical
          experience designing and deploying full-stack web applications
          using MongoDB, Express.js, React.js, and Node.js. Adept at building
          RESTful APIs, crafting responsive user interfaces, and managing
          codebases with Git in collaborative Agile environments.
        </p>

        <p>
          Demonstrated ability to deliver end-to-end features — from database
          schema design to front-end integration — with a focus on clean,
          maintainable code. Passionate about solving real-world problems
          through technology and committed to continuous growth in modern
          web development practices.
        </p>

        <br />

        <div style={{ display: "flex", gap: "16px"}}>
          <a href="#contact" className="btn btn-primary" style={{fontSize: "14px"}}>
            Hire me
          </a>
          <a 
            href="Srikanth_Sureshkumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ fontSize: "14px" }}
          >
            <i class="fa-solid fa-download"></i> Resume
          </a>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        <div className="skill-item">
          <span className="skill-icon">
            <img src={HTML} alt="html-icon"/>
          </span>
          <span className="skill-name">HTML</span>
        </div>

        <div className="skill-item">
          <span className="skill-icon">
            <img src={CSS} alt="css-icon"/>
          </span>
          <span className="skill-name">CSS</span>
        </div>

        <div className="skill-item">
          <span className="skill-icon">
            <img src={BOOTSTRAP} alt="bootstrap-icon"/>
          </span>
          <span className="skill-name">Bootstrap</span>
        </div>

        <div className="skill-item">
          <span className="skill-icon">
            <img src={JAVASCRIPT} alt="javascript-icon"/>
          </span>
          <span className="skill-name">JavaScript</span>
        </div>

        <div className="skill-item">
          <span className="skill-icon">
            <img src={REACT} alt="react-js-icon"/>
          </span>
          <span className="skill-name">React.js</span>
        </div>

        <div className="skill-item">
          <span className="skill-icon">
            <img src={NODE} alt="node-js-icon"/>
          </span>
          <span className="skill-name">Node.js</span>
        </div>

        <div className="skill-item">
          <span className="skill-icon">
            <img src={EXPRESS} alt="express-js-icon"/>
          </span>
          <span className="skill-name">Express.js</span>
        </div>

        <div className="skill-item">
          <span className="skill-icon">
            <img src={MONGODB} alt="mongodb-icon"/>
          </span>
          <span className="skill-name">MongoDB</span>
        </div>

        <div className="skill-item">
          <span className="skill-icon">
            <img src={MONGOOSE} alt="Mongoose-icon"/>
          </span>
          <span className="skill-name">Mongoose</span>
        </div>

        <div className="skill-item">
          <span className="skill-icon">
            <img src={POSTMAN} alt="postman-icon"/>
          </span>
          <span className="skill-name">Postman</span>
        </div>

        <div className="skill-item">
          <span className="skill-icon">
            <img src={GIT} alt="git-icon"/>
          </span>
          <span className="skill-name">Git</span>
        </div>


        <div className="skill-item">
          <span className="skill-icon">
            <img src={GITHUB} alt="github-icon"/>
          </span>
          <span className="skill-name">GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default About