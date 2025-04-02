import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeImage = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className="relative flex justify-center"
    >
      {/* Image Container */}
      <div className="relative h-[500px] w-[300px] sm:h-[550px] sm:w-[350px] rounded-[80px] overflow-hidden shadow-2xl border-4 border-gray-800">
        <img
          src="/images/about-me.jpg" // Ensure the image is in the public folder
          alt="About Me"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Background Shape */}
      <div className="absolute h-[520px] w-[260px] sm:h-[570px] sm:w-[310px] bg-orange bottom-[-20px] left-[-20px] rounded-bl-[100px] rounded-tr-[100px] rounded-br-[30px] rounded-tl-[30px] -z-10 shadow-xl"></div>

    
    </motion.div>
  );
};

export default AboutMeImage;
