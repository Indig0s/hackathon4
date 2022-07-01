import Button from "./Button";


function SearchBar({value, onChange}){
  
    return(
        <>
        <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
        {/* <Button onClick={btnOnClick} title={"Search"}/> */}
        
        </div>
        </>
    )
}
export default SearchBar