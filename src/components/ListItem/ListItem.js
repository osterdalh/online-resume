import React from 'react'
import './ListItem.scss'


const ListItem = ({years, title, subtitle}) => {
    return(
        <div className="ListItem">
            <h6 className="years">{years}</h6>
            <p className="p-0 m-0">{title}</p>
            <p className="p-0 m-0">{subtitle}</p>
             
        </div>
    )
}


export default ListItem
