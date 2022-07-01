import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";

function Flights() {
    const [results, setRestults] = useState([]);
    const params = useParams();
    const url = `https://api.skypicker.com/flights?fly_from=${params.from}&fly_to=${params.to}&partner=data4youcbp202106`;
    const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRestults(data)
    }
useEffect(()=>{
    fetchData()
},[])

    return (
        console.log(results)
    )
}

export default Flights