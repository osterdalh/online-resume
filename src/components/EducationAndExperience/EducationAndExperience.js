import React from 'react'
import './EducationAndExperience.scss'

import Header from '../Header/Header'
import ListItem from '../ListItem/ListItem'
import DetailedInfo from '../DetailedInfo/DetailedInfo'
import MyExpertice from '../MyExpertice/MyExpertice'

class EducationAndExperience extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedItem: null
        }
    }

    onSelectedItem(item) {
        if (this.state.selectedItem === item) {
            this.setState({ selectedItem: null })
        } else if (!(this.state.selectedItem === item))
            this.setState({ selectedItem: item })
    }


    render() {
        return (
            <div id="experience" className="EducationAndExperience">
                <div className="container">
                    <MyExpertice></MyExpertice>


                    <div className="d-flex flex-column">
                        <div className="row">
                            <div className="col-4">
                                <div className="content-fit" >
                                    <Header className="HeaderComp" heading="Education" theme="dark">
                                        <h5>WHAT IVE LEARNED </h5>
                                    </Header>
                                    <div onClick={() => this.onSelectedItem('ntnu')}>
                                        <ListItem className="ListItem "
                                            years="2013-2018"
                                            title="Norwegian University of Science and Technology - Trondheim"
                                            subtitle="Master's Degree - Mechanical Engineering"
                                            id="ntnu"
                                            selectedItem={this.state.selectedItem}>
                                        </ListItem>
                                    </div>
                                    <div onClick={() => this.onSelectedItem('lisboa')}>
                                        <ListItem className="ListItem"
                                            years="2016-2017"
                                            title="Instituto Superior Técnico - Lisbon"
                                            subtitle="Exchange Year"
                                            id="lisboa"
                                            selectedItem={this.state.selectedItem}>
                                        </ListItem>
                                    </div>
                                    <div onClick={() => this.onSelectedItem('volunteer')}>
                                        <ListItem className="ListItem"
                                            years="2015"
                                            title="Volunteer Work - Trondheim"
                                            subtitle="UKA-15 and Student Association"
                                            id="volunteer"
                                            selectedItem={this.state.selectedItem}>
                                        </ListItem>
                                    </div>

                                </div>

                            </div>


                            <div className="col-4">
                                <div className="content-fit horCenter">
                                    <Header className="HeaderComp" heading="Experience" theme="dark">
                                        <h5>WHAT IVE DONE</h5>

                                    </Header>
                                    <div onClick={() => this.onSelectedItem('cognizantBusiness')}>
                                        <ListItem className="ListItem"
                                            years="2019"
                                            title="Cognizant - Oslo"
                                            subtitle="Business Analyst"
                                            id="cognizantBusiness"
                                            selectedItem={this.state.selectedItem}>
                                        </ListItem>

                                    </div>
                                    <div onClick={() => this.onSelectedItem('cognizantFrontend')}>
                                        <ListItem className="ListItem"
                                            years="2019 - Present"
                                            title="Cognizant - Oslo"
                                            subtitle="Frontend Developer"
                                            id="cognizantFrontend"
                                            selectedItem={this.state.selectedItem}>
                                        </ListItem>

                                    </div>

                                </div>

                            </div>

                            <div className="col-4">
                                <div className="content-fit float-right">
                                    <Header className="HeaderComp" heading="Projects" theme="dark">
                                        <h5>LEARNING BY DOING</h5>

                                    </Header>
                                    <div onClick={() => this.onSelectedItem('masters')}>
                                        <ListItem className="ListItem"
                                            years="2018"
                                            title="Master Thesis"
                                            subtitle="Development of an Automated Bin Picking System for Cluttered Environments"
                                            id="masters"
                                            selectedItem={this.state.selectedItem}>

                                        </ListItem>
                                    </div>
                                    <div onClick={() => this.onSelectedItem('smartmirror')} >
                                        <ListItem className="ListItem"
                                            years="2019"
                                            title="Smart Mirror"
                                            subtitle="Learning React by Developing a Smart Mirror"
                                            id="smartmirror"
                                            selectedItem={this.state.selectedItem}>

                                        </ListItem>
                                    </div>
                                    <div onClick={() => this.onSelectedItem('jeopardy')} >
                                        <ListItem className="ListItem"
                                            years="2020"
                                            title="Jeopardy Application"
                                            subtitle="Developing a Game Application for me and my Friends"
                                            id="jeopardy"
                                            selectedItem={this.state.selectedItem}>

                                        </ListItem>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div>
                        <DetailedInfo id={this.state.selectedItem}>

                        </DetailedInfo>

                    </div>
                </div>
            </div>




        )
    }

}

export default EducationAndExperience