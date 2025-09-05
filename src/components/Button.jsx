import React from 'react'
import './button.css'
import { NavLink } from 'react-router-dom'

function Button({children,twich ='/contectus',className, clickto}) {
    return (
        <NavLink to={twich} onClick={clickto} >
            <div id='hbutton' className={className}>
                {children}
            </div>
        </NavLink>
    )
}

export default Button
