import classicfeastImg from "../assets/images/classicfeast.png";
import todoImg from "../assets/images/todo.png";
import portfolioImg from "../assets/images/portfolio.png";

const Projects = () => {
  const projects = [
    {
      number: "01 — 2025",
      name: "ClassicFeast — Responsive Restaurant Website",
      image: classicfeastImg,
      description:
        "Developed a multi-page responsive restaurant website with mobile-first design using HTML5, CSS3, and Bootstrap • Optimized UI layout and navigation structure • Applied modern CSS techniques including Flexbox and Grid.",
      tags: [
        { label: "HTML", accent: false },
        { label: "CSS", accent: false },
        { label: "JavaScript", accent: false },
      ],
      live: "https://classicfeast-restaurant.vercel.app/",
      source: "https://github.com/Srikanth-Sureshkumar/classicfeast_restaurant.git",
    },
    {
      number: "02 — 2026",
      name: "To-Do Dashboard",
      image: todoImg,
      description:
        "Full-stack task management system using MongoDB, Express, React, Node • JWT authentication • REST APIs • Responsive UI.",
      tags: [
        { label: "React", accent: false },
        { label: "Node", accent: false },
        { label: "Express", accent: false },
        { label: "MongoDB", accent: false },
        { label: "JWT", accent: false },
      ],
      live: "https://classicfeast-restaurant.vercel.app/",
      source: "https://github.com/Srikanth-Sureshkumar/classicfeast_restaurant.git",
    },
    {
      number: "03 — 2026",
      name: "Personal Portfolio Website",
      image: portfolioImg,
      description:
        "Modern single-page portfolio built with reusable React components • Responsive design • Smooth scrolling navigation.",
      tags: [
        { label: "React", accent: false },
        { label: "Bootstrap", accent: false },
        { label: "JavaScript", accent: false },
        { label: "CSS", accent: false },
      ],
      live: "https://classicfeast-restaurant.vercel.app/",
      source: "https://github.com/Srikanth-Sureshkumar/classicfeast_restaurant.git",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div>
          <div className="section-label">Featured work</div>
          <h2>Selected Projects</h2>
        </div>
        <div className="projects-count">
          {projects.length.toString().padStart(2, "0")}
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-num">{project.number}</div>

              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.name} />

                  {/* Hover Overlay */}
                  <div className="project-overlay">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        ↗ Live demo
                      </a>
                    )}

                    {project.source !== "#" && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {"{ }"} Source
                      </a>
                    )}
                  </div>
                </div>
              )}

            <div className="project-name">{project.name}</div>
            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className={`tag ${tag.accent ? "accent" : ""}`}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>        
        ))}
      </div>
    </section>
  );
};

export default Projects;