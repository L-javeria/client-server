import React, { useState } from 'react'
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useLocation } from 'react-router-dom';

const Navbaar = () => {

    let location = useLocation();
    const isWishPage = location.pathname === '/wish'
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    !isWishPage && (
    <div className='flex justify-between items-center h-24 max-w-[1270px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-black '> TaggingHub </h1>
        <ul className={`hidden md:flex`}>
            <li className='p-5'>COMPANY</li>
            <li className='p-5'>RESOURCES</li>
            <li className='p-5'>ABOUT</li>
            <li className='p-5'>CONTACT</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
        {nav ? <RiCloseLine /> : <RiMenuLine/> }
        </div>
        <div className={location.pathname === '/wish' && console.log(location.pathname)}>
        <div className={nav ? 'fixed left-0 top-0 border-r w-[60%] h-full bg-slate-200 border-r-gray-300 ease-linear duration-500 md:hidden' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-black py-12 px-5'> TaggingHub </h1>
        <ul className='py-15 px-4'>
        <li className='p-5 border-b border-gray-400'>COMPANY</li>
        <li className='p-5 border-b border-gray-400'>RESOURCES</li>
        <li className='p-5 border-b border-gray-400'>ABOUT</li>
        <li className='p-5'>CONTACT</li>
        </ul>
        </div>
        </div>
        </div>
  )
    )
}

export default Navbaar