import "../../globals.css";
import React from "react";
import { ArrowRight } from "lucide-react";
import Banner from '../../_components/banner';

const resources = [
  {
    title: "Academic Support",
    image: "/academic.png",
    links: [
      { name: "Tutoring Services", href: "https://www.macengsociety.ca/tutoring" },
      { name: "Academic Advising", href: "https://www.eng.mcmaster.ca/current-students/undergraduate-academic-advising/" },
    ],
  },
  {
    title: "Health & Wellness",
    image: "/mentalhealth.png",
    links: [
      { name: "Mental Health", href: "https://www.eng.mcmaster.ca/current-students/talkspot/" },
      { name: "Fitness & Recreation", href: "https://rec.mcmaster.ca/programs/intramural-sports-0" },
    ],
  },
  {
    title: "Career Development",
    image: "/career.png",
    links: [
      { name: "Canada Internship Opportunities", href: "https://www.linkedin.com/posts/bridgeu-ca_looking-for-research-internships-this-summer-activity-7289643226930511872-NrV4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbGsmMBp-MRJcm4GWRFNtGWLMrKt4COcsA" },
      { name: "USA Internship Opportunities", href: "https://www.pathwaystoscience.org/Discipline.aspx?sort=ENG-Biomedical_Biomedical%20Engineering" },
      { name: "Resume & Interview Tips", href: "https://www.reddit.com/r/EngineeringResumes/" },
    ],
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <>
      {/* Ensure Banner is inside a fragment or a parent div */}
      <Banner imagePath="/resources.png" title_top="RESOURCES" title_bottom="FOR STUDENTS" />
      <div className="bg-yellow-500 w-full py-2 mb-6" />

      <div className="container mx-auto p-6">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="border rounded-lg shadow-lg bg-white overflow-hidden">
              {/* Image at the top */}
              <img src={resource.image} alt={resource.title} className="w-full h-40 object-cover" />

              {/* Text content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black">{resource.title}</h2>
                <ul className="mt-2 space-y-2">
                  {resource.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#C22D2A] hover:underline"
                      >
                        {link.name} <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
