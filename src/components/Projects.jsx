import React from 'react'
import foodz from '../assets/foodz.png'
import hr from "../assets/curve-hr.svg";

import ProjectCard from './ProjectCard';
import ProjectData from '../Data/ProjectData.js';




const Projects = () => {
  return (
    <div id="certs" className="mt-4 text-white">
    <h1 className="text-2xl font-bold">Projects</h1>
    <p className="font-light text-gray-400">Here are some of my Projects</p>

    {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        {
            ProjectData.map(({name, desc, github_link, deployed_link, img, Another_Ui}) => {
                return <ProjectCard key={name} name={name} desc={desc} github_link={github_link} deployed_link={deployed_link} img={img} Another_Ui={Another_Ui}  />
            })
        }
    </div>
    <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
</div>
  )
}

export default Projects
