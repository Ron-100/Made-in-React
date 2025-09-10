import React, { useState,useEffect,useRef } from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Header.css'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import hamicon from "./headerAssets/humicon.png";
import Cart from './Cart'
import { FaShoppingCart } from "react-icons/fa";
import Button from '../Button'
import { useSelector } from 'react-redux'


function Header() {

    let eventCount = useSelector((item)=> item.addCartSlice)

    const [openmenu, setOpenmenu] = useState(false)

    let showMneu = ()=>{
        setOpenmenu(!openmenu)
    }

    let closeMneu = ()=>{
        setOpenmenu(false)
    }


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 990 && openmenu) {
                setOpenmenu(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [openmenu]);


    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (itemName) => {
        setOpenDropdown((prev) => (prev === itemName ? null : itemName));
    };

    const navItems = [
        { name: 'Home', blink: '/' },
        {
            name: 'About Us',
            blink: '/about',
            children: [
                { name: 'Our Coaches', blink: '/about/coached' },
                { name: 'Pricing', blink: '/about/pricing' },
                { name: 'Testimonials', blink: '/about/testimonials' },
                { name: 'FAQ', blink: '/about/faq' }
            ]
        },
        { name: 'Workouts', blink: '/workouts' },
        { name: 'Events', blink: '/events' },
        { name: 'News', blink: '/news' },
    ]

    //////////////////////////////////////////
    
    // const {contextSafe} = useGSAP() //not need now, write for recall 

    useGSAP(()=>{
        let stepIt = gsap.timeline()

        stepIt.from('#logo',{
            x:-80,
            opacity:0,
            delay:0.1,
            duration:1,
        })

        stepIt.from('#boxB',{
            opacity:0,
            direction:0.1
        },'-=0.8')

        stepIt.from('#cart',{
            opacity:0,
            direction:0.1
        })
       
        stepIt.from('#boxC',{
            opacity:0,
            direction:0.1
        })
    })
    


    //Header Scroll BG change
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        gsap.to('.header',{
            backgroundColor: '#121212',
            scrollTrigger:{
                trigger:'.header',
                scroller:'body',
                // markers:true,
                start: 'top top',
                end: '+=100',
                scrub: true,
            }
        })
    })

    //////////////////////////////////////////

    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(prev => !prev);
    };

    const closeCart = () => {
        setCartOpen(false);
    };

    


    return (
        <>
            <header className={`header relative z-50`}>
                <div id="boxA">
                    <Link to='/' id='logo'>
                        <img src="https://cdn.prod.website-files.com/65c0febf494dff5e0b629052/66051ffc719449e657e9ef71_logo.svg" alt="" />
                    </Link>
                </div>
                
                <div id="boxB">
                    {navItems.map((item)=>(
                        <div key={item.name} className='relative group'>
                            <NavLink id='navlinks' to={item.blink} className={({isActive})=>`${isActive ? 'text-pinkAccent' : 'text-white' }`}>{item.name} {item.children && <p id="darrw" className=' inline-block '> &#10549; </p>}</NavLink>
                            
                            {item.children && (
                                <div className="dropdown hidden group-hover:flex flex-col gap-2 absolute top-full left-0 bg-black z-50 p-4 ">
                                    {item.children.map((child)=>(
                                        <NavLink key={child.name} to={child.blink} className="text-white hover:text-pinkAccent py-1 px-3 whitespace-nowrap hover:translate-x-1 transition-all" >{child.name}</NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div id="cart" onClick={toggleCart} className="cursor-pointer">
                    <span className='relative'>
                        <FaShoppingCart />
                        <div id="count" className='w-4 h-4 bg-white text-xs rounded-full absolute -top-2 -right-2 flex justify-center items-center'>
                            {eventCount.length}
                        </div>
                    </span>
                </div>
                <Cart closeCart={closeCart} cartOpen={cartOpen} />

                <div id="boxC">
                    <Button children={'Contact Us'} twich={'/contectus'} className={'w-40'}/>
                </div>
                
                <div id="hamicon" onClick={showMneu}>
                    <img src={hamicon} alt="" />
                </div>
            </header>

            <div id="minheader" className={`${openmenu ? 'show' : ''} z-50`}>
                <Link to='/' id='logo'>
                    <img src="https://cdn.prod.website-files.com/65c0febf494dff5e0b629052/66051ffc719449e657e9ef71_logo.svg" alt="" />
                </Link>
                <div id="mininav">
                    {navItems.map((item) => (
                        <div key={item.name} className='mb-2'>
                            <div className='flex items-center justify-between cursor-pointer' onClick={() => item.children ? toggleDropdown(item.name) : null}>
                                <NavLink id="navlinks" to={item.blink} className={({ isActive }) => `${isActive ? 'text-pinkAccent' : 'text-white'}`} >
                                    {item.name}
                                </NavLink>
                                {item.children && (
                                    <span className="ml-2  text-white ">&#10549;</span>
                                )}
                            </div>

                            {item.children && openDropdown === item.name && (
                                <div className="pl-4 mt-1 flex flex-col gap-1">
                                    {item.children.map((child) => (
                                        <NavLink key={child.name} to={child.blink} className="text-white hover:text-pinkAccent text-sm px-2 py-1">
                                            {child.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <NavLink to='/contectus' id='aling_contactUs'>
                    <div id='button'>Contact Us</div>
                </NavLink>
                <div id="crossnav" onClick={closeMneu}>
                    <span> &#10005; </span>
                </div>
            </div>
            
        </>
    )
}

export default Header
