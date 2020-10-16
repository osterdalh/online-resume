import React from 'react'
import './EducationAndExperience.scss'

import Header from '../Header/Header'
import ListItem from '../ListItem/ListItem'

const EducationAndExperience = () => {
    return (
        <div className="EducationAndExperience">
            <div className="row">
                <div className="col-6">
                    <div className="content-fit">
                        <Header className="" heading="Education" theme="dark"></Header>
                        <h5>WHAT IVE LEARNED</h5>
                        <ListItem
                            years="2013-2018"
                            title="Norwegian University of Science and Technology - Trondheim"
                            subtitle="Master's Degree - Mechanical Engineering"></ListItem>
                    </div>

                </div>
                <div className="col-6">
                    <Header heading="Experience" theme="dark"></Header>

                </div>

            </div>



        </div>
    )
}

export default EducationAndExperience