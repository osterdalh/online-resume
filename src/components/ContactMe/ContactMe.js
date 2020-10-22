import React from 'react'
import { Link } from "react-router-dom";

import './ContactMe.scss'
import Header from '../Header/Header'
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';

class ContactMe extends React.Component {
    constructor(props) {
        super(props)
        init("user_QS9O3Kk31QdO9myDCfK84");

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    validateForm = () => {
        const { name, email, message } = this.state
        var valid = true
        if (name.length < 3) {
            var nameElement = document.getElementById("name")
            nameElement.classList.add("notValid")
            valid = false
        }

        if (email.length < 1 || !email.includes('@')) {
            var emailElement = document.getElementById("email")
            emailElement.classList.add("notValid")
            valid = false

        }

        if (message.length < 1) {
            var messageElement = document.getElementById("message")
            messageElement.classList.add("notValid")
            valid = false
        }

        if (valid) {
            this.sendForm(name, email, message)
        }

    }

    showSucc = () => {
        var nameElement = document.getElementById("name")
        nameElement.classList.remove('notValid')
        var emailElement = document.getElementById("email")
        emailElement.classList.remove('notValid')
        var messageElement = document.getElementById("message")
        messageElement.classList.remove('notValid')


        var element = document.getElementById("succText")
        element.style.visibility = "visable"
        element.style.opacity = "1"
    }

    sendForm = (name, email, message) => {

        var templateParams = {
            name,
            email,
            message
        };

        emailjs.send('service_0dk9rvh', 'template_ao4gwzr', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                this.setState({
                    name: '',
                    email: '',
                    message: ''
                })
                this.showSucc()
            }, function (error) {
                console.log('FAILED...', error);
            });
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
                                    Im always looking to expand my network and to get in contact with great people.
                                </p>
                                <p>
                                    Please feel free to reach out, and to download my CV!

                                </p>
                                <div className="text-center p-3">

                                    <Link to="./CV.pdf" target="_blank" download><button>Download CV</button></Link>


                                </div>


                            </div>
                            <div className="col-6">
                                <div className="formConteiner">
                                    <label htmlFor="name">Name</label>
                                    <input id="name" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} type="text"></input>

                                    <label htmlFor="email">Email</label>
                                    <input id="email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type="email"></input>

                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" onChange={(e) => this.setState({ message: e.target.value })} value={this.state.message} type="text"></textarea>

                                    <button onClick={this.validateForm}>Send</button>

                                    <h5 id="succText" className="text-center pt-3 submitText">Thanks for submitting!</h5>
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