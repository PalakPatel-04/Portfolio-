import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Title from "./Title";
import Contact from "./Contact";
import { useState } from "react";
import DetailedAboutMe from "../About/DetailedAboutMe";
import DetailedProject from "../Project/DetailedProjects";
import DetailedExperience from "../Experience/DetailedExperience";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      {selectedTab === "Home" ? (
        <>
          <Title />
          <About setSelectedTab={setSelectedTab} /> <Experience />
          <Project setSelectedTab={setSelectedTab} /> <Contact />
        </>
      ) : (
        <></>
      )}
      {selectedTab === "About" ? (
        <DetailedAboutMe setSelectedTab={setSelectedTab} />
      ) : (
        <></>
      )}
      {selectedTab === "Project" ? (
        <DetailedProject setSelectedTab={setSelectedTab} />
      ) : (
        <></>
      )}
      {selectedTab === "Experience" ? (
        <DetailedExperience setSelectedTab={setSelectedTab} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
