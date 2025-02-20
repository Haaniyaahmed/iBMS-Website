'use client'
import "./globals.css";
import { useState } from "react";

export default function Table(){
    const [activeTab, setActiveTab] = useState<"futureStudents" | "currentStudents">("futureStudents");
    const handleTabSwitch = (tab: "futureStudents" | "currentStudents") => {
        setActiveTab(tab);
    };
    return (
        <>
            {/* Tabs */}
            <div className="w-[80%] mx-auto">
            <div className="flex justify-between w-full">
                <button
                onClick={() => handleTabSwitch("futureStudents")}
                className={`flex-1 px-6 py-3 rounded-t-lg ${
                    activeTab === "futureStudents" ? "bg-red-700 text-white" : "bg-gray-200 text-black"
                } transition-colors`}
                >
                <strong>FUTURE STUDENTS</strong>
                </button>
                <button
                onClick={() => handleTabSwitch("currentStudents")}
                className={`flex-1 px-6 py-3 rounded-t-lg ${
                    activeTab === "currentStudents" ? "bg-red-700 text-white" : "bg-gray-200 text-black"
                } transition-colors`}
                >
                <strong>CURRENT STUDENTS</strong>
                </button>
            </div>
            </div>
            {/* Tab Content */}
            <div className="w-[80%] mx-auto bg-gray-900 p-6 rounded-b-lg border-b-4 border-red-700">
            {activeTab === "futureStudents" && (
                <div className="flex flex-col gap-4">
                <a href="https://example1.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                    <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                    <span className="ml-4">MENTORSHIP</span>
                </a>
                <a href="https://www.instagram.com/macengww/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                    <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                    <span className="ml-4">WELCOME WEEK</span>
                </a>
                <a href="https://www.eng.mcmaster.ca/ibiomed/ibehs-1/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                    <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                    <span className="ml-4">RESOURCES</span>
                </a>
                <a href="https://drive.google.com/drive/folders/1EQS5YZPJVDgPgy31mmR_koLgC6cI8oHJ" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                    <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                    <span className="ml-4">COURSE SURVIVAL</span>
                </a>
                </div>
            )}

            {activeTab === "currentStudents" && (
                <div className="flex flex-col gap-4">
                <a href="https://docs.google.com/presentation/d/11X5DwOVzuKz3WGp-PNPN2YUzRwkxwWanCCJviIDlfGQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                    <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                    <span className="ml-4">STREAM SELECTION</span>
                </a>
                <a href="https://drive.google.com/drive/folders/1xwuMwblZ6xQvOgZKf1fQaIKyQSSwGnLB" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                    <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                    <span className="ml-4">RESEARCH</span>
                </a>
                <a href="https://www.instagram.com/macibiomed/p/CxbSaXGxEYD/?img_index=1" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                    <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                    <span className="ml-4">STUDY TIPS</span>
                </a>
                <a href="https://forms.gle/twivfnvbKHbbXBDE9" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                    <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                    <span className="ml-4">ACADEMIC CONCERNS</span>
                </a>
                </div>
            )}
            </div>
        </>
    );
}