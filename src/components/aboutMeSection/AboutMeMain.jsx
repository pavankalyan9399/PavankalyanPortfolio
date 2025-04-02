import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <section id="about" className="py-16 px-6 sm:px-12 lg:px-20 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* About Me Text */}
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 text-white"
          >
            <AboutMeText />
          </motion.div>

          {/* About Me Image */}
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex-1 flex justify-center"
          >
            <AboutMeImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeMain;
