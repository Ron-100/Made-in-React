import React, { useEffect, useState } from 'react'
import './EventDetailcss.css'
import Button from '../Button'
import { IoCalendarClear } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import { useParams } from 'react-router-dom';

function EventDetail() {


    let [event, setEvent] = useState(null)
    let {urlId} = useParams()

    useEffect(() => {
    fetch('http://localhost:8080/items')
        .then((res) => res.json())
        .then((data) => {
            const found = data.items.find((item) => item.id === urlId);
            setEvent(found);
        });
    }, [urlId]);

    if (!event) {
        return <div className='text-center py-20'>Loading event...</div>;
    }

    return (
        <>
            <div id='z1' className='w-full min-h-screen'>
                <div id='z2'>

                    <div id="a1" className='flex flex-col justify-center'>

                        <h1>{event.tag}</h1>

                        <div className='flex items-center gap-2'>
                            <IoCalendarClear className='text-pinkAccent' /><p>{event.date}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaUser className='text-pinkAccent'/><p>{event.compos}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaClock className='text-pinkAccent'/><p>{event.time}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <GrLocationPin className='text-pinkAccent'/><p>{event.location}</p>
                        </div>
                        
                        <div className='w-44 py-8 '>
                            <Button children={'Register now'} twich={'/contectus'}/>  
                        </div>
                    </div>

                    <div id="a2" className='flex justify-center items-center'>
                        <div id='ig' className='w-full h-80 flex justify-center items-center overflow-hidden'>
                            <img src={event.image} alt="" className='object-cover object-center'/>
                        </div>   
                    </div>

                    <div id="a3" className='relative p-8 flex'>
                        <div id="dlow" className='absolute -top-10 left-0 flex justify-center items-center bg-pinkAccent w-max px-4 py-2'>
                            <h6 className=' uppercase'>More Information</h6>
                        </div>
                        <div id="m1" className=''>
                            <img src={event.image} alt="" className='w-full h-full object-cover object-center'/>
                        </div>
                        <div id="m2" className='flex justify-center p-8'>
                            <p>{event.mrinfo}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EventDetail
