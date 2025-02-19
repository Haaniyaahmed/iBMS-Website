"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Banner from "./_components/banner";

interface Events {
  created: Date;
  updated: Date;
  description: string | null;
  location: string | null;
  summary: string | null;
  start: {
    date: Date | null;
    dateTime: string | null;
    timeZone: string | null;
  };
  end: {
    date: Date | null;
    dateTime: string | null;
    timeZone: string | null;
  };
  attachments: [
    {
      fileUrl: string | null;
      title: string | null;
      mimeType: string | null;
      iconLink: string | null;
      fileId: string | null;
    }
  ];
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"futureStudents" | "currentStudents">("futureStudents");
  const [events, setEvents] = useState<Events[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      console.log("Calendar ID:", process.env.CALENDAR_ID);
      console.log("API Key:", process.env.GOOGLE_API_KEY);

      const calendarId = process.env.CALENDAR_ID;
      const apiKey = process.env.GOOGLE_API_KEY;
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
      const data = await fetch(url);
      const calendarData = await data.json();
  
      console.log("Calendar Data:", calendarData);  // Check the raw API response
      const calendar: Events[] = calendarData.items || [];
  
      const sortedEvents = [...calendar].sort((a, b) => {
        const getDate = (event: Events) => {
          if (event.start.dateTime) {
            return new Date(event.start.dateTime);
          }
          if (event.start.date) {
            return new Date(event.start.date + "T00:00:00");
          }
          return new Date(0);
        };
  
        const dateA = getDate(a);
        const dateB = getDate(b);
        const now = new Date();
  
        const isAUpcoming = dateA > now;
        const isBUpcoming = dateB > now;
  
        if (isAUpcoming && !isBUpcoming) return -1;
        if (!isAUpcoming && isBUpcoming) return 1;
  
        return dateA.getTime() - dateB.getTime();
      });
  
      console.log("Sorted Events:", sortedEvents);  // Check the sorted events
      setEvents(sortedEvents);
    };
  
    fetchEvents();
  }, []);

  const handleTabSwitch = (tab: "futureStudents" | "currentStudents") => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full min-h-screen bg-black">
        {/* Header Image with Text */}
        <Banner imagePath="/studentlife.png" title_top="IBIOMED" title_bottom="SOCIETY" />
        <div className="bg-yellow-500 w-full py-2 mb-6" />

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
                <span className="ml-4">WELCOME WEEK SCHEDULE</span>
              </a>
              <a href="https://www.eng.mcmaster.ca/ibiomed/ibehs-1/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                <span className="ml-4">RESOURCES</span>
              </a>
              <a href="https://example4.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                <span className="ml-4">UPPER YEAR ADVICE</span>
              </a>
            </div>
          )}

          {activeTab === "currentStudents" && (
            <div className="flex flex-col gap-4">
              <a href="https://example5.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                <span className="ml-4">STREAM SELECTION</span>
              </a>
              <a href="https://example6.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-red-700 text-white p-4 rounded-xl hover:scale-105 transition">
                <div className="w-10 h-10 bg-white border-2 border-yellow-400 rounded-full"></div>
                <span className="ml-4">CO-OPS & RESEARCH</span>
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

        {/* Upcoming Events Section */}
        <div className="w-[80%] mx-auto mt-10">
          <h2 className="text-white text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-2 gap-4">
            {events.length > 0 ? (
              events.slice(0, 4).map((event, index) => {
                const eventDate = event.start.dateTime
                  ? new Date(event.start.dateTime)
                  : event.start.date
                  ? new Date(event.start.date + "T00:00:00")
                  : null;
                const eventTitle = event.summary || "No Title";

                return (
                  <div key={index} className="bg-gray-800 text-white p-4 rounded-lg">
                    <h3 className="text-lg font-bold">{eventTitle}</h3>
                    <p>
                      {eventDate && eventDate instanceof Date && !isNaN(eventDate.getTime())
                        ? eventDate.toLocaleString()
                        : "No date available"}
                    </p>
                  </div>
                  
                );
              })
            ) : (
              <div className="col-span-2 text-center text-white">No upcoming events.</div>
            )}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="w-[80%] mx-auto mt-10">
          <h2 className="text-white text-2xl font-bold mb-4">Social Media</h2>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="overflow-hidden whitespace-nowrap">
              <a href="https://www.instagram.com/macibiomed/" target="_blank" rel="noopener noreferrer" className="inline-block mr-4">📷 Instagram Post 1</a>
              <a href="https://www.instagram.com/macibiomed/" target="_blank" rel="noopener noreferrer" className="inline-block mr-4">📷 Instagram Post 2</a>
              <a href="https://www.instagram.com/macibiomed/" target="_blank" rel="noopener noreferrer" className="inline-block">📷 Instagram Post 3</a>
            </div>
          </div>
        </div>

        <div className="bg-black w-full py-4 mt-6" />
        <Footer />
      </div>
    </>
  );
}
