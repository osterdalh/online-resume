import React from 'react'
import './Header.scss'

const Header = ({ heading, theme, children }) => {
    return (
        <div className={`Header ${theme}`}>
            <h1 className="pb-3 text-center position-relative">{heading}
            </h1>
            <div className="underline mb-3"></div>
        <span className="text-center">{children}</span> 
        </div>
    )
}

export default Header
