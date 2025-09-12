import React from 'react'
import './Workouts.css'
import Button from '../Button'
import RunningClub from '../JoinNow/RunningClub'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
function Workouts() {


    // optimized
    useGSAP(() => {
        let tl = gsap.timeline({ defaults: { duration: 0.8 } });

        tl.from("#work-page h1", {
            opacity: 0,
            y: 60,
        })
        .from("#work-page > p", {
            opacity: 0,
            y: 40,
        }, "-=0.4") // overlap a bit
        .from("#b", {
            opacity: 0,
            scale: 0.8,
        }, "-=0.3"); // overlap for smoothness
    });

    useGSAP(() => {
        gsap.from('.program-card', {
            opacity: 0,
            yPercent: 20, 
            duration: 0.8,
            stagger: 0.15, 
            ease: "power2.out",
            scrollTrigger: {
            trigger: '.workhead',
            scroller: 'body',
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
            // markers: true,
            }
        });
    });

    // not optimized
    // useGSAP(()=>{
    //     gsap.from('#work-page h1,#b',{
    //         opacity:0,
    //         y:80
    //     })
    //     gsap.from('#work-page>p',{
    //         opacity:0,
    //         y:80
    //     })
    // })


    const programs = [
        {
            title: "Jogging Program",
            description:
            "We offers guided sessions to improve endurance and strength, making running enjoyable and rewarding.",
            img: "https://images.pexels.com/photos/4348631/pexels-photo-4348631.jpeg",
        },
        {
            title: "Marathon Program",
            description:
            "From long runs to speed work, we'll prepare you mentally and physically for race day success.",
            img: "https://images.pexels.com/photos/4348624/pexels-photo-4348624.jpeg",
        },
        {
            title: "Triathlon Program",
            description:
            "Tailored workouts and skill development sessions will help you excel in swimming, cycling, and running.",
            img: "https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg",
        },
        {
            title: "Cycling Program",
            description:
            "Boost your stamina and improve speed with structured indoor and outdoor cycling workouts.",
            img: "https://images.pexels.com/photos/878151/pexels-photo-878151.jpeg",
        },
        {
            title: "Yoga Program",
            description:
            "Enhance flexibility, balance, and mental focus through guided yoga sessions suitable for all levels.",
            img: "https://images.pexels.com/photos/7337618/pexels-photo-7337618.jpeg",
        },
        {
            title: "Strength Training",
            description:
            "Develop muscle strength and endurance with customized weight training and bodyweight exercises.",
            img: "https://images.pexels.com/photos/4024914/pexels-photo-4024914.jpeg",
        }
    ]

    const navigate = useNavigate();
    
    return (
        <>
        <div id='work-page' className='work-page flex justify-center items-center flex-col gap-12'>
            <h1>Meet our most effective <br />workout programs</h1>
            <p>We offer a variety of programs tailored to suit every <br /> level of runner, from beginners to seasoned athletes.</p>
            <div id="b">
                <Button children={"CONTACT US"} twich={'/contectus'} className={'w-40'}/>
            </div>
        </div>

        <div className='workhead flex justify-end items-center flex-col gap-4'>
            <p>Workouts</p>
            <h1>The best programs for you</h1>
        </div>

        <div className='prog w-full h-auto pb-20'>
            <div className="programs-container">
                {programs.map((prog, index) => (
                    <div className="program-card" key={index}>
                        <img src={prog.img} alt={prog.title} />
                        <div className="program-content">
                            <h2>{prog.title}</h2>
                            <p>{prog.description}</p>
                            <button id='cfm' onClick={() => navigate("/contectus")}>
                                <span id='syp'>Click</span>
                                <span id='syp'>Contact For More</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <RunningClub/>
        </>
    )
}

export default Workouts
