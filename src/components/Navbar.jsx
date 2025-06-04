import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 p-5 flex items-center gap-10 h-16 text-white'>
        <div className='logo font-bold text-3xl text-white'>
            <h1>
                <span className='text-red-500'>&lt;</span>Pass
                <span className='text-red-500'>OP/&gt;</span>
            </h1>
        </div>
        <ul>
            <li className='flex gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
