import './Home.css'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import Button from '../Button'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
// import WavyPath from '../WavyPath' 
import EventCard from '../Events/EventCard'
import { useEffect, useState } from 'react'
import Join from '../JoinNow/Join'
import RunningClub from '../JoinNow/RunningClub'
import LatestNews from '../News/LatestNews'





function Home() {


    let [events, setEvents] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/items')
        .then((res)=> res.json())
        .then((data)=> setEvents(data.items))
    },[])

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.from('#hContent',{
            y:40,
            opacity:0,
            duration:0.5,
            delay:0.4,
            scrub:2
        })


        // hwcase
        
        let aSync = gsap.timeline({
            scrollTrigger:{
                trigger:'#stext',
                scroller:'body',
                // markers:true,
                start: 'top 90%',
                end: 'top 0%',
            }
        })
        
        // spartA

        aSync.from('#stext',{
            x:-200,
            direction:1,
            opacity:0,
        })
        aSync.from('#fcount',{
            y:20,
            opacity:0,
            stagger:0.1
        },'-=0')
        
        // spartB

        let bSync = gsap.timeline({
            scrollTrigger:{
                trigger:'#spartB',
                scroller:'body',
                // markers:true,
                start: 'top 90%',
                end: 'top -10%',
            }
        })
        
        
        
        bSync.from('#div2',{
            y:120,
            duration:1,
            opacity:0
        },'hii')
        bSync.from('#div1 #imge:nth-child(1) img',{
            x:-120,
            duration:1,
            opacity:0
        },'hii')
        bSync.from('#imge #go1',{
            x:120,
            duration:1,
            opacity:0
        },'hii')
        
        bSync.from('#ruuns p',{
            y:-50,
            opacity:0,
            duration:1,
            stagger:0.2 
        })
        
        bSync.from('#imge #go',{
            x:-120,
            duration:1,
            opacity:0
        },'-=1')
        
        
        


        // spartC
        let cSync = gsap.timeline({
            scrollTrigger:{
                trigger:'#topt h1',
                scroller:'body',
                // markers:true,
                start: 'top 90%',
                end: 'top -10%',
            }
        })

        cSync.from('#topt',{
            y:50,
            opacity:0,
            duration:0.5,
            delay:0.4
        },'op')

        cSync.from('#gol img',{
            scale: 0,
            opacity:0,
            duration:1,
        })

        cSync.from('#lft',{
            x:-150,
            opacity:0,
            duration:1,
        },'op')
        cSync.from('#rth',{
            x: 150,
            opacity:0,
            duration:1,
        },'op')
        
        

        // spartD
        
        gsap.from('#spartD',{
            y:100,
            opacity:0,
            duration:0.8,
            scrollTrigger:{
                trigger:'#spartD',
                scroller:'body',
                start: 'top 90%',
                end: 'top -10%',
            }
        })

        // hwcase
    })

    return (
        <>
        <div id="thehome">
            <div id='home-page' className='flex justify-center items-end'>
                <div id='leyer' className='w-full flex justify-center items-center' >
                    <div id='hContent' className='w-3/4 h-full flex flex-col justify-center gap-6'>
                        <h1 className=' text-white font-semibold'>Run with Passion and Purpose</h1>
                        <p className=''>Lace-up your shoes, set your goals, and let's run together towards a healthier, happier, and faster you.</p>
                        <div id="hContact" className='my-5 w-fit'>
                            <Button children={"LET'S RUN"} twich={'/contectus'} className={'w-40'}/>
                        </div>
                    </div>
                </div>
            </div>

                
            <div id='hwcase' className='w-full h-auto'> 
                
                <div id="spartA" className='max-w-6xl flex justify-between items-center'>
                    <div id='stext' className=''>Our commitment to excellence has led to these impressive figures that showcase our dedication, hard work, and the value we bring to our customers.</div>
                    <div id='counts' className=' flex justify-end items-center '>
                        <div id='fcount' className='flex flex-col items-start flex-shrink'>
                            <h1>785+</h1>
                            <h4>Kilometers Run</h4>
                        </div>
                        <div id='fcount' className='flex flex-col items-center flex-shrink'>
                            <h1>145+</h1>
                            <h4>Location</h4>
                        </div>
                        <div id='fcount' className='flex flex-col items-start flex-shrink'>
                            <h1>3,5k</h1>
                            <h4>Runners</h4>
                        </div>
                    </div>
                </div>

                <div id="spartB">
                    <div id="div1">
                        <div id="imge" className='w-full h-1/2 justify-end relative'>  
                            <img src="/man_runner.webp" alt="" className='w-4/5'/>
                            <div className="w-36 h-full absolute top-0 left-0">
                                <div id='ruuns' className="w-full h-full flex flex-col justify-center items-center rotate-[-90deg] gap-8">
                                    <p className="font-semibold text-xl z-40">RUNNING</p>
                                    <p className="font-semibold text-xl z-40">RUNNING</p>
                                    <p className="font-semibold text-xl z-40">RUNNING</p>
                                </div>
                            </div>
                        </div>
                        
                        <div id="imge" className='w-full h-1/2 justify-between'>
                            <img id='go1' src="/woman_runs.webp" alt="" />
                            <img id='go' src="/modern-running.png" alt="" />
                        </div>
                    </div>
                    <div id="div2">
                        <p>Welcome to Running Club</p>
                        <p>We are the best running club in town</p>
                        <hr />
                        <h6>Running Club' commitment to excellence shines through in these impressive stats, showcasing our dedication and value to our members and the running community.</h6>
                        <Button children={'ABOUT US'} className={'w-40'}/>
                    </div>
                </div>

                <div id='spartC'>
                    <div id='topt' className='max-w-4xl flex justify-center items-center flex-col'>
                        <p>Running Benefits</p>
                        <h1>Benefits of running with Running Club</h1>
                    </div>
                    <div id='orbit' className='w-full h-96 p-2 flex justify-center items-center gap-1'>
                        
                        
                        <div id="lft" className='w-1/3 h-full flex flex-col justify-between items-center'>
                            <div id="itm1" className='w-full h-36 flex flex-col justify-center items-end'>
                                <h7 className=' text-white'>Personal Growth</h7>
                                <h9 className='text-end text-gray-300'>We lead to personal growth, enhancing self-discipline, and goal-setting skills.</h9>
                            </div>
                            <div id="itm2" className='w-full h-36 flex flex-col justify-center items-end'>
                                <h7 className=' text-white'>Goal Achievement</h7>
                                <h9 className='text-end text-gray-300'>We help set and achieve running goals, whether it's completing a 5K, running a marathon.</h9>
                            </div>
                        </div>


                        <div id="mid" className='w-1/3 h-full flex justify-center items-center px-2'>
                            <div id="gol" className='w-11/12 h-5/6 rounded-full bg-orange-300 bg-opacity-75 relative overflow-hidden flex justify-center items-center p-2'>
                                <img src="https://images.pexels.com/photos/5039659/pexels-photo-5039659.jpeg" alt="" className='w-full h-full rounded-full object-cover object-center'/>
                            </div>
                        </div>
                        
                        
                        <div id="rth" className='w-1/3 h-full flex flex-col justify-between items-center'>
                            <div id="itm1" className='w-full h-36 flex flex-col justify-center'>
                                <h7 className=' text-white'>Health and Wellness</h7>
                                <h9 className=' text-gray-300'>Regular running with us promotes better physical and mental health, helping you reduce stress.</h9>
                            </div>
                            <div id="itm2" className='w-full h-36 flex flex-col justify-center'>
                                <h7 className=' text-white'>Expert Coaching</h7>
                                <h9 className=' text-gray-300'>We help set and achieve running goals, whether it's completing a 5K, running a marathon.</h9>
                            </div>
                        </div>



                    </div>
                </div>

                {/* <WavyPath /> */}

                <div id='spartD'>
                    <div className='flex flex-col justify-center items-center'>
                        <text className=' text-lionDox my-5'>EVENTS</text>
                        <h2 className='text font-semibold text-white my-4' >Upcoming events</h2>
                    </div>

                    {(events.length > 2 ? events.slice(0, 2): events).map((event)=>(
                        <div className='w-full' key={event.id}>
                            <EventCard {...event} />
                        </div>
                    ))}

                    <Button children={'VIEW MORW EVENTS'} className={'w-52'} twich={'/events'}/>
                </div>
            </div>
            
            <Join/>

            <LatestNews/>

            <RunningClub />
            
        </div>
        </>
        
    )
}

export default Home
