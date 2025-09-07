import React from 'react'
import "./running.css";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { Mail, Phone } from "lucide-react";

function RunningClub() {

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.from('.join-btn',{
            opacity:0,
            duration:5,
            scrollTrigger:{
                trigger:'.join-wrapper',
                scroller:'body',
                start: 'top 100%',
                end: 'top 0%',
            }
        })

        let tink = gsap.timeline({
            scrollTrigger:{
                trigger:'.join-wrapper',
                scroller:'body',
                // markers:true,
                start: 'top 100%',
                end: 'top 0%',
            }
        })

        tink.from('.join-card',{
            opacity:0,
            x:-180,
            duration:1
        })

        tink.from('.join-title',{
            opacity:0,
            y:20,
            duration:1
        })
        
        tink.from('.join-contact p:nth-child(1)',{
            opacity:0,
            x:-100,
            duration:0.2
        },'p')
        tink.from('.join-contact p:nth-child(2)',{
            opacity:0,
            x:100,
            duration:0.2
        },'p')

        tink.from('.join-form .form-row:nth-child(1) input:nth-child(1)',{
            opacity:0,
            x:-100,
            duration:0.2
        },'input')

        tink.from('.join-form .form-row:nth-child(1) input:nth-child(2)',{
            opacity:0,
            x:100,
            duration:0.2
        },'input')

        tink.from('.join-form .form-row:nth-child(2) input:nth-child(1)',{
            opacity:0,
            x:-100,
            duration:0.2
        },'input2')

        tink.from('.join-form .form-row:nth-child(2) input:nth-child(2)',{
            opacity:0,
            x:100,
            duration:0.2
        },'input2')
    })

    return (
        <>
        <div id='run' className='w-full flex justify-center items-center relative'>
            <div className='back-box w-2/5 h-full left-0 absolute'></div>
            <section className="join-wrapper">
                <div className="join-card">
                    <h1 className="join-title capitalize">Join to Running Club</h1>

                    <div className="join-contact">
                    <p>
                        <Mail size={18} /> hello@runningclub.com
                    </p>
                    <p>
                        <Phone size={18} /> + (077) 364 18 952
                    </p>
                    </div>

                    <form className="join-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-row">
                        <input type="text" placeholder="First name*" required />
                        <input type="text" placeholder="Last name*" required />
                    </div>
                    <div className="form-row">
                        <input type="email" placeholder="Email*" required />
                        <input type="tel" placeholder="Phone*" required />
                    </div>
                    <button type="submit" className="join-btn">
                        JOIN NOW
                    </button>
                    </form>
                </div>
            </section>
        </div>
        </>
    )
}

export default RunningClub
