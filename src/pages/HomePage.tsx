import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import TitleComponent from '../components/TitleComponent';
import axios from 'axios';
import WeatherDetails from '../components/WeatherDetails';
const apiKey = import.meta.env.VITE_API_KEY


function HomePage() {
    const [weatherData, setWeatherData] = useState({});
    const [locations, setLocations] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=${apiKey}`
            try {
                await axios.get(url)
                    .then(response => {
                        setWeatherData(response.data);
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchWeather()
    }, [locations])

    return (
        <div className='homeContainer'>
            <SearchBar setLocations={setLocations} />
            {Object.keys(weatherData).length > 0 && (
                <div>
                    <TitleComponent name={weatherData?.name} country={weatherData?.sys.country} weather={weatherData?.weather[0]} temp={weatherData?.main.temp} />
                    <hr className='line' />
                    <WeatherDetails weatherData={weatherData} />

                </div>
            )}

        </div>
    )
}

export default HomePage