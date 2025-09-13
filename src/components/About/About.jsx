import React from "react";
import "./About.css";
import LatestNews from "../News/LatestNews";
import RunningClub from "../JoinNow/RunningClub";
import Join from "../JoinNow/Join";
import { useGSAP } from "@gsap/react";
import Button from "../Button";
import gsap from "gsap";
function About() {
  useGSAP(() => {
    gsap.from("#abhContent", {
      y: 40,
      opacity: 0,
      duration: 0.5,
      delay: 0.4,
      scrub: 2,
    });
  });

  return (
    <>
    <div id="theabout">
      <div id="about-page">
        <div id="ableyer" className="w-full flex justify-center items-end">
          <div
            id="abhContent"
            className="w-3/4 h-full flex flex-col justify-center gap-6"
          >
            <h1 className=" text-white font-semibold">
              Work Hard, Running Harder
            </h1>
            <p className="">
              Lace-up your shoes, set your goals, and let's run together towards
              a healthier, happier, and faster you.
            </p>
            <div id="abhContent" className="my-5 w-fit">
              <Button
                children={"LET'S RUN"}
                twich={"/contectus"}
                className={"w-40"}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="abspartA" className="max-w-6xl flex justify-between items-center">
        <div id="abstext" className="">
          Our commitment to excellence has led to these impressive figures that
          showcase our dedication, hard work, and the value we bring to our
          customers.
        </div>
        <div id="abcounts" className=" flex justify-end items-center ">
          <div id="abfcount" className="flex flex-col items-start flex-shrink">
            <h1>785+</h1>
            <h4>Kilometers Run</h4>
          </div>
          <div id="abfcount" className="flex flex-col items-center flex-shrink">
            <h1>145+</h1>
            <h4>Location</h4>
          </div>
          <div id="abfcount" className="flex flex-col items-start flex-shrink">
            <h1>3,5k</h1>
            <h4>Runners</h4>
          </div>
        </div>
      </div>
      
      <section className="about">
        <div className="about-header">
          <p className="about-subtitle">ABOUT US</p>
          <h1 className="about-title">
            We are the best
            <br />
            running club in town
          </h1>
          <p className="about-desc">
            Running Club’ commitment to excellence shines through in these
            impressive stats, showcasing our <br /> dedication and value to our members
            and the running community.
          </p>
        </div>

        <div className="about-content">
          <div className="about-img">
            <img src="https://images.pexels.com/photos/3763883/pexels-photo-3763883.jpeg" alt="Running Club"/>
          </div>
          <div className="about-box">
            <div className="vision">
              <h2>Our Vision</h2>
              <p>
                Our vision at Running Club is to create a world where running
                transcends boundaries and inspires limitless possibilities. We
                envision a community where every step taken is a stride toward
                personal growth, where individuals of diverse backgrounds come
                together to share in the transformative power of running.
              </p>
            </div>
            <div className="mission">
              <h2>Our Mission</h2>
              <p>
                Our mission is to inspire and empower individuals of all ages
                and abilities to embrace the joy of running. Through inclusive
                community engagement, expert coaching, and a supportive
                environment, we strive to foster a culture of health, fitness,
                and camaraderie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-header">
          <p className="about-subtitle">ABOUT US</p>
          <h1 className="about-title">
            We are the best
            <br />
            running club in town
          </h1>
          <p className="about-desc">
            Established with a passion for fitness and community, Running Club
            brings together individuals who share the joy of running. From
            beginners taking their first steps to seasoned athletes chasing new
            records, we provide a supportive environment where everyone can
            thrive, grow, and celebrate the spirit of endurance together.
          </p>
        </div>

        <div className="about-content">
          <div className="about-img">
            <img
              src="https://images.pexels.com/photos/5310782/pexels-photo-5310782.jpeg"
              alt="Running Club"
            />
          </div>
          <div className="about-box">
            <div className="values">
              <h2>Our Values</h2>
              <p>
                At the core of Running Club are values of integrity,
                inclusivity, and perseverance. We believe in fostering a
                welcoming space where everyone feels motivated and supported to
                achieve their goals both on and off the track.
              </p>
            </div>
            <div className="goal">
              <h2>Our Goal</h2>
              <p>
                Our goal is to expand our community, encourage healthy
                lifestyles, and provide opportunities for individuals to grow
                stronger physically and mentally through the joy of running.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Join />
      <LatestNews />
      <RunningClub />
    </div>
    </>
  );
}

export default About;
