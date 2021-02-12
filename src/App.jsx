import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//*Components
import GetLocation from "./components/GetLocation";
import WeatherCard from "./components/WeatherCard";

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
  // const [weatherLocations, setWeatherLoactions] = useState(
  //   readFromLocalStorage()
  // );

  // const handleAddClick = () => setWeatherLoactions([...weatherLocations, ""]);

  // const updateLocations = locations => {
  //   setWeatherLoactions(locations);
  //   saveToLocalStorage(locations);
  // };

  // const removeAtIndex = index => () =>
  //   updateLocations(
  //     weatherLocations.filter((_, locationIndex) => locationIndex !== index)
  //   );

  // const updateAtIndex = index => updateLocation =>
  //   updateLocations(
  //     weatherLocations.map((location, locationIndex) =>
  //       locationIndex === index ? updateLocation : location
  //     )
  //   );

  // const canAddOrRemove = useMemo(
  //   () => weatherLocations.every(location => location !== ""),
  //   [weatherLocations]
  // );

  //Retrieve data
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
      <GetLocation inputHandler={inputHandler} />

      {data > 0 &&
        data.map((location, i) => <WeatherCard key={i} location={location} />)}
    </div>
  );
}

export default App;
