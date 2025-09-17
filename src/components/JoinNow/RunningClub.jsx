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
            y:100,
            duration:1,
            delay:0.2,
            ease: "elastic.out(1,0.3)"
        })

        tink.from('.join-title',{
            opacity:0,
            y:20,
            duration:0.1
        })
        
        tink.from('.join-contact p:nth-child(1)',{
            opacity:0,
            x:-100,
            duration:0.1
        },'p')
        tink.from('.join-contact p:nth-child(2)',{
            opacity:0,
            x:100,
            duration:0.1
        },'p')

        tink.from('.join-form .form-row:nth-child(1) input:nth-child(1)',{
            opacity:0,
            x:-100,
            duration:0.1
        },'input')

        tink.from('.join-form .form-row:nth-child(1) input:nth-child(2)',{
            opacity:0,
            x:100,
            duration:0.1
        },'input')

        tink.from('.join-form .form-row:nth-child(2) input:nth-child(1)',{
            opacity:0,
            x:-100,
            duration:0.1
        },'input2')

        tink.from('.join-form .form-row:nth-child(2) input:nth-child(2)',{
            opacity:0,
            x:100,
            duration:0.1
        },'input2')



        // text
        gsap.from('.back-box p span',{
            opacity:0,
            scale:0.9,
            y:20,
            delay:0.4,
            duration:0.5,
            stagger:0.2,
            ease: "circ.out",
            scrollTrigger:{
                trigger:'.back-box',
                scroller:'body',
                start: 'top 100%',
                end: 'top 0%',
            }
        })

    })

    return (
        <>
            <div id='run' className='w-full flex justify-center items-center relative'>
                <div className='back-box w-2/5 h-full flex justify-center items-center p-5'>
                    <p className='text-white text-[clamp(20px,5vw,30px)] leading-loose'><span className='inline-block'>Join Running Club today— </span> <br /> <span className='inline-block'>Start your journey to a </span> <br /> <span className='inline-block'>healthier, happier you!</span></p>
                </div>
                
                <section className="join-wrapper w-3/5 h-full">
                    <div className="join-card">
                        <h1 className="join-title uppercase text-center">Join to Running Club</h1>

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
                                <input type="text" placeholder="First name" required />
                                <input type="text" placeholder="Last name" required />
                            </div>
                            <div className="form-row">
                                <input type="email" placeholder="Email" required />
                                <input type="tel" placeholder="Phone" required />
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
