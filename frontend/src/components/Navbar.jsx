import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import { NavLink, useNavigate } from 'react-router-dom'



function Navbar() {

    const navigate = useNavigate();
    const[showMenu,setShowMenu] = useState(false);
    const [token,setToken] = useState(true);


  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/">
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto m-auto hidden' />
        </NavLink>
        
        <NavLink to="/doctors">
            <li className='py-1'>All DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        
        <NavLink to="/about">
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        
        <NavLink to="/contact">
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='bg-white shadow-lg rounded-lg flex flex-col gap-3 p-4 whitespace-nowrap'>
                        <p onClick={()=>navigate('/myProfile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('/myappointments')}className='hover:text-black cursor-pointer'> My Appointments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        }
        {/* Menu Icon */}
<img
  onClick={() => setShowMenu(true)}
  className="w-6 md:hidden cursor-pointer"
  src={assets.dropdown_icon}
  alt="menu"
/>

{/* Dark Overlay */}
{showMenu && (
  <div
    onClick={() => setShowMenu(false)}
    className="fixed inset-0 bg-black/40 z-10 md:hidden"
  />
)}

{/* Right Slide Menu */}
<div
  className={`fixed top-0 right-0 h-full bg-white z-20 md:hidden
  transition-all duration-300 ease-in-out
  ${showMenu ? 'w-[80%]' : 'w-0 overflow-hidden'}`}
>
  {/* Header */}
  <div className="flex items-center justify-between px-5 py-6 border-b">
    <img src={assets.logo} alt="logo" className="w-32" />
    <img
      onClick={() => setShowMenu(false)}
      src={assets.cross_icon}
      alt="close"
      className="w-6 cursor-pointer"
    />
  </div>

  {/* Menu Links */}
  <ul className="flex flex-col gap-5 px-6 py-6 text-lg font-medium">
    <NavLink
      to="/"
      onClick={() => setShowMenu(false)}
      className="hover:text-blue-500 transition"
    >
      HOME
    </NavLink>

    <NavLink
      to="/doctors"
      onClick={() => setShowMenu(false)}
      className="hover:text-blue-500 transition"
    >
      ALL DOCTORS
    </NavLink>

    <NavLink
      to="/about"
      onClick={() => setShowMenu(false)}
      className="hover:text-blue-500 transition"
    >
      ABOUT
    </NavLink>

    <NavLink
      to="/contact"
      onClick={() => setShowMenu(false)}
      className="hover:text-blue-500 transition"
    >
      CONTACT
    </NavLink>
  </ul>
</div>

      </div>
    </div>
  )
}

export default Navbar
