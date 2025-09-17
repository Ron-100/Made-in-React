import React from 'react'
import './Footer.css'
import { Link, NavLink} from 'react-router-dom'
import img1 from './footerAssets/facebook.png'
import img2 from './footerAssets/insta.png'
import img3 from './footerAssets/youtube.png'
import img4 from './footerAssets/x.png'
import img5 from './footerAssets/git.png'


function Footer() {

    const facebook = () =>{
        window.open('https://www.facebook.com/', '_blank')
    }
    const insta = () =>{
        window.open('https://www.instagram.com/', '_blank')
    }
    const youtube = () =>{
        window.open('https://www.youtube.com/', '_blank')
    }
    const x = () =>{
        window.open('https://www.x.com/', '_blank')
    }
    const git = () =>{
        window.open('https://www.github.com/', '_blank')
    }

    let imglink = () => {
        window.open('https://www.instagram.com/', '_blank')
    }

    return (
        <div id='whole_footer'>
            <div id='footerscontent'>
                <div id="box1">
                    <Link to='/'>
                        <img src="logoo.png" alt="" />
                    </Link>
                    <p>Join us on a journey through scenic trail runs and learn about Running Club exciting trail running outings and tips for tackling the trails.</p>
                    <div id="social-icons">
                        <img onClick={facebook} src={img1} alt="" />
                        <img onClick={insta} src={img2} alt="" />
                        <img onClick={youtube} src={img3} alt="" />
                        <img onClick={x} src={img4} alt="" />
                        <img onClick={git} src={img5} alt="" />
                    </div>
                </div>
                <div id="rightResposiv">
                    <div id="box2n3">
                        <div id="box2">
                            <NavLink to='/about' id='flinks'>About Us</NavLink>
                            <NavLink to='/about/coached' id='flinks'>Coaches</NavLink>
                            <NavLink to='/workouts' id='flinks'>Workouts</NavLink>
                            <NavLink to='/contectus' id='flinks'>Contact Us</NavLink>
                        </div>
                        <div id="box3">
                            <div id="grider">
                                <div id="gb"><img onClick={imglink} src="https://cdn.pixabay.com/photo/2022/09/11/12/13/woman-7446625_1280.jpg" alt="" /></div>
                                <div id="gb"><img onClick={imglink} src="https://cdn.pixabay.com/photo/2024/05/16/14/43/woman-8766131_1280.png" alt="" /></div>
                                <div id="gb"><img onClick={imglink} src="https://cdn.pixabay.com/photo/2016/09/18/16/52/shoes-1678590_1280.jpg" alt="" /></div>
                                <div id="gb"><img onClick={imglink} src="https://cdn.pixabay.com/photo/2022/08/17/15/45/running-7392835_1280.jpg" alt="" /></div>
                                <div id="gb"><img onClick={imglink} src="https://cdn.pixabay.com/photo/2024/03/27/21/47/ai-generated-8659982_1280.png" alt="" /></div>
                                <div id="gb"><img onClick={imglink} src="https://cdn.pixabay.com/photo/2021/12/06/09/07/lifeguard-6849601_1280.jpg" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div id="box4">
                        <form> 
                            <input type="email" name='email' id='inpEmali' placeholder='Enter your email'/>
                            <button id='eSubbtn'>&#10153;</button>
                        </form>
                        <div id="infos">
                            <p>&#9993; hello@runningclub.com</p>
                            <p>&#9906; 4332 Wilkinson Court, CA 91604</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footerlast">
                <hr />
                <section>
                    <p>© Running Club. All Rights Reserved. <span>Licensing</span></p>
                </section>
            </div>
        </div>
    )
}

export default Footer