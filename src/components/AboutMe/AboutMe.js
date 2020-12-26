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
                        <img alt="Me sailing my boat" src={sailing}></img>

                    </div>
                    <div className="col-6 textContainer">
                        <div className="">
                            <Header heading="About Me" ></Header>
                            <div className="text-left">
                            <p className="aboutText">
                                My name is Hans, and Im {getAge(new Date(1993, 1, 25))} years old. Im currently living Oslo, where I work as a frontend developer for one of the largest and fastest growing tech companies in the world, Cognizant. Through my work, I have gained experience and knowledge both as a business analyst and as a frontend developer.
                                </p>
                            <p>
                                I live a bit different than most people, as my house is a 34-foot sailboat. This is perfect for me, because it gives me the freedom to travel with my home wherever and whenever I want. When im not developing awesome web applications, you can often find me hiking in the mountains, or maybe spearfishing under my boat.
                        </p>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>





        </div>
    )
}

export default AboutMe