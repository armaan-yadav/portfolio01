import snapgram from "../images/projects/snapgram.png";
import yt from "../images/projects/yt.png";
import zomaggy from "../images/projects/zomaggy.png";
import codepencil from "../images/projects/codepencil.png";
import { AiFillYoutube } from "react-icons/ai";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
export const stacks = ["React", "Tailwind CSS", "Redux Toolkit"];

export const projects = [
  {
    title: "CodePencil",
    id: 4,
    image: codepencil,  
    techStack: [
      ...stacks,
      "Js",
      "Firebase",
      "Node Js",
      "Daisy UI",
      "Framer Motion",
    ],
    brand: FaCode,
    overView: `Developed an online code editor where users can create profile , set avatar, practice their frontend skills and save them. Currently 15+ active users`,
    webUrl: "https://codepencil-swart.vercel.app/",
    gitHubCode: "https://github.com/armaan-yadav/codepencil",
  },
  {
    title: "Zomaggy",
    id: 1,
    image: zomaggy,
    techStack: [...stacks, "Js", "Firebase"],
    brand: FaOpencart,
    overView:
      "A food delivery webiste with real time fethcing of user's location and restaurants based on that location.Integrated Firebase for authentication.Implemented veg-nonVeg filters in restuarants menu.Using Redux toolkit implemented the cart feature where user can add,update,delete and read the items selected",
    webUrl: "https://zomaggy.netlify.app/",
    gitHubCode: "https://github.com/armaan-yadav/Zomaggy",
  },
  {
    title: "Snapgram",
    id: 2,
    image: snapgram,
    techStack: [...stacks, "Appwrite", "React Query", "Ts", "ShadCn"],
    brand: IoFastFoodSharp,
    overView: `Developed a social media webapp where users can drag and drop photos and upload them with Appwrite as a backend service`,
    webUrl: "https://snapgram-by-armaan.vercel.app/",
    gitHubCode: "https://github.com/armaan-yadav/Snapgram",
  },
  {
    title: "YOUTUBE UI CLONE",
    id: 3,
    image: yt,
    techStack: ["React Js", "Context API", "Tailwind CSS"],
    brand: AiFillYoutube,
    overView:
      "Provided live Youtube Data Api.Implemented search functionality and infinite scroll feature in comments and videos.",
    webUrl: "https://yt-clone-react-weld.vercel.app/",
    gitHubCode: "https://github.com/armaan-yadav/yt-clone-react",
  },
];
