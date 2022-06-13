import React, { useState } from "react";
import axios from "axios";
// import './index.css';
import "./App.css";

function App() {
  const [data, setdata] = useState({});
  const [location, setlocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ecb53a904619ac9b47736dd1dab80ef6`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setdata(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input value={location} onChange={event=>setlocation(event.target.value)}
        placeholder='Enter Location' onKeyPress={searchLocation} type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">  
            <p>{data.name}</p>
          </div>
          <div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
              
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> :null}
             
            </div>
          </div>
        </div>


        {data.name != undefined &&
           <div className="bottom">
           <div className="feels">
             {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p>:null}
             <p>Feels Like</p>
           </div>
           <div className="humidity">
             {data.main ?<p className="bold">{data.main.humidity}%</p>:null}
           
             <p>Humidity</p>
           </div>
           <div className="wind">
             {data.wind ?<p className="bold">{data.wind.speed.toFixed()} MPH</p>:null}
             
             <p>wind speed </p>
           </div>
         </div>
        
        }
       
      </div>
    </div>
  );
}

export default App;
