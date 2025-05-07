import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Country(){  
  let [country, setCountry]=useState([]);

  useEffect(()=>{
    getApiData();
  },[])

  const getApiData=()=>{
    return axios.get(`https://xcountries-backend.azurewebsites.net/all`)
    // .then(data=> data.JSON)
    .then(jsondata=> 
      {console.log("printing api data",jsondata.data)
      setCountry(jsondata.data);
      }
    )
    .catch(e=> console.log("Error fetching data:",e))
  }  

  // let temp=["India", "America", "Australia", "London", "Canada", "China", "Korea"];
    return (
      <div style={{display:"flex",
        gap:"8px",
        flexWrap:"wrap",
        padding:"50px"
        
      }}>
        {/* h1>Success</h1> */}
        {country.map(c => (
        <div style={{border: "1px solid grey",
          borderRadius:"10%",
          height : "150px",
          width : "150px",
          display:"flex",
          flexDirection: "column",
          alignItems:"center",
          textAlign:"center",
          padding:"1px",
          justifyContent:"center"}}
          key={c.abbr}
          >
            <img src={c.flag} alt={c.name}
            style={{height:"80px", width:"80px"}}/>
            <p>{c.name}</p>                   
            </div>
      ))}
      </div>
    )
}