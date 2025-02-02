import React from "react";

import { TeamMember } from "./TeamCard";

interface DialogCardProps {
    member: TeamMember;
    closeDialog: () => void;
}


const DialogCard = ({ member, closeDialog } : DialogCardProps) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeDialog}
    >
      <div
        className="bg-white border-4 border-yellow-200 rounded-3xl p-6 flex flex-col w-9/12 max-w-lg md:max-w-3xl lg:w-4/5 
                  md:flex-row md:h-[400px] md:pl-11 md:pr-11"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section - Stays on Top for Mobile, Moves Left for Larger Screens */}
        <div className="w-full h-[250px] flex justify-center md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] md:mt-10 md:mb-10 md:ml-11 md:mr-10">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-lg md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]"
          />
        </div>

        {/* Content Section - Below Image for Mobile, Right Side for Larger Screens */}
        <div className="mt-5 md:mt-10 flex flex-col text-center md:text-left md:ml-6 md:w-full md:mr-11">
          {/* Name & Tags */}
          <div>
            <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
              {member.name.toUpperCase()}
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start space-x-2 mt-3">
              <button className="px-3 py-1 text-sm md:text-base bg-purple-400 text-red-800 font-semibold rounded-full shadow-md">
                {member.stream}
              </button>
              <button className="px-3 py-1 text-sm md:text-base bg-green-400 text-red-800 font-semibold rounded-full shadow-md">
                {member.position}
              </button>
            </div>
          </div>

          {/* Socials & Description */}
          <div className="mt-5 mb-5">
            <div className="flex justify-center md:justify-start space-x-4">
              {member.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`/socials/${social.platform}_logo.jpg`}
                    alt={`${social.platform} logo`}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain hover:opacity-75 transition duration-200"
                  />
                </a>
              ))}
            </div>

            <p className="text-gray-700 mt-4 text-sm md:text-base">{member.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogCard;
