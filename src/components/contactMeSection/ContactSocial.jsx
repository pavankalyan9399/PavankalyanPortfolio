import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/durgapavankalyankodi/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/pavankalyan9399" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/pavan_kalyan_0fficial/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
