import React from "react";
import experienceImg from "../assets/images/developer.png";

const Experience = () => {
  const experiences = [
    {
      period: "NOV 2025 — MAR 2026",
      title: "MERN Stack Developer - Internship",
      company: "Cloudi5 Academy, Coimbatore · On-site",
      description:
        "Built 3+ full-stack MERN applications with MongoDB database integration, async/await API calls, and complete CRUD functionality • Managed codebase using Git across multiple feature branches in a collaborative Agile team environment • Deployed applications to Vercel and Render using environment configuration (.env)",
    },
    {
      period: "JUN 2024 — JUN 2024",
      title: "Web Designer - Internship",
      company: "Cloudi5 technologies, Coimbatore · On-site",
      description:
        "Developed 5+ responsive web pages using HTML5, CSS3, and Bootstrap with mobile-first design principles • Assisted in UI design, cross-browser testing, and debugging, reducing reported UI issues by 30%",
    },
  ];

  const techStack = ["MERN Stack","JWT", "Git", "Deployment"];

  return (
    <section className="experience" id="experience" data-aos="fade-left" >
      <div className="section-label">Career</div>
      <h2>Work Experience</h2>

      <div className="experience-container">

        {/* LEFT SIDE TIMELINE */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="exp-period">{exp.period}</div>
              <div className="exp-title">{exp.title}</div>
              <div className="exp-company">{exp.company}</div>
              <p className="exp-desc">{exp.description}</p>
            </div>
          ))}
        </div>

        

        {/* RIGHT SIDE FLOATING ANIMATION */}
        <div className="experience-visual">

          <div className="experience-blob">

            <img
              src={experienceImg}
              alt="Developer"
              className="experience-img"
            />

            {techStack.map((tech, i) => (
              <div
                key={tech}
                className="tech-badge"
                style={{
                  top: `${[10, 15, 70, 80][i]}%`,
                  left: `${[70, 5, 85, 10][i]}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${5 + i}s`
                }}
              >
                {tech}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;