import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-12 w-full">
      <div className="flex flex-wrap items-start px-6">
      <div className="flex-shrink-0 w-2/3 max-w-xs">
      <img src="/favicon.jpg" alt="About Us" className="rounded shadow-sm w-full" />
        </div>
        <div className="flex-grow w-2/3 ml-8">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-gray-700">
            Esgela is an innovative online coding bootcamp based in the rural town of Port St. Johns. Founded by Onwabe Zibeke, a dedicated software developer and graduate of Durban University of Technology (DUT) in 2022, Esgela aims to provide accessible and free coding education to individuals regardless of their location or financial situation.
          </p>
          <p className="text-gray-700 mt-4">
            Our mission is to empower learners with essential coding skills through a range of courses, including HTML, CSS, JavaScript, React, TailwindCSS, and MongoDB. We believe in breaking down barriers to education and creating opportunities for everyone to thrive in the tech industry. Join us on this journey to unlock your potential and gain the knowledge needed to succeed in a rapidly evolving digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;