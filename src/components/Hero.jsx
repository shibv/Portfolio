import React, { useState, useEffect } from "react";
import gif from "/shiv.jpg";
import hr from "../assets/curve-hr.svg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { SiCodeforces } from "react-icons/si";
import Badge from "./Badge";
import Button from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    setLoaded(true);
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full text-white relative"
    >
      <div className="w-full md:w-1/2 p-4 md:p-8 flex justify-center items-center">
        <img
          data-aos="flip-right"
          data-aos-duration="1500"
          data-aos-offset="200"
          className="rounded-xl w-3/4 sm:w-full  max-w-md h-auto object-cover"
          src={gif}
          alt="profile"
          onLoad={() => setLoaded(false)}
        />
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-8 py-8 md:py-12 overflow-y-auto max-h-screen">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Always start with opacity 0 and y: 20
            animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and y: 0 when mounted
            transition={{ duration: 0.8 }} // Smooth transition duration
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-blue-400">Hi, I'm</h2>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Shiv Shankar Singh
              </h1>
              <p className="text-xl font-semibold text-gray-300">
                Software Developer & Competitive Programmer
              </p>
            </div>

            <p className="text-lg text-gray-400">
              Currently pursuing B.Tech in Computer Science at IIIT Kalyani.
              Software Developer Intern at Shopflo , with experience in
              software development and a passion for competitive programming.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">
                Codeforces: 1334+
              </Badge>
              <Badge variant="secondary" className="text-sm">
                LeetCode: 1720+
              </Badge>
              <Badge variant="secondary" className="text-sm">
                ICPC Amritapuri 2023
              </Badge>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="mailto:shivshankarsde@gmail.com" target='_' className='hover:scale-105 transition-all duration-500 cursor-pointer' >
            <button className='inline-flex h-10  items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-5 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
            Get in touch
      </button>
            </a>
              <a href="https://drive.google.com/file/d/1kfenjFGS9t_eyK6a8iJSmrbMRHOO91zp/" target='_' className='hover:scale-105 transition-all duration-500 cursor-pointer' >
            <button className='inline-flex h-10  items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-5 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
        View Resume
      </button>
            </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/shibv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shiv-shankar-singh-2b11ba188/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/SSha14635434"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
              <a
                href="https://codeforces.com/profile/Dshiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SiCodeforces className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <img
        src={hr}
        className="w-full h-auto md:h-2 absolute bottom-0 left-0 right-0"
        alt="hr"
      />
    </div>
  );
};

export default Home;
