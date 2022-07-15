import React from 'react'
import './Footer.css'

export default function Footer() {
    let newDate = new Date()
    let year = newDate.getFullYear()

    return (
    <footer>
        <p>
            Douglas Francis © {year}
        </p>
    </footer>
  )
}
