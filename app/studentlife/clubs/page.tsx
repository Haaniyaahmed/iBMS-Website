import "../../globals.css";
import Banner from '../../_components/banner';

export default function Page() {
  return (
    <div>
      <Banner imagePath='/clubs.png' title_top='CLUBS' title_bottom='AT MCMASTER' />
      <div className="bg-yellow-500 w-full py-2 mb-6" />

      {/* Content container */}
      <div className="w-[90%] md:w-[70%] mx-auto">
        {/* Section Wrapper */}
        {[
          {
            id: "technical-teams",
            title: "Technical Teams",
            clubs: [
              {
                img: "/clubs/chemecar.jpg",
                name: "Chem-E-Car",
                desc: "On McMaster Chem-E-Car, students design, build, and test a chemical-fueled car to move a specific unknown distance for competition.",
                links: [
                  { href: "https://macchecar.wixsite.com/mcmasterchemecar", img: "/socials/website_logo.png" },
                  { href: "https://www.instagram.com/mcmasterchemecar/#", img: "/socials/instagram_logo.jpg" }
                ]
              },
              {
                img: "/clubs/mist.png",
                name: "McMaster Interdisciplinary Satellite Team",
                desc: "A team designing, fabricating, and planning to launch a CubeSat to study the effects of ionizing radiation.",
                links: [
                  { href: "https://mcmasterneudose.ca/", img: "/socials/website_logo.png" },
                  { href: "https://www.instagram.com/mcmastersatellite/#", img: "/socials/instagram_logo.jpg" }
                ]
              }
            ]
          },
          {
            id: "technical-clubs",
            title: "Technical Clubs",
            clubs: [
              {
                img: "/clubs/medt.png",
                name: "MED-T",
                desc: "Bringing together engineering and health sciences students to develop cutting-edge medical devices.",
                links: [
                  { href: "https://macmed-t.com/", img: "/socials/website_logo.png" },
                  { href: "https://www.instagram.com/macmed_t/?hl=en", img: "/socials/instagram_logo.jpg" }
                ]
              },
              {
                img: "/clubs/healthhatch.png",
                name: "HealthHATCH",
                desc: "Providing students with exposure to technical and transferable skills in biomedical engineering.",
                links: [
                  { href: "https://www.linkedin.com/company/machealthhatch/", img: "/socials/website_logo.png" },
                  { href: "https://www.instagram.com/machealthhatch/", img: "/socials/instagram_logo.jpg" }
                ]
              }
            ]
          },
          {
            id: "other-clubs",
            title: "Other Clubs",
            clubs: [
              {
                img: "/clubs/wie.png",
                name: "Women in Engineering Society",
                desc: "A community supporting woman-identifying engineering, B.Tech, iBioMed, and Computer Science students.",
                links: [
                  { href: "https://www.mcmasterwie.com/", img: "/socials/website_logo.png" },
                  { href: "https://www.instagram.com/mcmasterwie/", img: "/socials/instagram_logo.jpg" }
                ]
              },
              {
                img: "/clubs/nsbe.png",
                name: "National Society of Black Engineers",
                desc: "A dynamic community of aspiring engineers dedicated to advancing success of underrepresented groups.",
                links: [
                  { href: "https://nsbemcmaster.ca/", img: "/socials/website_logo.png" },
                  { href: "https://www.instagram.com/nsbemac/", img: "/socials/instagram_logo.jpg" }
                ]
              },
              {
                img: "/clubs/ewd.png",
                name: "McMaster Engineers With Disabilities",
                desc: "We aim to provide support for engineering students with self-identified disabilities.",
                links: [
                  //{ href: "https://nsbemcmaster.ca/", img: "/socials/website_logo.png" },
                  { href: "https://www.instagram.com/mcmasterewd/", img: "/socials/instagram_logo.jpg" }
                ]
              },
              {
                img: "/clubs/aises.jpg",
                name: "American Indigenous Science and Engineering Society",
                desc: "The voice for Indigenous Peoples in STEM at McMaster University.",
                links: [
                  { href: "https://aises.org/chapter/mcmaster-university/", img: "/socials/website_logo.png" },
                  { href: "https://www.instagram.com/mcmasteraises/", img: "/socials/instagram_logo.jpg" }
                ]
              }
              
            ]
          }
        ].map((section) => (
          <section id={section.id} className="mt-10 mb-12" key={section.id}>
            <h2 className="text-3xl font-semibold mb-6">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.clubs.map((club, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start">
                  <img
                    src={club.img}
                    alt={club.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-4 md:mb-0 md:mr-4"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-black">{club.name}</h3>
                    <p className="text-lg text-black mb-4">{club.desc}</p>
                    <div className="flex justify-center md:justify-start gap-4">
                      {club.links.map((link, linkIndex) => (
                        <a key={linkIndex} href={link.href} target="_blank" rel="noopener noreferrer">
                          <img src={link.img} alt="Social Link" className="w-6 h-6" />
                        </a> 
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}