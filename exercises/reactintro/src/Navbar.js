import React from "react"
import "./styles.css"

function Navbar(){
    return(
        <div className="Navbar">
            <a href="home" >Home</a>
            <a href="waterskiing" >Water Skiing</a>
            <a href="parasailing" >Parasailing</a>
            <a href="jetskiing" >Jetskiing</a>
            <a href="more-info">More Info</a>
       </div>
    )
}
export default Navbar

/* <div class ="Navbav"> 
        <a class ="active" href="#home">Home</a>
        <a class ="active" href ="boating.html">Boating</a>
        <a class ="active" href ="parasailing.html">Parasailing</a>
        <a class="active" href ="jetskiing.html">Jetskiing</a>
    </div>   */


