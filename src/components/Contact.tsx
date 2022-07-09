import React from 'react'
import { motion } from 'framer-motion'
import "../style/css/components/Contact.css"

const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <h1>Contact Me</h1>

        <div className='contact'>
            <motion.a href="mailto:tom@t02smith.com" whileHover={{color: "#FFC700"}}>
                <img src={`${process.env.PUBLIC_URL}/svg/contact/email.svg`} alt="" />
                <h2>Send me an email</h2>
            </motion.a>
            <motion.a href="http://github.com/t02smith" whileHover={{color: "#6E5494"}}>
                <img src={`${process.env.PUBLIC_URL}/svg/contact/github.svg`} alt="" />
                <h2>Find me on GitHub</h2>
            </motion.a>
            <motion.a href="http://www.linkedin.com/in/tom-smith-uos" whileHover={{color: "#0A66C2"}}>
                <img src={`${process.env.PUBLIC_URL}/svg/contact/linkedin.svg`} alt="" />
                <h2>Find me on Linkedin</h2>
            </motion.a>

        </div>
    </div>
  )
}

export default Contact