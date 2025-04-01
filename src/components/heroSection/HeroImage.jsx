import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="relative self-end h-full w-full items-center justify-center">
      <div className=" h-full w-full">
       <motion.img
  src="/images/dpk.png"
  alt="Durga Pavan Kalyan Kodi"
  className="h-[600px] w-auto drop-shadow-2xl rounded-xl"
  initial={{ scale: 0.9 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.5 }}
/>


        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange opacity-70 animate-[spin_20s_linear_infinite]" />
        </div>
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] blur-lg min-h-[600px] w-auto text-orange opacity-70 animate-[spin_20s_linear_infinite]" />
        </div>
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-70 animate-[spin_20s_linear_infinite]" />
        </div>
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-70 blur-lg animate-[spin_20s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
