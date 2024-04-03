import React , { useState} from 'react'
import hr from '../assets/curve-hr.svg'
import gif from '../assets/f.gif'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedinIn, faTwitter, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { SiCodeforces } from "react-icons/si";


export const Hero = () => {
    const [loaded, setLoaded] = useState(true);
  return (
    <>
     {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4 rounded'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={gif} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Shiv Shankar Singh</h1>
                    <p className="text-xl font-bold text-gray-300">Full Stack Developer</p>
                    <p className="text-md font-light text-gray-400 ">Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about Web Development and Competitive Programming.</p>
                </div>
               
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/shibv' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://twitter.com/SSha14635434' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faTwitter} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/shiv-shankar-singh-2b11ba188/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                    <li>
                    <a href='https://codeforces.com/profile/Dshiv' rel="noreferrer" target="_blank"><SiCodeforces size={30} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
    </>
  )
}
