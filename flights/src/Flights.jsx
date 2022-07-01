import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import Button from "./Button";
import Flight from "./Flight";

function Flights({direct}) {
    const [results, setRestults] = useState([]);
    const [offset, setOffset] = useState(0);
    const [searchId, setSearchId] = useState(null);
    const params = useParams();
    var url = `https://api.skypicker.com/flights?fly_from=${params.from}&fly_to=${params.to}&partner=data4youcbp202106&offset=${offset}&limit=5`;
    
    if (direct == true) {
        url = `https://api.skypicker.com/flights?fly_from=${params.from}&fly_to=${params.to}&partner=data4youcbp202106&offset=${offset}&limit=5&max_stopovers=0`
    }


    
    const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRestults(data.data)
    setSearchId(data.search_id)
    console.log(results)
    }
    const loadMore = () => {
        window.scrollTo({
        top: 200,
        behavior: "smooth",
        
      });
      setOffset(offset+5)
    }


useEffect(()=>{
    fetchData()
},[url])

    return (
        <div className="list" >
            {searchId == null && <div className="loading">
<div className="rectangle_1"></div>
<div className="rectangle_2"></div>
<div className="rectangle_3"></div>
<div className="rectangle_4"></div>
<div className="rectangle_5"></div>
<div className="rectangle_6"></div>
<div className="rectangle_7"></div>
<div className="rectangle_8"></div>
<div className="rectangle_9"></div>
<div className="rectangle_10"></div>
</div>}
            {results.length == 0 && searchId != null && <div className="noFlights"><h2>No flights found!</h2></div>}
            {results && results.map((flight) => (
                flight.availability.seats > 0 &&
                (<Flight 
                stops = {flight.route.length}
                id = {flight.id} 
                flyFrom = {flight.flyFrom} 
                flyTo = {flight.flyTo} 
                cityFrom = {flight.cityFrom} 
                cityTo = {flight.cityTo} 
                countryFromCode = {flight.countryFrom.code} 
                countryFromName = {flight.countryFrom.name}
                countryToCode = {flight.countryTo.code} 
                countryToName = {flight.countryTo.name}  
                dTime = {flight.dTime} 
                aTime = {flight.aTime} 
                flyDuration = {flight.fly_duration} 
                airlines = {flight.airlines} 
                availibility = {flight.availability.seats} 
                price ={flight.price}/>)
            ))}
        {results.length == 5 && <Button onClick={() => loadMore()} title={"Next flights"}/>}
        </div>
        
    )
}

export default Flights