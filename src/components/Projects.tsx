import React, { useState } from 'react'
import { motion } from "framer-motion"
import "../style/css/components/Projects.css"

// Represents a single project
export type Project = {
  id: string                    // The project's uid
  title: string;                // The name of the project
  icon?: string;                // (OPTIONAL) The project's icon
  description: React.ReactNode; // The project's description
  link?: string;                // (OPTIONAL) A link to the project
  card?: React.ReactNode;       // (OPTIONAL) A custom card component
}

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

type TCard = {
  // Set the currently open project
  setProject(p: Project): void;
}


/**
 * A project card for Ad Auction Dashboard
 * @param props see TCard above 
 * @returns the project card for Ad Auction Dashboard
 */
const AdAuctionCard = ({ setProject }: TCard) => {
  const aad: Project = {
    id: "1",
    title: "AAD",
    description: <>An <b>agile</b> based group software engineering project
      that involved the <b>design</b>, <b>implementation</b> and <b>testing</b> of an application.</>,
    icon: "",
    card: <AdAuctionCard setProject={setProject} />
  }

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
    <motion.div
      className="aad project-card"
      layoutId={aad.id}
      onClick={() => setProject(aad)}
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
    >
      <div className='project-card-header'>
        <div>
          {barCharts}
        </div>
        <h2>{aad.title}</h2>
      </div>

      <p>
        {aad.description}
      </p>

    </motion.div>
  )
}

const UrlShortenerCard = ({ setProject }: TCard) => {
  const p: Project = {
    id: "2",
    title: "URL",
    description: <>
      A <b>URL shortener</b> written in <b>Go</b> with <b>SQLite</b> that
      is active at <a href="http://link.t02smith.com">link.t02smith.com</a>
    </>,
    icon: `${process.env.PUBLIC_URL}/svg/projects/url.svg`,
    card: <UrlShortenerCard setProject={setProject} />
  }

  return (
    <motion.div
      layoutId={p.id}
      onClick={() => setProject(p)}
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      className='url-shorten project-card'
    >
      <div className='project-card-header'>
        <div>
          <div className='url-animation'></div>
        </div>
        <h2>{p.title}</h2>
      </div>

      <p>
        {p.description}
      </p>
    </motion.div>
  )
}


const GittoCard = () => {

  return (
    <motion.a
      href='http://github.com/t02smith'
      className="gitto project-card"
      whileHover={{ scale: 1.02 }}
    >
      <div>
        <motion.img
          initial={{ x: 40, y: 70 }}
          animate={{ x: [40, 40, 40, 150, 150, 150, 150, 40, 40], y: [20, 20, 70, 70, 20, 20, 70, 70, 20] }}
          transition={{ duration: 9, repeat: Infinity }}
          src={`${process.env.PUBLIC_URL}/svg/projects/gitto.svg`} alt="" />
      </div>
      <h2>Gitto</h2>
      <p>
        <b>Gitto</b> is a <b>version control system</b> complete with a <b>Command Line Interface</b>
        , <b>website</b> and <b>RESTful API</b>. The aim of this application was to emulate <b>Git </b>
        whilst including some <b>quality of life</b> changes to modernise it.
      </p>
      <div className="icons">
        <img src={`${process.env.PUBLIC_URL}/svg/projects/tools/java.svg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/svg/projects/tools/spring.svg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/svg/projects/tools/postgres.svg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/svg/projects/tools/python.svg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/svg/projects/tools/typescript.svg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/svg/projects/tools/react.svg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/svg/projects/tools/sass.svg`} alt="" />
        <img src={`${process.env.PUBLIC_URL}/svg/projects/tools/docker.svg`} alt="" />
      </div>
    </motion.a>
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