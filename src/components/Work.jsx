import React from "react";
import { motion } from "framer-motion";
import { faded } from "../Faded.jsx";

const Work = () => {
  return (
    <section className="section md:mt-36 mt-0 md:ml-36 ml-0" id="work">
      <div className="container mx-auto">
        <div>
          <div className="flex flex-col gap-y-12 md:gap-x-20 mb-10 md:mb-0 md:flex-row">
            {/* text */}
            <motion.div
              variants={faded("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.h2
                variants={faded("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="h2 leading-tight text-accent"
              >
                My Latest <br />
                Work.
              </motion.h2>
              <motion.p
                variants={faded("right", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="max-w-sm mb-12 text-black/70"
              >
                A local cinema website renovation involves revamping the online
                platform to enhance user experience, streamline ticket booking,
                and showcase the latest movies. The redesign featureing a
                modern, responsive layout optimized for both desktop and mobile
                devices, with intuitive navigation, vibrant visuals, and a
                seamless booking process.
              </motion.p>
              <motion.button
                variants={faded("right", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="btn btn-sm z-[90] absolute pointer-events-auto"
              >
                View all projects
              </motion.button>
            </motion.div>
            {/* image */}
            <motion.div
              variants={faded("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative mt-4 overflow-hidden rounded-xl"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 transition-all duration-300 h-full w-full absolute z-50"></div>
              {/* placeholder img  */}
              {/* img */}
              <img
                src="/chinchin.jpeg"
                className="object-cover group-hover:scale-150 transition-all duration-500 w-[520px] h-[455px]"
                alt="i3"
              />
              {/* pretitle */}
              <div className="ml-2 text-black absolute -bottom-full z-50 left-12 group-hover:bottom-12 group-hover:text-gradient transition-all duration-500">
                Website renovation
              </div>
              {/* title */}
              <div className="ml-2 text-black absolute -bottom-full z-50 left-12 group-hover:bottom-4 group-hover:text-white transition-all duration-700">
                <span>Chin Chin Cinema</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
