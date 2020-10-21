import React from 'react'
import './ContactMe.scss'
import Header from '../Header/Header'

class ContactMe extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    validateForm = () => {
        const { name, email, message } = this.state
        var valid = true
        if (name.length < 3){
            var nameElement = document.getElementById("name")
            nameElement.classList.add("notValid")
            valid = false
        }

        if (email.length < 1 || !email.includes('@')){
            var nameElement = document.getElementById("email")
            nameElement.classList.add("notValid")
            valid = false

        }

        if (message.length < 1){
            var nameElement = document.getElementById("message")
            nameElement.classList.add("notValid")
            valid = false
        }

        if(valid){
            this.sendForm()
        }
        
    }



    sendForm = () => {
        const myEmail = "osterdalh@gmail.com"
    }


    render() {
        return (
            <div id="contact" className="ContactMe">
                <div className="box">
                    <div className="text-center">
                        <Header heading="Contact Me"></Header>
                    </div>
                    <div className="contactText">
                        <div className="row">
                            <div className="col-6">
                                <p>
                                    Im always looking to expand my network and to get in contact with great people. Please feel free to reach out!
                                </p>
                            </div>
                            <div className="col-6">
                                <div className="formConteiner">
                                    <label for="name">Name</label>
                                    <input id="name" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} type="text"></input>

                                    <label for="email">Email</label>
                                    <input id="email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type="email"></input>

                                    <label for="message">Message</label>
                                    <textarea id="message" onChange={(e) => this.setState({ message: e.target.value })} value={this.state.message} type="text"></textarea>

                                    <button onClick={this.validateForm}>Send</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}


export default ContactMe