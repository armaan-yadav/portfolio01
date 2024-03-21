import React, { useContext } from "react";
import { AiFillGithub } from "react-icons/ai";
import userContext from "../utils/userContext";
const GitHub = () => {
  const { gitHubProfile } = useContext(userContext);
  return (
    <a href={gitHubProfile} rel="external noreferrer" target="_blank">
      <AiFillGithub />
    </a>
  );
};

export default GitHub;
