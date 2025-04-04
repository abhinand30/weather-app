import moment from 'moment';
import windIcon from '../assets/windIcon.png'

const MainComponent = (props) => {
    const {temp,minTemp,seaLevel,sunrise,sunset}=props;
    const convertTimestampToTime = (timestamp:number) => {
        return moment.unix(timestamp).format("HH:mm:ss");
      };
    const mainArray=[
        {id:1,name:'Temperature',value:temp,icon:windIcon},
        {id:2,name:'Temperature minimum',value:minTemp,icon:windIcon},
        {id:3,name:'Sea Level',value:seaLevel,icon:windIcon},
        {id:4,name:'Sunrise',value:convertTimestampToTime(sunrise),icon:windIcon},
        {id:5,name:'Sunset',value:convertTimestampToTime(sunset),icon:windIcon},
    ]

  return (
    <div className='mainContainer'>
        <div>
        {mainArray.map((item)=>(
            <div key={item.id} style={{display:'flex',justifyContent:'space-between',padding:'10px',}}>
                <div style={{flexDirection:'row',justifyContent:'space-between',width:'300px'}}>
                <span className='commonText'>{item.name}</span>
                <img src={item.icon}/>
                </div>
                
                <span className='commonText'>{item.value}</span>
            </div>
        ))}
        </div>
       
    </div>
  )
}

export default MainComponent
