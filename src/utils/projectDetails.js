import snapgram from "../images/projects/snapgram.png";
import yt from "../images/projects/yt.png";
import zomaggy from "../images/projects/zomaggy.png";
import { AiFillYoutube } from "react-icons/ai";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
export const stacks = ["React", "Tailwind CSS", "Redux Toolkit"];

export const projects = [
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
    overView:
      "Developed a Social media webiste where users can post photos with Appwrite as backend and authentication service.Using redux toolkit, implemented like and save functionality.Used React Query for better api handling and infinite scrolling. Search functionality where user's can search for posts,tags,captions and other users as well",
    webUrl: "https://snapgram-by-armaan.vercel.app/",
    gitHubCode: "https://github.com/armaan-yadav/Snapgram",
  },
  {
    title: "YOUTUBE UI CLONE",
    id: 4,
    image: yt,
    techStack: ["React Js", "Context API", "Tailwind CSS"],
    brand: AiFillYoutube,
    overView:
      "Provided live Youtube Data Api.Implemented search functionality and infinite scroll feature in comments and videos.",
    webUrl: "https://yt-clone-react-weld.vercel.app/",
    gitHubCode: "https://github.com/armaan-yadav/yt-clone-react",
  },
];
