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
import TAILWIND from "../assets/images/tailwind-css.png";
import GITHUB from "../assets/images/github-white-icon.png";


const About = () => {
  
  return (
    <section className="about" id="about" data-aos="fade-right"> 
      <div>
        <div className="section-label">About me</div>
        <h2>Who I am</h2>

        <p>Hi, I'm Srikanth Sureshkumar, a MERN Stack Developer passionate about building scalable and user-friendly web applications.</p>

        <p>I specialize in developing full-stack solutions using MongoDB, Express.js, React, and Node.js, and I enjoy creating clean interfaces and efficient backend systems.</p>


        <br />

        <div style={{ display: "flex", gap: "16px"}}>
          <a 
            href="Srikanth_Sureshkumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: "14px" }}
          >
            <i class="fa-solid fa-download"></i> Resume
          </a>
          <a href="#contact" className="btn btn-ghost" style={{fontSize: "14px"}}>
            Hire me
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
            <img src={TAILWIND} alt="tailwind-css-icon"/>
          </span>
          <span className="skill-name">Tailwind CSS</span>
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
            <img src={GITHUB} alt="github-icon"/>
          </span>
          <span className="skill-name">GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default About