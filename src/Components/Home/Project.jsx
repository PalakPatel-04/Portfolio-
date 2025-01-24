const Project = ({ setSelectedTab }) => {
  const handleButtonClick = () => {
    setSelectedTab("Project"); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <section id="projecta" className="about" data-aos="slide-up">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Projects</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={"assets/Project.gif"}
            alt="Project picture"
            className="about-pic"
            data-aos="slide-up"
          />
        </div>
        <div className="about-details-container">
          <div className="text-container" data-aos="slide-up">
            <p>
              "In my projects, I leverage my experience in web development
              gained through hands-on experiences mentioned in the experience
              section. With a focus on MERN stack development, I've successfully
              completed several projects that showcase my skills and creativity
              in building dynamic web applications. Through these experiences,
              I've not only honed my technical abilities but also developed a
              keen eye for user experience and interface design. I'm passionate
              about creating innovative solutions that address real-world
              challenges, and I'm excited to continue exploring new
              opportunities in web development."
              <br />
              <br />
              <div className="btn-container">
                <button
                  className="btn btn-color-2"
                  onClick={handleButtonClick} 
                >
                  Click Here
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
