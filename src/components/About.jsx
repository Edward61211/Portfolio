import React from "react";
import { motion } from "framer-motion";
import { faded } from "../Faded.jsx";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import bootstrap from "../assets/bootstrap.svg";
import sass from "../assets/sass.png";

const About = () => {
  const technologies = [
    {
      name: "HTML",
      icon: html,
      description: "Markup language for structuring web content.",
    },
    {
      name: "CSS",
      icon: css,
      description: "Styling language for designing web pages.",
    },
    {
      name: "Tailwind",
      icon: tailwind,
      description: "Utility-first CSS framework for rapid UI development.",
    },
    {
      name: "React",
      icon: react,
      description: "JavaScript library for building user interfaces.",
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
      description: "Popular CSS framework for responsive design.",
    },
    {
      name: "Sass",
      icon: sass,
      description: "CSS preprocessor for more efficient styling.",
    },
  ];

  const directions = ["up", "down", "left", "right"];

  return (
    <section className=" text-white py-16 mt-16">
      <div className="container bg-gray-900 rounded-2xl mx-auto px-6 py-6 ">
        <motion.div
          variants={faded("up", 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center" id="about">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Bringing your digital ideas to life with expertise in web and app
            development, creating efficient, dynamic, and user-friendly
            solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={faded(directions[index % directions.length], 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 mb-4 mx-auto text-green-400"
                />
                <h3 className="text-xl text-green-400 font-semibold mb-2 text-center">
                  {tech.name}
                </h3>
                <p className="text-gray-400 text-center">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
