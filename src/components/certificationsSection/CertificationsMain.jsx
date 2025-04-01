import React from "react";
import CertificationsText from "./CertificationsText";
import AllCertifications from "./AllCertifications";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const CertificationsMain = () => {
  return (
    <section id="certifications" className="py-16 px-6 sm:px-8 lg:px-10 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Certifications Header */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-10"
        >
          <CertificationsText />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <AllCertifications />
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsMain;
