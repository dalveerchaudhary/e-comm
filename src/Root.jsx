// import React from 'react'
import Nav from './components/Navbar/nav'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'

const Root = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Root
