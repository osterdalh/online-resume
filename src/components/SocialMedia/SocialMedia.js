import React from 'react'
import './SocialMedia.scss'

const SocialMedia = () => {

    return (
        <div className="SocialMedia">
            {/* <span>Follow me</span> */}
            <div className="socialIconContainer">
                <a rel="noopener noreferrer" href="http://www.linkedin.com/in/hans-bratland-østerdal" target="_blank"><i className="socIcon fab fa-linkedin"></i></a>
                <a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=668486071" target="_blank"><i className="socIcon fab fa-facebook"></i></a>
                <a rel="noopener noreferrer" href="https://www.github.com/osterdalh" target="_blank"><i className="socIcon fab fa-github"></i></a>

                
                
            </div>

        </div>
    )
}

export default SocialMedia
