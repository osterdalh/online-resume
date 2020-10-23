import React from 'react'
import './AboutMe.css'
import sailing from './meg.jpg'

import Header from '../Header/Header'

const getAge = (dob) => {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const AboutMe = () => {

    return (
        <div id="about" className="AboutMe">
            <div className="aboutMeBox text-center container">
                <div className="row">
                    <div className="col-6 p-0">
                        <div>
                            <img src={sailing}></img>
                        </div>

                    </div>
                    <div className="col-6 textContainer">
                        <div className="">
                            <Header heading="About Me" ></Header>
                            <p className="aboutText">
                                Hi! My name is Hans Braltand Østerdal, and i'm {getAge(new Date(1993, 1, 25))} years old.


                        </p>
                        </div>

                    </div>

                </div>

            </div>





        </div>
    )
}

export default AboutMe