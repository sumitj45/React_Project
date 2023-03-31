import React from "react";
import Search from "../../components/search";


const Homepage=()=>{
    const dummyData='dummyData'
    //passing data from child to parent
   const getDataFromSearch=(getData)=>{
    console.log(getData,'gettingdata');

   }

    return (
        <div className="Homepage">
          <Search  getDataFromSearch={getDataFromSearch} passingData={dummyData}/>

        </div>
    )
}

export default Homepage;
