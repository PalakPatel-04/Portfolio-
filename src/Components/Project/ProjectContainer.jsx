const ProjectContainer = ({
  number,
  title,
  description,
  button1,
  button1link,
  button2,
  button2link,
  imagelink,
}) => {
  return (
    <>
      {number % 2 === 1 ? (
        <div className="project-section-container bigd">
          <div className="section__pic-container" data-aos="slide-left">
            <img src={imagelink} alt={title} className="about-pic" />
          </div>
          <div className="about-details-container" data-aos="slide-right">
            {description && (
              <div className="project-text-container">{description}</div>
            )}
            <div className="btn-container">
              <button className="btn btn-color-2">
                <a href={button1link} target="_blank">
                  {button1}
                </a>
              </button>
              <button className="btn btn-color-2">
                <a href={button2link} target="_blank">
                  {button2}
                </a>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="project-section-container bigd">
            <div className="about-details-container" data-aos="slide-left">
              {description && (
                <div className="project-text-container">{description}</div>
              )}{" "}
              <div className="btn-container">
                <button className="btn btn-color-2">
                  <a href={button1link} target="_blank">
                    {button1}
                  </a>
                </button>
                <button className="btn btn-color-2">
                  <a href={button2link} target="_blank">
                    {button2}
                  </a>
                </button>
              </div>
            </div>
            <div className="section__pic-container" data-aos="slide-right">
              <img src={imagelink} alt={title} className="about-pic" />
            </div>
          </div>
        </>
      )}
      <div className="project-section-container smalld">
        <div className="section__pic-container" data-aos="slide-left">
          <img src={imagelink} alt={title} className="about-pic" />
        </div>
        <div className="about-details-container" data-aos="slide-right">
          {description && (
            <div className="project-text-container">{description}</div>
          )}{" "}
          <div className="btn-container">
            <button className="btn btn-color-2">
              <a href={button1link} target="_blank">
                {button1}
              </a>
            </button>
            <button className="btn btn-color-2">
              <a href={button2link} target="_blank">
                {button2}
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectContainer;
