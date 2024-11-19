import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="relative bg-gray-200 text-white min-h-screen mb-10">
      {/* Top Section with Image and Text */}
      <div className="relative">
        <img 
          src="https://th.bing.com/th/id/R.57dd1c3b7c283410902ab50f5d74e8b7?rik=rSC7y8BnIQWs8A&pid=ImgRaw&r=0" 
          alt="Esgela Coding Bootcamp" 
          className="w-full h-96 object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Us Esgela Coding Bootcamp</h1>
          <p className="text-center font-semibold text-lg max-w-2xl">
          Learn to code online for free with Esgela, a rural-based bootcamp dedicated to empowering learners in the tech industry.
          </p>
        </div>
      </div>

      {/* Overlapping Bottom Section */}
      <div className="relative bg-white text-black p-8 rounded-lg shadow-lg max-w-7xl mx-auto -mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-xl font-bold mb-6">Call us directly at</h2>
            <p className="text-yellow-700 text-2xl font-semibold mb-4">+27 784 300 901</p>
            <p className="mb-8">Ask any Question about Us</p>
            <h3 className="text-lg font-bold mb-4">Chat with us on WhatsApp</h3>
            <button
              className="bg-green-700 text-white flex items-center px-4 py-2 rounded-lg"
              onClick={() => window.open('https://wa.me/27784300901', '_blank')}
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </button>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold mb-6">Book a Meeting</h2>
            <p className="mb-8">
            To connect with our team at Esgela, fill out the form below and click "Next" to choose a suitable meeting time.
            </p>
            <form className="space-y-4">
                <div className="flex space-x-4">
                  <input type="text" className="w-1/2 p-3 border rounded-md" placeholder="First Name" />
                  <input type="text" className="w-1/2 p-3 border rounded-md" placeholder="Last Name" />
                </div>
                <div className="flex space-x-4">
                <input type="email" className="w-full p-3 border rounded-md" placeholder="Email" />
                <select className="w-full p-3 border rounded-md">
                  <option>Select Your Interest</option>
                  <option>Join as a Learner</option>
                  <option>Join as a Mentor</option>
                  <option>Inquire about Partnerships</option>
                  <option>Employment Opportunities</option>
                </select>
                </div>
                <textarea className="w-full bg-white p-8 text-black border rounded-md" placeholder="Your message..."></textarea>
                <button className="w-full bg-yellow-700 text-white py-2 rounded-lg font-bold">Send</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;