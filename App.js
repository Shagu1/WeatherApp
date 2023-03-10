
import { useState } from 'react';
import './App.css';

const api = {
  key:"43c02273845ad780dde3fda2a5f2fbf3",
  base:"https://api.openweathermap.org/data/2.5/"
};

function App() {
const [search, setSearch]= useState('');
const [weather, setWeather] = useState({});

const searchIt =()=>{
 fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
 .then(res => res.json())
 .then((result)=>{
  setWeather(result);
 })
}
  return (
  <div className='App'>
    <header className='Ap1'>
  
     <h1>Weather</h1>
     <div>
       <input id="input1" 
       type="text" 
       placeholder='Search' 
       onChange={(e) => setSearch(e.target.value)}
       />
       <button onClick={searchIt}>Search</button>
     </div>
     {typeof weather.main != "undefined"?(
     <div>
       <p>{weather.name}</p>
     
       <p>{weather.main.temp}°C</p>

      <p>{weather.weather[0].description}</p>
    </div>)
     :(
      ""
     )}
     
    </header>
   

    
  </div>
  );
  
}

export default App;
