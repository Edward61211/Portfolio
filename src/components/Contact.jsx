import React from "react";
import { motion } from "framer-motion";
import { faded } from "../Faded.jsx";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={faded("right", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h2 className="text-accent font-medium mb-2 text-3xl uppercase tracking-wide">
                Get in touch
              </h2>
              <h2 className="text-[45px] text-black/65 lg:text-[70px] leading-none mb-12">
                Let's work
                <br />
                together
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={faded("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border-[3px] border-black rounded-2xl flex flex-col gap-y-6 p-6 pb-10 items-start"
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white z-50 relative focus:border-accent transition-all"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white z-50 relative focus:border-accent transition-all"
              placeholder="Your Email"
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white z-50 relative focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
            ></textarea>
            <motion.button
              variants={faded("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="btn btn-lg z-[90] pointer-events-auto relative"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
