import snowfImage from '../assets/snow.png';
import cloudImage from '../assets/cloud.png';
import sunImage from '../assets/sun.png';
import React from 'react';

interface titleProps{
  name:string;
  weather:
    {description:string;
      main:string;
  }
  temp:number;
  country:string;
}
const TitleComponent:React.FC<titleProps> = (props) => {
  const {name,weather,temp,country}=props;
  
  return (
    <div className='titleComponent'>
      <div>
            <h2>{name}, {country}</h2>
            <h5>{weather.description}</h5>
            <h1>{Math.round(temp-273)} C</h1> 
      </div>
      
          <img src={weather.main==='Snow'?snowfImage:weather.main==='Clouds'?cloudImage:sunImage} alt={weather.main} style={{width:'100px'}}/>
       </div>
  )
}

export default TitleComponent;
