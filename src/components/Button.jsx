import React from 'react'
import './button.css'
import { NavLink } from 'react-router-dom'

function Button({children,twich ='#',className}) {
    return (
        <NavLink to={twich} >
            <div id='hbutton' className={className}>
                {children}
            </div>
        </NavLink>
    )
}

export default Button
