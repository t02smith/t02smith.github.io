import React from 'react';
import { motion } from "framer-motion"
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectCard } from "../../components/Projects"

import "../../style/css/components/Projects.css"
import "../../style/css/App.css"


export default {
    title: "Portfolio/Projects/ProjectCard",
    component: ProjectCard,
    parameters: {
        layout: "fullscreen"
    },
    decorators: [
        (Story) => (
            <div style={{display: "grid", placeItems: "center", margin: "2rem"}}>
                <Story />
            </div>
        )
    ]
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = args => <ProjectCard {...args} />;

/**
 * With the text colouring on title and bold
 */
export const WithColour = Template.bind({})

WithColour.args = {
    className: "gitto",
    title: "Gitto",
    animation: <motion.img
        initial={{ x: 40, y: 70 }}
        animate={{ x: [40, 40, 40, 150, 150, 150, 150, 40, 40], y: [20, 20, 70, 70, 20, 20, 70, 70, 20] }}
        transition={{ duration: 9, repeat: Infinity }}
        src={`${process.env.PUBLIC_URL}/svg/projects/gitto.svg`} alt="" />,
    content:
        <><b>Gitto</b> is a <b>version control system</b> complete with a <b>Command Line Interface</b>
            , <b>website</b> and <b>RESTful API</b>. The aim of this application was to emulate <b>Git </b>
            whilst including some <b>quality of life</b> changes to modernise it.</>,
    icons:
        [
            "java.svg", "spring.svg", "postgres.svg", "python.svg", "typescript.svg",
            "react.svg", "sass.svg", "docker.svg"
        ]
}

/**
 * Without text colouring on the title and bold points
 */
export const WithoutColour = Template.bind({})

WithoutColour.args = {
    className: "",
    title: "Gitto",
    animation: <motion.img
        initial={{ x: 40, y: 70 }}
        animate={{ x: [40, 40, 40, 150, 150, 150, 150, 40, 40], y: [20, 20, 70, 70, 20, 20, 70, 70, 20] }}
        transition={{ duration: 9, repeat: Infinity }}
        src={`${process.env.PUBLIC_URL}/svg/projects/gitto.svg`} alt="" />,
    content:
        <><b>Gitto</b> is a <b>version control system</b> complete with a <b>Command Line Interface</b>
            , <b>website</b> and <b>RESTful API</b>. The aim of this application was to emulate <b>Git </b>
            whilst including some <b>quality of life</b> changes to modernise it.</>,
    icons:
        [
            "java.svg", "spring.svg", "postgres.svg", "python.svg", "typescript.svg",
            "react.svg", "sass.svg", "docker.svg"
        ]
}

/**
 * No animation
 */
export const NoHeaderAnimation = Template.bind({})

NoHeaderAnimation.args = {
    className: "gitto",
    title: "Gitto",
    animation: <motion.img
        initial={{ x: 150, y: 30 }}
        src={`${process.env.PUBLIC_URL}/svg/projects/gitto.svg`} alt="" />,
    content:
        <><b>Gitto</b> is a <b>version control system</b> complete with a <b>Command Line Interface</b>
            , <b>website</b> and <b>RESTful API</b>. The aim of this application was to emulate <b>Git </b>
            whilst including some <b>quality of life</b> changes to modernise it.</>,
    icons:
        [
            "java.svg", "spring.svg", "postgres.svg", "python.svg", "typescript.svg",
            "react.svg", "sass.svg", "docker.svg"
        ]
}