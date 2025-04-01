import { motion } from "framer-motion";

const ProjectsText = () => {
  return (
    <motion.div
      className="text-center px-6"
      
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        My Projects
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        A showcase of my hands-on experience in software development, AI, and full-stack projects. Each project reflects my expertise in solving real-world challenges.
      </p>
    </motion.div>
  );
};

export default ProjectsText;
