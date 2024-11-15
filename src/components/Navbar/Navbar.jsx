import React, { useState } from 'react'
import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";
import '../../App.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const content = <>
        <div className='md:hidden  block w-full h-5/6'>
            <ul className='flex flex-col justify-between'>
                <Link smooth duration={500} to='home'> <li className='m-3 cursor-pointer hover:text-blue-500'>Inicio</li> </Link>
                <Link smooth duration={500} to="about"> <li className='m-3 cursor-pointer hover:text-blue-500'>Sobre mí</li> </Link>
                <Link smooth duration={500} to="skills"> <li className='m-3 cursor-pointer hover:text-blue-500'>Skills</li></Link>
                <Link smooth duration={500} to="projects"> <li className='m-3 cursor-pointer hover:text-blue-500'>Proyectos</li> </Link>
                <Link smooth duration={500} to="contact"> <li className='my-3 ml-3 mr-12 cursor-pointer hover:text-blue-500 '>Contacto</li></Link>
            </ul>
        </div>
    </>

    return (
        <div className='flex flex-row justify-between h-10vh bg-blue-950 text-white w-full fixed z-40 '>

            <h1 className='ml-12 my-3 text-blue-500 mr-3 text-3xl font-bold font-mono'>{"<Pedro/>"}</h1>
            <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                <ul className='flex flex-row justify-between'>
                    <Link smooth duration={500} to='home'> <li className='m-3 cursor-pointer hover:bg-blue-500 hover:shadow-md  hover:rounded-3xl p-3 '>Inicio</li> </Link>
                    <Link smooth duration={500} to="about"> <li className='m-3 cursor-pointer hover:bg-blue-500 hover:shadow-md hover:rounded-3xl p-3'>Sobre mí</li> </Link>
                    <Link smooth duration={500} to="skills"> <li className='m-3 cursor-pointer hover:bg-blue-500 hover:shadow-md  hover:rounded-3xl p-3 '>Skills</li></Link>
                    <Link smooth duration={500} to="projects"> <li className='m-3 cursor-pointer hover:bg-blue-500 hover:shadow-md hover:rounded-3xl p-3 '>Proyectos</li> </Link>
                    <Link smooth duration={500} to="contact"> <li className='my-3 ml-3 mr-12 cursor-pointer hover:bg-blue-500 hover:shadow-md hover:rounded-3xl p-3 '>Contacto</li></Link>
                </ul>
            </div>
            <div>
                {isOpen && content}
            </div>

            <div className='md:hidden pr-4 mt-4 mr-11 z-10' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    )
}
export default Navbar


