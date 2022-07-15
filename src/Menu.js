import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Menu() {
  return (
  
        <nav>
            <div >
                <a className='socials' href='https://www.youtube.com/channel/UCyAp7oi7G_ljsA1E94cD5zQ' target={'_blank'} ><YouTubeIcon sx={{color:"#e1e1e1"}}/></a>
                <a className='socials' href='https://www.facebook.com/DouglasFrancisMusic' target={'_blank'}><FacebookIcon sx={{color:"#e1e1e1"}}/></a>

            </div>

            <div id='links'>
                <Link to='/'>Home</Link>
                <Link to='/music'>Listen</Link>
                <Link to='/music'>The Band</Link>
                <Link to='/music'>Original</Link>
                <Link to='/bookings'>Book</Link>
            </div>

            <div>
              
            </div>

        </nav>
    
  )
}
