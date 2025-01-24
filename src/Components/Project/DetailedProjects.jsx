import ProjectContainer from "./ProjectContainer";

const DetailedProject = ({ setSelectedTab }) => {
  const projectContainer = [
    {
      number: 1,
      title: "PixSnapper",
      description:"PixSnapper is an AI-powered image generation app built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to generate images based on text prompts, using open api. This helps in better understanding of integration of apis in real-time.",
      button1: "Github",
      button1link: "#",
      button2: "Live Demo",
      button2link: "#",
      imagelink: "./assets/pixsnapper.jpg",
    },
    {
      number: 2,
      title: "Blood donor connect portal",
      description:"The Blood Donor Connect Portal is a full-stack web application built using the MERN stack, designed to connect blood donors with recipients. The platform allows users to register, search for donors, and update their profiles. Used RESTful APIs for data exchange and integrated JWT authentication to secure user and admin logins.",
      button1: "Github",
      button1link: "https://github.com/PalakPatel-04/Blood-Donor-Connect-Portal-",
      button2: "Live Demo",
      button2link: "#",
      imagelink: "./assets/blood-donate.jpg",
    },
    {
      number: 3,
      title:"Portfolio",
      description:
        "The Portfolio is a personal project that I developed to showcase my skills, accomplishments, and the projects I have worked on.",
      button1: "Github",
      button1link: "#",
      button2: "Live Demo",
      button2link: "#",
      imagelink: "./assets/portfolio.jpg",
    },
  ];
  const miniProject = [
    {
      number: 2,
      title: "LangDetect",
      description: "LangDetect is a Python-based language detection project that utilizes pandas for data handling and scikit-learn for feature extraction. Also Multinomial Naive Bayes Classifier to accurately classify text input by language. ",
      button1: "Github",
      button1link: "https://github.com/PalakPatel-04/LangDetect",
      button2: "GitHub Demo",
      button2link: "https://github.com/PalakPatel-04/LangDetect",
      imagelink: "./assets/langdetect.png",
    },
    {
      number: 3,
      title: "ShopEase",
      description: "ShopEase, an eCommerce website developed using basic HTML and CSS.",
      button1: "Github",
      button1link:"https://github.com/PalakPatel-04/ShopEase",
      button2: "Live Demo",
      button2link:"https://shop-ease-online.vercel.app/",
      imagelink: "./assets/shopease.png",
    },
  ];
  return (
    <>
      <section id="aboutpart a" className="about" data-aos="slide-up"  style={{ textAlign: "center", margin: "auto" }}>
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
        <div style={{ textAlign: "center" }}>
        <h1 data-aos="slide-up" className="title">My Project</h1>
        <br />
        {projectContainer.map((item) => (
          <ProjectContainer
            number={item.number}
            title={item.title}
            description={item.description}
            button1={item.button1}
            button1link={item.button1link}
            button2={item.button2}
            button2link={item.button2link}
            imagelink={item.imagelink}
          ></ProjectContainer>
        ))}
          </div>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <h3 data-aos="slide-up">Mini/Side Project</h3>
          {miniProject.map((item) => (
            <ProjectContainer
              number={item.number}
              title={item.title}
              description={item.description}
              button1={item.button1}
              button1link={item.button1link}
              button2={item.button2}
              button2link={item.button2link}
              imagelink={item.imagelink}
            ></ProjectContainer>
          ))}
        </div>
      </section>
    </>
  );
};
export default DetailedProject;
