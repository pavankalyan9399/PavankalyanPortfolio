import React from "react";
import SingleCertification from "./SingleCertification";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const certifications = [
  {
    badge: "/images/azure-badge.png",
    link: "https://learn.microsoft.com/en-us/users/kodidurgapavankalyan-3920/credentials/2d7581f9221beedf",
  },
  {
    badge: "/images/redhat-badge.png",
    link: "https://www.credly.com/badges/4f6ce449-a1fe-4c74-adbb-4ba0affc5344/public_url",
  },
  {
    badge: "/images/oracle-badge.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=848B47FF0C6EF680D000E3A9AAB7059648CC4727896A1317B9DABADA8D6EF196",
  },
  {
    badge: "/images/automation-badge.png",
    link: "https://certificates.automationanywhere.com/fdcd47aa-f1d1-4b51-87dc-4b4a8cf78c37",
  },
  {
    badge: "/images/salesforce-badge.png",
    link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=R6NSYmPrE2cIAG5YujMxT0vYu2uxOkxq8eUQmpoLNZ0cg7a9BUfjaoBlEEKhbeiB",
  },
  {
    badge: "/images/oracle-genai-badge.png",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=0FA1DF20D877692BBACC7A69A6BFDBDE68E315A65B19C9F0A6080FF7CA350B18",
  },
  {
    badge: "/images/multicloud-badge.png",
    link: "https://www.credly.com/badges/6806de24-27c7-4919-a80a-7c9f876a3dfa/linked_in_profile",
  },
  {
    badge: "/images/virtual-internship-badge.png",
    link: "https://drive.google.com/file/d/1-40wHj9rC6Ukem9oMyYSELJB0dOCmz0U/view?usp=sharing",
  },
  {
    badge: "/images/nptel-badge.png",
    link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs53/Course/NPTEL23CS53S4491147804028316.jpg",
  },
];

const AllCertifications = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-6 bg-red text-white">
      {certifications.map((certification, index) => (
        <motion.div
          key={index}
          className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
          variants={fadeIn("up", `0.${index + 1}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SingleCertification certification={certification} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllCertifications;
