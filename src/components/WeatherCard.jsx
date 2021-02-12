import React from "react";
import { Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import LocationEntry from "./LocationEntry";
import LocationWeather from "./LocationWeather";

const WeatherCard = ({ location }) => {
  return (
    <div>
      <Card className="bg-dark text-white position-absolute">
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          {location.name}
          {/* {location && <LocationWeather location={location} />} */}
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card>
    </div>
  );
};

export default WeatherCard;
