import "./Destinations.css";
import { useState } from "react";
import data from "../data.json";

type Destination = {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
};

const Destinations = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<Destination | null>(
    data.destinations.find((destination) => destination.name === "Moon") || null
  );

  const handlePlanetClick = (planetName: string) => {
    const selectedDestination = data.destinations.find(
      (destination) =>
        destination.name.toLowerCase() === planetName.toLowerCase()
    );
    setSelectedPlanet(selectedDestination || null);
  };

  return (
    <div className="destinationCont">
      <div className="destHeaderText">
        01 <span className="destPickyourDestText">Pick your destination</span>
      </div>

      {selectedPlanet && (
        <img className="planet" src={selectedPlanet.images.png} />
      )}

      <div className="planetOption">
        {data.destinations.map((destination) => (
          <a
            className="planetNames"
            key={destination.name}
            onClick={() => handlePlanetClick(destination.name)}
          >
            {destination.name.toUpperCase()}
          </a>
        ))}
      </div>
      {selectedPlanet && (
        <div className="planetInfo">
          <a className="planetTitleText">{selectedPlanet.name}</a>
          <a className="planetDescriptionText">{selectedPlanet.description}</a>
          <div className="destLine"></div>
          <div className="destTabletDesktKMDays">
            <div className="averageDistanceBox">
              <a className="averageDistText">AVG. DISTANCE</a>
              <a className="distanceNumber">{selectedPlanet.distance}</a>
            </div>
            <div className="averageDistanceBox">
              <a className="averageDistText">Est. travel time</a>
              <a className="distanceNumber">{selectedPlanet.travel}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;
