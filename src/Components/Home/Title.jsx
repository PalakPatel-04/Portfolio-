import Typing from "./Typing";

const Title = () => {
  return (
    <section id="profile" data-aos="fade-left">
      <div className="section__pic-container">
        <img



          src={"./assets/profile_pic.png"}
          alt="Palak Patel profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Palak Patel</h1>
        <p>Intern @Precursor Info Solutions Pvt Ltd. as a MERN Stack Developer</p>
        <Typing />
        <div className="btn-container">
          <button className="btn btn-color-2">
            <a
              href="./assets/Palak_Patel-Resume-D.pdf"
              target="_blank"
            >
              Download CV
            </a>
          </button>
          <button
            className="btn btn-color-2"
            onClick="location.href='./#contact'"
          >
            <a href="./#contact">Contact Info</a>
          </button>
        </div>
        <div id="socials-container">
          <a href="https://www.linkedin.com/in/palak-patel-12b125242/">
            <img
              src={"./assets/linkedin.png"}
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>
          <a href="https://github.com/PalakPatel-04">
            <img
              src={"./assets/github.png"}
              alt="My Github profile"
              className="icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Title;
