import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experience = [
  {
    company: "Mile9",
    period: "May 2024 - Present",
    description: "Associate Software Engineer",
  },
  {
    company: "Mile9",
    period: "Oct 2023 - Apr 2024",
    description: "Front-end Developer Intern",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto"  id="experience">
      <h1 className="text-3xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div
        className="w-full space-y-8"
        initial="hidden"
        animate="visible"
      >
        {experience.map((exp, index) => (
          <Reveal width="100%">
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6
              rounded-lg shadow-md hover:shadow-xl transition-shadow
              duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {exp.company}
              </h2>
              <p className="text-gray-300">{exp.period}</p>
              <p className="text-gray-400 mt-4">{exp.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
