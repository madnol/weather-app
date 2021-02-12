import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//*Components
import GetLocation from "./components/GetLocation";
import WeatherCard from "./components/WeatherCard";
import { Card, Container, TabContainer } from "react-bootstrap";

const LOCAL_STORAGE_KEY = "locations";
function saveToLocalStorage(locations) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(locations));
}

function readFromLocalStorage() {
  const storedLocations = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedLocations ? JSON.parse(storedLocations) : [];
}

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const getData = async () => {
    try {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );

      if (result.status === 200) {
        const dataf = await result.json();
        setData(dataf);

        console.log(data);
      }

      return { success: false, error: result.statusText };
    } catch (ex) {
      return { success: false, error: ex.message };
    }
  };

  const inputHandler = request => {
    setQuery(request);
  };

  useEffect(async () => {
    await getData(query);
  }, [query]);

  useEffect(async () => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <GetLocation inputHandler={inputHandler} data={data} />
      <Container>
        <WeatherCard data={data} />
      </Container>
    </div>
  );
}

export default App;
