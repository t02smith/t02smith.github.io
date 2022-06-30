import React from 'react'
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
        <AdAuctionCard />
        <UrlShortenerCard />
      </div>
    </div>
  )
}

export default Projects;

// Project Cards


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

// GITTO

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

// AD AUCTION DASHBOARD

const AdAuctionAnimation = () => {
  let random: number[] = []
  for (let i = 0; i < 21; i++)
    random.push(Math.floor(Math.random() * (3)))

  return (
    <>
      {random.map((r, i) => {
        switch (r) {
          case 0: // red
            return (
              <motion.img
                initial={{ y: 30 }}
                animate={{ y: [30, 10, 30] }}
                transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
                key={i}
                src={`${process.env.PUBLIC_URL}/svg/projects/aad/red.svg`} alt="" />
            )
          case 1: // yellow
            return (
              <motion.img
                initial={{ y: 40 }}
                animate={{ y: [40, 10, 40] }}
                transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
                key={i}
                src={`${process.env.PUBLIC_URL}/svg/projects/aad/yellow.svg`} alt="" />
            )
          case 2: // green
            return (
              <motion.img
                initial={{ y: 60 }}
                animate={{ y: [60, 10, 60] }}
                transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
                key={i}
                src={`${process.env.PUBLIC_URL}/svg/projects/aad/green.svg`} alt="" />
            )
          default:
            return <div></div>
        }
      }
      )}
    </>
  )
}


const AdAuctionCard = () => {

  return (
    <ProjectCard 
      animation={<AdAuctionAnimation />}
      className="aad"
      title="Ad Auction Dashboard"
      content={<>
        <b>Ad Auction Dashboard</b> was an <b>agile</b> group project based around <b>designing</b>, <b>implementing</b>
        and <b>testing</b> an application with constant communication with a customer. The application would interpret
        large amounts of data about ad campaigns and provide key metrics for the customer to determine the success of
        their campaign.
      </>}
      icons={["java.svg", "latex.svg"]}
    />
  )
}

// URL SHORTENER

const UrlShortenerCard = () => {
  return (
    <ProjectCard 
      animation={<div className='url-anim' />}
      className="url"
      title="URL Shortener"
      content={<>
        <b>URL Shortener</b> shortens URLs and provides temporary URLs
        that will redirect a user to the original address. The application uses
        an <b>SQLite3</b> database to store mappings.
      </>}
      icons={["go.svg", "sqlite.svg"]}
    />
  )
}

