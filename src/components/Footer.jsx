const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <p>
        © {year} Srikanth Sureshkumar | All Rights Reserved.
      </p>

      <div className="footer-status">
        <span className="status-dot"></span>
          Available for work
      </div>

    </footer>
  );
};

export default Footer;