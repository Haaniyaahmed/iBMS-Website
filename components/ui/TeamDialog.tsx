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
        className="bg-white border-4 border-yellow-200 rounded-3xl p-6 flex 
				w-4/5 h-[400px] pl-11 pr-11"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Section: Image */}
        <div className="flex-shrink-0 w-[255px] h-[255px] mt-10 mb-10 ml-11 mr-10">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Section: Content */}
        <div className="ml-6 flex flex-col justify-middle w-full mt-10 mb-10 mr-11">
          {/* Name and Tags */}
          <div>
            <h2 className="text-5xl text-black font-bold">
              {member.name.toUpperCase()}
            </h2>

            <div className="flex space-x-6 mt-2">
                <button className="px-4 py-2 bg-purple-400 text-red-800 font-semibold rounded-full shadow-md">
                    {member.stream}
                </button>
                <button className="px-4 py-2 bg-green-400 text-red-800 font-semibold rounded-full shadow-md">
                    {member.position}
                </button>
            </div>
          </div>

          {/* Socials and Description */}
          <div className="mt-5 mb-5">
            <div className="flex space-x-4">
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
                    className="w-8 h-8 object-contain hover:opacity-75 transition duration-200"
                  />
                </a>
              ))}
            </div>

            <p className="text-gray-700 mt-4">{member.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogCard;