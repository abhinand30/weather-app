import sunriseIcon from '../assets/sunrise.png';
import sunsetIcon from '../assets/sunset.png';
// import dropIcon from '../assets/drop.png';
import humidityIcon from '../assets/humidity.png';
import windIcon from '../assets/windIcon.png';
import tempIcon from '../assets/temp.png';
import visibilityIcon from '../assets/visibility.png';
import pressureIcon from '../assets/pressure.png';
import sealevelIcon from '../assets/sealevel.png'
import moment from 'moment';

function WeatherDetails(props) {
    const {weatherData}=props;

    const convertTimestampToTime = (timestamp:number) => {
        return moment.unix(timestamp).format("HH:mm:ss");
      };
      
    const weatherArray=[
        {id:1,name:'SUNRISE',value:convertTimestampToTime(weatherData?.sys.sunrise),icon:sunriseIcon},
        {id:2,name:'SUNSET',value:convertTimestampToTime(weatherData?.sys.sunset),icon:sunsetIcon},
        {id:3,name:'SEA LEVEL',value:`${weatherData.main.sea_level} hPa `,icon:sealevelIcon},
        {id:4,name:'HUMIDITY',value:`${weatherData.main.humidity} %`,icon:humidityIcon},
        {id:5,name:'WIND',value:`${weatherData.wind.speed}`,icon:windIcon},
        {id:6,name:'PRESSURE',value:`${weatherData.main.humidity} hPa`,icon:pressureIcon},
        {id:7,name:'FEELS LIKE',value:`${Math.round(weatherData.main.feels_like-273)} C`,icon:tempIcon},
        {id:8,name:'VISIBILITY',value:`${weatherData.visibility/1000} Km`,icon:visibilityIcon},
    ]
   
  return (
    <div className='weatherContainer'>
        <h1>Weather Details</h1>
        <div className='container'>
        {weatherArray.map((weather)=>(
            <div key={weather.id} className='card'>
                <h6 className='title'>{weather.name}</h6>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:'20px',alignItems:'center'}}>
                    <h4>{weather.value}</h4>
                    <img src={weather.icon} alt={weather.name}/>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default WeatherDetails