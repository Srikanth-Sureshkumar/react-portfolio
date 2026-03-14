const Ticker = () => {
  const stackItems = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Auth",
    "REST APIs",
    "Postman",
    "Git & GitHub"
  ];

  return (
    <div className="stack-ticker">
      <div className="ticker-inner">

        {/* Original Items */}
        {stackItems.map((item, index) => (
          <span className="ticker-item" key={`first-${index}`}>
            <span className="ticker-dot"></span>
            {item}
          </span>
        ))}

        {/* Duplicate Items (for seamless loop) */}
        {stackItems.map((item, index) => (
          <span className="ticker-item" key={`second-${index}`}>
            <span className="ticker-dot"></span>
            {item}
          </span>
        ))}

      </div>
    </div>
  );
};

export default Ticker;