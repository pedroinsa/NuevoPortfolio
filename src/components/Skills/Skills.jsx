import React from 'react'
import Skill from '../Skill/Skill'
import javascript from "../../images/Skills/js.png"
import html from "../../images/Skills/html.png"
import css from "../../images/Skills/css.png"
import node from "../../images/Skills/node.png"
import react from "../../images/Skills/react.png"
import redux from "../../images/Skills/redux.png"
import sequelize from "../../images/Skills/sequelize.png"
import postgres from "../../images/Skills/postgres.png"
import tailwind from "../../images/Skills/tailwind.png"
import bootstrap from "../../images/Skills/bootstrap.jpeg"
import typescript from "../../images/Skills/typescript.jpg"
import express from "../../images/Skills/express.png"
import mongoo from "../../images/Skills/mongoo.png"
import next from "../../images/Skills/next.png"
import angular from "../../images/Skills/angular.png"
function Skills() {
    const skills = [{ name: "Javascript", image: javascript }, { name: "Typescript", image: typescript }, { name: "NodeJS", image: node }, { name: "HTML", image: html }, { name: "CSS", image: css },
    { name: "React", image: react }, { name: "Express", image: express }, { name: "Redux", image: redux },
    { name: "Tailwind", image: tailwind }, { name: "Bootstrap", image: bootstrap }, { name: "NextJS", image: next }, { name: "Sequelize", image: sequelize }, { name: "PostgreSQL", image: postgres }, { name: "MongoDB", image: mongoo }
        , { name: "Angular", image: angular }]

    return (
        <section className='flex flex-col items-center p-3' id="skills">
            <h1 className='text-white text-4xl mt-11 p-3'>Skills</h1>
            <div className='flex flex-col md:flex-row mt-11'>
                <h2 className='text-white text-3xl'>¿Cuáles son las <span className='text-blue-500'>tecnologías</span> que conozco?</h2>
                <div className='grid grid-cols-2 lg:grid-cols-3 mt-4'>
                    {skills.map((item) => <Skill image={item.image} key={item.name} name={item.name} />)}
                </div>
            </div>

        </section >
    )
}

export default Skills