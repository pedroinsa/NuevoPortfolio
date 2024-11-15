import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import image from "../../assets/arrow.png"
import { validate, scrollToTop } from '../../util/functions';
import "./Contact.css"


export default function Contact() {
    const [showButton, setShowButton] = useState(false);
    const [input, setInput] = useState({ from_name: "", email_id: "", message: "" })
    const [error, setError] = useState({ from_name: "", email_id: "", message: "" })
    const form = useRef()
    const handleScroll = () => {
        const scrolledHeight = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (scrolledHeight >= totalHeight * 0.98) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    const sendEmail = (e) => {
        e.preventDefault();
        if (!input.from_name.length || !input.email_id.length || !input.message.length) return
        emailjs.sendForm("service_mbcz84h", "template_q78zbit", form.current, "LXzfmdMKNU6SPWeox")
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            })
            .then(() => {
                setInput({ from_name: "", email_id: "", message: "" })
                Swal.fire({
                    title: '¡Tu mail ha sido enviado!',
                    text: '',
                    icon: 'success',
                    iconColor: '#7dd3fc',
                    background: '#1e3a8a',
                    color: '#7dd3fc',
                    confirmButtonColor: '#7dd3fc',
                    confirmButtonText: "Aceptar"
                });
            })
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    function handlerChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
        setError(validate({ ...input, [e.target.name]: e.target.value }))
    }
    return (
        <section id="contact" className='w-full flex flex-col items-center m-12 p-11 relative'>


            <form className='form-contact flex-col w-full lg:w-2/5 items-center' ref={form} onSubmit={sendEmail}>
                <h2 className="text-white text-3xl mt-10">Contacto por <span className='text-blue-500'>mail</span></h2>
                <div className='w-full mt-11 field-group'>

                    <input onChange={handlerChange} value={input.from_name} autoComplete='false' placeholder='Tu nombre' className='w-full border border-white bg-transparent text-white rounded-xl p-1' type="text" name="from_name" />
                    {error.from_name.length > 0 ? <div className='flex text-red-500 error-form mr-1 '>
                        <h3 className='text-red-500 rounded-md text-sm'>Debe ingresar un nombre</h3>  </div> : null}
                </div>
                <div className='w-full mt-8 field-group' >

                    <input type="text" autoComplete='false' value={input.email_id} placeholder='Tu email' className='w-full border border-white bg-transparent text-white rounded-xl p-1' onChange={handlerChange} name='email_id' />
                    {error.email_id.length > 0 ? <div className='flex text-red-500 mr-1 error-form'>
                        <h3 className='text-red-500 rounded-md text-sm'>Debe ingresar un email válido</h3> </div> : null}
                </div>
                <div className='w-full mt-8 field-group-textarea'>

                    <textarea type='text' placeholder='Tu mensaje' value={input.message} className='w-full border border-white bg-transparent text-white rounded-xl p-1' onChange={handlerChange} name='message' />
                    {error.message.length > 0 ? <div className='flex text-red-500 mr-1 error-form'>
                        <h3 className='text-red-500 rounded-md text-sm'>Debe ingresar un mensaje</h3></div> : null}
                </div>
                <div className='flex justify-end field-group'>
                    <button disabled={!input.from_name.length || !input.email_id.length || !input.message || !!error.from_name.length || !!error.email_id.length || !!error.message.length}
                        className=' text-white rounded border button-form border-white p-1'>Enviar</button>
                </div>
            </form>

            {showButton ? <div className="fixed button-fixed" id="scroll" >
                <button className='bg-blue-500 p-3 rounded-2xl ml-3' onClick={scrollToTop}>
                    <img src={image} alt="" />
                </button>
            </div> : null
            }


        </section>
    )
}
