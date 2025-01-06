import React from "react";
import youtube from "../assets/youtube.png";
import netflix_ui from "../assets/netflix_ui.png";
import notes from "../assets/notes.png";
import payon from "../assets/payon.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    title: "PayOn",
    img: payon,
    description:
      "A MERN project that allow users to send money online to each other and check transaction history also.",
    links: {
      site: "https://pay-on.vercel.app/",
      github: "https://github.com/Devanshu-Augusty/PayOn",
    },
  },
  {
    title: "YouTube Clone",
    img: youtube,
    description:
      "YouTube clone with React.js and RapidAPI, featuring dynamic videos, responsive design, and search functionality.",
    links: {
      site: "https://youtube-clone-devanshu.netlify.app/",
      github: "https://github.com/Devanshu-Augusty/YouTube-Clone",
    },
  },
  {
    title: "Netflix UI Clone",
    img: netflix_ui,
    description:
      "A Netflix UI clone built using ReactJS and Tailwind CSS. Responsive design for various screen sizes.",
    links: {
      site: "https://netflix-clone-devanshu.vercel.app/",
      github: "https://github.com/Devanshu-Augusty/netflix-clone",
    },
  },
  {
    title: "Notes App",
    img: notes,
    description:
      "A Notes App that includes cool animations built using ReactJS, Tailwind CSS and framer-motion. Responsive design for various screen sizes.",
    links: {
      site: "https://notes-app-devanshu-augusty.netlify.app/",
      github: "https://github.com/Devanshu-Augusty/notes-app-with-animations",
    },
  },
];

const Projects = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="projects">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Projects</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-600 text-gray-200 px-4 py-2 rounded-lg hover:bg-slate-700
                transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-600 text-gray-200 px-4 py-2 rounded-lg hover:bg-slate-700
                  text-xl transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Projects;
