import React from 'react';
import './App.css';
import Box from './Box.js';

function App(props){
  return (

    <div>
      <Box classBox ="box1" name="Maxamoon" subTitle ="blackLab" />
      <Box classBox ="box2" name="KelseyJean" subTitle ="husky"/> 
      <Box classBox ="box3" name="Thunder" subTitle ="husky"/> 
      <Box classBox ="box4" name="Niko" subTitle ="husky"/>
    </div>    
  )
}
export default App