import React from 'react'
import Button from '../Button'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

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
            duration:0.8,
            delay:0.2,
        })
        
        newsline.from('#top',{
            opacity:0,
            y:50,
            duration:1,
        },)


        // news

    })

    let navigate = useNavigate();

    const info = [
        {
            date:'February 27, 2024',
            text:'Must-Have Equipment for Every Runner'
        },
        {
            date:'February 27, 2024',
            text:'The Benefits of Trail Running'
        },
        {
            date:'February 27, 2024',
            text:'Ultimate Challenge: A Guide to Marathon Running'
        }
    ]

    return (
        <div id="news" className='relative'> 
            <div id="news_cover">
                <div id="top">
                    <h1>Latest news</h1>
                    <Button children={"VIEW MORE"} twich={'/news'} className={'w-36'}/>
                </div> 
 
                <div id="btm">
                    {info.map((inf, inx)=>(
                        <div id="cag" key={inx}>
                            <div id="black_sade"></div>
                            <p>{inf.date}</p>
                            <h1>{inf.text}</h1>
                            <button onClick={()=> (navigate('/contectus'))} >Read More <p>&#10162;</p></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LatestNews
