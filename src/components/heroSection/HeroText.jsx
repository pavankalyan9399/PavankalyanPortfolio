import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import SingleContactSocial from "./SingleContactSoci"; // Ensure this component exists

const skills = ["Full Stack Developer", "Programmer", "AI & ML Enthusiast"];

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = isDeleting ? 50 : 150;

  useEffect(() => {
    const handleTyping = () => {
      setCurrentSkill((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : skills[index].slice(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

      if (!isDeleting && charIndex === skills[index].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % skills.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen w-full px-12 bg-gray-900">
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 text-left space-y-4 mt-[-150px]">
        <motion.button
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
        >
          {/* 🚀 Ready to Innovate */}
        </motion.button>

        <motion.h1
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow mb-6"
        >
          PAVAN KALYAN
        </motion.h1>

        <motion.h2
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-2xl text-white"
        >
          {currentSkill}|
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-lg text-gray-300"
        >
          Architecting next-generation applications with MERN Stack & Spring Boot, transforming complex challenges into seamless, scalable, and intuitive digital experiences through innovation and precision.
        </motion.p>

        {/* Buttons (Animation: Left to Right) */}
        <div className="flex gap-4 mt-4">
          <motion.button
            variants={fadeIn("left", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="border-2 border-orange rounded-full py-2 px-6 text-lg text-white hover:bg-orange hover:text-white transition-all duration-500"
          >
            <a
              href="https://drive.google.com/file/d/1z6-h4QssXWYqvDXYBmPfslpoWs7P7wA2/view?usp=sharing"
              className="flex items-center gap-2"
            >
              Download CV
            </a>
          </motion.button>
          <motion.button
            variants={fadeIn("left", 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="border-2 border-orange rounded-full py-2 px-6 text-lg text-white hover:bg-orange hover:text-white transition-all duration-500"
          >
                   <Link
  to="projects"
  spy={true}
  smooth={true}
  duration={500}
  offset={-100} // Adjust based on your layout
  className="flex items-center gap-2 cursor-pointer"
>
  View Projects
</Link>
          </motion.button>
        </div>

        {/* Social Media Icons (Animation: Bottom to Top) */}
        <div className="flex gap-4 mt-4">
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <SingleContactSocial
              link="https://www.linkedin.com/in/durgapavankalyankodi/"
              Icon={FaLinkedinIn}
              className="text-lg" // Reduced icon size
            />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <SingleContactSocial
              link="https://github.com/pavankalyan9399"
              Icon={FiGithub}
              className="text-lg" // Reduced icon size
            />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 1.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <SingleContactSocial
              link="https://www.instagram.com/pavan_kalyan_0fficial/"
              Icon={FaInstagram}
              className="text-lg" // Reduced icon size
            />
          </motion.div>
        </div>
      </div>

      {/* Right Side - Image */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="w-full md:w-1/2 flex justify-center md:justify-end items-start"
      >
        <img
          src="/images/dpk.png"
          alt="Durga Pavan Kalyan"
          className="max-h-[900vh] w-auto object-contain self-start mt-[-400px] mr-[-100px]"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
