import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar/Navbar'
import AboutMe from './AboutMe/AboutMe'
import EducationAndExperience from './EducationAndExperience/EducationAndExperience'

function App() {
  return (
    <div className="App">
      <Navbar className="Navbar"></Navbar>
      <AboutMe></AboutMe>
      <EducationAndExperience></EducationAndExperience>
    </div>
  );
}

export default App;
