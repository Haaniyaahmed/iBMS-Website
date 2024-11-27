"use client";

import React, { useState } from "react";
import "./globals.css";
import Image from "next/image";
import header from "../public/header_home.png";
import Navbar from "./_components/Navbar";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"futureStudents" | "currentStudents">("futureStudents");

  const handleTabSwitch = (tab: "futureStudents" | "currentStudents") => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <Navbar />
      {/* Header Image */}
      <div className="header">
        <Image src={header} alt="Header" layout="responsive" priority />
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <div className="tabs">
          <button
            onClick={() => handleTabSwitch("futureStudents")}
            className={`tab ${activeTab === "futureStudents" ? "active" : ""}`}
          >
            <strong>FUTURE STUDENTS</strong>
          </button>
          <button
            onClick={() => handleTabSwitch("currentStudents")}
            className={`tab ${activeTab === "currentStudents" ? "active" : ""}`}
          >
            <strong style={{ fontFamily: "'Poppins', sans-serif" }}>CURRENT STUDENTS</strong>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "futureStudents" && (
          <div className="content-container">
            <div className="rect-container">
              <a href="https://example1.com" target="_blank" rel="noopener noreferrer" className="rectangle">
                <div className="circle"></div>
                <span>MENTORSHIP</span>
              </a>
              <a href="https://www.instagram.com/macengww/?hl=en" target="_blank" rel="noopener noreferrer" className="rectangle">
                <div className="circle"></div>
                <span>WELCOME WEEK SCHEDULE</span>
              </a>
              <a href="https://www.eng.mcmaster.ca/ibiomed/ibehs-1/" target="_blank" rel="noopener noreferrer" className="rectangle">
                <div className="circle"></div>
                <span>RESOURCES</span>
              </a>
              <a href="https://example4.com" target="_blank" rel="noopener noreferrer" className="rectangle">
                <div className="circle"></div>
                <span>UPPER YEAR ADVICE</span>
              </a>
            </div>
          </div>
        )}
        {activeTab === "currentStudents" && (
          <div className="content-container">
            <div className="rect-container">
              <a href="https://example5.com" target="_blank" rel="noopener noreferrer" className="rectangle">
                <div className="circle"></div>
                <span>STREAM SELECTION</span>
              </a>
              <a href="https://example6.com" target="_blank" rel="noopener noreferrer" className="rectangle">
                <div className="circle"></div>
                <span>CO-OPS & RESEARCH</span>
              </a>
              <a href="https://www.instagram.com/macibiomed/p/CxbSaXGxEYD/?img_index=1" target="_blank" rel="noopener noreferrer" className="rectangle">
                <div className="circle"></div>
                <span>STUDY TIPS</span>
              </a>
              <a href="https://forms.gle/twivfnvbKHbbXBDE9" target="_blank" rel="noopener noreferrer" className="rectangle">
                <div className="circle"></div>
                <span>ACADEMIC CONCERNS</span>
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          margin: 0 auto;
        }

        .header {
          width: 100%;
          margin-bottom: 40px;
        }

        .tabs-container {
          width: 85%; 
          margin: 0 auto; /* Center the tabs */
        }

        .tabs {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .tab {
          flex: 1;
          padding: 10px;
          text-align: center;
          background: #f1f1f1;
          cursor: pointer;
          color: black;
          transition: background-color 0.3s;
          border-radius: 10px 10px 0 0;
        }

        .tab.active {
          background: #C22D2A;
          color: white;
        }

        .tab:hover {
          background: #ddd;
        }

        .content-container {
          display: flex;
          flex-direction: row;
          gap: 20px;
          background-color: #202020;
          padding: 20px;
          border-radius: 5px;
          width: 85%;
          margin: 0 auto;
          border-bottom: 5px solid #C22D2A;
        }

        .rect-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 2;
        }

        .rectangle {
          width: 100%;
          height: 60px;
          background: #C22D2A;
          color: white;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 10px;
          font-weight: bold;
          border: none;
          border-radius: 20px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .rectangle:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .circle {
          width: 50px;
          height: 50px;
          background-color: white;
          border: 3px solid #FFD700;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
