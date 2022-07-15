import React, { useState } from 'react'
import './Bookings.css'
import emailjs from '@emailjs/browser';

export default function Bookings() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [msg, setMsg] = useState("")
    
   

    const payload = {
        name, email, number, msg
    }

    const sendForm = (e) =>{
        e.preventDefault();

        emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, payload, process.env.REACT_APP_PUBLIC_KEY)
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
    }

  return (
    <div id='booking-page'>
        Bookings

        <p>For any booking requests please fill in the form below</p>

        <form onSubmit={sendForm}>
            <input type='text' placeholder='Full Name' value={name} onChange={(e)=> setName(e.target.value)}/>
            <input type='email' placeholder='Email Address' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type='number' placeholder='Phone Number' value={number} onChange={(e)=> setNumber(e.target.value)}/>
            <textarea placeholder='Message' value={msg} onChange={(e)=> setMsg(e.target.value)}/>

            <button id='book-btn' type='submit'>Send</button>
        </form>

    </div>
  )
}
