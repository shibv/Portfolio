import React from 'react'
import foodz from '../assets/foodz.png'
import hr from "../assets/curve-hr.svg";
import cryptzy from '../assets/cryptzzy.png'
import JapanPrediction  from '../assets/JapanPrediction .png'
import notes from "../assets/notes_app.png"
import Homyz from '../assets/Homyz.png'
import Hoomyz from '../assets/Hoomyz.png'
import ProjectCard from './ProjectCard';


// Project Data
const Projectdata = [
    {
        name: "Hoomyz - a Real Estate site",
        desc: "• Developed a full-stack responsive real estate website with secure authentication, empowering administrators to execute CRUD operations. • Implemented secure authentication utilizing JWT and bcrypt.js, augmented by Firebase authentication for enhanced security. • Developed the backend infrastructure using NodeJS and ExpressJS, with MongoDB as the database solution ",
        github_link : "https://github.com/shibv/Homyz",
        deployed_link : "https://hoomyzz.onrender.com/",
        img : Hoomyz,
    },
  {
      name : "Cryptzy",
      desc : "• Built a responsive Crypto Currency Tracker with real-time dynamic graphs using Chart.js for profit/loss (%) over the previous 24hrs, 6 months and market data. • Utilized CoinGecko API to dynamically fetch and display real-time data for over 80 cryptocurrencies. • TechStack consisted of HTML, CSS, JavaScript, React.js, Tailwind CSS, and Redux Toolkit. ",
      github_link : "https://github.com/shibv/cryptzy",
      deployed_link : "https://cryptzyi.vercel.app/",
      Another_Ui : "https://cryptzyy.vercel.app/", 
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
      name: " Real Estate Site",
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
            Projectdata.map(({name, desc, github_link, deployed_link, img, Another_Ui}) => {
                return <ProjectCard key={name} name={name} desc={desc} github_link={github_link} deployed_link={deployed_link} img={img} Another_Ui={Another_Ui}  />
            })
        }
    </div>
    <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
</div>
  )
}

export default Projects
