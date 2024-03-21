import { createContext } from "react";

const userContext = createContext({
  name: "Armaan Y",
  role: "Full Stack Developer",
  location: "Haryana, India",
  mail: "yadavarmaan10@gmail.com",
  gitHubProfile: "https://github.com/armaan-yadav",
  linkedInProfile: "https://www.linkedin.com/in/armaan-yadav-a58805213/",
});

export default userContext;
