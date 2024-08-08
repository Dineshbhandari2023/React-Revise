import React from "react";
import ProfileCard from "./ProfileCard";
import chatgpt from "../../assets/chatgpt.png";
import alexa from "../../assets/alexa.png";
import siri from "../../assets/siri.jpeg";

const FirstApp = () => {
  return (
    <div>
      <h1 className=" text-center text-4xl font-bold bg-gray-300 p-5 font-mono">
        Digital Assistents
      </h1>
      <div className="flex justify-center">
        <ProfileCard
          img={chatgpt}
          title="Chat-Gpt"
          description=" Chat-GPT is a powerful AI model that enables users to ask questions,
          receive answers, and even generate detailed and long-form responses."
        />
        <ProfileCard
          img={alexa}
          title="Alexa"
          description="Alexa is a Powerfull AI model that helps users to interact with various devices."
        />
        <ProfileCard
          img={siri}
          title="Siri"
          description="Siri is a Powerfull AI model that helps users to interact with the IOS devises and it is the ios verison of Ai tool."
        />
      </div>
    </div>
  );
};

export default FirstApp;
