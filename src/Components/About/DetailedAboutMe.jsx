const DetailedAboutMe = ({ setSelectedTab }) => {
  return (
    <section id="aboutpart a" className="about" data-aos="slide-up">
      <div className="back-btn-container">
        <button
          className="btn btn-color-2"
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
          &#8617; Home
        </button>
      </div>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container" data-aos="slide-left">
          <img
            src={"assets/profile_pic_2.webp"}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container" data-aos="slide-right">
          <div className="text-container">
            <h4>"Exploring the limitless possibilities of technology to craft solutions that matter.</h4>
            <br />
            <p>
            Hello! I'm a tech enthusiast and a B.Tech student specializing in Information Technology, passionate about exploring the dynamic world of technology and innovation. My academic journey has equipped me with a strong foundation in programming, web development, and problem-solving. 
            With proficiency in programming languages like C++, Python, and JavaScript, as well as expertise in web development technologies like HTML, CSS, React.js, Node.js, and MongoDB, I thrive on creating impactful and scalable solutions. Whether it’s building intuitive front-end 
            interfaces or implementing secure back-end systems.I bring expertise in the MERN stack (MongoDB, Express.js, React, Node.js), creating user-friendly interfaces and robust backends for web applications
            <br /><br />
            I enjoy every step of turning ideas into reality. I am committed to continuous learning and am always eager to explore emerging technologies and tools. Collaboration, creativity, and a problem-solving mindset drive me to excel in challenging projects, both individually and in
            team environments. 
            Let's connect and create something amazing!
            </p>
          </div>
        </div>
      </div>
      <div className="section-container">
    
      </div>
    </section>
  );
};
export default DetailedAboutMe;
