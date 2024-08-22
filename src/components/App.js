import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import HealthRecommendations from "./HealthRecommendations";
import Navbar from "./Navbar"; // Import the Navbar component
import "../styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Profile from './Profile';
import Chatbot from './chatbot'; // Import Chatbot component
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    loading: true,
    data: {},
    error: false,
  });
  const [activeTab, setActiveTab] = useState("forecast");

  const toDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

  const search = async (event) => {
    event.preventDefault();
    if (
      event.type === "click" ||
      (event.type === "keypress" && event.key === "Enter")
    ) {
      setWeather({ ...weather, loading: true });
      const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
      const url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

      await axios
        .get(url)
        .then((res) => {
          console.log("res", res);
          setWeather({ data: res.data, loading: false, error: false });
        })
        .catch((error) => {
          setWeather({ ...weather, data: {}, error: true });
          console.log("error", error);
        });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
      const url = `https://api.shecodes.io/weather/v1/current?query=Rabat&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        setWeather({ data: response.data, loading: false, error: false });
      } catch (error) {
        setWeather({ data: {}, loading: false, error: true });
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Navbar /> {/* Navbar should always be displayed */}
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchEngine query={query} setQuery={setQuery} search={search} />
                {weather.loading && (
                  <>
                    <br />
                    <br />
                    <h4>Searching..</h4>
                  </>
                )}
                {weather.error && (
                  <>
                    <br />
                    <br />
                    <span className="error-message">
                      <span style={{ fontFamily: "font" }}>
                        Sorry city not found, please try again.
                      </span>
                    </span>
                  </>
                )}
                {weather && weather.data && weather.data.condition && (
                  <>
                    <div className="tabs">
                      <button
                        className={`tab ${activeTab === "forecast" ? "active" : ""}`}
                        onClick={() => setActiveTab("forecast")}
                      >
                        Forecast
                      </button>
                      <button
                        className={`tab ${activeTab === "health" ? "active" : ""}`}
                        onClick={() => setActiveTab("health")}
                      >
                        Health Recommendations
                      </button>
                    </div>
                    <div className="content">
                      {activeTab === "forecast" && (
                        <Forecast className="forecast" weather={weather} toDate={toDate} />
                      )}
                      {activeTab === "health" && (
                        <HealthRecommendations className="health-recommendations" weather={weather} />
                      )}
                    </div>
                  </>
                )}
              </>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/chatbot" element={<Chatbot />}/>
          <Route path="/comments" element={<div>Comments Page</div>} />
          <Route path="/videos" element={<div>Videos Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
