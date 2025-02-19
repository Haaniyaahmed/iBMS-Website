"use client";

import { useState } from 'react';
import emailjs from "@emailjs/browser";
import Banner from '../_components/banner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .send(
        'service_xhtyjap',
        'template_3irqx95',
        formData,
        'tBuOjKD9G5N8bWwOp'
      )
      .then(
        () => {
          setStatus('Message sent successfully!')
        },
        (error) => {
          setStatus('Failed to send message.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <div> 
      {/* Header Image with Text */}
      <Banner imagePath='/contact.png' title_top='CONTACT' title_bottom='US' />
      <div className="bg-white py-12"> {/* Overall container with background and padding */}
        <div className="container mx-auto px-4"> {/* Centered container with padding */}
          {/* Contact Form */}
          <div className="md:w-3/5 lg:w-3/5 mx-auto bg-gray-100 rounded-lg shadow-md p-8 mt-8 border border-black"> {/* Form container styling */}
            <form onSubmit={handleSubmit} className="space-y-4"> {/* Form with spacing */}
              <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button type="submit" className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 w-full">
              Send Message
            </button>
            </form>
          </div>
          {status && (
            <div
              className={`text-center mt-4 p-4 rounded w-1/2 mx-auto ${
                status.startsWith('Message sent') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
