"use client"

import React from "react";
import { useState } from "react";
import Link from 'next/link'

export default function MyTable() {
    const [activeTab,setActiveTab] = useState<"Future Students"|"Current Students">("Future Students");
    //EDIT DATA HERE
    const futureStudentItems = {
        "MENTORSHIP":"/",
        "WELCOME WEEK SCHEDULE":"/",
        "RESOURCES":"/",
        "UPPER YEAR ADVICE":"/"
    };
    const currentStudentsItems = {
        "STREAM SELECTION":"/",
        "CO-OPS & RESEARCH":"/",
        "STUDY TIPS":"/",
        "ACADEMIC CONCERNS":"/"
    };
    return (
        <div className="table flex flex-col w-8/12 mx-28">
            <div className="tabs flex flex-row">
                <button className={`font-bold text-base rounded-t-lg py-2 px-44 text-nowrap ${activeTab == "Future Students" ? "text-white bg-mac-light-red transition delay-75 ease-out hover:bg-gray-300" : "text-black bg-gray-200 transition delay-75 ease-out hover:bg-gray-300"}`} onClick={() => setActiveTab("Future Students")}>
                    FUTURE STUDENTS
                </button>
                <button className={`font-bold text-base rounded-t-lg py-2 px-44 text-nowrap ${activeTab == "Current Students" ? "text-white bg-mac-light-red transition delay-75 ease-out hover:bg-gray-300" : "text-black bg-gray-200 transition delay-75 ease-out hover:bg-gray-300"}`} onClick={() => setActiveTab("Current Students")}>
                    CURRENT STUDENTS
                </button>
            </div>
            <div className="displaytable flex flex-col py-5 px-8 gap-y-3 bg-black">
                { Object.entries(activeTab == "Future Students" ? futureStudentItems : currentStudentsItems).map(([item,link],index) =>
                    <Link key={index} href={link} className="flex flex-row gap-x-4 pl-3 items-center w-full bg-mac-light-red text-base text-white font-bold rounded-3xl py-2 transition delay-75 ease-out hover:scale-105">
                        <div className="rounded-full bg-white size-12 border-3 border-yellow-300"/>
                        {item}
                    </Link>    
                )}
            </div>
            <div className="bg-mac-dark-red py-0.5 rounded-b-lg"/>
        </div>
    );
}