import React from 'react'
import './Header.scss'

const Header = ({ heading, theme }) => {

    return (
        <div className={`Header ${theme}`}>
            <h1 className="pb-3 text-center position-relative">{heading}
            </h1>
            <div className="underline mb-3"></div>

        </div>
    )
}

export default Header
