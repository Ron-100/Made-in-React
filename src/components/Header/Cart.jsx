import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { IoCalendarClear } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import { useSelector, useDispatch } from 'react-redux';
import { addtoCart, reomvetoCart } from '../../store/AddCartSlice';
import { BsBookmarkStarFill } from "react-icons/bs";
import { BsBookmarkStar } from "react-icons/bs";

function Cart({ cartOpen, closeCart }) {
    const [show, setShow] = useState([])
    const cardIds = useSelector((state) => state.addCartSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://localhost:8080/items')
            .then((res) => res.json())
            .then((data) => {
                const found = data.items.filter((item) => cardIds.includes(item.id))
                setShow(found)
            })
    }, [cardIds])

    return (
        <div id="cartWrap" onClick={closeCart}
            className={`cartPop ${cartOpen ? 'open' : ''} w-full h-screen absolute top-0 flex justify-center items-center z-20`}>
            <div id="cartPop" onClick={(e) => e.stopPropagation()} className='rounded-sm overflow-auto'>
                <div id="tag" className='w-full h-auto flex justify-between items-center px-5 py-4'>
                    <h1 className='text-white text-2xl font-bold'>Your Cart</h1>
                    <i className='ri-close-large-line text-xl cursor-pointer text-white' onClick={closeCart}></i>
                </div>

                <div id="cartitm" className='flex justify-center flex-col items-center p-4 text-white'>
                    {show.length === 0 ? (
                        <div className='h-52 flex justify-center items-center'>
                            <span>No Items</span>
                        </div>
                    ) : (
                        show.map((item) => {
                            const isInCart = cardIds.includes(item.id)
                            return (
                                <div key={item.id} id='cartevents' className='my-5 max-h-64'>
                                    <div id="carteventsItm" className='w-full h-full flex justify-evenly items-center'>
                                        <div id="cbox1">
                                            <img src={item.image} alt="" className='w-full h-full object-cover object-center' />
                                        </div>

                                        <div id="cbox2">
                                            <NavLink to={`/eventd/${item.id}`}>
                                                <p id='tag1' >{item.tag}</p>
                                            </NavLink>
                                            <div className='flex items-center gap-2'>
                                                <IoCalendarClear className='text-lionDox' /><p>{item.date}</p>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <FaUser className='text-lionDox' /><p>{item.compos}</p>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <FaClock className='text-lionDox' /><p>{item.time}</p>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <GrLocationPin className='text-lionDox' /><p>{item.location}</p>
                                            </div>

                                            {/* Toggle add/remove */}
                                            <div
                                                className='text-xl mr-2 mb-2 absolute top-2 right-0 cursor-pointer'
                                                onClick={() =>
                                                    isInCart
                                                        ? dispatch(reomvetoCart(item.id))
                                                        : dispatch(addtoCart(item.id))
                                                }
                                            >
                                                {isInCart ? <BsBookmarkStarFill color='#ffff' /> : <BsBookmarkStar color='#ffff' />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart

// // import { TbXboxX } from "react-icons/tb";
// import React, { useEffect, useState } from 'react'
// import 'remixicon/fonts/remixicon.css';
// import './Header.css'
// import { NavLink } from 'react-router-dom';
// import { IoCalendarClear } from "react-icons/io5";
// import { FaUser } from "react-icons/fa";
// import { FaClock } from "react-icons/fa6";
// import { GrLocationPin } from "react-icons/gr";
// import { IoBookmarkOutline } from "react-icons/io5";
// import { IoBookmark } from "react-icons/io5";
// import { useDispatch, useSelector } from 'react-redux';

// function Cart({cartOpen, closeCart}) {


//     let [show, setShow] = useState([])

//     let cardId = useSelector((state)=> state.addCartSlice)
//     let dispatch = useDispatch()
    
//     let addevent = () =>{
//         dispatch(addtoCart(id))
//     }
    
//     let removeEvent = () =>{
//         dispatch(reomvetoCart(id))
//     }
    
    

//     useEffect(()=>{
//         fetch('http://localhost:8080/items')
//         .then((res)=> res.json())
//         .then((data)=> {
//             const found = data.items.filter((item) => cardId.includes(item.id))
//             setShow(found)
//         })
//     },[cardId])


//     return (
//         <>
//         <div id="cartWrap" onClick={closeCart} className={`cartPop ${cartOpen ? 'open' : ''} w-full h-screen absolute top-0  flex justify-center items-center z-20`}>
//             <div id="cartPop" onClick={(e)=> e.stopPropagation()} className='rounded-sm overflow-auto' >
//                 <div id="tag" className='w-full h-auto flex justify-between items-center px-5 py-4'>
//                     <h1 className='text-white text-2xl font-bold'>Your Cart</h1>
//                     <i className='ri-close-large-line  text-xl cursor-pointer text-white' onClick={closeCart}></i>
//                 </div>
                
//                 <div id="cartitm" className='flex justify-center flex-col items-center p-4 text-white'>

//                     {show.length === 0 ? (
//                         <div className='h-52 flex justify-center items-center'>
//                             <span>No Items</span>
//                         </div> 
                        
//                     ) : (
//                         show.map((item)=> (
                            
                            
//                         <div key={item.id} id='cartevents' className='my-5 max-h-64'>
//                             <div id='cartevents' className='my-5 max-h-64'>
//                                 <div id="carteventsItm" className='w-full h-full flex justify-evenly items-center '>
                            
//                                     <div id="cbox1">
//                                         <img src={item.image} alt="" className='w-full h-full object-cover object-center' />
//                                     </div>
                            
//                                     <div id="cbox2" >
                                    
//                                         <NavLink to={`/eventd/${'id'}`}>
//                                             <p id='tag1'>{item.tag}</p>
//                                         </NavLink>
                                        
//                                         <div className='flex items-center gap-2'>
//                                             <IoCalendarClear className='text-pinkAccent' /><p>{item.date}</p>
//                                         </div>
//                                         <div className='flex items-center gap-2'>
//                                             <FaUser className='text-pinkAccent'/><p>{item.compos}</p>
//                                         </div>
//                                         <div className='flex items-center gap-2'>
//                                             <FaClock className='text-pinkAccent'/><p>{item.time}</p>
//                                         </div>
//                                         <div className='flex items-center gap-2'>
//                                             <GrLocationPin className='text-pinkAccent'/><p>{item.location}</p>
//                                         </div>


                                        
//                                         {}
//                                         {/* <div className='text-xl mr-2 mb-2 absolute top-2 right-0 cursor-pointer'><IoBookmark color='#ffff' /></div>  */}
//                                         <div className='text-xl mr-2 mb-2 absolute top-2 right-0 cursor-pointer'><IoBookmarkOutline color='#ffff' /></div> 

//                                     </div>

//                                 </div>
//                             </div> 
//                         </div>
//                         ))
                        
//                     )}

                    
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Cart

