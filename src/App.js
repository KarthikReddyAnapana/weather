import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
function WeatherDashboard() {



  // instead of requesting data from an API, use this mock data
  const mockWeatherData = {
    'New York': { 
      temperature: '22°C', 
      humidity: '56%', 
      windSpeed: '15 km/h'
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    'London': { 
      temperature: '15°C', 
      humidity: '70%', 
      windSpeed: '20 km/h' 
    },
  };
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError]= useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  //Handle search functionality
  const handleSearch= () => {
  if(mockWeatherData[city])  {
       setWeatherData(mockWeatherData[city]);
       setError('');
       if(!searchHistory.includes(city)){
          setSearchHistory([...searchHistory,city]);
      }
      }else {
      setWeatherData(null);
      setError('City not found. ');
      }
      };
      const styles={
      container: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0,0,0.1)',
      padding: '30px',
      maxWidth: '400px',
      textAlign: 'center',
      margin:'20px auto',
      fontFamily: 'Arial, sans-serif',
      },
      header: {
      color: '#1e90ff',
      },
      input: {
      padding: '10px',
      width: '70%',
      border: '2px solid #1e90ff',
      borderRadius: '5px',
      outline: 'none',
      },

      button:{
      padding: '10px',
      backgroundColor: '#1e90ff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      marginLeft: '10px',
      cursor: 'pointer',
      },
      weatherData: {
      marginTop: '20px',
      backgroundColor:  '#f7f9fc',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      },
      error: {
      color: '#ff4500',
      marginTop:'20px',
      fontWeight: 'bold',
      },
      historyButton: {
      padding: '5px 10px',
      backgroundColor: '#f7f9fc',
      border: '1px solid #1e90ff',
      borderRadius: '5px',
      marginRight: '5px',
      cursor: 'pointer',
      },
      };


  return (
    <div style={styles.container}>
    <h1 style={styles.header}> Weather Dashboard</h1>
    <div>
    <input
      type="text"
      style={styles.input}
       placeholder="Search for a city..." value={city} 
      onChange={(e) => setCity(e.target.value)} />
      <button style={styles.button} onClick={handleSearch}>
      Search
      </button>
      </div>
      

      {weatherData && (
      <div style={styles.weatherData}> 
        <div>Temperature: {weatherData.temperature} </div>
        <div>Humidity: {weatherData.humidity} </div>
        <div>Wind Speed: {weatherData.windSpeed} </div>
        
      </div>
      )}
      {error && <div style= {styles.error}>{error}</div>}

      <div>
      <h3>Previous Searches:</h3>
      {searchHistory.map((city, index) => (
      <button key={index} style={styles.historyButton} onClick={() => setCity(city)}>
      {city}
      </button>
      ))}
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<WeatherDashboard />);
export default WeatherDashboard;