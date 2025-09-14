import React from 'react'
import './EventCardcss.css'
import { NavLink } from 'react-router-dom'
import { IoCalendarClear } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, reomvetoCart } from '../../store/AddCartSlice';
import { BsBookmarkStarFill } from "react-icons/bs";
import { BsBookmarkStar } from "react-icons/bs";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';




function EventCard({id,image,tag,date,compos,time,location,ticketPrice}) {

    let dispatch = useDispatch()

    let saveEvent = useSelector((state)=> state.addCartSlice)
    let elememtFound = saveEvent.indexOf(id) >= 0;
    

    let addevent = () =>{
        dispatch(addtoCart(id))
        // console.log(typeof(id));
    }
    
    let removeEvent = () =>{
        dispatch(reomvetoCart(id))
    }



    return (
        <div id='events' className='my-5'>
            <div id="eventsItm" className='w-full h-full flex justify-evenly items-center '>
        
                <div id="ebox1" >
                    <img src={image} alt="" className='w-full h-full  object-cover object-center cursor-pointer' />
                </div>
        
                <div id="ebox2" className='' >
                   
                    <NavLink to={`/eventd/${id}`}>
                        <p id='tag'>{tag}</p>
                    </NavLink>
                    
                    <div className='flex items-center gap-2'>
                        <IoCalendarClear className='text-lionDox' /><p> {date}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaUser className='text-lionDox'/><p>{compos}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaClock className='text-lionDox'/><p>{time}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <GrLocationPin className='text-lionDox'/><p>{location}</p>
                    </div>
                    
                
                </div>
                
                <div id="ebox3" className='relative' >
                    <p>Ticket</p>
                    <p>{ticketPrice}</p>
                    <Button children={'VIEW MORE'} className={'text-white !bg-black px-10'}/>
                    {elememtFound ?
                    <div className='text-xl mr-2 mb-2 absolute top-2 right-0 cursor-pointer' onClick={removeEvent}><BsBookmarkStarFill color='#ffff' /></div> 
                    :
                    <div className='text-xl mr-2 mb-2 absolute top-2 right-0 cursor-pointer' onClick={addevent}><BsBookmarkStar color='#ffff' /></div> 
                    }
                </div>
            </div>
        </div>
    )
}

export default EventCard
