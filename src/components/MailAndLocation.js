import React from "react";

const MailAndLocation = ({ title, Icon, content, isMail }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3">
      <div>
        <Icon className="text-xl p-4 text-blue-600 h-16 w-16 bg-white shadow-xl rounded-full" />
      </div>
      <div className="text-lg font-medium">
        <h1 className="font-bold text-lg text-center md:text-start">{title}</h1>
        {isMail === true ? (
          <a href={"mailto:" + content} target="_blank" rel="noreferrer">
            <h1 className=" hover:text-blue-600 text-gray-600">{content}</h1>
          </a>
        ) : (
          <h1 className="text-gray-600">{content}</h1>
        )}
      </div>
    </div>
  );
};

export default MailAndLocation;
