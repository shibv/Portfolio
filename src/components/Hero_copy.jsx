import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { SiCodeforces } from "react-icons/si"
import Badge from './Badge'
import Button from './Button'

const Hero = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Background Image */}
        <div className="w-full md:w-1/2 h-64 md:h-screen relative">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FX74VouD_400x400.jpg-DJFKlXeo7UVa7dWHb5DaLePCw5BNVb.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 px-4 py-12 md:py-20 overflow-y-auto">
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-medium text-blue-400">Hi, I'm</h2>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Shiv Shankar Singh
                </h1>
                <p className="text-xl font-semibold text-gray-300">
                  Software Developer & Competitive Programmer
                </p>
              </div>

              <p className="text-lg text-gray-400">
                Currently pursuing B.Tech in Computer Science at IIIT Kalyani. Software Engineer Intern at SuperBolter, 
                with experience in full-stack development and a passion for competitive programming.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">Codeforces: 1334+</Badge>
                <Badge variant="secondary" className="text-sm">LeetCode: 1720+</Badge>
                <Badge variant="secondary" className="text-sm">ICPC Amritapuri 2023</Badge>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="default" asChild>
                  <a href="mailto:cse21077@iiitkalyani.ac.in">Get in touch</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
                </Button>
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

              <div className="space-y-8 bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 mt-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Recent Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Software Engineer Intern</h4>
                      <p className="text-sm text-gray-400">SuperBolter • May 2024 - Present</p>
                      <p className="text-sm mt-1">Working on Ruby on Rails backend optimization and microservices architecture</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Web Dev Intern</h4>
                      <p className="text-sm text-gray-400">BasketHunt Pvt Ltd • Aug 2023 - Oct 2023</p>
                      <p className="text-sm mt-1">Developed frontend applications using ReactJS and TailwindCSS</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "C++", "JavaScript", "Python", "ReactJS", "Node.js", 
                      "Express.js", "MongoDB", "TailwindCSS", "Git"
                    ].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

