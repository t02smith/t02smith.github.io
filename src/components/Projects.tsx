import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import "../style/css/components/Projects.css"



export type Project = {
  id: string
  title: string;
  icon: string;
  description: React.ReactNode;
  link?: string;
  card?: React.ReactNode;
}

// Project Cards

type TCard = {
  setProject(p: Project): void;
}


const GittoCard = ({ setProject }: TCard) => {
  const gitto: Project = {
    id: "0",
    title: "Gitto",
    icon: `${process.env.PUBLIC_URL}/svg/projects/gitto.svg`,
    description: <>A <b>version control system</b> complete with a <b>CLI</b>, <b>website </b>
      and <b>RESTful web server</b>.</>,
    link: "https://github.com/t02smith",
    card: <GittoCard setProject={setProject} />
  }


  return (
    <motion.div
      className="gitto project-card"
      layoutId={gitto.id}
      onClick={() => setProject(gitto)}
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
    >
      <div className='project-card-header'>
        <div>
          <motion.img
            initial={{ x: 20, y: 40 }}
            animate={{ x: [20, 20, 20, 110, 110, 110, 110, 20, 20], y: [10, 10, 40, 40, 10, 10, 40, 40, 10] }}
            transition={{ duration: 9, repeat: Infinity }}
            src={`${process.env.PUBLIC_URL}/svg/projects/gitto.svg`} alt="" />        </div>
        <h2>{gitto.title}</h2>
      </div>

      <p>
        {gitto.description}
      </p>
    </motion.div>
  )
}

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
            initial={{y: 20}}
            animate={{y: [20, 0, 20]}}
            transition={{duration: 4, delay: i*0.3, repeat: Infinity}}
            key={i}
            src={`${process.env.PUBLIC_URL}/svg/projects/aad/red.svg`} alt="" />
        )
      case 1: // yellow
        return (
          <motion.img
            initial={{y: 30}}
            animate={{y: [30, 0, 30]}}
            transition={{duration: 4, delay: i*0.3, repeat: Infinity}} 
            key={i}
            src={`${process.env.PUBLIC_URL}/svg/projects/aad/yellow.svg`} alt="" />
        )
      case 2: // green
        return (
          <motion.img
            initial={{y: 50}}
            animate={{y: [50, 10, 50]}}
            transition={{duration: 4, delay: i*0.3, repeat: Infinity}} 
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


// Projects

type TProjects = {
  projects: Project[]
}

const Projects = ({ projects }: TProjects) => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className='projects'>
      <h1>Projects</h1>
      <GittoCard setProject={setSelected} />
      <AdAuctionCard setProject={setSelected} />

      {/* <div className={`${selected && "blur"}`} onClick={() => setSelected(null)}></div> */}
      {/* <AnimatePresence>
        {
          selected?.card
        }
      </AnimatePresence> */}
    </div>
  )
}

export default Projects