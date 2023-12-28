import React from 'react'
import foodz from '../assets/foodz.png'
import hr from "../assets/curve-hr.svg";
import cryptzy from '../assets/cryptzy.png'
import JapanPrediction  from '../assets/JapanPrediction .png'
import notes from "../assets/notes_app.png"
import Homyz from '../assets/Homyz.png'
import ProjectCard from './ProjectCard';


// Project Data
const Projectdata = [
  {
      name : "Cryptzy",
      desc : "Crypto Currency Tracker web application. Users can now learn about the profit (%) and loss (%) in the preceding 24 hours, as well as the market cap and pricing. Utilising CoinGecko API data, we created a completely responsive 80+ cryptocurrency.  ",
      github_link : "https://github.com/shibv/cryptzy",
      deployed_link : "https://cryptzyi.vercel.app/",
      img : cryptzy
  },
  {
      name : "FutureValuEstate -JAPAN Real Estate Valuation",
      desc : "Developed a web app for real estate investment analysis in Japanese prefectures, utilizing machine learning models for accurate plot price predictions till 2030 and valuable insights and visualization.  ",
      github_link : "https://github.com/shibv/JAPAN-Real-Estate-Valuation",
      deployed_link : "https://jp-real-estate-valuation.streamlit.app/",
      img : JapanPrediction
  },
  {
      name : "Foodz - Responsive Restaurant Website",
      desc : "Developed a fully responsive restaurant website using React and Tailwind CSS. Implemented Dark and Light mode for the website. Incorporated animation on scroll for a better user experience.  ",
      github_link : "https://github.com/shibv/CSSPractice/tree/main/css",
      deployed_link : "https://css-practice-alpha.vercel.app/",
      img : foodz
  },
  {
      name :"Notes App",
      desc : "Developed a note taking application using HTML, CSS , Javascript and Reactjs for learning purpose. ",
      github_link:"https://github.com/shibv/NotesSite",
      deployed_link: "https://vercel.com/shivs-projects-9b5e92f6/notes-site",
      img : notes,

  },
  {
      name: "Homyz - Real Estate Site",
      desc: "Developed a fully responsive real estate website using HTML, CSS , Javascript and Reactjs. ",
      github_link : "https://github.com/shibv/RealEstateSite/",
      deployed_link : "https://real-estate-site-pink.vercel.app/",
      img : Homyz,
  }
 
]


const Projects = () => {
  return (
    <div id="certs" className="mt-4 text-white">
    <h1 className="text-2xl font-bold">Projects</h1>
    <p className="font-light text-gray-400">Here are some of my Projects</p>

    {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        {
            Projectdata.map(({name, desc, github_link, deployed_link, img}) => {
                return <ProjectCard name={name} desc={desc} github_link={github_link} deployed_link={deployed_link} img={img}  />
            })
        }
    </div>
    <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
</div>
  )
}

export default Projects
