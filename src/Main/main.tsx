import "./main.css";
import logo from "../assets/logo.svg";
import menuclick from "../assets/menuclick.svg";
import close from "../assets/close.svg";
import { useState } from "react";
const Main = () => {
  const [menu, setMenu] = useState(false);
  const [clickClose, setClickClose] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="main">
      <div className="mainHeaderCont">
        <img className="mainlogo" src={logo} />
        <img className="mainmenuclick" src={menuclick} onClick={handleMenu} />
      </div>
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
      <button className="mainExplorButton">EXPLORE</button>

      {menu && (
        <div className="menusection">
          <img className="mainClose" src={close} onClick={handleMenu} />
          <div className="mainMenusectiontypes">
            00
            <span className="mainMenuSectionText">HOME</span>
          </div>
          <div className="mainMenusectiontypes">
            01<span className="mainMenuSectionText">DESTINATION</span>
          </div>
          <div className="mainMenusectiontypes">
            02<span className="mainMenuSectionText">CREW</span>
          </div>
          <div className="mainMenusectiontypes">
            03<span className="mainMenuSectionText">TECHNOLOGY</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
