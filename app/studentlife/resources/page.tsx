import "../../globals.css"

import React from "react";
import Link from "next/link";

const ResourcesPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <p className="mb-4">Explore helpful resources for students.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold">Academic Support</h2>
          <ul className="mt-2">
            <li><Link href="/resources/tutoring" className="text-blue-500 hover:underline">Tutoring Services</Link></li>
            <li><Link href="/resources/mentorship" className="text-blue-500 hover:underline">Mentorship Programs</Link></li>
          </ul>
        </div>
        
        <div className="p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold">Health & Wellness</h2>
          <ul className="mt-2">
            <li><Link href="/resources/counseling" className="text-blue-500 hover:underline">Counseling Services</Link></li>
            <li><Link href="/resources/fitness" className="text-blue-500 hover:underline">Fitness & Recreation</Link></li>
          </ul>
        </div>
        
        <div className="p-4 border rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-semibold">Career Development</h2>
          <ul className="mt-2">
            <li><Link href="/resources/internships" className="text-blue-500 hover:underline">Internship Opportunities</Link></li>
            <li><Link href="/resources/resumes" className="text-blue-500 hover:underline">Resume & Interview Tips</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
