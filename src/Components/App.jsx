import Navbar from "./Navbar";
import Footer from "./Footer";

import { useState } from "react";
import Home from "./Home/Home";
import DetailedAboutMe from "./About/DetailedAboutMe";
import DetailedProject from "./Project/DetailedProjects";
import DetailedExperience from "./Experience/DetailedExperience";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <Navbar setSelectedTab={setSelectedTab} />
      {selectedTab === "Home" ? (
        <Home setSelectedTab={setSelectedTab} />
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
      <Footer setSelectedTab={setSelectedTab} />
    </>
  );
}

export default App;
