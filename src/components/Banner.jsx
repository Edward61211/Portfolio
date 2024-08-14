import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { faded } from "../Faded.jsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Profile from "../assets/pfp.jpg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Banner = () => {
  const MySwal = withReactContent(Swal);
  const handleEmailClick = () => {
    MySwal.fire({
      title: "My Email",
      text: "a0966219696@gmail.com",
      icon: "success",
    });
  };
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-8">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            {/* name */}
            <motion.h1
              variants={faded("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[32px] md:text-[64px] lg:text-[96px] font-bold md:mt-20 whitespace-nowrap"
            >
              Edward <span>Hung</span>
            </motion.h1>
            {/* title */}
            <motion.div
              variants={faded("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 mt-4 md:mt-12 text-[16px] md:text-[24px] lg:text-[32px] font-primary"
            >
              <span className="text-slate-900 mr-1 font-bold hidden md:inline">
                I am a{" "}
              </span>
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Web Developer",
                  2000,
                  "Self-taught Dev",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-[1.875em] md:text-3xl font-bold text-black"
              />
            </motion.div>
            {/* intro */}
            <motion.p
              variants={faded("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="max-w-lg mx-auto lg:mx-0 "
            >
              Hello! I’m a self-taught programmer who’s just starting out on my
              journey in web development. As a self-motivated learner, I
              dedicate time each day to coding and honing my skills. I’m
              passionate about staying up-to-date with the latest technologies
              and trends in the industry, and I’m excited to use my skill to
              create cool and user-friendly applications. Feel free to look
              around, where you can explore my projects and see what I’m all
              about!
            </motion.p>
            {/* button */}
            <motion.div
              variants={faded("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="z-[99] mb-4 mt-5"
            >
              <button className="btn btn-lg z-[99] pointer-events-auto relative">
                Contact me
              </button>
              <a href="#" className="text-gradient btn-link ml-4">
                My Portfolio
              </a>
            </motion.div>
            {/* socials  */}
            <motion.div
              variants={faded("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-6 text-[20px] max-w-max mx-auto lg:mx-0 z-30 relative"
            >
              <a
                href="https://github.com/Edward61211"
                target="_blank"
                className="cursor-pointer"
              >
                <FaGithub />
              </a>
              <a
                className="cursor-pointer"
                href="https://www.linkedin.com/in/edward-hung-46b7802b8/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a onClick={handleEmailClick} className="cursor-pointer">
                <SiGmail />
              </a>
            </motion.div>
          </div>
          {/* image  */}
          <motion.div
            variants={faded("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src={Profile}
              alt="profile"
              className="rounded-3xl w-96 h-72 relative z-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
