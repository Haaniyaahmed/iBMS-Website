'use client'

import React, { useState } from 'react';
import "../globals.css"

import teamData from '../../public/data/team/teamData.json'; // Import JSON
import TeamCard from '../_components/TeamCard';

export default function TeamPage() {

  const [activeCategory, setActiveCategory] = useState("View All");

  // Filter team members based on the active category
  const filteredTeamData =
    activeCategory === "View All"
      ? teamData
      : teamData.filter((member) => member.label === activeCategory);

  const categories = ["View All", "Executives", "Vice Presidents", "Stream Representatives"];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white bg-black"
      style={{
        backgroundImage: "url('/elipses.png')", 
      }}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center py-10">
        <button className="bg-slate-100 text-black px-10 py-5 rounded-full shadow-lg text-2xl font-black">
          Meet our team
        </button>
      </div>

       {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mt-6 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-semibold transition duration-200 ${
              activeCategory === category
                ? "bg-yellow-400 text-black"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-6xl pb-11" >
          {filteredTeamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}