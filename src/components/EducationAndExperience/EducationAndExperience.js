import React from 'react'
import './EducationAndExperience.scss'

import Header from '../Header/Header'
import ListItem from '../ListItem/ListItem'

const EducationAndExperience = () => {
    return (
        <div className="container EducationAndExperience">
            <div className="row">
                <div className="col-6">
                    <div className="colWidth">
                        <Header className="" heading="Education" theme="dark">
                            <h5>WHAT IVE LEARNED</h5>

                        </Header>
                        <ListItem className="ListItem"
                            years="2013-2018"
                            title="Norwegian University of Science and Technology - Trondheim"
                            subtitle="Master's Degree - Mechanical Engineering"></ListItem>
                        <ListItem className="ListItem"
                            years="2017"
                            title="Instituto Superior Técnico - Lisbon"
                            subtitle="Exchange Year"></ListItem>
                    </div>


                </div>
                <div className="col-6">
                    <div className="colWidth float-right">
                        <Header heading="Experience" theme="dark">
                            <h5>WHAT IVE DONE</h5>

                        </Header>
                        <ListItem className="ListItem"
                            years="2019 - Present"
                            title="Cognizant - Oslo"
                            subtitle="Frontend Developer & Business Analyst"></ListItem>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default EducationAndExperience