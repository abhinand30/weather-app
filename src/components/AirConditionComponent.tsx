import windIcon from '../assets/windIcon.png'

const AirConditionComponent = (props) => {
    const{feels_like,wind}=props;
    const dataArray = [
        { id: 1, name: 'Real Feel', value: `${feels_like-273} C`, icon: windIcon },
        { id: 2, name: 'Wind', value: `${wind} km/hr`, icon: windIcon },
        { id: 3, name: 'clouds', value: '5', icon: windIcon },
        { id: 4, name: 'Timezone', value: '5', icon: windIcon },
    ]
    return (
        <div className="container">
            <span style={{ color: '#fff' }}>AIR CONDITIONS</span>
            <div className="grid">
                {dataArray.map((item) => (
                    <div key={item.id}>
                        <div style={{ flexDirection: 'row', gap: '20px' }}>
                            <img src={item.icon} alt='icon' />
                            <span className='commonText'>{item.name}</span>
                        </div>
                        <h2 className='commonText'>{item.value}</h2>
                    </div>
                )
                )}
            </div>



        </div>
    )
}

export default AirConditionComponent