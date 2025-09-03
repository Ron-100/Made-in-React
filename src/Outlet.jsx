import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Outlate() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Outlate
