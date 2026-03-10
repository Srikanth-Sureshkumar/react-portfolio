// import React from "react";

// const Experience = () => {
//   const experiences = [
//     {
//       period: "NOV 2025 — MAR 2026",
//       title: "MERN Stack Developer - Trainee",
//       company: "Codei5 Accademy, Coimbatore · On-site",
//       description:
//         "Built 3+ full-stack MERN applications with MongoDB database integration, async/await API calls, and complete CRUD functionality • Managed codebase using Git across multiple feature branches in a collaborative Agile team environment • Deployed applications to Vercel and Render using environment configuration (.env)",
//     },
//     {
//       period: "JUN 2024 — JUN 2024",
//       title: "Web Designer - Internship",
//       company: "Cloudi5 technologies, Coimbatore · On-site",
//       description:
//         "Developed 5+ responsive web pages using HTML5, CSS3, and Bootstrap with mobile-first design principles • Assisted in UI design, cross-browser testing, and debugging, reducing reported UI issues by 30% • Collaborated with a team of 4 developers on website development tasks using structured workflows and JSON-based data handling.",
//     },
//   ];

//   return (
//     <section className="experience" id="experience">
//       <div className="section-label">Career</div>
//       <h2>Work Experience</h2>

//       <div className="timeline">
//         {experiences.map((exp, index) => (
//           <div className="timeline-item" key={index}>
//             <div className="exp-period">{exp.period}</div>
//             <div className="exp-title">{exp.title}</div>
//             <div className="exp-company">{exp.company}</div>
//             <p className="exp-desc">{exp.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;


import React from "react";
import experienceImg from "../assets/images/developer.png"; 

const Experience = () => {
  const experiences = [
    {
      period: "NOV 2025 — MAR 2026",
      title: "MERN Stack Developer - Trainee",
      company: "Codei5 Accademy, Coimbatore · On-site",
      description:
        "Built 3+ full-stack MERN applications with MongoDB database integration, async/await API calls, and complete CRUD functionality • Managed codebase using Git across multiple feature branches in a collaborative Agile team environment • Deployed applications to Vercel and Render using environment configuration (.env)",
    },
    {
      period: "JUN 2024 — JUN 2024",
      title: "Web Designer - Internship",
      company: "Cloudi5 technologies, Coimbatore · On-site",
      description:
        "Developed 5+ responsive web pages using HTML5, CSS3, and Bootstrap with mobile-first design principles • Assisted in UI design, cross-browser testing, and debugging, reducing reported UI issues by 30% • Collaborated with a team of 4 developers on website development tasks using structured workflows and JSON-based data handling.",
    },
  ];

  return (
    <section className="experience" id="experience">
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

        {/* RIGHT SIDE IMAGE / ANIMATION */}
        <div className="experience-visual">
          <img src={experienceImg} alt="developer working" />
        </div>

      </div>
    </section>
  );
};

export default Experience;