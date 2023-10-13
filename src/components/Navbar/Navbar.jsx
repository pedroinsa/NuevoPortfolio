import React, { useState } from 'react'
import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";
import '../../App.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const content = <>
     <div className='md:hidden  block w-full h-5/6'>
              <ul className='flex flex-col justify-between'>
                <Link smooth duration={500} to='home'> <li className='m-3 cursor-pointer hover:text-blue-500'>Home</li> </Link>
                <Link smooth duration={500} to="about"> <li className='m-3 cursor-pointer hover:text-blue-500'>About</li> </Link>
                <Link smooth duration={500} to="skills"> <li className='m-3 cursor-pointer hover:text-blue-500'>Skills</li></Link>
                <Link smooth duration={500} to="projects"> <li className='m-3 cursor-pointer hover:text-blue-500'>Projects</li> </Link>
                <Link smooth duration={500} to="contact"> <li className='my-3 ml-3 mr-12 cursor-pointer hover:text-blue-500 '>Contact</li></Link>
             </ul>
            </div>
    </>
   
    return (
        <div className='flex flex-row justify-between h-10vh bg-blue-950 text-white w-full fixed z-40 '>

            <h1 className='ml-12 my-3 text-blue-500 mr-3 text-2xl font-bold'>{"<Pedro/>"}</h1>
             <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
              <ul className='flex flex-row justify-between'>
                <Link smooth duration={500} to='home'> <li className='m-3 cursor-pointer hover:text-blue-500 hover:shadow-md hover:shadow-blue-500 hover:rounded-xl '>Home</li> </Link>
                <Link smooth duration={500} to="about"> <li className='m-3 cursor-pointer hover:text-blue-500 hover:shadow-md hover:shadow-blue-500 hover:rounded-xl'>About</li> </Link>
                <Link smooth duration={500} to="skills"> <li className='m-3 cursor-pointer hover:text-blue-500 hover:shadow-md hover:shadow-blue-500 hover:rounded-xl '>Skills</li></Link>
                <Link smooth duration={500} to="projects"> <li className='m-3 cursor-pointer hover:text-blue-500 hover:shadow-md hover:shadow-blue-500 hover:rounded-xl '>Projects</li> </Link>
                <Link smooth duration={500} to="contact"> <li className='my-3 ml-3 mr-12 cursor-pointer hover:text-blue-500 hover:shadow-md hover:shadow-blue-500 hover:rounded-xl '>Contact</li></Link>
             </ul>
            </div>
           <div>
            {isOpen && content}
           </div>
            
           <div className='md:hidden pr-4 mt-4 mr-11 z-10' onClick={() => setIsOpen(!isOpen)}>
            {isOpen? <FaTimes/> : <FaBars/>}
           </div>
        </div>
    )
}
export default Navbar



// function App() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="flex flex-row justify-between flex-wrap p-6 bg-blue-950 text-white w-full fixed" >
//             <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
//                 <h1 className='ml-12 my-3 mr-3 text-2xl font-mono'>{"<Pedro/>"}</h1>
//             </div>
//             <div className="block lg:hidden">
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
//                 >
//                     <svg
//                         className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//                     </svg>
//                     <svg
//                         className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
//                     </svg>
//                 </button>
//             </div>
//             <div
//                 className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
//             >
//                 <div className="text-sm lg:flex-grow">
//                     <Link smooth duration={500} to='home'> <li className='m-3 cursor-pointer hover:text-blue-500'>Home</li> </Link>
//                     <Link smooth duration={500} to="about"> <li className='m-3 cursor-pointer hover:text-blue-500'>About</li> </Link>
//                     <Link smooth duration={500} to="skills"> <li className='m-3 cursor-pointer hover:text-blue-500'>Skills</li></Link>
//                     <Link smooth duration={500} to="projects"> <li className='m-3 cursor-pointer hover:text-blue-500'>Projects</li> </Link>
//                     <Link smooth duration={500} to="contact"> <li className='my-3 ml-3 mr-12 cursor-pointer hover:text-blue-500 '>Contact</li></Link>
//                 </div>
              
//             </div>
//         </nav>
//     );
// }
// export default App