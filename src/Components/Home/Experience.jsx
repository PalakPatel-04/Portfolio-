import Entry from "./Entry/Entry";

const Experience = ({ items }) => {
  const frontend = [
    {
      name: "HTML"
    },
    {
      name: "CSS"
    },
    {
      name: "JavaScript"
    },
    {
      name: "Bootstrap"
    },
    {
      name: "Tail WindCSS"
    },
    {
      name: "React"
    },
  ];
  const backend = [
    {
      name: "Node.Js"
    },
    {
      name: "Express.Js"
    },
    {
      name: "MongoDB"
    },
  ];
  const programming = [
    {
      name: "C++",
      level: "Intermediate",
    },
    {
      name: "Python",
      level: "Basic",
    },
    {
      name: "MySQL",
      level: "Basic",
    },
  ];
  const tools = [
    {
      name: "VS Code"
    },
    {
      name: "Github"
    },
    {
      name: "Git"
    },
    {
      name: "Vercel/ Netlify"
    },
    {
      name: "Render"
    }
  ];
  return (
    <section id="experience" data-aos="slide-up">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container" data-aos="slide-up">
        <div className="about-containers-experience">
          <div className="details-container" data-aos="slide-up">
            <h2 className="experience-sub-title">Front End Development</h2>
            <div className="article-container">
              <article>
                {frontend.map((item) => (
                  <Entry name={item.name} level={item.level}></Entry>
                ))}
              </article>
            </div>
          </div>
          <div className="details-container" data-aos="slide-up">
            <h2 className="experience-sub-title">Back End Development</h2>
            <div className="article-container">
              <article>
                {backend.map((item) => (
                  <Entry name={item.name} level={item.level}></Entry>
                ))}
              </article>
            </div>
          </div>
          <div className="details-container" data-aos="slide-up">
            <h2 className="experience-sub-title">
              Programming languages
            </h2>
            <div className="article-container">
              <article>
                {programming.map((item) => (
                  <Entry name={item.name} level={item.level}></Entry>
                ))}
              </article>
            </div>
          </div>
          <div className="details-container" data-aos="slide-up">
            <h2 className="experience-sub-title">Tools</h2>
            <div className="article-container">
              <article>
                {tools.map((item) => (
                  <Entry name={item.name} level={item.level}></Entry>
                ))}
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
