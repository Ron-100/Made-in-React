import React from "react";
import "./News.css";
import {useGSAP} from '@gsap/react'
import {NavLink} from 'react-router-dom'
import gsap from 'gsap'
function News() {
 
    // optimized
    useGSAP(() => {
      let tl = gsap.timeline({
        defaults: { duration: 0.8, ease: "power3.out" }
      });

      tl.from("#news-page h1", {
        delay:0.2,
        opacity: 0,
        y: 60
      })
      .from("#news-page p", {
        opacity: 0,
        y: 40
      }, "-=0.4"); // start slightly earlier for smooth flow

      
      // blogs
      gsap.from('.blog-card',{
          opacity:0,
          yPercent:170,
          duration:0.5,
      })
    });


    // unoptimized
    // useGSAP(()=>{
    //   gsap.from('#news-page>h1',{
    //     opacity:0,
    //     y:-200,
    //     delay:0.5,
    //     direction:2,
    //     ease: "circ.out",
    //   })
    //   gsap.from('#news-page>p',{
    //     opacity:0,
    //     y:-200,
    //     delay:0.5,
    //     direction:2,
    //     ease: "circ.out",
    //   })
    // })

    const articles = [
        {
            id: 1,
            category: "RUNNING TIPS",
            title: "Must-Have Equipment for Every Runner",
            description:
            "Explore essential gear that every runner should consider adding to their arsenal to enhance running comfort.",
            img: "https://cdn.pixabay.com/photo/2020/03/23/17/14/run-4961494_1280.jpg",
        },
        {
            id: 2,
            category: "TRAIL",
            title: "Trail Running Adventures: Exploring Nature’s Gym",
            description:
            "Join us on a journey through scenic trail runs and learn about Running Club’s exciting trail training outings.",
            img: "https://cdn.pixabay.com/photo/2019/07/23/16/28/trees-4358107_1280.jpg",
        },
        {
            id: 3,
            category: "TRAIL",
            title: "The Benefits of Trail Running",
            description:
            "Explore the many advantages of hitting the trails and why trail running has become increasingly popular among runners of all levels.",
            img: "https://cdn.pixabay.com/photo/2023/08/11/12/29/woman-8183516_1280.jpg",
        },
        {
            id: 4,
            category: "RUNNING TIPS",
            title: "Work, Life, and Running: Tips from Busy Runners",
            description:
            "Discover how Running Club members successfully balance their careers, personal lives, and their passion for running.",
            img: "https://cdn.pixabay.com/photo/2020/05/05/05/16/man-5131486_1280.jpg",
        },
        {
            id: 5,
            category: "MARATHON",
            title: "Ultimate Challenge: A Guide to Marathon Running",
            description:
            "From training tips and race day strategies to the emotional sense of accomplishment that comes with crossing the finish line of a 26.2-mile journey.",
            img: "https://cdn.pixabay.com/photo/2016/07/11/03/57/jogging-1509003_1280.jpg",
        },
        {
            id: 6,
            category: "TRAINING",
            title: "Mastering the Art of Interval Training",
            description:
            "Interval training has emerged as a powerful method for improving cardiovascular fitness, boosting endurance, and torching calories.",
            img: "https://cdn.pixabay.com/photo/2018/07/23/06/06/running-3556088_1280.jpg",
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
                <NavLink to ="/contectus"  className="blog-link">Read More</NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
