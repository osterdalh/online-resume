import React from 'react'
import './EducationAndExperience.scss'

import Header from '../Header/Header'
import ListItem from '../ListItem/ListItem'

class EducationAndExperience extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedItem: null
        }
    }

    onSelectedItem() {
        this.setState({ selected: true })
        console.log("HEI")
    }


    render() {
        return (
            <div id="experience" className="container EducationAndExperience">
                <div className="d-flex flex-column">
                    <div className="row">
                        <div className="col-4">
                            <div className="content-fit" >
                                <Header className="HeaderComp" heading="Education" theme="dark">
                                    <h5>WHAT IVE LEARNED </h5>

                                </Header>
                                <div onClick={() => this.setState({ selectedItem: 'ntnu' })}>
                                    <ListItem className="ListItem "
                                        years="2013-2018"
                                        title="Norwegian University of Science and Technology - Trondheim"
                                        subtitle="Master's Degree - Mechanical Engineering"
                                        id="ntnu"
                                        selectedItem={this.state.selectedItem}>
                                    </ListItem>
                                </div>
                                <div onClick={() => this.setState({ selectedItem: 'lisboa' })}>
                                    <ListItem className="ListItem"
                                        years="2017"
                                        title="Instituto Superior Técnico - Lisbon"
                                        subtitle="Exchange Year"
                                        id="lisboa"
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
                                <div onClick={() => this.setState({ selectedItem: 'cognizant' })}>
                                    <ListItem className="ListItem"
                                        years="2019 - Present"
                                        title="Cognizant - Oslo"
                                        subtitle="Frontend Developer & Business Analyst"
                                        id="cognizant"
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
                                <div onClick={() => this.setState({ selectedItem: 'masters' })}>
                                    <ListItem className="ListItem"
                                        title="Master Thesis"
                                        subtitle="Development of an Automated Bin Picking System for Cluttered Environments"
                                        id="masters"
                                        selectedItem={this.state.selectedItem}>

                                    </ListItem>
                                </div>
                                <div onClick={() => this.setState({ selectedItem: 'smartmirror' })} >
                                    <ListItem className="ListItem"
                                        title="Smart Mirror"
                                        subtitle="Learning React by Developing a Smart Mirror"
                                        id="smartmirror"
                                        selectedItem={this.state.selectedItem}>

                                    </ListItem>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>




        )
    }

}

export default EducationAndExperience