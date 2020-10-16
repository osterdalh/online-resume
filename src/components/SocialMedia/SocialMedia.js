import React from 'react'
import './SocialMedia.scss'

const SocialMedia = () => {

    return (
        <div className="SocialMedia">
            {/* <span>Follow me</span> */}
            <div className="socialIconContainer">
                <a href="http://www.linkedin.com/in/hans-bratland-østerdal" target="_blank"><i class="socIcon fab fa-linkedin"></i></a>
                <a href="https://www.facebook.com/profile.php?id=668486071" target="_blank"><i class="socIcon fab fa-facebook"></i></a>
                <a href="https://www.github.com/osterdalh" target="_blank"><i class="socIcon fab fa-github"></i></a>

                
                
            </div>

        </div>
    )
}

export default SocialMedia
