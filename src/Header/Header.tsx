import "./Header.css";
import logo from "../assets/logo.svg";
import menuclick from "../assets/menuclick.svg";
import close from "../assets/close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [clickClose, setClickClose] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="mainHeaderCont">
      <img className="mainlogo" src={logo} />
      <img className="mainmenuclick" src={menuclick} onClick={handleMenu} />
      <div className="tabletDesktopMenu">
        <Link to="/" className="mainMenuSectionText">
          HOME
        </Link>
        <Link to="/destinations" className="mainMenuSectionText">
          DESTINATION
        </Link>
        <Link to="/crew" className="mainMenuSectionText">
          CREW
        </Link>
        <Link to="/technology" className="mainMenuSectionText">
          TECHNOLOGY
        </Link>
      </div>
      {menu && (
        <div className="menusection">
          <img className="mainClose" src={close} onClick={handleMenu} />
          <div className="mainMenusectiontypes">
            00
            <Link to="/" className="mainMenuSectionText" onClick={handleMenu}>
              HOME
            </Link>
          </div>
          <div className="mainMenusectiontypes">
            01
            <Link
              to="/destinations"
              className="mainMenuSectionText"
              onClick={handleMenu}
            >
              DESTINATION
            </Link>
          </div>
          <div className="mainMenusectiontypes">
            02
            <Link
              to="/crew"
              className="mainMenuSectionText"
              onClick={handleMenu}
            >
              CREW
            </Link>
          </div>
          <div className="mainMenusectiontypes">
            03
            <Link
              to="/technology"
              className="mainMenuSectionText"
              onClick={handleMenu}
            >
              TECHNOLOGY
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
