import React, { useEffect } from "react";

const DetailedExperience = ({ setSelectedTab, items }) => {
  useEffect(() => {
    document
      .querySelectorAll(".experience-content.hidden")
      .forEach(function (element) {
        var bottom_of_object = element.offsetTop + element.offsetHeight;
        var bottom_of_window = window.pageYOffset + window.innerHeight;

        /* If the object is completely visible in the window, fadeIn it */
        if (bottom_of_window > bottom_of_object) {
          element.style.transition = "opacity 0.6s, margin-left 0.6s";
          element.style.opacity = "1";
          element.style.marginLeft = "0";
        }
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <>
      <section id="aboutpart" className="about" data-aos="slide-up">
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
        <h1 className="title">Experience</h1>
        <p className="section__text__p1" data-aos="slide-up">
          <br />
          <h3>Internship</h3>
          <br />
        </p>
        <p className="section__text__p1 " data-aos="slide-up">
          <h2> MERN Developer</h2>
          <h3> July'24 - Oct'24</h3>
          <p> - Gained experience in building both frontend interfaces and backend functionality for scalable web solutions.</p>
          <p> - Implemented CRUD (Create, Read, Update, Delete) operations for managing data in the application.</p>
          <p> - Created RESTful APIs for interacting with the database, allowing users to perform CRUD operations on various resources.</p>
          <p> - Implemented user authentication and authorization features using JWT (JSON Web Tokens) to enhance application security and ensure data protection.</p>
          <p> - Designed, implemented, and managed MongoDB databases to ensure secure and efficient data storage and retrieval.</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3>Technology Known</h3>
          <br />
          <div className="logos exp-tech">
            <div className="marquee">
              <div className="track">
                <img
                  src="assets/imgs/html.png"
                  alt="HTML"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/css.png"
                  alt="CSS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/javascript.png"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/bootstrap.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/tailwind css.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/react.png"
                  width="128"
                  alt="React"
                  height="128"
                />
                <img
                  src="assets/imgs/nodejs.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/express.png"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/mongodb.ico"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/nextjs.png"
                  width="128"
                  alt="Next JS"
                  height="128"
                />
                <img
                  src="assets/imgs/c++.png"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/python.png"
                  width="128"
                  alt="Python"
                  height="128"
                />
                <img
                  src="assets/imgs/mysql.svg"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/vscode.png"
                  width="128"
                  alt="VS Code"
                  height="128"
                />
                <img
                  src="assets/imgs/github.png"
                  alt="JS"
                  width="128"
                  height="128"
                />
                <img
                  src="assets/imgs/git.png"
                  alt="JS"
                  width="128"
                  height="128"
                />
              </div>
            </div>
          </div>
        </p>
      </section>
    </>
  );
};

export default DetailedExperience;
