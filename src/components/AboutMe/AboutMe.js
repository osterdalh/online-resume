import React from 'react'
import './AboutMe.css'
import AboutMeImage from './AboutMe.jpg';

const AboutMe = () => {
    return (
        <div id="about" className="container AboutMe">
            <div className="row">
                <div className="col-6 p-0">
                    <img className="aboutMeImage" src={AboutMeImage} alt="about me"></img>
                </div>
                <div className="col-6 p-0 d-flex align-items-center">
                    <div className="textAboutMe">
                        <h1 className="headerText">About Me</h1>
                        <h5 className="headerText">My Background</h5>
                        <p>
                            Curious graduate with a passion for frontend development and design.

                            Educational background from NTNU in Trondheim, with master's degree in mechanical engineering. Specialized in development of automated warehouse solutions, using computer vision, robotic manipulators, and machine learning
                    </p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AboutMe