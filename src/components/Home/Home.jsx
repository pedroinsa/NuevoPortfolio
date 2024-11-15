import React from 'react'

import { TfiLinkedin } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai"
import './Home.css'


function Home() {
    return (
        <section id="home" className='flex flex-col justify-center items-center pb-36 w-3/5 lg:w-4/5 ml-11  '>
            <div className=' mt-36 p-10'>
                <div className='text-block'>
                    <h1 className='text-white text-5xl text-static pr-2'>Hola! Soy</h1>
                </div>
                <ul className='text-dynamic'>
                    <li><span className=' text-blue-500 text-5xl' >Pedro Insausti</span></li>
                </ul>
                <h2 className="text-5xl text-white">Soy Fullstack Web Developer</h2>
                

                <h2 className='text-white text-5xl  mt-1'>Bienvenidos a mi nuevo portfolio!</h2>
            </div>

            <div className='flex flex-row text-white text-4xl mt-20'>
                <button className='m-3 bg-blue-500 p-3 rounded-2xl border border-white '><a href='https://www.linkedin.com/in/pedro-torcuato-insausti/'><TfiLinkedin /></a></button>
                <button className='m-3 bg-blue-500 p-3 rounded-2xl border border-white'><a href='https://github.com/pedroinsa'><AiFillGithub /></a></button>

            </div>


        </section>
    )
}

export default Home