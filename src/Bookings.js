import React, { useState } from 'react'
import './Bookings.css'

export default function Bookings() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState(null)
    const [msg, setMsg] = useState("")

    const payload = {
        name, email, number, date, msg
    }

    const sendForm = (e) =>{
        e.preventDefault();

        console.log(payload)
    }

  return (
    <div>
        Bookings

        <p>For any booking requests please fill in the form below</p>

        <form onSubmit={sendForm}>
            <input type='text' placeholder='Full Name' value={name} onChange={(e)=> setName(e.target.value)}/>
            <input type='email' placeholder='Email Address' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type='number' placeholder='Phone Number' value={number} onChange={(e)=> setNumber(e.target.value)}/>
            <input type='date' value={date} onChange={(e)=> setDate(e.target.value)}/>
            <textarea placeholder='Message' value={msg} onChange={(e)=> setMsg(e.target.value)}/>

            <button type='submit'>Send</button>
        </form>

    </div>
  )
}
