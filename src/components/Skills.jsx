import React from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
  DiGithubBadge,
  DiBootstrap,
} from "react-icons/di";
import Reveal from "./Reveal";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="text-blue-500" />,
      },
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
      {
        name: "Express Js",
        icon: <SiExpress className="text-white text-xl" />,
      },
      { name: "Django", icon: <BiLogoDjango className="text-green-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-[690px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8">
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various frontend and fullstack projects. Check them{" "}
          <a
            href="https://github.com/Devanshu-Augusty"
            className="underline"
            target="_blank"
          >
            there
          </a>
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
