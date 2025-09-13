import React, { useEffect, useState } from 'react'
import './Events.css'
import RunningClub from '../JoinNow/RunningClub'
import EventCard from '../Events/EventCard'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
function Events() {

    let [events, setEvents] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/items')
        .then((res)=> res.json())
        .then((data)=> setEvents(data.items))
    },[])



    useGSAP(()=>{
        let both = gsap.timeline()

        both.from('#ep1 h1',{
            opacity:0,
            y:-100,
            delay:0.2,
            duration:1
        })
        both.from('#ep1 p',{
            opacity:0,
            duration:0.8
        })
    })

    return (
        <>
        <div id='event-page'>
            
            <div id="e1" className='flex justify-center items-center'>
                <div id="ep1" className='max-w-6xl px-4'>
                    <h1>Discover Upcoming Running Events</h1>
                    <p>Explore our exhilarating lineup of running events that cater to every level of runner. From fun runs to marathons, scenic trails to city streets, there's a race for everyone.</p>
                </div>
            </div>

            <div id="e2" className=' w-full min-h-screen flex justify-center items-center'>
                <div id="ep2" className='max-w-6xl px-4 py-12'>
                    {events.length > 0 ? (
                        events.map((event)=>(
                        <div key={event.id}>
                            <EventCard {...event}/>
                        </div>
                    ))
                    ) : (
                        <p className='text-center text-gray-500'>
                            No events available
                        </p>
                    )}
                </div>
            </div>
        </div>
        <RunningClub/>
        </>
    )
}


export default Events
