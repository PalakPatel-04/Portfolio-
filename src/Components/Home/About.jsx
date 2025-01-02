const About = ({ setSelectedTab }) => {
  return (
    <section id="aboutpart a" className="about" data-aos="slide-up">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={"./assets/experience.png"}
                alt="Experience icon"
                className="icon"
              />
              <h3>Certifications</h3>
              <p>
              NPTEL Python for Data Science – IIT Madras 
              </p>
              <p>
              Responsive Web Designing on freeCodeCamp
              </p>
              <p>
              Internship Completion in MERN Tech. - Precursor Info Solutions Pvt Ltd
              </p>
            </div>
            <div className="details-container">
              <img
                src={"./assets/education.png"}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.Tech Information Technology(2025) <br/>
                Intermediate(2021) - 93.6% <br/>
                High School(2018) - 95% <br/>
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
            Hello! I'm Palak Patel, a passionate and driven B.Tech student specializing in Information Technology at SRMCEM, set to graduate in 2025. With a strong foundation in programming and a deep interest in cutting-edge technologies, I aim to contribute to innovative solutions in software development and artificial intelligence.
            <br/>
            Intern @Precursor Info Solutions Pvt Ltd. as a MERN Stack Developer. <br/>
            I'm committed to continuous learning and thrive in collaborative environments where I can apply my expertise to real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
