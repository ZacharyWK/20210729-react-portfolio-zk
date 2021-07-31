import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Nav () {
    return (
        <header>
            <nav>
                <NavLink to='/' exact><b>Zachary Krause</b></NavLink>
                <NavLink to='/post'>My Projects</NavLink>
                <NavLink to='/about'>About Me</NavLink>
                <NavLink to='/contact'>Contact Me</NavLink>
            </nav>
        </header>

    )

}