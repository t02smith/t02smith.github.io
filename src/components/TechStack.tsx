import React, { useEffect } from 'react'
import "../style/css/components/TechStack.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

/**
 * A component that spins the given svg on loop
 * @param path The name of the svg
 * @returns rotating svg component
 */
const RotatingWheel = ({ path, left }: { path: string, left?: boolean }) => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		if (inView)
			animation.start({
				opacity: 1,
				x: 0,
				transition: { duration: 1.5 }
			})
	}, [inView])// eslint-disable-line

	return <motion.div 
			ref={ref} 
			animate={animation}
			initial={ window.screen.width < 950
				? { opacity: 0, x: left ? -70:70 }
				: { opacity: 1, x: 0}}
		>
		<motion.img
			src={`${process.env.PUBLIC_URL}/svg/${path}`} alt=""
			animate={{ rotate: [0, 360, 0] }}
			transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
		/>
	</motion.div>


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
			initial={ window.screen.width < 950
				? { opacity: 0, y: 50 }
				: { opacity: 1, y: 0}}
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
		<div className="tech-stack-wrapper">
			<div className='tech-stack'>
				<div className="front-end">
					<TextSection title='UI/UX Designer'>
						I <b>design</b>, <b>prototype</b> and <b>build</b> reactive user interfaces using
						a variety of frontend tools. I primarily work with <b>websites</b> but have some experience
						with <b>desktop</b> and <b>mobile applications</b>.
					</TextSection>
					<RotatingWheel path='frontend.svg' />
				</div>

				<div className="back-end">
					<TextSection title="Backend Dev">
						I use methods such as <b>agile</b> and <b>test driven development</b> to produce
						applications that work with <b>SQL databases</b>, serve <b>REST</b> APIs, and more
					</TextSection>
					<RotatingWheel left path='backend.svg' />
				</div>

				<div className="other">
					<TextSection title='Everything Else'>
						I also work with a variety of other tools and techniques
						from writing <b>CLIs</b> to <b>programming languages</b> and
						<b>distributed storage systems</b>.
					</TextSection>
					<RotatingWheel path='other.svg' />
				</div>


			</div>
		</div>

	)
}

export default TechStack
