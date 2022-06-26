import React, { useEffect } from 'react'
import "../style/css/components/TechStack.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

/**
 * A component that spins the given svg on loop
 * @param path The name of the svg
 * @returns rotating svg component
 */
const RotatingWheel = ({ path }: { path: string }) => {
	return <motion.img
		src={`${process.env.PUBLIC_URL}/svg/${path}`} alt=""
		animate={{ rotate: [0, 360, 0] }}
		transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
	/>
}

// props for TextSection
type TTextSection = {
	title: string;	// The title of the section
	children: React.ReactNode;	// The contents of the section
}

/**
 * Each section mentioned in the TechStack
 * Includes animation
 * @param props: ITextSection - see above
 * @returns Textual component
 */
const TextSection = ({ title, children }: TTextSection) => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		if (inView)
			animation.start({
				y: 0,
				opacity: 1,
				transition: { duration: 1.5 }
			})
	}, [inView])// eslint-disable-line

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={animation}
		>
			<h2>{title}</h2>
			<p>
				{children}
			</p>
		</motion.div>
	)
}

/**
 * The TechStack page shows an overview of my dev 
 * abilities by what tools I use/ areas I work in.
 * @returns TechStack page component
 */
function TechStack() {

	return (
		<motion.div className='tech-stack'>
			<div className="front-end">
				<TextSection title='UI/UX Designer'>
					I'm a junior <b>UI/UX designer</b> familiar with many widely
					used front-end tools and languages. Such as <b>React.js </b>
					(with both <b>JavaScript</b> and <b>TypeScript</b>) as well as
					<b> Figma</b> for prototyping.
				</TextSection>
				<RotatingWheel path='frontend.svg' />
			</div>

			<div className="back-end">
				
				<TextSection title="Backend Dev">
					I have plenty of experience in backend development using
					methods like <b>agile</b> and <b>test driven development</b> to product
					applications that mange <b>SQL databases</b> and serve <b>RESTful APIs</b>.
				</TextSection>
				<RotatingWheel path='backend.svg' />
			</div>

			<div className="other">
				<TextSection title='Everything Else'>
					I've also worked with plenty other tools and technologies
					from developing <b>CLIs</b> to <b>programming languages </b>
					and <b>network attached storage</b> devices.
				</TextSection>
				<RotatingWheel path='other.svg' />
			</div>


		</motion.div>
	)
}

export default TechStack