import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from './Navbar.js'
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'


function App(){
  return (
    <div>
      <div id ="container">
      <Header/>
      <Navbar/>
      <Body/>
      <Footer/>
      </div>
    </div>    
  )
}
export default App

