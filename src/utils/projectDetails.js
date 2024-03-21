import snapgram from "../images/projects/snapgram.png";
import yt from "../images/projects/yt.png";
import zomaggy from "../images/projects/zomaggy.png";
import { BiSolidMoviePlay } from "react-icons/bi";
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
      "Ecommerce web app organized with Enabled account creation, updates and deletions via Firebase, Increased product feed engagement 30% and reduced load time 10% with efficient infinite scroll and Implemented multi-category filtering, top-rated sorting, and price sorting using JavaScript.",
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
      "Food Gear project is online food ordering Platform.Increased user engagement by 15% through dynamic veg filter.Designed cart to enhance single-restaurant checkout flow.Implemented Memoization to achieve 50% reduction in API calls using Redux Toolkit.",
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
      "Proviede live Youtube Data Api.Implemented search functionality and infinite scroll feature in comments and videos.",
    webUrl: "https://yt-clone-react-weld.vercel.app/",
    gitHubCode: "https://github.com/armaan-yadav/yt-clone-react",
  },
];
