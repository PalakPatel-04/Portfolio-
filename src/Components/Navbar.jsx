import React, { useEffect } from "react";

const Navbar = ({ setSelectedTab }) => {
  useEffect(() => {
    const toggleMenu = () => {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    };

    document
      .querySelector(".hamburger-icon")
      .addEventListener("click", toggleMenu);

    return () => {
      document
        .querySelector(".hamburger-icon")
        .removeEventListener("click", toggleMenu);
    };
  }, []);
  return (
    <>
      <nav id="desktop-nav" data-aos="slide-up">
        <div
          class="logo"
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
          <a>Palak Patel</a>
        </div>
        <div>
          <ul class="nav-links">
            <li
              onClick={() => {
                setSelectedTab("About");
              }}
            >
              <a>About</a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Experience");
              }}
            >
              <a>Experience</a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Project");
              }}
            >
              <a>Projects</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div
          class="logo"
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
         Palak Patel
        </div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onclick="toggleMenu()">
            <span />
            <span />
            <span />
          </div>
          <div class="menu-links">
            <li
              onClick={() => {
                setSelectedTab("About");
              }}
            >
              <a onclick="toggleMenu()">About</a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Experience");
              }}
            >
              <a onclick="toggleMenu()">Experience</a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Project");
              }}
            >
              <a onclick="toggleMenu()">Projects</a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
