import "../../globals.css";
import Banner from '../../_components/banner';

const mentorshipPrograms = [
  {
    title: "iBioBuds Mentorship Program",
    description: "The iBioBuds Mentorship Program pairs lower-year students with upper-year mentors to provide academic and personal support. Mentors help guide students through their transition into university life, offering advice and resources.",
    image: "/ibiobuds.png",
    links: [
      { name: "Learn More", href: "" },
      { name: "Sign Up is CLOSED. Please check back later for more info.", href: "" },
    ],
  },
  {
    title: "Alumni Mentorship Program",
    description: "The Alumni Mentorship Program connects students with experienced graduates in their field of interest. This initiative helps students gain industry insights, career guidance, and professional networking opportunities.",
    image: "/alumni.jpg",
    links: [
      { name: "Learn More", href: "" },
      { name: "Sign Up is CLOSED. Please check back later for more info.", href: "" },
    ],
  },
];

const MentorshipPage: React.FC = () => {
  return (
    <>
      <Banner imagePath="/mentorship.png" title_top="MENTORSHIP" title_bottom="OPPORTUNITIES" />
      <div className="bg-yellow-500 w-full py-2 mb-6" />

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Explore mentorship opportunities to support your academic and professional journey.</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentorshipPrograms.map((program, index) => (
            <div key={index} className="border rounded-lg shadow-lg bg-white overflow-hidden">
              {/* Larger Image */}
              <img src={program.image} alt={program.title} className="w-full h-96 object-cover" />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-black">{program.title}</h2>
                <p className="mt-2 text-gray-700">{program.description}</p>
                <ul className="mt-2 space-y-2">
                  {program.links.map((link, i) => (
                    <li key={i}>
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#C22D2A] hover:underline"
                      >
                        {link.name}
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

export default MentorshipPage;
