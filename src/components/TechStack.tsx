import React from 'react'
import "../style/TechStack.css"
import { motion } from "framer-motion"


function TechStack() {
	return (
		<div className='tech-stack'>
			<motion.img
				src={`${process.env.PUBLIC_URL}/svg/frontend.svg`} alt=""
				animate={{ rotate: [0, 360, 0] }}
				transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.img
				src={`${process.env.PUBLIC_URL}/svg/backend.svg`} alt=""
				animate={{ rotate: [0, 360, 0] }}
				transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.img
				src={`${process.env.PUBLIC_URL}/svg/other.svg`} alt=""
				animate={{ rotate: [0, 360, 0] }}
				transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
			/>
			<div className="frontend">
				<h2>UI/UX Designer</h2>
				<p>
					I'm a junior <b>UI/UX designer</b> familiar with many widely 
					used front-end tools and languages. Such as <b>React.js </b> 
					(with both <b>JavaScript</b> and <b>TypeScript</b>) as well as 
					<b> Figma</b> for prototyping.
				</p>
			</div>
			<div className="backend">
				<h2>Backend Dev</h2>
				<p>
					I have plenty of experience in backend development using
					methods like <b>agile</b> and <b>test driven development</b> to product
					applications that mange <b>SQL databases</b> and serve <b>RESTful APIs</b>.
				
				</p>
			</div>
			<div className='other'>
				<h2>Everything Else</h2>
				<p>I've also worked with plenty other tools and technologies
					from developing <b>CLIs</b> to <b>programming languages </b>
					and <b>network attached storage</b> devices.
				</p>
			</div>
		</div>
	)
}

export default TechStack