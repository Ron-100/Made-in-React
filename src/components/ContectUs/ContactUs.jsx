import React from 'react'
import './Contactus.css'
import gsap from 'gsap'
import Button from '../Button'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
function ContectUs() {


    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)


        let sync = gsap.timeline({
            scrollTrigger:{
                trigger:'#con_topt p',
                scroller:'body',
                // markers:true,
                start:'top 100%',
                end:'top 0%'
            }
        })
        sync.from('#con_topt',{
            opacity:0,
            y:150,
            direction:1,
        })

        sync.from('#con_lft',{
            opacity:0,
            x:-200,
        },'ok')

        sync.from('#con_rth',{
            opacity:0,
            x:200,
        },'ok')
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
                <div id='con_topt' className='max-w-4xl flex justify-center items-center flex-col'>
                    <p>Running Benefits</p>
                    <h1>Benefits of running with Running Club</h1>
                </div>
                <div id='con_orbit' className='w-full h-96 p-2 flex justify-center items-center gap-1'>
                    
                    
                    <div id="con_lft" className='w-1/3 h-full flex flex-col justify-between items-center'>
                        <div id="con_itm1" className='w-full h-36 flex flex-col justify-center items-end'>
                            <h7 className=' text-white'>Personal Growth</h7>
                            <h9 className='text-end text-gray-300'>We lead to personal growth, enhancing self-discipline, and goal-setting skills.</h9>
                        </div>
                        <div id="con_itm2" className='w-full h-36 flex flex-col justify-center items-end'>
                            <h7 className=' text-white'>Goal Achievement</h7>
                            <h9 className='text-end text-gray-300'>We help set and achieve running goals, whether it's completing a 5K, running a marathon.</h9>
                        </div>
                    </div>


                    <div id="con_mid" className='w-1/3 h-full flex justify-center items-center px-2'>
                        <div id="gol" className='w-11/12 h-5/6 rounded-full bg-red-400 bg-opacity-45 relative overflow-hidden flex justify-center items-center p-2'>
                            <img src="https://images.pexels.com/photos/5039659/pexels-photo-5039659.jpeg" alt="" className='w-full h-full rounded-full object-cover object-center'/>
                        </div>
                    </div>
                    
                    
                    <div id="con_rth" className='w-1/3 h-full flex flex-col justify-between items-center'>
                        <div id="con_itm1" className='w-full h-36 flex flex-col justify-center'>
                            <h7 className=' text-white'>Health and Wellness</h7>
                            <h9 className=' text-gray-300'>Regular running with us promotes better physical and mental health, helping you reduce stress.</h9>
                        </div>
                        <div id="con_itm2" className='w-full h-36 flex flex-col justify-center'>
                            <h7 className=' text-white'>Expert Coaching</h7>
                            <h9 className=' text-gray-300'>We help set and achieve running goals, whether it's completing a 5K, running a marathon.</h9>
                        </div>
                    </div>



                </div>
            </div>

            <div id="join">
                <div className="join_cont">
                    <p>GET IN TOUCH</p>
                    <h1>Take the first step towards <br /> your running goals today!</h1>
                    <Button clickto={scrollUp} children={'JOIN NOW'} twich={'/contectus'} className={'w-36'} />
                </div>
            </div>
        </div>
    )
}

export default ContectUs
