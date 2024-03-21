import React, { useContext } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import userContext from "../utils/userContext";
const LinkedIn = () => {
  const { linkedInProfile } = useContext(userContext);
  return (
    <a href={linkedInProfile} rel="external noreferrer" target="_blank">
      <AiOutlineLinkedin />
    </a>
  );
};

export default LinkedIn;
