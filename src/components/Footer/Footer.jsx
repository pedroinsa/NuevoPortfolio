import React from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { HiOutlineChevronDoubleUp } from "react-icons/hi"


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <section className='bg-blue-950 w-full text-white flex flex-col items-center '>
            <div>
                <button className='bg-blue-500 p-3 rounded-2xl ml-3' onClick={scrollToTop}>
                    <HiOutlineChevronDoubleUp />
                </button>
            </div>

            <h4 className='font-mono mt-4'> Copyright 2023© <span className='text-blue-500 mr-3' >Pedro Insausti </span>/ Derechos reservados</h4>
            <div className='flex flex-row justify-between' >
                <div>
                    <button className='rounded-2xl bg-blue-500 m-3 p-3'>
                        <a href=""> <SiLinkedin /></a>
                    </button>
                    <button className='bg-blue-500 m-3 p-3 rounded-2xl'>
                        <href><SiGithub /></href>
                    </button>
                </div>



            </div>
        </section>
    )
}

export default Footer