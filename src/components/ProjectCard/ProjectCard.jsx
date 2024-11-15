import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiRedux, SiSequelize, SiExpress, SiPostgresql, SiTypescript, SiTailwindcss, SiBootstrap, SiGithub, SiAngular } from "react-icons/si"
import './ProjectCard.css'
import { BsDisplay } from 'react-icons/bs'


function ProjectCard({ name, image, demo, github, text, javascript, css, html, react, redux, sequelize, express, postgres,
    typescript, tailwind, bootstrap, angular }) {
    return (
        <div className='flex flex-col items-center border-blue-500 border-2 pl-5 pb-3 m-2 shadow-blue-500 shadow-xl hover:scale-105'>

            <h2 className='text-blue-500 mr-6 text-2xl'>{name}</h2>

            <div className='img-card '>
                <img className='w-5/6 rounded' src={image} alt={name} />
                <div className='text-card flex flex-col '>
                    <h1 className='text-white w-5/6'>{text}</h1>
                    <div className='flex flex-row justify-center mr-14'>
                        {javascript && <div> <SiJavascript /> </div>}
                        {typescript && <div> <SiTypescript /> </div>}
                        {html && <div> <SiHtml5 /> </div>}
                        {css && <div> <SiCss3 /> </div>}
                        {react && <div> <SiReact /> </div>}
                        {angular && <div> <SiAngular/></div>}
                        {tailwind && <div> <SiTailwindcss /> </div>}
                        {bootstrap && <div> <SiBootstrap /> </div>}
                        {redux && <div> <SiRedux /> </div>}
                        {express && <div> <SiExpress /> </div>}
                        {sequelize && <div> <SiSequelize /> </div>}
                        {postgres && <div> <SiPostgresql /> </div>}




                    </div>

                </div>
            </div>
            <div className='mt-2 mr-12'>
                {demo ? <a className='mr-2' href={demo}><button className='bg-blue-500 border border-white text-white rounded p-1'><BsDisplay /></button></a> : null}
                <a href={github}> <button className='bg-blue-500 text-white rounded border border-white p-1'><SiGithub /></button></a>
            </div>
        </div>
    )
}

export default ProjectCard