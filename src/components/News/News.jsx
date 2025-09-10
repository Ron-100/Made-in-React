import React from "react";
import "./News.css";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
function News() {

    useGSAP(()=>{
      gsap.from('#news-page>h1',{
        opacity:0,
        y:-200,
        delay:0.5,
        direction:2,
        ease: "circ.out",
      })
      gsap.from('#news-page>p',{
        opacity:0,
        y:-200,
        delay:0.5,
        direction:2,
        ease: "circ.out",
      })
    })

    const articles = [
        {
            id: 1,
            category: "RUNNING TIPS",
            title: "Must-Have Equipment for Every Runner",
            description:
            "Explore essential gear that every runner should consider adding to their arsenal to enhance running comfort.",
            img: "https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg",
        },
        {
            id: 2,
            category: "TRAIL",
            title: "Trail Running Adventures: Exploring Nature’s Gym",
            description:
            "Join us on a journey through scenic trail runs and learn about Running Club’s exciting trail training outings.",
            img: "https://images.pexels.com/photos/2526883/pexels-photo-2526883.jpeg",
        },
        {
            id: 3,
            category: "TRAIL",
            title: "The Benefits of Trail Running",
            description:
            "Explore the many advantages of hitting the trails and why trail running has become increasingly popular among runners of all levels.",
            img: "https://images.pexels.com/photos/4944975/pexels-photo-4944975.jpeg",
        },
        {
            id: 4,
            category: "RUNNING TIPS",
            title: "Work, Life, and Running: Tips from Busy Runners",
            description:
            "Discover how Running Club members successfully balance their careers, personal lives, and their passion for running.",
            img: "https://images.pexels.com/photos/4348624/pexels-photo-4348624.jpeg",
        },
        {
            id: 5,
            category: "MARATHON",
            title: "Ultimate Challenge: A Guide to Marathon Running",
            description:
            "From training tips and race day strategies to the emotional sense of accomplishment that comes with crossing the finish line of a 26.2-mile journey.",
            img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
        },
        {
            id: 6,
            category: "TRAINING",
            title: "Mastering the Art of Interval Training",
            description:
            "Interval training has emerged as a powerful method for improving cardiovascular fitness, boosting endurance, and torching calories.",
            img: "https://images.pexels.com/photos/2036998/pexels-photo-2036998.jpeg",
        },
    ];

  return (
    <>
      <div id="news-page">
        <h1>The latest running news</h1>
        <p>
          Running Clubs news hub is an every stride that leads to your <br />{" "}
          running inspiration and insight.
        </p>
      </div>

      <div className="blogs w-full h-auto pb-28 pt-28">
        <div className="blog-container">
          {articles.map((post) => (
            <div className="blog-card" key={post.id}>
              <img src={post.img} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-description">{post.description}</p>
                <a href="/contectus" className="blog-link">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
