import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] flex w-72 justify-center items-center">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card 
                 transition-all duration-3 hover:scale-105"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#151030] rounded-[20px] m-[2px] min-h-[280px] 
                   flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="ml-2">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px] ml-2"
      >
        I'm a passionate software developer with expertise in TypeScript and
        JavaScript, specializing in frameworks like React, Node.js, and Tailwind
        CSS. With experience in full-stack development, I focus on building
        efficient, scalable, and user-friendly solutions. I’m a quick learner
        who thrives on solving real-world problems, whether it's{" "}
        <strong className="text-white">
          Crafting dynamic web applications using AI solutions{" "}
        </strong>{" "}
        or diving into cutting-edge topics like quantum computing and rocket
        physics. Let’s collaborate to turn your ideas into reality!
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
