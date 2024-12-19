'use client'

import React, { useState, useEffect } from 'react';
import "../globals.css"
import TeamCard from '@/components/ui/TeamCard'

interface Social {
    platform: string;
    url: string;
}

interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string;
    stream: string;
    label: string;
    desc: string;
    socials: Social[];
}

export default function TeamPage() {

  const [activeCategory, setActiveCategory] = useState("View All");
  const [teamData, setTeamData] = useState<TeamMember[]>([]);

  useEffect(() => {
        // Fetch the JSON file from the public folder
        fetch('/data/team/teamData.json')
        .then((response) => response.json())
        .then((data: TeamMember[]) => setTeamData(data))
        .catch((error) => console.error('Error fetching JSON:', error));
    }, []);

  // Filter team members based on the active category
  const filteredTeamData =
    activeCategory === "View All"
      ? teamData
      : teamData.filter((member) => member.label === activeCategory);

  const categories = ["View All", "Executives", "Vice Presidents", "Stream Representatives"];

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col items-center py-10">
        <button className="bg-slate-100 text-black px-10 py-5 rounded-full shadow-lg text-2xl font-black">
          Meet our team
        </button>
      </div>

       {/* Category Buttons */}
      <div className="flex flex-wrap gap-y-6 w-full justify-center space-x-4 mt-6 mb-8">
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
    </>
  );
}