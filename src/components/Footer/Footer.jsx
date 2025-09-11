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
                                <div id="gb"><img onClick={imglink} src="https://images.pexels.com/photos/4944975/pexels-photo-4944975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
                                <div id="gb"><img onClick={imglink} src="https://images.pexels.com/photos/7432/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
                                <div id="gb"><img onClick={imglink} src="https://images.pexels.com/photos/7880193/pexels-photo-7880193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
                                <div id="gb"><img onClick={imglink} src="https://images.pexels.com/photos/5319579/pexels-photo-5319579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
                                <div id="gb"><img onClick={imglink} src="https://images.pexels.com/photos/8454933/pexels-photo-8454933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
                                <div id="gb"><img onClick={imglink} src="https://images.pexels.com/photos/1390403/pexels-photo-1390403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
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