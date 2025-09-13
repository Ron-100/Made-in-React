import React from "react";
import RunningClub from "../../JoinNow/RunningClub";
import { use } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Testimo() {
    
    useGSAP(()=>{
        gsap.from('.testimonials-grid',{
            opacity:0,
            y:200,
            delay:0.2,
            duration:0.9,
        })

        gsap.from('.testimonials-header',{
            opacity:0,
            delay:1.2,
            duration:1,
        })
    })

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Marathon Finisher",
            feedback:
            "Joining the club completely transformed my running journey. The coaches are supportive, and the community is amazing!",
            img: "https://cdn.pixabay.com/photo/2018/08/01/06/43/girl-3576679_1280.jpg",
        },
        {
            name: "David Miller",
            role: "Beginner Runner",
            feedback:
            "I started as a beginner, and within months I could run 10K comfortably. The training plans are super effective.",
            img: "https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_1280.jpg",
        },
        {
            name: "Emily Chen",
            role: "Trail Enthusiast",
            feedback:
            "The trail runs are my favorite! I’ve built endurance and confidence thanks to this wonderful group.",
            img: "https://cdn.pixabay.com/photo/2020/06/19/06/27/call-5315851_1280.jpg",
        },
        {
            name: "James Parker",
            role: "Half-Marathoner",
            feedback:
            "The guidance and motivation here helped me run my first half-marathon. Truly a life-changing experience.",
            img: "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
            name: "Liy Dox",
            role: "Enthusiast",
            feedback:
            "The trail runs are my favorite! I’ve built endurance and confidence thanks to this wonderful group.",
            img: "https://cdn.pixabay.com/photo/2017/08/02/17/45/people-2572621_1280.jpg",
        },
        {
            name: "Goldy Parker",
            role: "Marathoner",
            feedback:
            "The guidance and motivation here helped me run my first half-marathon. Truly a life-changing experience.",
            img: "https://cdn.pixabay.com/photo/2017/06/19/17/24/boy-2420289_1280.jpg",
        },
    ]


  return (
    <>
    <div id="theteste">
      <div className="testi w-full">
        <h1>Testimonials</h1>
      </div>

      <div className="testimonials-page">
        <div className="testimonials-header">
          <h1>What Our Runners Say</h1>
          <p>Real stories from our running community.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
                <img src={t.img} alt={t.name} className="testimonial-img" />
                <p className="feedback">“{t.feedback}”</p>
                <h3>{t.name}</h3>
                <span>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
      <RunningClub />
    </div>

    </>
  );
}

export default Testimo;
