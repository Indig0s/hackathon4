import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Flights from "./Flights";

function App() {
  const [from, setFrom] = useState("");
  const [codeFrom, setCodeFrom] = useState("");
  const [to, setTo] = useState("");
  const [codeTo, setCodeTo] = useState("");

  const getCodeFrom = async (query) => {
    const url = `https://api.skypicker.com/locations?type=general&key=city.name&value=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    setCodeFrom(data.locations[0].id);
  };
  const getCodeTo = async (query) => {
    const url = `https://api.skypicker.com/locations?type=general&key=city.name&value=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    setCodeTo(data.locations[0].id);
  };

  // useEffect(() => {
  //   getCodeFrom(from.toLowerCase());
  // }, [from]);

  // useEffect(() => {
  //   getCodeTo(to.toLowerCase());
  // }, [to]);

  const setCodes = async () => {
    await getCodeTo(to.toLowerCase());
    await getCodeFrom(from.toLowerCase());
  };

  return (
    <div className="main">
      <BrowserRouter>
        <div id="nav-wrap">
          <div id="scroller-anchor"></div> 
          <div id="nav">
                <ul className="clearfix">
                <Link className='nav-btn active' to='/'>Home</Link>
                </ul>
            </div>
        </div>
        <div className="site">
          <div className="searchBarDiv">
            <span className="selection">From: </span>
            <SearchBar onChange={(e) => setFrom(e.target.value)} />
            <span className="selection">To: </span>
            <SearchBar onChange={(e) => setTo(e.target.value)} />
            </div>
            <Dropdown className='dropdown'
              onChange1={(opt) => setCodeTo(opt.value)}
              onChange2={(opt) => setCodeFrom(opt.value)}
            />

            <Link to={`/search/${codeFrom}/${codeTo}`}>
              <Button title={"Search"} onClick={() => setCodes()} />
            </Link>
            <Routes>
              <Route path="/search/:from/:to" element={<Flights />} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
