import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      {/* <motion.img
  src="/images/d0pk.png"
  alt="Durga Pavan Kalyan Kodi"
  className="h-[800px] w-auto drop-shadow-2xl rounded-xl"
  initial={{ scale: 0.9 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.5 }}
/> */}


{/* <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
  <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
</div> */}

    </motion.div>
  );
};

export default HeroPic;
