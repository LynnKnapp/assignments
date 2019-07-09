import React from "react"

const Pets =(props) =>{
    
    return(
        <div className ="cuddleBug">
        <h1>{props.name}</h1>
        <h2>{props.breed}</h2>
        </div>
    )
} 
export default Pets   