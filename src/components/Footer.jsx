import React from 'react'
import hr from '../assets/curve-hr.svg'

const Footer = () => {
  return (
    <div className="mt-4 bg-slate-500 rounded-md text-white px-8 py-4">
    <ul className="text-center">
      <li><a href="#home" className="hover:underline">About</a></li>
      <li><a href="#skills" className="hover:underline">Skills</a></li>
      <li><a href="#certs" className="hover:underline">Projects</a></li>
    </ul>

    <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />

    <p className="text-sm font-light text-center">Copyright © 2024 Shiv Shankar Singh. All Right Reserved</p>

  </div>
  )
}

export default Footer
