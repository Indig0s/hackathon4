import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import Flight from "./Flight";

function Flights() {
    const [results, setRestults] = useState(null);
    const params = useParams();
    const url = `https://api.skypicker.com/flights?fly_from=${params.from}&fly_to=${params.to}&partner=data4youcbp202106`;
    const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRestults(data.data)
    }
useEffect(()=>{
    fetchData()
},[])
console.log(results)
    return (
        <div className="list">
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

        </div>
    )
}

export default Flights