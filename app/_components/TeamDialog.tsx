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
        <div className="md:w-[200px] lg:w-[300px] shrink-0 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>


        {/* Content Section - Below Image for Mobile, Right Side for Larger Screens */}
        <div className="mt-5 md:mt-10 flex flex-col justify-center text-center md:text-left md:ml-6 md:w-0 md:grow md:mr-11">
          <div>
            {/* Name */}
            <h2 className="text-2xl font-bold text-black md:text-4xl lg:text-5xl">
              {member.name.toUpperCase()}
            </h2>
            {/* Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3"> {/* Use gap for consistent spacing */}
              <button className="px-2 py-0.5 text-xs sm:px-3 sm:py-1 md:text-base bg-purple-400 text-red-800 font-semibold rounded-full shadow-md whitespace-nowrap">
                {member.stream}
              </button>
              <button className="px-2 py-0.5 text-xs sm:px-3 sm:py-1 md:text-base bg-green-400 text-red-800 font-semibold rounded-full shadow-md whitespace-nowrap"> 
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
