const Footer = ({ selectedTab, setSelectedTab }) => {
  return (
    <footer data-aos="slide-up">
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li
              onClick={() => {
                setSelectedTab("Home");
              }}
            >
              <a>Home</a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("About");
              }}
            >
              <a>About</a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Experience");
              }}
            >
              <a>Experience</a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Project");
              }}
            >
              <a>Projects</a>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright © 2024 Palak Patel. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
