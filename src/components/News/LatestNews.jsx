import React from 'react'
import Button from '../Button'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function LatestNews() {
    
    useGSAP(()=>{
        // news
        let newsline = gsap.timeline({
            scrollTrigger:{
                trigger:'#news',
                scroller:'body',
                // markers:true,
                start:'top 100%',
                end:'top 0%'
            }
        });

        newsline.from('#btm',{
            opacity:0,
            y:-200,
            duration:2,
            delay:0.2,
            ease: "elastic.out(1,0.3)"
        })
        
        newsline.from('#top',{
            opacity:0,
            y:50,
            duration:1,
        },'-=1.2')


        // news

    })

    return (
        <div id="news">
            <div id="news_cover">
                <div id="top">
                    <h1>Latest news</h1>
                    <Button children={"VIEW MORE"} twich={'/news'} className={'w-36'}/>
                </div>
                <div id="btm">
                    <div id="cag">
                        <div id="black_sade"></div>
                        <p>February 27, 2024</p>
                        <h1>Must-Have Equipment for Every Runner</h1>
                        <a href="#">Read More <p>&#10162;</p></a>
                    </div>
                    <div id="cag">
                        <div id="black_sade"></div>
                        <p>February 27, 2024</p>
                        <h1>The Benefits of Trail Running</h1>
                        <a href="#">Read More <p>&#10162;</p></a>
                    </div>
                    <div id="cag">
                        <div id="black_sade"></div>
                        <p>February 27, 2024</p>
                        <h1>Ultimate Challenge: A Guide to Marathon Running </h1>
                        <a href="#">Read More <p>&#10162;</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews
