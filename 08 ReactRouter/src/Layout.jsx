// import React from 'react'
import { Outlet } from 'react-router-dom'  
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

/*
through outlet we change that particular place where we wrote and remaining things will same as it is. 
here in this we want header and footer will keep in their place but middle place will change
**/

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout