import { DateTime } from 'luxon';

function Flight({stops, id, flyFrom, flyTo, cityFrom, cityTo, countryFromCode, countryToCode, countryFromName, countryToName, dTime, aTime, flyDuration, airlines, availibility, price}){

    return(

        <div className="flight" key={id}>
            <div className="flight__text">
                <div className="flight__text_left">From: {flyFrom}, {countryFromCode}</div>
                <div className="flight__text_right">To: {flyTo}, {countryToCode}</div>
            </div>
            <div className="flight__text">
                <div className="flight__text_left">From: {cityFrom}, {countryFromName} </div>
                <div className="flight__text_right">To: {cityTo}, {countryToName}</div>
            </div>    
            <div className="flight__text">
                <div className="flight__text_left">TOD {DateTime.fromMillis(dTime*1000).toFormat('dd.MM.yy - hh:mm')}</div>
                <div className="flight__text_right">TOA {DateTime.fromMillis(aTime*1000).toFormat('dd.MM.yy - hh:mm')}</div>
            </div>
            <div className="flight__text">
                <div className="flight__text_left">Flight duration: {flyDuration}</div>
                <div className="flight__text_right">Airline: {airlines}</div>
            </div>
            <div className="flight__text">
                <div className="flight__text_left">Availibility: {availibility} Number of transits: {stops -1}</div>
                <div className="flight__text_right">Price EUR {price}</div>
            </div>
        </div>
    )
}

export default Flight;