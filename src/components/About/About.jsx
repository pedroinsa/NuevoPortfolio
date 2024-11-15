import React from 'react'
import image from '../../images/fotonueva.jpeg'
import image2 from '../../images/certificado.jpg'
import './About.css'

function About() {
    return (
        <section id="about" className='flex flex-col items-center m-12 p-3'>
            <h1 className='text-white text-4xl mt-11 p-3'>Sobre <span className='text-blue-500'>mí</span></h1>
            <div className='flex flex-col md:flex-row about-color rounded-xl w-full lg:w-4/6 m-12'>
                <img className='sm:w-1/6 m-3 rounded' src={image} alt="Pedro Insausti" />
                <p className='text-white m-7 font-mono'>Me gustan los desafíos y el trabajo en equipo. Me caracterizo por ser curioso y con ganas de aprender. Si algo escapa a mis conocimientos, mi solución es sencilla: investigar y resolverlo. Por el otro lado, soy periodista deportivo, lo cual favorece mi comunicación en relaciones interpersonales.  </p>

            </div>
            <div className='flex flex-col md:flex-row about-color rounded-xl w-full lg:w-4/6 m-3'>
                <img className='md:w-2/6 rounded m-3' src={image2} alt="certificado" />
                <p className='text-white m-7 font-mono'>Soy Fullstack Developer, con experiencia trabajando con Javascript,CSS, React, Redux, PostgreSQL, entre otras tecnologías. He aprendido las bases para hacer sitios web escalables, solventes y responsive. Además, tengo como objetivo aprender otros lenguajes de programación para progresar.  </p>
            </div>


        </section>
    )
}

export default About