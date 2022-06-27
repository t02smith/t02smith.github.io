import React from 'react'
import "../style/css/components/Contact.css"

const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <h1>Contact Me</h1>

        <div className='contact'>
            <a href="mailto:tom@t02smith.com">
                <img src={`${process.env.PUBLIC_URL}/svg/contact/email.svg`} alt="" />
                <h2>Send me an email</h2>
            </a>
            <a href="http://github.com/t02smith">
                <img src={`${process.env.PUBLIC_URL}/svg/contact/github.svg`} alt="" />
                <h2>Find me on GitHub</h2>
            </a>
            <a href="http://www.linkedin.com/in/tom-smith-uos">
                <img src={`${process.env.PUBLIC_URL}/svg/contact/linkedin.svg`} alt="" />
                <h2>Find me on Linkedin</h2>
            </a>

        </div>
    </div>
  )
}

export default Contact