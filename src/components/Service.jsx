import React from "react";
import { motion } from "framer-motion";
import { faded } from "../Faded.jsx";
import { BsArrowUpRight } from "react-icons/bs";

const Services = [
  {
    name: "Shopping Cart",
    description:
      "A basic e-commerce website with a Home Page, Login Page, and Shopping Cart functionality. Built with HTML, Tailwind CSS, Daisy UI, and vanilla JavaScript.",
    link: "learn more",
    redirect: "https://edward61211.github.io/shoppingCart-version2.0/",
  },
  {
    name: "Weather App",
    description:
      "A simple and intuitive weather application built with React that allows users to check current weather conditions for cities around the world.",
    link: "learn more",
    redirect: "https://edward61211.github.io/Monica-Weather-App-Clone/",
  },
  {
    name: "Color Picker Game",
    description:
      "This game is built using React and Tailwind. Pick the correct color box based on varying opacity. The game dynamically generates random colors, the difficulty increases based on level.",
    link: "learn more",
    redirect: "https://edward61211.github.io/Color-game-react/",
  },
  {
    name: "Netflix Clone",
    description:
      "This is a Netflix clone frontend project built with React, React Router, Tailwind, and Vite. The project fetches data from the TMDB API and incorporates YouTube player.",
    link: "learn more",
    redirect: "https://edward61211.github.io/Netflix-clone-2.0/",
  },
];
const Service = () => {
  return (
    <section className="section mt-48" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text an img */}
          <div className="flex-1 lg:bg-services bg-no-repeat bg-center bg-contain lg:bg-bottom mb-12 lg:mb-0 z-30">
            <div className=" ml-0">
              <h2 className="h2 text-accent mb-6">My Projects.</h2>
              <h3 className="h3 max-w-[405px] text-black">
                Creativity Never Stops More to come.
              </h3>

              <motion.button
                variants={faded("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="btn btn-sm z-[90] relative pointer-events-auto"
              >
                See my work
              </motion.button>
            </div>
          </div>
          {/* service */}
          <div className="flex-1">
            {/* service list */}
            <div>
              {Services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-black/50 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <motion.div
                      variants={faded("right", 0.6)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                      className="max-w-[476px]"
                    >
                      <h4 className="text-[20px] text-gradient z-50 relative cursor-pointer tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary md:leading-tight text-black/60 leading-[1.05rem]">
                        {description}
                      </p>
                    </motion.div>
                    {/* links */}
                    <motion.div
                      variants={faded("up", 0.6)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                      className="flex flex-col md:items-end z-[90] relative"
                    >
                      <a
                        href={service.redirect}
                        target="_blank"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={service.redirect}
                        target="_blank"
                        className="text-gradient text-sm"
                      >
                        {link}
                      </a>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
