import React from 'react'
import './EducationAndExperience.scss'

import Header from '../Header/Header'
import ListItem from '../ListItem/ListItem'

const EducationAndExperience = () => {
    return (
        <div id="experience" className="container EducationAndExperience">
            <div className="d-flex flex-column">
                <div className="row">
                    <div className="col-4">
                        <div className="content-fit">
                            <Header className="" heading="Education" theme="dark">
                                <h5>WHAT IVE LEARNED</h5>

                            </Header>
                            <ListItem className="ListItem"
                                years="2013-2018"
                                title="Norwegian University of Science and Technology - Trondheim"
                                subtitle="Master's Degree - Mechanical Engineering">
                            </ListItem>
                            <ListItem className="ListItem"
                                years="2017"
                                title="Instituto Superior Técnico - Lisbon"
                                subtitle="Exchange Year">
                            </ListItem>
                        </div>

                    </div>


                    <div className="col-4">
                        <div className="content-fit horCenter">
                            <Header heading="Experience" theme="dark">
                                <h5>WHAT IVE DONE</h5>

                            </Header>
                            <ListItem className="ListItem"
                                years="2019 - Present"
                                title="Cognizant - Oslo"
                                subtitle="Frontend Developer & Business Analyst">
                            </ListItem>
                        </div>

                    </div>

                    <div className="col-4">
                        <div className="content-fit float-right">
                            <Header heading="Projects" theme="dark">
                                <h5>LEARNING BY DOING</h5>

                            </Header>
                            <ListItem className="ListItem"
                                title="Master Thesis"
                                subtitle="Development of an Automated Bin Picking System for Cluttered Environments">
                            </ListItem>
                            <ListItem className="ListItem"
                                title="Smart Mirror"
                                subtitle="Learning React by Developing a Smart Mirror">
                            </ListItem>
                        </div>

                    </div>

                </div>
            </div>


        </div>




    )
}

export default EducationAndExperience