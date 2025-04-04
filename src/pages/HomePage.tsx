import { useEffect, useState } from 'react';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import TitleComponent from '../components/TitleComponent';
import WeatherDetails from '../components/WeatherDetails';
import { WeatherInterface } from '../common/types';
const apiKey = import.meta.env.VITE_API_KEY


function HomePage() {
    const [weatherData, setWeatherData] = useState<WeatherInterface>({} as WeatherInterface);
    const [location, setLocation] = useState<string>('');

    useEffect(() => {
        const fetchWeather = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
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
    }, [location])

    return (
        <div className='homeContainer'>
            <SearchBar setLocation={setLocation} />
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