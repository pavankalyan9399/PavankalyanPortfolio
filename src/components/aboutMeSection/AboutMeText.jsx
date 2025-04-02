import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";



const AboutMeText = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center"
    >
      {/* About Me Heading */}
      
      <motion.div
  variants={fadeIn("right", 0.8)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.7 }}
  className="flex flex-col items-center text-center" // Centering everything
>
 {/* About Me Heading */}
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow ">
  About Me
</h2>

</motion.div>

<p className="text-2xl mb-7">
  <span className="text-cyan font-semibold"></span>
  <br />
  <br />
  <span className="text-orange-400" >
    Hello, I'm <strong>Durga Pavan Kalyan Kodi</strong>. <br /><br />
    <strong>Building Scalable & Intelligent Digital Solutions</strong> <br />
    Passionate about building high-performance applications with <strong>Spring Boot & React</strong>,  
transforming complex challenges into seamless, user-centric solutions.

  </span>
</p>



      {/* Personal Details */}
<div className="mb-5">
  <h3 className="text-2xl font-bold text-gray-800 mb-3">Personal Details</h3>
  <ul className="space-y-2 text-lg">
  <li className="text-gray-700">
      <span className="font-semibold text-yellow-500">Profession:</span> Student
    </li>

    <li className="text-gray-700">
      <span className="font-semibold text-purple-500">Age:</span> 21
    </li>
    <li className="text-gray-700">
      <span className="font-semibold text-red-500">Gender:</span> Male
    </li>
    
    <li className="text-gray-700">
      <span className="font-semibold text-green-500">Languages:</span> English, Hindi, Telugu
    </li>
    <li className="text-gray-700">
      <span className="font-semibold text-cyan-500">Freelance:</span> Available
    </li>
    <li className="text-gray-700">
      <span className="font-semibold text-blue-500">Location:</span> Jangareddygudem, Andhra Pradesh, India
    </li>
  </ul>
</div>

      <div className="flex gap-4">
        <button className="border-2 border-orange rounded-full py-2 px-6 text-lg text-white hover:bg-orange hover:text-white transition-all duration-500">
          <a
            href="https://drive.google.com/file/d/1z6-h4QssXWYqvDXYBmPfslpoWs7P7wA2/view?usp=sharing" // Update with your CV path
            className="flex items-center gap-2"
          >
            Download CV
          </a>
        </button>
        <button className="border-2 border-orange rounded-full py-2 px-6 text-lg text-white hover:bg-orange hover:text-white transition-all duration-500">
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
        </button>
      </div>
    </motion.div>
  );
};

export default AboutMeText;
