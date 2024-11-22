"use client";

import React, { useState } from "react";
import "./globals.css";
import Image from "next/image";
import ibiomed_logo from "../public/sample.png";

export default function HomePage() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState<"futureStudents" | "currentStudents">("futureStudents");

  // Function to switch tabs
  const handleTabSwitch = (tab: "futureStudents" | "currentStudents") => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      {/* Image Section */}
      {/* <div>
        <Image
          src={ibiomed_logo}
          layout="responsive"
          width={300}
          height={400}
          placeholder="blur"
          alt="ibiomed Logo"
        />
      </div> */}

      {/* Tab Buttons */}
      <div className="tabs">
        <button
          onClick={() => handleTabSwitch("futureStudents")}
          className={`tab ${activeTab === "futureStudents" ? "active" : ""}`}
        >
          FUTURE STUDENTS
        </button>
        <button
          onClick={() => handleTabSwitch("currentStudents")}
          className={`tab ${activeTab === "currentStudents" ? "active" : ""}`}
        >
          CURRENT STUDENTS
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "futureStudents" && <div>Content for Future Students</div>}
        {activeTab === "currentStudents" && <div>Content for Current Students</div>}
      </div>

      <style jsx>{`
        .container {
          width: 80%;
          margin: 0 auto;
        }
        .tabs {
          display: flex;
          margin-top: 20px;
        }
        .tab {
          flex: 1;
          padding: 10px;
          text-align: center;
          background: #f1f1f1;
          border: 1px solid #ccc;
          cursor: pointer;
          color: black;
          transition: background-color 0.3s;
          border-radius: 5px;
        }
        .tab.active {
          background: #7a003c;
          color: black;
        }
        .tab:hover {
          background: #ddd;
        }
        .tab-content {
          margin-top: 20px;
          padding: 20px;
          border: 1px solid #ccc;
          background-color: white;
          color: black;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
