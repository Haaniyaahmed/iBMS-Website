import React from "react";
import { TeamMember } from "./TeamCard";

interface DialogCardProps {
  member: TeamMember;
  closeDialog: () => void;
}

const DialogCard = ({ member, closeDialog }: DialogCardProps) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto"
            onClick={closeDialog}
        >
            <div
                className="bg-white border-4 border-yellow-200 rounded-3xl p-4 flex flex-col w-9/12 max-w-lg md:max-w-3xl lg:w-4/5 md:flex-row md:pl-11 md:pr-11 overflow-hidden h-[80vh] md:h-[70vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="md:w-[200px] lg:w-[300px] shrink-0 h-[250px] md:h-[350px] lg:h-[350px] overflow-hidden my-auto">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="p-5 md:ml-6 md:w-0 md:grow md:mr-5 flex flex-col h-full">
                    <div>
                        <h2 className="text-xl font-bold text-black md:text-4xl lg:text-5xl text-center md:text-left">
                            {member.name.toUpperCase()}
                        </h2>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                            <button className="px-2 py-0.5 text-xs sm:px-3 sm:py-1 md:text-base bg-purple-400 text-red-800 font-semibold rounded-full shadow-md whitespace-nowrap">
                                {member.stream}
                            </button>
                            <button className="px-2 py-0.5 text-xs sm:px-3 sm:py-1 md:text-base bg-green-400 text-red-800 font-semibold rounded-full shadow-md whitespace-nowrap">
                                {member.position}
                            </button>
                        </div>
                    </div>

                    <div className="mt-5 mb-5 flex flex-col flex-grow overflow-y-auto h-full"> {/* Make this section scrollable */}
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

                        <div className="overflow-y-auto pt-1 pb-1 md:py-4 h-full"> {/* Ensure description is scrollable */}
                          <p className="text-gray-700 text-sm md:text-base whitespace-pre-wrap mb-2">
                            {member.desc}
                          </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DialogCard;