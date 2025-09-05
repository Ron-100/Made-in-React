import React from 'react'
import './joins.css'
import Button from '../Button.jsx'

function Join({url, route}) {
    
    return (
        <div id="join">
            <div className="join_cont">
                <p>GET IN TOUCH</p>
                <h1>Take the first step towards <br /> your running goals today!</h1>
                <Button clickto={url} children={'JOIN NOW'} twich={route} className={'w-36'} />
            </div>
        </div>
    )
}

export default Join
