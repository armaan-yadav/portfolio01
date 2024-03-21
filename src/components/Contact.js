import React, { useContext } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import MailAndLocation from "./MailAndLocation";
import userContext from "../utils/userContext";
const Contact = () => {
  const { location, mail } = useContext(userContext);
  return (
    <div className="bg-neutral-50">
      <div id="contact" className="max-w-5xl mx-auto px-5 md:px-10 py-32">
        <h3 className="text-blue-600 font-bold text-lg text-center md:text-start">
          CONTACT
        </h3>
        <h1 className="font-bold text-2xl my-2 text-center md:text-start">
          Hit me up! 👇
        </h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-28 mt-14">
          <MailAndLocation
            title={"Location"}
            Icon={FaMapLocationDot}
            content={location}
            isMail={false}
          />
          <MailAndLocation
            title={"Mail"}
            Icon={FiMail}
            content={mail}
            isMail={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
