import React from "react";
import chatgpt from "../../assets/chatgpt.png";

const ProfileCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col text-center m-4">
      <div className="h-full w-72 p-10 border-2 rounded-lg m-3">
        <img
          src={img}
          className="border-2 border-gray-500 rounded-md top-0 h-44 w-44 flex justify-center text-center ml-3"
        />
        <h1 className="mt-6 text-2xl font-bold tracking-wider">{title}</h1>
        <hr className="m-2" />
        <p className="text-lg font-sans tracking-wide mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
