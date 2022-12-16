import React from 'react'
import Logo from '../assets/logo.png'
export default function Navbar(){
    return (
        <nav>
            <img src={Logo} alt="logo"/>
            <p>my travel journal.</p>
        </nav>
    )
}