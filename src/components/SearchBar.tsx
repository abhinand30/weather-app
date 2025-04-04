import { useEffect, useState } from 'react';
import axios from 'axios';

import icon from '../assets/searchIcon.png'
import { LocationInterface, searchProps } from '../common/types';
const apiKey = import.meta.env.VITE_API_KEY

const SearchBar: React.FC<searchProps> = (props) => {
  const { setLocation } = props;

  const [value, setValue] = useState('');
  const [locationArray, setLocationArray] = useState<[LocationInterface]|[]>([]);

  useEffect(() => {
    const handleSearch = async () => {
      if (value.length < 2) {
        return
      }
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`
      try {
        axios.get(url).then((response) => {
          setLocationArray(response.data);
        })
      } catch (error) {
        console.log(error)
      }
    }
    handleSearch()
  }, [value])


  const onSelectCity = (city: string) => {
    setLocation(city);
    setLocationArray([]);
  }
  return (
    <div className='searchContainer'>
      <div className="searchBar">
        <input
          placeholder="Search City"
          className="searchInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <img src={icon} alt="Search Icon" className='icon'/>
      </div>
      <div className="listContainer">
        {locationArray.map((location, index) => (
          <div
            className="listItem"
            key={index}
            onClick={() => onSelectCity(location?.name)}
          >
            <h4>{location?.name}, {location?.country}</h4>
          </div>
        ))}
      </div>
    </div>

  )
}
export default SearchBar;

