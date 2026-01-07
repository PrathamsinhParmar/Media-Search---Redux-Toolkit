import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assects/MediaSearch Primary Logo.jpeg'

const Navbar = () => {
  return (
    <div>
      <div id='navbar' className='w-full h-15 flex flex-wrap justify-between bg-black items-center px-10 py-2'>
        <h2 className='font-medium text-xl text-black'>
            <img id='logo' className='h-15' src={logo} alt="" />
        </h2>
        <div className='flex gap-2'>
            <Link className='bg-(--c3) px-3 py-2 text-white text-xs font-medium rounded active:bg-(--c4)'  to='/'>Search</Link>
            <Link className='bg-(--c3) px-3 py-2 text-white text-xs font-medium rounded active:bg-(--c4)'  to='/collection'>Collection</Link>
        </div>
        {/* <button className='bg-gray-500 font-medium text-xs  px-3 py-1 rounded'>Theme</button> */}
      </div>
    </div>
  )
}

export default Navbar
