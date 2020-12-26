import React from 'react'
import Data from './detailsData.json'
import './DetailedInfo.scss'
import Header from '../Header/Header'

import cognizant from './asstes/cognizant.jpg'
import ntnu from './asstes/ntnu.jpg'
import jeopardy from './asstes/jeopardy.PNG'
import lisboa from './asstes/ist.jpg'
import uka from './asstes/uka.jpg'
import smartmirror from './asstes/smartmirror.jpg'
import binpicking from './asstes/binpicking.png'
import frontend from './asstes/frontendDev.png'


class DetailedInfo extends React.Component {

    getImage = (id) => {
        switch (id) {
            case 'ntnu':
                return ntnu
            case 'lisboa':
                return lisboa
            case 'volunteer':
                return uka
            case 'cognizantBusiness':
                return cognizant
            case 'cognizantFrontend':
                return frontend
            case 'masters':
                return binpicking
            case 'smartmirror':
                return smartmirror
            case 'jeopardy':
                return jeopardy
            default:
                return null
        }
    }


    render() {
        const id = this.props.id
        if (Data[id] == null) {
            return null
        } else {
            const { title, alt } = Data[id]
            return (

                <div className="DetailedInfo">
                    <div className="row mx-0">
                        <div className="col-6 px-0">
                            <img className="" src={this.getImage(id)} alt={alt}></img>
                        </div>
                        <div className="col-6 px-0 textContainer">
                            <div className="text-center">
                                <Header heading={title}></Header>
                            </div>
                            <div>
                                <p>
                                    {Data[id].text}
                                </p>
                                {Data[id].link ?
                                    <p className="text-center">
                                        <a rel="noopener noreferrer" target="_blank" href={Data[id].link}>Click here</a>
                                    </p> :
                                    null}

                            </div>
                        </div>
                    </div>
                </div>
            )
        }


    }

}

export default DetailedInfo