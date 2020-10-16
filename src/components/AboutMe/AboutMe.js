import React from 'react'
import './AboutMe.css'

import Header from '../Header/Header'

const AboutMe = () => {
    return (
        <div id="about" className="AboutMe">
            <div className="textContainer text-center">
                <Header heading="About Me" theme="light"></Header>
                <p className="aboutText">
                    Curious graduate with a passion for frontend development and design.

                    Educational background from NTNU in Trondheim, with master's degree in mechanical engineering. Specialized in development of automated warehouse solutions, using computer vision, robotic manipulators, and machine learning
            </p>
            </div>





        </div>
    )
}

export default AboutMe