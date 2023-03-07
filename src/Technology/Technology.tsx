import "./Technology.css";
import { useState } from "react";
import data from "../data.json";
import technology from "../assets/technology.png";

type Technology = {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
};

const Technology: React.FC = () => {
  const [selectedTechIndex, setSelectedTechIndex] = useState<number>(0);

  const handleTechDotClick = (index: number) => {
    setSelectedTechIndex(index);
  };

  return (
    <div className="techCont">
      <div className="techHeaderText">
        03 <span className="techPickyourText">SPACE LAUNCH 101</span>
      </div>

      <img
        className="tech"
        src={data.technology[selectedTechIndex].images.portrait}
      />
      <div className="techFirstLine"></div>
      <div className="techOption">
        {data.technology.map((techItem: Technology, index: number) => (
          <div
            key={index}
            className={`techDots ${
              index === selectedTechIndex ? "active" : ""
            }`}
            onClick={() => handleTechDotClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="techInfo">
        <a className="techTerminology">THE TERMINOLOGY…</a>
        <h1 className="techName">{data.technology[selectedTechIndex].name}</h1>
        <a className="techDescriptionText">
          {data.technology[selectedTechIndex].description}
        </a>
      </div>
    </div>
  );
};

export default Technology;
