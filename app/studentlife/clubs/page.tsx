import "../../globals.css";
import Banner from '../../_components/banner';

export default function Page() {
  return (
    <div>
      <Banner imagePath='/clubs.png' title_top='CLUBS' title_bottom='AT MCMASTER' />
      <div className="bg-yellow-500 w-full py-2 mb-6" />

      {/* Content container with 70% width */}
      <div className="w-[70%] mx-auto">
        {/* Technical Teams Section */}
        <section id="technical-teams" className="mt-10 mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technical Teams</h2>
          <div className="grid grid-cols-1 gap-8">
            {/* Club 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <img
                src="/chemecar.jpg"
                alt="Team 1 Logo"
                className="w-32 h-32 object-cover rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-black">Chem-E-Car</h3>
                <p className="text-lg text-black mb-4">
                On McMaster Chem-E-Car, students will design, build, test, and troubleshoot a chemical-fueled car that must move to a specific unknown distance announced the day of the competition. Each year the team competes at Regionals in their respective school bracket and have the opportunity to advance to the Annual National Chem-E-Car Competition (ASC), coordinated by the American Institute of Chemical Engineering (AIChE).
                </p>
                <div className="flex gap-4">
                  <a href="https://macchecar.wixsite.com/mcmasterchemecar" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/socials/website_logo.png"
                      alt="Website"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://www.instagram.com/mcmasterchemecar/#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/socials/instagram_logo.jpg"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Club 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <img
                src="/mist.png"
                alt="Team 2 Logo"
                className="w-32 h-32 object-cover rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-black">McMaster Interdisciplinary Satellite Team</h3>
                <p className="text-lg text-black mb-4">
                The McMaster Interdisciplinary Satellite Team is a group of McMaster University students that is currently designing, fabricating, and planning to launch a small satellite (CubeSat) into low earth orbit in order to study the effects of ionizing radiation on the human body.
                </p>
                <div className="flex gap-4">
                  <a href="https://mcmasterneudose.ca/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/socials/website_logo.png"
                      alt="Website"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://www.instagram.com/mcmastersatellite/#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/socials/instagram_logo.jpg"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Clubs Section */}
        <section id="technical-clubs" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technical Clubs</h2>
          <div className="grid grid-cols-1 gap-8">
            {/* Club 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <img
                src="/medt.png"
                alt="MED-T Logo"
                className="w-32 h-32 object-cover rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-black">MED-T</h3>
                <p className="text-lg text-black mb-4">
                At McMaster Medical Engineering Design Team (MED-T), we bring together the brightest minds in engineering and health sciences to create innovative solutions that address real-world medical challenges. Our team is dedicated to developing cutting-edge medical devices and technologies that improve the quality of life for people around the globe.
                </p>
                <div className="flex gap-4">
                  <a href="https://macmed-t.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/socials/website_logo.png"
                      alt="Website"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://www.instagram.com/macmed_t/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/socials/instagram_logo.jpg"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Club 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <img
                src="/healthhatch.png"
                alt="Health Hatch"
                className="w-32 h-32 object-cover rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-black">HealthHATCH</h3>
                <p className="text-lg text-black mb-4">
                A club dedicated to providing all students exposure to technical, transferable skills, and experience to prepare for the ever-evolving field of biomedical engineering.
                </p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/machealthhatch/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/socials/website_logo.png"
                      alt="Website"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://www.instagram.com/machealthhatch/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/socials/instagram_logo.jpg"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Clubs Section */}
        <section id="other-clubs" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Other Clubs</h2>
          <div className="grid grid-cols-1 gap-8">
            {/* Club 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <img
                src="/wie.png"
                alt="WIE"
                className="w-32 h-32 object-cover rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-black">WIE</h3>
                <p className="text-lg text-black mb-4">
                We are a group of undergraduate Engineering, B.Tech, iBioMed, and Computer Science students focused on creating a community where woman-identifying students feel empowered and supported throughout their education.
                </p>
                <div className="flex gap-4">
                  <a href="https://www.mcmasterwie.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/socials/website_logo.png"
                      alt="Website"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="https://www.instagram.com/mcmasterwie/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/socials/instagram_logo.jpg"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
