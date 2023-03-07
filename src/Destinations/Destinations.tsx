import "./Destinations.css";
import moon from "../assets/moon.svg";
import { Link } from "react-router-dom";
const Destinations = () => {
  return (
    <div className="destinationCont">
      <div className="destHeaderText">
        01 <span className="destPickyourDestText">Pick your destination</span>
      </div>
      <img className="planet" src={moon} />
      <div className="planetOption">
        <a className="planetNames">MOON</a>
        <a className="planetNames">MARS</a>
        <a className="planetNames">EUROPA</a>
        <a className="planetNames">TITAN</a>
      </div>
      <a className="planetTitleText">MOON</a>
      <a className="planetDescriptionText">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </a>
      <div className="destLine"></div>
      <div className="averageDistanceBox">
        <a className="averageDistText">AVG. DISTANCE</a>
        <a className="distanceNumber">384,400 km</a>
      </div>
      <div className="averageDistanceBox">
        <a className="averageDistText">Est. travel time</a>
        <a className="distanceNumber">3 days</a>
      </div>
    </div>
  );
};

export default Destinations;
