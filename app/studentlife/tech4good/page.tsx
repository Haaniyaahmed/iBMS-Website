'use client';

import React from 'react';
import Banner from '../../_components/banner';

const Tech4GoodPage = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner imagePath='/t4g.png' title_top='TECH 4' title_bottom='GOOD' />
      <div className="bg-yellow-500 w-full py-2 mb-6" />

      {/* About Us Section */}
      <section id="about-us" className="mb-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#202020' }}>About Tech4Good</h2>
            <p className="text-lg" style={{ color: '#202020' }}>
              Tech4Good is a pro-bono consulting initiative aimed at connecting
              students with local non-profits in Hamilton. Through this program,
              students apply their skills to real-world projects, gaining valuable
              experience while making a positive impact in the community.
            </p>
          </div>
        </div>
      </section>

      {/* Current Project Section */}
      <section id="current-project" className="mb-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#202020' }}>Current Project</h2>
            <p className="text-lg mb-1" style={{ color: '#202020' }}>
              Currently, Tech4Good is working on a project in partnership with Scleroderma Canada that aims to provide
              a medical support tool for patients with Scleroderma. This is a 6-month long project where we will develop this mobile app, and deploy on iOS and Android.
            </p>
          </div>
        </div>
      </section>

      {/* Current Team Section */}
      <section id="current-team" className="mb-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: '#202020' }}>Current Team</h3>

            {/* Team Member Headshots */}
            <div className="flex justify-center gap-8 flex-wrap">
              {/* Team Member 1 */}
              <div className="text-center">
                <img
                  src="/tech4good/haaniya_ahmed.jpg"
                  alt="Haaniya Ahmed"
                  className="w-60 h-60 full object-cover mx-auto"
                />
                <p className="mt-2 text-lg font-semibold" style={{ color: '#202020' }}>Haaniya Ahmed</p>
                <p className="text-sm text-gray-500">Project Manager</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <img
                  src="/path-to-image/jane-smith.jpg"
                  alt="Ayush Patel"
                  className="w-60 h-60 full object-cover mx-auto"
                />
                <p className="mt-2 text-lg font-semibold" style={{ color: '#202020' }}>Ayush Patel</p>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <img
                  src="/path-to-image/emily-johnson.jpg"
                  alt="Kaiden Jessani"
                  className="w-60 h-60 full object-cover mx-auto"
                />
                <p className="mt-2 text-lg font-semibold" style={{ color: '#202020' }}>Kaiden Jessani</p>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center">
                <img
                  src="/tech4good/mahad_hassan.jpg"
                  alt="Mahad Hassan"
                  className="w-60 h-60 full object-cover mx-auto"
                />
                <p className="mt-2 text-lg font-semibold" style={{ color: '#202020' }}>Mahad Hassan</p>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

          <section id="reach-out" className="flex flex-col items-center mt-12 mb-10 gap-4 px-4">
      <a href="/contact" className="w-full max-w-xs">
        <button
          className="w-full px-6 py-3 text-white text-lg font-semibold rounded-lg hover:bg-red-700"
          style={{ backgroundColor: '#C22D2A' }}
        >
          Reach Out to Us
        </button>
      </a>

      <a href="/tech4good/tech4good.pdf" target="_blank" className="w-full max-w-xs">
        <button
          className="w-full px-6 py-3 text-white text-lg font-semibold rounded-lg hover:opacity-80"
          style={{ backgroundColor: '#FFD700' }}
        >
          View Information Package
        </button>
      </a>
    </section>

        </div>
      );
    };

export default Tech4GoodPage;
