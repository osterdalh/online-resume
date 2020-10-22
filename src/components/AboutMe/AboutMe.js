import React from 'react'
import './AboutMe.css'

import Header from '../Header/Header'

const getAge = (dob) => {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const AboutMe = () => {

    return (
        <div id="about" className="AboutMe">
            <div className="textContainer text-center">
                <Header heading="About Me" ></Header>
                <p className="aboutText">
                    Hi! My name is Hans Braltand Østerdal, and i'm {getAge(new Date(1993, 1, 25))} years old. 


                </p>
            </div>





        </div>
    )
}

export default AboutMe