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
            delay:1.5,
            duration:1,
        })
    })

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Marathon Finisher",
            feedback:
            "Joining the club completely transformed my running journey. The coaches are supportive, and the community is amazing!",
            img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        },
        {
            name: "David Miller",
            role: "Beginner Runner",
            feedback:
            "I started as a beginner, and within months I could run 10K comfortably. The training plans are super effective.",
            img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
        },
        {
            name: "Emily Chen",
            role: "Trail Enthusiast",
            feedback:
            "The trail runs are my favorite! I’ve built endurance and confidence thanks to this wonderful group.",
            img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        },
        {
            name: "James Parker",
            role: "Half-Marathoner",
            feedback:
            "The guidance and motivation here helped me run my first half-marathon. Truly a life-changing experience.",
            img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
        },
        {
            name: "Liy Dox",
            role: "Enthusiast",
            feedback:
            "The trail runs are my favorite! I’ve built endurance and confidence thanks to this wonderful group.",
            img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        },
        {
            name: "Goldy Parker",
            role: "Marathoner",
            feedback:
            "The guidance and motivation here helped me run my first half-marathon. Truly a life-changing experience.",
            img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
        },
    ]


  return (
    <>
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
    </>
  );
}

export default Testimo;
