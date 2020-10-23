import React from 'react'
import './SkillStack.scss'


const SkillStack = () => {
    return (
        <div className="SkillStack">
            <div className="container">
                <div className="d-flex justify-content-between icons">
                    <div className="text-center">
                        <i class="fab fa-react"></i>
                        <h4>React</h4>
                    </div>
                    <div className="text-center">
                        <i class="fab fa-js-square"></i>
                        <h4>JavaScript</h4>

                    </div>
                    <div className="text-center">
                        <i class="fab fa-css3-alt"></i>
                        <h4>CSS</h4>

                    </div>
                    <div className="text-center">
                        <i class="fab fa-html5"></i>
                        <h4>HTML</h4>

                    </div>
                    <div className="text-center">
                        <i class="fab fa-python"></i>
                        <h4>Python</h4>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default SkillStack