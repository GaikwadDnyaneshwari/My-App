import logo from './logo.svg';
import './App.css';
// import React,{useEffect, useState} from 'react'
import Navbar from './component/Navbar';
import Homepages from './component/Homepages';
import Techstake from './component/Techstack';
import Project from './component/Project';
import Experience from './component/Experience';
function App(){

  
  return(
    <div className='App'>
      
      <Navbar />
      <Homepages/>
      <Techstake />
      <Experience/>
      <Project />
    </div>
  )
}
export default App;