import React from 'react'
import "../style/TechStack.css"
import { motion } from "framer-motion"


const RotatingWheel = ({ path }: { path: string }) => {
	return <motion.img
		src={`${process.env.PUBLIC_URL}/svg/${path}`} alt=""
		animate={{ rotate: [0, 360, 0] }}
		transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
	/>
}

interface ITextSection {
	title: string;
	className: string;
	children: React.ReactNode;
}

const TextSection = ({ title, className, children }: ITextSection) => {
	return (
		<div className={className}>
			<h2>{title}</h2>
			<p>
				{children}
			</p>
		</div>
	)
}


function TechStack() {
	return (
		<div className='tech-stack'>
			<RotatingWheel path='frontend.svg' />
			<RotatingWheel path='backend.svg' />
			<RotatingWheel path='other.svg' />
			<TextSection title='UI/UX Designer' className='frontend'>
				I'm a junior <b>UI/UX designer</b> familiar with many widely
				used front-end tools and languages. Such as <b>React.js </b>
				(with both <b>JavaScript</b> and <b>TypeScript</b>) as well as
				<b> Figma</b> for prototyping.
			</TextSection>
			<TextSection title="Backend Dev" className='backend'>
				I have plenty of experience in backend development using
				methods like <b>agile</b> and <b>test driven development</b> to product
				applications that mange <b>SQL databases</b> and serve <b>RESTful APIs</b>.

			</TextSection>
			<TextSection title='Everything Else' className='other'>
				I've also worked with plenty other tools and technologies
				from developing <b>CLIs</b> to <b>programming languages </b>
				and <b>network attached storage</b> devices.
			</TextSection>
		</div>
	)
}

export default TechStack