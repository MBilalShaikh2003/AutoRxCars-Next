import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='head'>
        <div className='logo'>Auto
            <span className='span'>Rx</span></div>
        <div className='section'>
            <ul>
               <Link key={"home"} href={'/'}><li>Home</li></Link> 
               <Link key={"about"} href={'/'}><li>About</li></Link>
                <Link key={"cars"} href={'/collection'}><li>Cars</li></Link>
                <Link key={"signin"} href={'/sign-in'}><li>LogIn</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header