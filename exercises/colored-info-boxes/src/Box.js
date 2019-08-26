import React from "react"

function Box(props){
    return (
        <div className={`${props.classBox}`}>
            <h3>{props.name}</h3>
            <h4>{props.subTitle}</h4>     
        </div>      
    )
}
export default Box