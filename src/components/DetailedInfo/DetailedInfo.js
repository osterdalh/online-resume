import React from 'react'
import Data from './detailsData.json'
import './DetailedInfo.scss'
import Header from '../Header/Header'

import masters from './asstes/masters.jpg'
import cognizant from './asstes/cognizant.jpg'
import ntnu from './asstes/ntnu.jpg'


class DetailedInfo extends React.Component {
    constructor() {
        super()
    }


    getImage = (id) => {
        switch (id) {
            case 'ntnu':
                return ntnu
            case 'lisboa':
                return masters
            case 'cognizant':
                return cognizant
            case 'masters':
                return masters
            case 'smartmirror':
                return masters
            default:
                return null
        }
    }


    render() {
        const id = this.props.id
        if (Data[id] == null) {
            return null
        } else {
            const { text, title, alt } = Data[id]
            return (

                <div className="DetailedInfo">
                    <div className="row">
                        <div className="col-4">
                            <img className="imageContainer" src={this.getImage(id)} alt={alt}></img>
                        </div>
                        <div className="col-8 padding100">
                            <div className="text-center">
                                <Header heading={title}></Header>
                            </div>
                            <div>
                                <p>
                                AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
TermsPrivacyPolicy2332 sd SafetyHow YouTube worksTest new features
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }


    }

}

export default DetailedInfo