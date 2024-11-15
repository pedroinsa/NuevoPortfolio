import React from 'react'
import "./Footer.css"


const Footer = () => {
 
    const handleWhatsAppClick = () => {
        window.open(import.meta.env.VITE_APP_WHATSAPP_NUMBER, "_blank")
    };

    return (
        <section className='bg-blue-950 w-full flex flex-col items-center footer pt-5 pb-1 '>
          

            <h4 className='mt-2 text-white text-2xl'> Pedro Insausti © 2024</h4>
            <div className='flex flex-row logos' >
                <button>
                    <div onClick={handleWhatsAppClick}>

                        <svg xmlns="http://www.w3.org/2000/svg" className="logo" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
                            <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                        </svg>

                    </div>
                </button>

                <button>
                    <a href="https://www.linkedin.com/in/pedro-torcuato-insausti" target='a_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='logo' x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </a>
                </button>
                <button>
                    <a href="https://github.com/pedroinsa" target='a_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='logo' x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                    </a>
                </button>
                <button>
                    <a href="https://pedro-insausti.blogspot.com/" target='a_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='logo' x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                            <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 20 11 C 15.054545 11 11 15.054545 11 20 L 11 25 L 11 30 C 11 34.945455 15.054545 39 20 39 L 30 39 C 34.945455 39 39 34.945455 39 30 L 39 24 C 39 22.35503 37.64497 21 36 21 L 35 21 C 34.43497 21 34 20.56503 34 20 C 34 15.054545 29.945455 11 25 11 L 20 11 z M 20 13 L 25 13 C 28.854545 13 32 16.145455 32 20 C 32 21.64497 33.35503 23 35 23 L 36 23 C 36.56503 23 37 23.43497 37 24 L 37 30 C 37 33.854545 33.854545 37 30 37 L 20 37 C 16.145455 37 13 33.854545 13 30 L 13 25 L 13 20 C 13 16.145455 16.145455 13 20 13 z M 20 17 C 18.354545 17 17 18.354545 17 20 C 17 21.645455 18.354545 23 20 23 L 25 23 C 26.645455 23 28 21.645455 28 20 C 28 18.354545 26.645455 17 25 17 L 20 17 z M 20 19 L 25 19 C 25.554545 19 26 19.445455 26 20 C 26 20.554545 25.554545 21 25 21 L 20 21 C 19.445455 21 19 20.554545 19 20 C 19 19.445455 19.445455 19 20 19 z M 20 27 C 18.354545 27 17 28.354545 17 30 C 17 31.645455 18.354545 33 20 33 L 30 33 C 31.645455 33 33 31.645455 33 30 C 33 28.354545 31.645455 27 30 27 L 20 27 z M 20 29 L 30 29 C 30.554545 29 31 29.445455 31 30 C 31 30.554545 30.554545 31 30 31 L 20 31 C 19.445455 31 19 30.554545 19 30 C 19 29.445455 19.445455 29 20 29 z"></path>
                        </svg>
                    </a>
                </button>
                <button>
                    < a href="https://www.instagram.com/pedro.insausti/" target="a_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className='logo' x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                            <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                        </svg>
                    </a>
                </button>
                <button>
                    <a href="https://www.facebook.com/pedro.insausti/" target='a_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='logo' x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg>
                    </a>
                </button>


            </div>
        </section>
    )
}

export default Footer