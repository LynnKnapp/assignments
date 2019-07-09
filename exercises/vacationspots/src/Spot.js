import React from "react"

const Spot = (props) =>{
   
   return(
   
   <div className ="destination">
   <p>{props.place}</p>
   <p>{props.price}</p>
   <p>My favorite time to go is {props.timeToGo}</p>
   </div>
   ) 
} 
export default Spot