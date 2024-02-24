import React, { useRef } from 'react'
import { ImCross } from 'react-icons/im'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


export default function Contact() {
    const [input, setInput] = React.useState({ from_name: "", email_id: "", message: "" })
    const [error, setError] = React.useState({})
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form.current.message)
        emailjs.sendForm("service_mbcz84h", "template_q78zbit", form.current, "LXzfmdMKNU6SPWeox")
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            })
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Tu mail ha sido enviado!",
                });
            })
    };
    function validate(input) {
        const error = {}
        if (!input.from_name.length) {
            error.from_name = "Debe ingresar un nombre"
        }
        else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email_id)) {
            error.email_id = "Debe ingresar un email valido"
        }
        else if (!input.message.length) {
            error.message = "Debe ingresar un mensaje"
        }
        return error
    }
    function handlerChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
        setError(validate({ ...input, [e.target.name]: e.target.value }))
    }
    return (
        <section id="contact" className='flex flex-col items-center m-14 p-11'>


            <form className='form-contact flex-col w-full lg:w-2/5 items-center' ref={form} onSubmit={sendEmail}>
                <h2 className="text-white text-3xl mt-10">Contacto por <span className='text-blue-500'>mail</span></h2>
                <div className='w-full mt-11'>

                    <input onChange={handlerChange} autoComplete='false' placeholder='Tu nombre' className='w-5/6 border border-white bg-transparent text-white' type="text" name="from_name" />
                </div>
                <div className='w-full mt-8' >

                    <input type="text" autoComplete='false' placeholder='Tu email' className='w-5/6 border border-white bg-transparent text-white' onChange={handlerChange} name='email_id' />
                </div>
                <div className='w-full h-full mt-8'>

                    <textarea type='text' placeholder='Tu mensaje' className='w-5/6 h-full border border-white bg-transparent text-white' onChange={handlerChange} name='message' />
                </div>
                <div className='flex justify-end mr-14'>
                    {!!input.from_name.length && !error.from_name && !error.email_id && !error.message && <button className='bg-blue-500 text-white rounded border border-white p-1'>Enviar</button>}
                    {error.from_name && <div className='flex text-red-600'> <span className='mr-1 mt-1'><ImCross /></span> <h3 className='text-red-600 rounded-md'>{error.from_name}</h3> </div>}
                    {error.email_id && <div className='flex text-red-600'> <span className='mr-1 mt-1'><ImCross /></span> <h3 className='text-red-600 rounded-md'>{error.email_id}</h3> </div>}
                    {error.message && <div className='flex text-red-600'> <span className='mr-1 mt-1'><ImCross /></span> <h3 className='text-red-600 rounded-md'>{error.message}</h3></div>}
                </div>
            </form>

        </section>
    )
}
