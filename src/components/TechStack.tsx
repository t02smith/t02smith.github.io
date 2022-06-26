import React, { useEffect } from 'react'
import "../style/css/components/TechStack.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

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
	const {ref, inView} = useInView();
	const animation = useAnimation();

	useEffect(() => {
		if (inView)
			animation.start({
				y: 0,
				opacity: 1,
				transition: {duration: 1.5}
			})
	}, [inView])// eslint-disable-line

	return (
		<motion.div 
			ref={ref} 
			className={className}
			initial={{opacity: 0, y: 50}}
			animate={animation}
		>
			<h2>{title}</h2>
			<p>
				{children}
			</p>
		</motion.div>
	)
}


function TechStack() {

	return (
		<motion.div className='tech-stack'>
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
		</motion.div>
	)
}

export default TechStack