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
                className="bg-white border-4 border-yellow-200 rounded-3xl p-4 flex flex-col w-9/12 max-w-lg md:max-w-3xl lg:w-4/5 md:flex-row md:pl-11 md:pr-11 overflow-hidden md:h-[70vh]" // Mobile-first width
                onClick={(e) => e.stopPropagation()}
            >
                <div className="md:w-[200px] lg:w-[300px] shrink-0 md:h-[350px] lg:h-[350px] overflow-hidden my-auto"> {/* Image container */}
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full object-cover rounded-t-lg" // Rounded top on mobile
                    />
                </div>

                <div className="p-4 flex flex-col"> {/* Content container */}
                    <h2 className="text-xl font-bold text-center text-black"> {/* Centered title */}
                        {member.name.toUpperCase()}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                        <button className="px-2 py-0.5 text-xs bg-purple-400 text-red-800 font-semibold rounded-full">
                            {member.stream}
                        </button>
                        <button className="px-2 py-0.5 text-xs bg-green-400 text-red-800 font-semibold rounded-full">
                            {member.position}
                        </button>
                    </div>

                    <div className="mt-4 flex flex-col flex-grow overflow-y-auto max-h-48"> {/* Scrollable description */}
                        <div className="flex justify-center space-x-4"> {/* Socials */}
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
                                        className="w-6 h-6 object-contain hover:opacity-75 transition duration-200"
                                    />
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-700 text-sm mt-2 whitespace-pre-wrap">
                            {member.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DialogCard;