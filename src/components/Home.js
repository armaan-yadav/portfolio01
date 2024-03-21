import React from "react";
import profile from "../images/profile1.jpg";
import wavingHand from "../images/wavingHand.svg";
import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import { BiLinkExternal } from "react-icons/bi";
import { RESUME_LINK, TECH_STACK_LOGOS } from "../utils/constants";

const Home = () => {
  return (
    <div id="home" className="bg-neutral-50 ">
      <div className="max-w-5xl px-10 pt-28 lg:pt-48 pb-12 m-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-24">
          <div className="max-w-md md:max-w-lg text-center lg:text-start">
            <h1 className="font-bold text-zinc-700 select-none  text-4xl  md:text-6xl my-5">
              Aspiring Full Stack
              <blockquote className="flex justify-center lg:justify-normal items-center gap-1">
                Developer
                <img
                  className="md:h-16 h-10 animate-[wave_2s_ease-in-out_infinite]"
                  alt="hand"
                  src={wavingHand}
                />
              </blockquote>
            </h1>
            <p className="text-lg text-gray-700">
              Hi, I'm Armaan Yadav. A passionate Full Stack Developer based from
              Haryana, India📍
            </p>
            <div className="flex justify-center lg:justify-normal gap-14 mt-9">
              <div className="text-4xl hover:text-blue-600 cursor-pointer">
                <GitHub />
              </div>
              <div className="text-4xl hover:text-blue-600 cursor-pointer">
                <LinkedIn />
              </div>
            </div>
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center tracking-wider items-center lg:justify-normal mt-12  gap-3 text-xl text-gray-800 font-semibold hover:text-cyan-700"
            >
              Resume
              <BiLinkExternal className="animate-bounce text-2xl text-cyan-700" />
            </a>
          </div>
          <div className="min-w-fit lg:self-baseline self-center">
            <img
              className="object-contain rounded-tl-[125px] rounded-br-[125px] h-[295px] w-[225px] md:scale-110 duration-500 ease-out bg-gray-300 shadow-[0_0_20px_3px] shadow-zinc-300"
              alt="profile"
              src={profile}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-7 mt-12 lg:mt-28">
          <h1 className="font-semibold text-2xl underline lg:no-underline text-center w-full">
            Technologies I know
          </h1>
          <ul className="grid gap-4 grid-cols-4 lg:grid-cols-11  w-full">
            {TECH_STACK_LOGOS.map((stack, i) => (
              <li key={i} className="bg-white shadow-xl rounded-full p-3 w-fit">
                <img
                  className="h-9 hover:rotate-[360deg] duration-500"
                  alt={stack.name}
                  src={stack.logo}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
