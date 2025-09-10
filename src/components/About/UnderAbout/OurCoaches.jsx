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
            img: "https://images.pexels.com/photos/258007/pexels-photo-258007.jpeg",
        },
        {
            name: "Emily Davis",
            role: "Strength & Conditioning Coach",
            bio: "Focused on building strength, flexibility, and injury prevention for runners of all levels.",
            img: "https://images.pexels.com/photos/5327457/pexels-photo-5327457.jpeg",
        },
        {
            name: "Michael Lee",
            role: "Sprint Coach",
            bio: "Former national sprinter helping athletes improve speed, agility, and explosive power.",
            img: "https://images.pexels.com/photos/4100667/pexels-photo-4100667.jpeg",
        },
        {
            name: "Sophia Martinez",
            role: "Nutrition Expert",
            bio: "Guides athletes with tailored meal plans to maximize performance and recovery.",
            img: "https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg",
        },
        {
            name: "David Kim",
            role: "Trail Running Coach",
            bio: "Specializes in ultra-marathons and trail running, with a focus on endurance and mental toughness.",
            img: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg",
        },
        {
            name: "Rachel Green",
            role: "Yoga & Mobility Coach",
            bio: "Helps runners improve flexibility, balance, and recovery through yoga and mobility exercises.",
            img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg",
        },
        {
            name: "James Anderson",
            role: "Recovery & Rehab Specialist",
            bio: "Expert in injury recovery and rehabilitation, ensuring athletes stay healthy and strong.",
            img: "https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg",
        },
        {
            name: "Olivia Chen",
            role: "Junior Development Coach",
            bio: "Works with young runners to build solid foundations in technique, speed, and discipline.",
            img: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg",
        },
    ]

  return (
    <>
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
                    <img src={coach.img} alt={coach.name} />
                </div>
                <h2>{coach.name}</h2>
                <h3>{coach.role}</h3>
                <p>{coach.bio}</p>
                </div>
            ))}
            </div>
        </div>

        <RunningClub />
    </>
  );
}

export default OurCoaches;
