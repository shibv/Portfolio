import React from "react";

function ProjectCard(props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="relative h-full  bg-slate-800 rounded-3xl p-px before:absolute before:w-60 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-[200px] after:h-96 after:-left-48 after:-top-48 after:bg-indigo-100 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden"
    >
      <div className="relative h-full bg-slate-900 p-4 pb-6 rounded-[inherit] z-20 overflow-hidden">
        <div
          className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
          aria-hidden="true"
        >
          <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
        </div>
        <div className="flex flex-col h-full items-center text-center ">
          <div className="relative inline-flex mb-2">
            <div
              className="w-[70%] h-[60%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
              aria-hidden="true"
            ></div>
            <img
              className="inline-flex rounded-md hover:scale-105 transition-all duration-500 cursor-pointer "
              src={props.img}
              width="300"
              height="200"
              alt="Card 01"
            />
          </div>

          <div className="grow mb-5">
            <h2 className="text-xl text-slate-200 font-bold mb-">
              {props.name}
            </h2>
            <p className="text-sm text-slate-500">{props.desc}</p>
          </div>

          <div className="flex gap-4">
            <a
              href={props.github_link}
              className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
            >
              <span>Github</span>
            </a>
            {
              props.deployed_link && (
                <a
                href={props.deployed_link}
                className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
              >
                <span>Link</span>
              </a>
              )
            }
           
            {
              props.Another_Ui && (
                <a
              href={props.Another_Ui}
              className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
            >
              <span>Another Ui</span>
            </a>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
