import React from "react";
import { Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import LocationEntry from "./LocationEntry";
import LocationWeather from "./LocationWeather";

//*css
import "../style/WeatherCard.css";

const WeatherCard = ({ location, data }) => {
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        <motion.div style={{ borderRadius: "50px" }}>
          <Card className="bg-dark text-white  mx-auto weatherCard__card ">
            <Card.Img
              style={{ opacity: "0.5" }}
              src={
                "https://source.unsplash.com/1600x900/?" +
                (data.name ? data.name + ",weather" : "weather")
              }
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>{data.name ? data.name : "result"}</Card.Title>

              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title style={{ color: "black" }}> Tempeture</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.main.temp ? data.main.temp : "result"}
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Card.ImgOverlay>
          </Card>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default WeatherCard;
