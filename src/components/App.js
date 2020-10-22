import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar/Navbar'
import AboutMe from './AboutMe/AboutMe'
import EducationAndExperience from './EducationAndExperience/EducationAndExperience'
import Home from './Home/Home'
import SocialMedia from './SocialMedia/SocialMedia'
import ContactMe from './ContactMe/ContactMe'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar className="Navbar"></Navbar>
      <Home></Home>
      <SocialMedia></SocialMedia>

      <AboutMe></AboutMe>
      <EducationAndExperience></EducationAndExperience>

      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
