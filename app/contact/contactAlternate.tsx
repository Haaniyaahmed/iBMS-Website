"use client";

import { useState } from 'react';
import emailjs from 'emailjs-com';

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
        () => setStatus('Message sent successfully!'),
        (error) => {
          setStatus('Failed to send message.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="container">
        {/* Contact Form */}
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
        {status && <p className="status-message">{status}</p>}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          margin: 0 auto;
        }

        .header {
          width: 100%;
          margin-bottom: 40px;
          position: relative;
        }

        .header-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .ibiomed {
          display: block;
          color: white;
          font-family: 'Inter', sans-serif;
          font-size: 3rem;
          line-height: 1.2;
        }

        .society {
          display: block;
          color: #FFD920;
          font-family: 'Inter', sans-serif;
          font-size: 3rem;
          line-height: 1.2;
          font-weight: bold;
        }

        .form-wrapper {
          margin: 20px auto;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          width: 100%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 15px;
        }

        .submit-button {
          background-color: #C22D2A;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .submit-button:hover {
          background-color: #a32222;
        }

        .status-message {
          text-align: center;
          margin-top: 15px;
          color: #fafafa;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
}