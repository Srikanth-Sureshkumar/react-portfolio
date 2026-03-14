
const Projects = () => {
  const projects = [
    {
      id: 1,
      icon: "🍽️",
      title: "ClassicFeas - Restaurant Website",
      desc: "Responsive restaurant website built using HTML, CSS, and JavaScript with modern layout and mobile-first design.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://classicfeast-restaurant.vercel.app/",
      github: "https://github.com/Srikanth-Sureshkumar/classicfeast_restaurant",
      color: "#e08309"
    },
    {
      id: 2,
      icon: "📋",
      title: "To-Do Dashboard (MERN)",
      desc: "Full-stack task management system using MongoDB, Express, React, and Node with JWT authentication.",
      tech: ["React", "Node", "Express", "MongoDB", "JWT", "CSS",],
      link: "#",
      github: "https://github.com/Srikanth-Sureshkumar/to-do-dashboard",
      color: "#38bdf8"
    },
    {
      id: 3,
      icon: "💻",
      title: "Portfolio Website",
      desc: "Personal portfolio website built with React and Vite featuring responsive layout and project showcase.",
      tech: ["Vite","React", "CSS", "JavaScript"],
      link: "https://srikanth-portfolio-delta.vercel.app/",
      github: "https://github.com/Srikanth-Sureshkumar/react-portfolio",
      color: "#e73232"
    }
  ];

  return (
    <section className="projects" id="projects" data-aos="zoom-in">

      <div className="section-label">Featured Work</div>
      <h2>Selected Projects</h2>

      <div className="projects-grid">

        {projects.map((p) => (
          <div
            key={p.id}
            className="project-card"
            style={{ "--accent": p.color }}
          >

            <div className="project-icon">{p.icon}</div>

            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            <div className="tech">
              {p.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="links">
              <a href={p.link} target="_blank" rel="noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live 
              </a>

              <a href={p.github} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i> GitHub 
              </a>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;