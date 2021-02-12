import React, { useState, useEffect } from "react";
import loadingGif from "./Spinner-1s-200px.gif";
import MainItem from "./components/MainItem";
import Items from "./components/Items";
import "./App.css";
function App() {
  const [dataAPI, setdataAPI] = useState([]);
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState("Olsztyn");
  const [failed, setFailed] = useState(false);
  const SearchFor = () => {
    if (search === "") {
      return (document.querySelector("input").value = "insert some data");
    } else {
      setSubmit(search);
    }
  };
  useEffect(() => {
    DataFromAPI(submit);
  }, [submit]);
  const DataFromAPI = async (submit) => {
    const API_KEY = "your key from  https://www.weatherapi.com/";
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${submit}:lang=`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setdataAPI([data]);
      setWeather([data.current]);
      setLoading(true);
    } catch (err) {
      if (err === 1006) {
        return setFailed(true);
      }
    }
  };
  if (!loading) {
    return <img src={loadingGif} className="gif" />;
  }
  return (
    <div className="App">
      <section>
        <h2>Weather App</h2>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="search for city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={SearchFor}> Search for City</button>
        </div>
        <article className="weatherContainer">
          <MainItem arr={dataAPI} />
          <Items arr={weather} arr2={dataAPI} />
        </article>
        <h6>Made by DMQ</h6>
      </section>
    </div>
  );
}

export default App;
