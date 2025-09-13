import React from "react";
import './underAbout.css'
import RunningClub from "../../JoinNow/RunningClub";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function OurCoaches() {

    useGSAP(()=>{
        gsap.from('#coachHeader>h1',{
            opacity:0,
            scale:0,
            delay:0.2,
            duration:0.5
        })
    })

    const coaches = [
        {
            name: "John Carter",
            role: "Head Coach",
            bio: "Over 15 years of experience coaching elite runners. Specializes in endurance training and marathon preparation.",
            img: "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg",
        },
        {
            name: "Emily Davis",
            role: "Strength & Conditioning Coach",
            bio: "Focused on building strength, flexibility, and injury prevention for runners of all levels.",
            img: "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_1280.jpg",
        },
        {
            name: "Michael Lee",
            role: "Sprint Coach",
            bio: "Former national sprinter helping athletes improve speed, agility, and explosive power.",
            img: "https://cdn.pixabay.com/photo/2024/04/17/21/49/ai-generated-8703064_1280.jpg",
        },
        {
            name: "Sophia Martinez",
            role: "Nutrition Expert",
            bio: "Guides athletes with tailored meal plans to maximize performance and recovery.",
            img: "https://cdn.pixabay.com/photo/2024/04/17/21/49/ai-generated-8703068_1280.jpg",
        },
        {
            name: "David Kim",
            role: "Trail Running Coach",
            bio: "Specializes in ultra-marathons and trail running, with a focus on endurance and mental toughness.",
            img: "https://cdn.pixabay.com/photo/2017/01/11/18/35/blur-1972569_1280.jpg",
        },
        {
            name: "Rachel Green",
            role: "Yoga & Mobility Coach",
            bio: "Helps runners improve flexibility, balance, and recovery through yoga and mobility exercises.",
            img: "https://cdn.pixabay.com/photo/2016/11/22/22/25/abs-1850926_1280.jpg",
        },
        {
            name: "James Anderson",
            role: "Recovery & Rehab Specialist",
            bio: "Expert in injury recovery and rehabilitation, ensuring athletes stay healthy and strong.",
            img: "https://cdn.pixabay.com/photo/2016/11/20/10/42/boxing-1842466_1280.jpg",
        },
        {
            name: "Olivia Chen",
            role: "Junior Development Coach",
            bio: "Works with young runners to build solid foundations in technique, speed, and discipline.",
            img: "https://cdn.pixabay.com/photo/2018/01/20/10/55/wood-3094281_1280.jpg",
        },
    ]

  return (
    <>
        <div id="ourcoaches">
            <div id="coachHeader">
                <h1>Meet our coaches</h1>
            </div>

            
            <div className="coaches-page">
                <div className="coaches-header">
                <h1>Our Coaches</h1>
                <p>
                    Meet the experienced and passionate coaches who guide our running
                    community.
                </p>
                </div>

                <div className="coaches-grid">
                {coaches.map((coach, index) => (
                    <div key={index} className="coach-card">
                    <div className="coach-img">
                        <img src={coach.img} alt={coach.name} loading="lazy" />
                    </div>
                    <h2>{coach.name}</h2>
                    <h3>{coach.role}</h3>
                    <p>{coach.bio}</p>
                    </div>
                ))}
                </div>
            </div>

            <RunningClub />
        </div>
    </>
  );
}

export default OurCoaches;
