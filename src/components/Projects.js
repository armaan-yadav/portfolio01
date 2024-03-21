import React from "react";

const Projects = ({
  overview,
  title,
  image,
  techStack,
  webUrl,
  Brand,
  code,
  demo,
  githubCode,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 px-5 items-center bg-white py-6 rounded-lg shadow-[10px_10px_60px_-15px_rgba(0,0,0,0.3)]">
      <a
        className="lg:w-1/2"
        href={webUrl}
        rel="external noreferrer"
        target="_blank"
      >
        <img
          className="rounded-md shadow-[0_0_10px_1px_rgba(0,0,0,0.3)]"
          alt="projects"
          src={image}
        />
      </a>
      <div className="lg:w-1/2">
        <h1 className="font-bold justify-center items-center mb-3 flex gap-3">
          {title} <Brand className="text-2xl text-cyan-700 animate-pulse" />
        </h1>
        <p className="font-medium text-center lg:text-start text-gray-500">
          {overview}
        </p>
        <ul className="flex justify-center my-4 flex-wrap gap-5">
          {techStack.map((stack, i) => (
            <li
              key={i}
              className="font-semibold bg-white rounded-lg shadow-xl px-3 py-2"
            >
              {stack}
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-center gap-8 text-lg">
          <a href={githubCode} rel="external noreferrer" target="_blank">
            <h1 className="flex justify-center items-center  duration-200 hover:text-cyan-700 gap-3 mt-5 font-semibold">
              Code
              <span className="text-2xl text-cyan-700 animate-bounce">
                {code}
              </span>
            </h1>
          </a>
          <a href={webUrl} rel="external noreferrer" target="_blank">
            <h1 className="flex justify-center items-center duration-200 hover:text-fuchsia-800  gap-3 mt-5 font-semibold">
              Live Demo
              <span className="text-2xl text-fuchsia-800 animate-bounce">
                {demo}
              </span>
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
