import Select from 'react-select';
import { useState } from 'react';
function Dropdown ({onChange1, onChange2}) {
    const destinationCityData = [
        {value: 'VLC', label : 'Valencia'},
        {value: 'BCN', label : 'Barcelona'},
        {value: 'MAD', label : 'Madrid'},
        {value: 'MXP', label : 'Milano'},
        {value: 'ATH', label : 'Athens'}
    ];
    const originCityData = [
        {value: 'PRG', label : 'Prague'},
        {value: 'BER', label : 'Berlin'},
        {value: 'WAW', label : 'Warsaw'},
        {value: 'PED', label : 'Pardubice'},
    ];
    //const [destinationCity, setDestinationCity] = useState([]);
    //const [originCity, setOriginCity] = useState([]);
    return (
        <div className="Dropdown">
          <Select
            options={originCityData}
            onChange={onChange2}

            // onChange={opt => setOriginCity(opt.value, opt.City)}
          />
           <Select
            options={destinationCityData}
            onChange={onChange1}
            // onChange={opt => setDestinationCity(opt.value, opt.City)}
          />
        </div>
    );
}
export default Dropdown;