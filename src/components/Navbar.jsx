import React from 'react'
import img from "../assets/avt.png"



const Navbar = () => {
  return (
    <div className='fixed z-50 bg-black w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={img} className="App-logo w-10 bg-slate-600  rounded-full" alt="logo" />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
            <li className="p-4"><a href="#skills" className="hover:underline">Skills</a></li>
            <li className="p-4"><a href="#certs" className="hover:underline">Projects</a></li>
            </ul>
            <a href="#" className='hover:scale-105 transition-all duration-500 cursor-pointer' >
            <button className='inline-flex h-12  items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
        Resume
      </button>
            </a>
        </div>
    </div>
  )
}

export default Navbar
