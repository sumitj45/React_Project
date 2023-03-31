import React,{useState} from "react";
import './style.css';


const Search=(props)=>{
    console.log(props)
    //child to parent
    const {getDataFromSearch}=props;
const [inputValue,setInputValue]=useState(""); //initial value

const handleInputValue=(e)=>{

   const {value}=e.target;
   //set updated val
    setInputValue(value);
}
const handleSubmit=(e)=>{
e.preventDefault(); //this is to prevent from getting refreshed

// this is a method,passing back the data to the parent component
getDataFromSearch(inputValue);

}
console.log(inputValue)
    return (
        <form  onSubmit={handleSubmit}className="Search">
            <input name="search" onChange={handleInputValue} value={inputValue} placeholder="Search Recipes" id="search"/>
            <button  className="btn" type="submit">Search🔍</button>


        </form>
    )
}

export default Search;