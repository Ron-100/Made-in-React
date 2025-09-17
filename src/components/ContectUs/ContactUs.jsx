import React from 'react'
import './Contactus.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Join from '../JoinNow/Join'
function ContectUs() {


    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)


        let cSync = gsap.timeline({
            scrollTrigger:{
                trigger:'#con_topt h1',
                scroller:'body',
                // markers:true,
                start: 'top 90%',
                end: 'top -10%',
            }
        })

        cSync.from('#con_topt',{
            y:50,
            opacity:0,
            duration:0.5,
            delay:0.4
        },'op')

        cSync.from('#gol',{
            scale: 0,
            opacity:0,
            duration:0.4,
        })

        cSync.from('#gol img',{
            scale: 0,
            opacity:0,
            duration:0.5,
        })

        cSync.from('#con_lft #con_itm1',{
            x:150,
            opacity:0,
            duration:1,
        },'=-0.5')
        cSync.from('#con_lft #con_itm2',{
            x:150,
            opacity:0,
            duration:1,
        },'=-0.5')

        cSync.from('#con_rth #con_itm1',{
            x: 150,
            opacity:0,
            duration:1,
        },'=-0.8')

        cSync.from('#con_rth #con_itm2',{
            x: 150,
            opacity:0,
            duration:1,
        },'=-0.8')
        
        cSync.from('#mark',{
            opacity:0,
            stagger:-0.2
        })
        
    })

    function scrollUp(){
        window.scrollTo({top:0, behavior:'smooth'})
    }

    return (
        <div id='contact-page' className='w-full h-auto'>
            <div id="contact-fild">
                <div id="fbox">
                    <div id="text">
                        <p>GET IN TOUCH</p>
                        <h1>Contact Us</h1>
                        <h6>Get in touch with Running Club today and take the first step   towards reaching your fitness goals! Whether you have questions  about our programs, want to join our community, or simply need  more information, our team is here to help. Contact us now and  embark on your journey to a healthier, happier you!</h6>
                    </div>
                    <div id="from_cover">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" name="name" id="name" placeholder="Your name" />
                            <input type="email" name="email" id="email" placeholder="Your email" />
                            <textarea name="message" id="message" placeholder="Your text"></textarea>
                            <button type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div id='con_spartC'> 
                <div id='con_topt' className='max-w-4xl flex justify-center items-center flex-col mb-11'>
                    <p>Running Benefits</p>
                    <h1>Benefits of running with Running Club</h1>
                </div>
                <div id='con_orbit' className='w-full h-96 p-2 flex justify-center items-center gap-36'>
                    
                    <div id="con_mid" className='w-1/3 h-full flex justify-center items-center px-2 '>
                        <div id="gol" className='w-11/12 h-5/6 rounded-full bg-orange-300 bg-opacity-75 relative overflow-hidden flex justify-center items-center p-2'>
                            <img src="https://media.istockphoto.com/id/1093290750/photo/sportsman-running-on-asphalt-road.jpg?s=612x612&w=0&k=20&c=UTsmXO6BIMDOdE5-GlxQkVtQlzRKTDTGl1OW2Q589H4=" alt="" className='w-full h-full rounded-full object-cover object-center'/>
                        </div>
                    </div>

                    <div id="con_lrwrap" className='w-2/5 h-full flex flex-col justify-between items-center md:gap-6'>
                        <div id="con_lft" className='w-ful flex flex-col justify-between items-center gap-6'>
                            <div id="con_itm1" className='w-full flex flex-col justify-center items-start relative'>
                                <div id="mark" className='md:bg-white md:w-4 md:h-4 md:rounded-full md:absolute md:-left-10 md:top-4'></div>
                                <h7 className='text-white text-[clamp(15px,5vw,24px)]'>Personal Growth</h7>
                                <h9 className='text-start text-gray-300 text-[clamp(8px,4vw,14px)]'>We lead to personal growth, enhancing self-discipline, and goal-setting skills.</h9>
                            </div>
                            <div id="con_itm2" className='w-full flex flex-col justify-center items-start relative'>
                                <div id="mark" className='md:bg-white md:w-4 md:h-4 md:rounded-full md:absolute md:-left-10 md:top-4'></div>
                                <h7 className=' text-white text-[clamp(15px,5vw,24px)]'>Goal Achievement</h7>
                                <h9 className='text-start text-gray-300 text-[clamp(8px,4vw,14px)]'>We help set and achieve running goals, whether it's completing a 5K, running a marathon.</h9>
                            </div>
                        </div>

                        <div id="con_rth" className='w-full flex flex-col justify-between items-center gap-6'>
                            <div id="con_itm1" className='w-full flex flex-col justify-center relative'>
                                <div id="mark" className='md:bg-white md:w-4 md:h-4 md:rounded-full md:absolute md:-left-10 md:top-4'></div>
                                <h7 className=' text-white text-[clamp(15px,5vw,24px)]'>Health and Wellness</h7>
                                <h9 className=' text-gray-300 text-[clamp(8px,4vw,14px)]'>Regular running with us promotes better physical and mental health, helping you reduce stress.</h9>
                            </div>
                            <div id="con_itm2" className='w-full flex flex-col justify-center relative'>
                                <div id="mark" className='md:bg-white md:w-4 md:h-4 md:rounded-full md:absolute md:-left-10 md:top-4'></div>
                                <h7 className=' text-white text-[clamp(15px,5vw,24px)]'>Expert Coaching</h7>
                                <h9 className=' text-gray-300 text-[clamp(8px,4vw,14px)]'>We help set and achieve running goals, whether it's completing a 5K, running a marathon.</h9>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <br />
            <br />
            <Join url={scrollUp}/>
        </div>
    )
}

export default ContectUs
