import { useState } from 'react'
import './App.css'
import Outlet from './Outlet.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Workout from './components/Workouts/Workouts.jsx'
import Events from './components/Events/Events.jsx'
import News from './components/News/News.jsx'
import ContectUs from './components/ContectUs/ContactUs.jsx'
import OurCoaches from './components/About/UnderAbout/OurCoaches.jsx'
import FAQ from './components/About/UnderAbout/FAQ.jsx'
import Pricing from './components/About/UnderAbout/Pricing.jsx'
import Testimo from './components/About/UnderAbout/Testimo.jsx'
import EventDetail from './components/Events/EventDetail.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Outlet />}>
      <Route path='' element={<Home/>}/>
      <Route path='about'> 
        <Route path='' element={<About/>}/>
        <Route path='faq' element={<FAQ />}/>
        <Route path='coached' element={<OurCoaches />}/>
        <Route path='pricing' element={<Pricing />}/>
        <Route path='testimonials' element={<Testimo />}/>
      </Route>
      <Route path='workouts' element={<Workout/>}/>
      <Route path='events' element={<Events/>}/>
      <Route path='news' element={<News/>}/>
      <Route path='contectus' element={<ContectUs/>}/>
      <Route path='eventd/:urlId' element={<EventDetail/>}/>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
