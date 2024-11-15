import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

import pi from "../../images/Projects/pi.png"
import pf from "../../images/Projects/pf.png"
import river from "../../images/Projects/river.png"
import rick from "../../images/Projects/rick.png"
import simpson from "../../images/Projects/simpson.png"
import presupuesto from "../../images/Projects/presupuesto.png"
import messi from "../../images/Projects/messi.jpg"
import serena from "../../images/Projects/serena.jpg"

function Projects() {
    const projects = [{ name: "App de Videogames", image: pi, github: 'https://github.com/pedroinsa/PI-Videogames', text: "Esta App trae información de 100 videojuegos, a partir de los cuales se pueden efectuar filtros de búsqueda y ordenamientos", javascript: true, css: true, html: true, react: true, redux: true, sequelize: true, express: true, postgres: true },
    { name: "HenryBooks", image: pf, github: 'https://github.com/scch94/probando-pf', text: "E-commerce de libros que permite navegacion, busquedas y registro de usuario, esencial para comprar libros en la plataforma. Trabajo grupal", javascript: true, html: true, css: true, react: true, redux: true, sequelize: true, postgres: true, express: true },
    { name: "Clon Pagina de River", image: river, demo: 'https://riverplate-five.vercel.app/', github: 'https://github.com/pedroinsa/RiverPlate', text: "Clon del home page de la página oficial de River Plate que sirvió para practicar código y fortalecer herramientas.", javascript: true, typescript: true, tailwind: true, css: true, html: true },
    { name: "Rick and Morty", image: rick, demo: 'https://rick-and-morty-fans.vercel.app/', github: 'https://github.com/pedroinsa/Rick-and-Morty', text: "Sitio de noticias de Rick and Morty que incluso trae datos de personajes desde una API", bootstrap: true, typescript: true, css: true, html: true, javascript: true, redux: true },
    { name: "Adivinar personaje(Simpsons)", image: simpson, demo: 'https://game-simpson.vercel.app/', github: 'https://github.com/pedroinsa/Simpson', text: "Juego de adivinar el personaje de los Simpson. El jugador tiene 3 intentos para descubrirlo, a medida que obtiene pistas", javascript: true, html: true, css: true, tailwind: true, typescript: true, redux: true },
    { name: "Presupuesto", image: presupuesto, demo: "https://presupuesto-eta.vercel.app/ingresar-gastos", github: "https://github.com/pedroinsa/presupuesto", text: "Mini aplicación para calcular presupuestos. Mi primera incursión con Angular", javascript: true, html: true, css: true, bootstrap: true, typescript: true, angular: true },
    { name: "Página dedicada a Messi", image: messi, github: "https://github.com/pedroinsa/Messi", demo: "https://messista.vercel.app/", text: "Sitio web dedicado a Messi hecho con Angular y Bootstrap", typescript: true, bootstrap: true, html: true, css: true, angular: true },
    { name: "Nueva Serena", image: serena, github: "https://github.com/pedroinsa/nueva-serena", demo: "https://nueva-serena.vercel.app/", text: "Página web sobre unas cabañas de hospedaje en la ciudad de Bariloche", javascript: true, typescript: true, react: true, html: true, css: true, tailwind: true }]

    return (
        <section id="projects" className='flex flex-col mt-24 items-center p-3'>
            <h1 className='text-white text-3xl p-7'>¿Cuáles son mis <span className='text-blue-500'>proyectos</span> ?</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-7'>
                {projects.map(item => <ProjectCard name={item.name} key={item.name} image={item.image} github={item.github} demo={item.demo} text={item.text} javascript={item.javascript} html={item.html} css={item.css} react={item.react} redux={item.redux} sequelize={item.sequelize} express={item.express}
                    postgres={item.postgres} typescript={item.typescript} tailwind={item.tailwind} bootstrap={item.bootstrap} angular={item.angular} />)}
            </div>

        </section>
    )
}

export default Projects