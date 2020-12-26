import React from 'react'
import './ListItem.scss'


const ListItem = ({ years, title, subtitle, id, selectedItem }) => {
    return (
        <div className={`ListItem ${id === selectedItem ? 'activeItem' : ''}`}>
            <p className="p-0 m-0 mb-2">{title}</p>
            {years ? (<h6 className="years ">{years}</h6>) : null}
            <p className="p-0 m-0">{subtitle}</p>

        </div>
    )
}


export default ListItem
