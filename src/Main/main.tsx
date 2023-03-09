import "./main.css";
import logo from "../assets/logo.svg";
import menuclick from "../assets/menuclick.svg";
import close from "../assets/close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="main">
      <div className="mainContentBox">
        <a className="mainContentTextone">SO, YOU WANT TO TRAVEL TO</a>
        <a className="mainContentHeaderTexts">SPACE</a>
        <a className="mainContentLongText">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </a>
      </div>
      <Link to="/destinations" className="mainExplorButton">
        EXPLORE
      </Link>
    </div>
  );
};

export default Main;
