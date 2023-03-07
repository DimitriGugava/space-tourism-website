import "./Crew.css";
import { useState } from "react";
import data from "../data.json";
import crew from "../assets/crew.png";

type Crew = {
  name: string;
  images: { png: string; webp: string };
  role: string;
  bio: string;
};

const Crew = () => {
  const [selectedCrewIndex, setSelectedCrewIndex] = useState<number>(0);

  const handleCrewDotClick = (index: number) => {
    setSelectedCrewIndex(index);
  };

  return (
    <div className="crewCont">
      <div className="crewHeaderText">
        02 <span className="crewPickyourText">MEET YOUR CREW</span>
      </div>

      <img className="crew" src={data.crew[selectedCrewIndex].images.png} />
      <div className="crewFirstLine"></div>
      <div className="crewOption">
        {data.crew.map((crewMember: Crew, index: number) => (
          <div
            key={index}
            className={`crewDots ${
              index === selectedCrewIndex ? "active" : ""
            }`}
            onClick={() => handleCrewDotClick(index)}
          ></div>
        ))}
      </div>
      <div className="crewInfo">
        <a className="crewPosition">{data.crew[selectedCrewIndex].role}</a>
        <a className="crewFullName">{data.crew[selectedCrewIndex].name}</a>
        <a className="crewDescriptionText">
          {data.crew[selectedCrewIndex].bio}
        </a>
      </div>
    </div>
  );
};

export default Crew;
