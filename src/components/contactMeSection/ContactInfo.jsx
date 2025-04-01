import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="2200030410cseh@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+919390778448" Image={FiPhone} />
      <SingleInfo text="Andhra Pradesh, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
