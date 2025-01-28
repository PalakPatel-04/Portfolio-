import ProjectContainer from "./ProjectContainer";

const DetailedProject = ({ setSelectedTab }) => {
  const projectContainer = [
    {
      number: 1,
      title: "PixSnapper",
      description:
        "PixSnapper is an AI-powered image generation app built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to generate images based on text prompts, using open api. This helps in better understanding of integration of apis in real-time.",
      button1: "Github",
      button1link: "#",
      button2: "Live Demo",
      button2link: "#",
      imagelink: "./assets/pixsnapper.jpg",
    },
    {
      number: 3,
      title: "QuickBite",
      description:
        "QuickBite is a modern reservation management platform designed to simplify the process of booking and managing reservations. ",
      button1: "Github",
      button1link: "https://github.com/PalakPatel-04/QuickBite",
      button2: "Live Demo",
      button2link: "https://quickbite-eight.vercel.app/",
      imagelink: "./assets/quickbite.jpeg",
    },
    {
      number: 4,
      title: "ShopEase",
      description:
        "ShopEase, an eCommerce website developed using basic HTML and CSS.",
      button1: "Github",
      button1link: "https://github.com/PalakPatel-04/ShopEase",
      button2: "Live Demo",
      button2link: "https://shop-ease-online.vercel.app/",
      imagelink: "./assets/shopease.png",
    },
  ];

  const miniProject = [
    {
      number: 2,
      title: "LangDetect",
      description:
        "LangDetect is a Python-based language detection project that utilizes pandas for data handling and scikit-learn for feature extraction. Also Multinomial Naive Bayes Classifier to accurately classify text input by language.",
      button1: "Github",
      button1link: "https://github.com/PalakPatel-04/LangDetect",
      button2: "GitHub Demo",
      button2link: "https://github.com/PalakPatel-04/LangDetect",
      imagelink: "./assets/langdetect.png",
    },
    {
      number: 3,
      title: "ShopEase",
      description:
        "ShopEase, an eCommerce website developed using basic HTML and CSS.",
      button1: "Github",
      button1link: "https://github.com/PalakPatel-04/ShopEase",
      button2: "Live Demo",
      button2link: "https://shop-ease-online.vercel.app/",
      imagelink: "./assets/shopease.png",
    },
  ];

  return (
    <>
      <section
        id="aboutpart a"
        className="about"
        data-aos="slide-up"
        style={{
          textAlign: "center",
          margin: "auto",
          padding: "20px 40px", // Padding to create space on left and right
          maxWidth: "1200px", // Limit the width of the content
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add subtle shadow for a clean look
        }}
      >
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
        <h1 data-aos="slide-up" className="title">
          My Projects
        </h1>
        <br />
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {projectContainer.map((item) => (
            <ProjectContainer
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
              button1={item.button1}
              button1link={item.button1link}
              button2={item.button2}
              button2link={item.button2link}
              imagelink={item.imagelink}
            />
          ))}
        </div>
        <br />
        <br />
        <h3 data-aos="slide-up">Mini/Side Projects</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {miniProject.map((item) => (
            <ProjectContainer
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
              button1={item.button1}
              button1link={item.button1link}
              button2={item.button2}
              button2link={item.button2link}
              imagelink={item.imagelink}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DetailedProject;
