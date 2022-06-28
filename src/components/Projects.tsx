import React, { useState } from 'react'
import { motion } from "framer-motion"
import "../style/css/components/Projects.css"


// Projects

/**
 * The projects page
 * @param props see TProjects above 
 * @returns Project page component
 */
const Projects = () => {

  return (
    <div className='projects-wrapper'>
      <h1>Projects</h1>

      <div className="projects">
        <GittoCard />
        <AdAuctionCard2 />
        {/* <GittoCard setProject={setSelected} />
        <AdAuctionCard setProject={setSelected} />
        <UrlShortenerCard setProject={setSelected} /> */}
      </div>


      {/* <div className={`${selected && "blur"}`} onClick={() => setSelected(null)}></div> */}
      {/* <AnimatePresence>
        {
          selected?.card
        }
      </AnimatePresence> */}
    </div>
  )
}

// Project Cards


// /**
//  * A project card for Ad Auction Dashboard
//  * @param props see TCard above 
//  * @returns the project card for Ad Auction Dashboard
//  */
// const AdAuctionCard = ({ setProject }: TCard) => {
//   const aad: Project = {
//     id: "1",
//     title: "AAD",
//     description: <>An <b>agile</b> based group software engineering project
//       that involved the <b>design</b>, <b>implementation</b> and <b>testing</b> of an application.</>,
//     icon: "",
//     card: <AdAuctionCard setProject={setProject} />
//   }

//   let random: number[] = []
//   for (let i = 0; i < 11; i++) random.push(Math.floor(Math.random() * (3)))

//   const barCharts: JSX.Element[] = random.map((r, i) => {
//     switch (r) {
//       case 0: // red
//         return (
//           <motion.img
//             initial={{ y: 20 }}
//             animate={{ y: [20, 0, 20] }}
//             transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
//             key={i}
//             src={`${process.env.PUBLIC_URL}/svg/projects/aad/red.svg`} alt="" />
//         )
//       case 1: // yellow
//         return (
//           <motion.img
//             initial={{ y: 30 }}
//             animate={{ y: [30, 0, 30] }}
//             transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
//             key={i}
//             src={`${process.env.PUBLIC_URL}/svg/projects/aad/yellow.svg`} alt="" />
//         )
//       case 2: // green
//         return (
//           <motion.img
//             initial={{ y: 50 }}
//             animate={{ y: [50, 10, 50] }}
//             transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
//             key={i}
//             src={`${process.env.PUBLIC_URL}/svg/projects/aad/green.svg`} alt="" />
//         )
//       default:
//         return <div></div>
//     }
//   })

//   return (
//     <motion.div
//       className="aad project-card"
//       layoutId={aad.id}
//       onClick={() => setProject(aad)}
//       initial={{ scale: 0.2 }}
//       animate={{ scale: 1 }}
//     >
//       <div className='project-card-header'>
//         <div>
//           {barCharts}
//         </div>
//         <h2>{aad.title}</h2>
//       </div>

//       <p>
//         {aad.description}
//       </p>

//     </motion.div>
//   )
// }

// const UrlShortenerCard = ({ setProject }: TCard) => {
//   const p: Project = {
//     id: "2",
//     title: "URL",
//     description: <>
//       A <b>URL shortener</b> written in <b>Go</b> with <b>SQLite</b> that
//       is active at <a href="http://link.t02smith.com">link.t02smith.com</a>
//     </>,
//     icon: `${process.env.PUBLIC_URL}/svg/projects/url.svg`,
//     card: <UrlShortenerCard setProject={setProject} />
//   }

//   return (
//     <motion.div
//       layoutId={p.id}
//       onClick={() => setProject(p)}
//       initial={{ scale: 0.2 }}
//       animate={{ scale: 1 }}
//       className='url-shorten project-card'
//     >
//       <div className='project-card-header'>
//         <div>
//           <div className='url-animation'></div>
//         </div>
//         <h2>{p.title}</h2>
//       </div>

//       <p>
//         {p.description}
//       </p>
//     </motion.div>
//   )
// }

export type TProject = {
  animation: React.ReactNode;
  className: string
  title: string;
  content: React.ReactNode;
  icons: string[]
}

export const ProjectCard = ({ animation, className, title, content, icons }: TProject) => {
  return (
    <motion.a
      href='http://github.com/t02smith'
      className={`${className} project-card`}
      whileHover={{ scale: 1.02 }}
    >
      <div>
        {animation}
      </div>
      <h2>{title}</h2>
      <p>
        {content}
      </p>
      <div className="icons">
        {icons.map((icon, i) => (
          <img key={i} src={`${process.env.PUBLIC_URL}/svg/projects/tools/${icon}`} alt="" />
        ))}
      </div>
    </motion.a>
  )
}

const GittoCard = () => {
  return (
    <ProjectCard
      animation={
        <motion.img
          initial={{ x: 40, y: 70 }}
          animate={{ x: [40, 40, 40, 150, 150, 150, 150, 40, 40], y: [20, 20, 70, 70, 20, 20, 70, 70, 20] }}
          transition={{ duration: 9, repeat: Infinity }}
          src={`${process.env.PUBLIC_URL}/svg/projects/gitto.svg`} alt="" />
      }
      className="gitto"
      title='Gitto'
      content={
        <><b>Gitto</b> is a <b>version control system</b> complete with a <b>Command Line Interface</b>
          , <b>website</b> and <b>RESTful API</b>. The aim of this application was to emulate <b>Git </b>
          whilst including some <b>quality of life</b> changes to modernise it.</>
      }
      icons={[
        "java.svg", "spring.svg", "postgres.svg", "python.svg", "typescript.svg",
        "react.svg", "sass.svg", "docker.svg"
      ]}
    />
  )
}

const AdAuctionCard2 = () => {
  let random: number[] = []
  for (let i = 0; i < 11; i++) random.push(Math.floor(Math.random() * (3)))

  const barCharts: JSX.Element[] = random.map((r, i) => {
    switch (r) {
      case 0: // red
        return (
          <motion.img
            initial={{ y: 20 }}
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
            key={i}
            src={`${process.env.PUBLIC_URL}/svg/projects/aad/red.svg`} alt="" />
        )
      case 1: // yellow
        return (
          <motion.img
            initial={{ y: 30 }}
            animate={{ y: [30, 0, 30] }}
            transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
            key={i}
            src={`${process.env.PUBLIC_URL}/svg/projects/aad/yellow.svg`} alt="" />
        )
      case 2: // green
        return (
          <motion.img
            initial={{ y: 50 }}
            animate={{ y: [50, 10, 50] }}
            transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
            key={i}
            src={`${process.env.PUBLIC_URL}/svg/projects/aad/green.svg`} alt="" />
        )
      default:
        return <div></div>
    }
  })

  return (
    <motion.a
      href=""
      className="aad project-card"
      whileHover={{ scale: 1.02 }}
    >
      <div>
        {barCharts}
      </div>
      <h2>
        Ad Auction Dashboard
      </h2>
      <p>
        An <b>agile</b> based group software engineering project
        that involved the <b>design</b>, <b>implementation</b> and <b>testing</b> of an application.
      </p>

    </motion.a>
  )
}

export default Projects