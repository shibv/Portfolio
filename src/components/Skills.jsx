import React from 'react'
import SkillCard from './SkillCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import kvm from "../assets/skills/kvm.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import mikrotik from "../assets/skills/mikrotik.svg"
import kubernetes from "../assets/skills/kubernetes.svg"
import ansible from "../assets/skills/ansible.svg"
import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"
import cisco from "../assets/skills/cisco.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"

import hr from "../assets/curve-hr.svg"


const SkillList = [
  {
    name : "bash",
    img: bash,
  },
  {
    name : "javascript",
    img: javascript,
  },
 
  {
    name : "kvm",
    img: kvm,
  },
 
  {
    name : "linux",
    img: linux,
  },
  {
    name : "reactIcon",
    img: reactIcon,
  },
  {
    name : "tailwind",
    img: tailwind,
  },
  {
    name : "mikrotik",
    img: mikrotik,
  },
  {
    name : "kubernetes",
    img: kubernetes,
  },
 
  {
    name:"ansible",
    img: ansible,
  },
  {
    name:"windows",
    img: windows,
  },
  {
    name:"react",
    img: react,
  },
  {
    name:"cisco",
    img: cisco,
  },
  {
    name:"docker",
    img: docker,
  },

  {
    name:"git",
    img: git,
  },
  {
    name:"express",
    img: express,
  },
  {
    name:"gitlab",
    img: gitlab,
  },
  {
    name:"python",
    img: python,
  },

 
 
]

export const Skills = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div id="skills" className="mt-4 text-white">
    <h1 className="text-2xl font-bold">Skills</h1>
    <p className="font-light text-gray-400">Here are some of my skills</p>

    <div className="mt-4">
        <Slider {...settings}>
        {
          SkillList.map((skill) => {
            return <SkillCard key={skill.name} name={skill.name} img={skill.img} />
          })
        }
        </Slider>
    </div>
    <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
</div>
  )
}
