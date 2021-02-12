import React, { useState } from "react";
import "../style/GetLocation.css";
import { ImSearch } from "react-icons/im";
import { Col, Container, Row, Button } from "react-bootstrap";

const GetLocation = ({ inputHandler, hanldeSubmit }) => {
  const [input, setInput] = useState("");

  const searchHandler = e => {
    e.preventDefault();
    inputHandler(input);
    hanldeSubmit();
  };

  return (
    <div className="getLocation__wrapper">
      <div className="getLocation__container roundend mx-auto pb-4 mb-5">
        <Container className="mt-5">
          <h1
            className="mt-4"
            style={{ fontWeight: "lighter", textAlign: "center" }}
          >
            WeatherApp
          </h1>
          {/* //SearchBar */}
          <Row className="d-flex space-between ">
            <Col></Col>
            <Col>
              <div className="getLocation__searchBar mt-4">
                <form
                  onSubmit={e => searchHandler(e)}
                  className="d-flex justify-content-center"
                >
                  <input
                    className=" pl-5 text-center"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    type="text"
                    placeholder="Weather in your city"
                  />

                  <Button>
                    <ImSearch className="m-2" style={{ color: "black" }} />
                  </Button>
                </form>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GetLocation;
