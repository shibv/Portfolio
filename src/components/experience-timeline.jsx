import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
    {
      title: "Software Development Intern",
      company: "Shopflo",
      duration: "Dec 2024 - Present",
      type: "Internship",
      description: "Working on enhancing system performance and implementing efficient backend solutions."
    },
    {
      title: "Software Engineer Intern",
      company: "SuperBolter",
      duration: "May 2024 - Nov 2024",
      type: "Internship",
      description: "Optimized Ruby on Rails backend, reducing rendering time by 3% and improving overall performance. Contributed to scalable microservices architecture using Ruby on Rails, ReactJS, TailwindCSS, and MongoDB."
    },
    {
        title: "Freelance Developer",
        company: "Various Projects",
        duration: "2024 - Present",
        type: "Contract",
        description: "Worked on multiple freelance projects, creating custom web solutions and collaborative platforms."
      },
    {
      title: "Web Development Intern",
      company: "BasketHunt Pvt Ltd",
      duration: "Aug 2023 - Oct 2023",
      type: "Internship",
      description: "Developed and optimized the frontend of a full-stack web application using ReactJS and TailwindCSS. Enhanced mobile responsiveness for 5+ pages using Elementor on WordPress."
    }
  ];
  

export function ExperienceTimeline() {
  return (
    <div className="py-10">
        <h2 className="text-2xl font-extrabold text-white">Professional Journey</h2>
        <p className="font-light text-gray-400 mb-4">Here are some of my skills</p>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute -left-3 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
          
          {experiences.map((item, index) => (
            <div key={index} className={`mb-16 flex justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
              <div className={` w-ful md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-slate-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-slate-900 text-blue-300">
                      {item.type}
                    </span>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex items-center text-blue-400">
                    <Briefcase className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">{item.company}</span>
                  </div>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="absolute -left-5 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900"></div>
              </div>
          ))}
        </div>
      
    </div>
  )
}

