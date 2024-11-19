import React from 'react';

const Mission = () => {
  return (
    <div className="bg-white py-12 w-full">
      <div className="flex flex-wrap items-start px-6">
        <div className="flex-grow max-w-full">
          <h2 className="text-3xl font-bold mb-8">Why You Should Choose Our Courses</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-yellow-700 mr-4">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Share your Certificate</h3>
                <p className="text-gray-600">Stand out to your professional network by sharing your certificate.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-yellow-700 mr-4">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Learn from Industry Experts</h3>
                <p className="text-gray-600">Get in-depth, hands-on learning from industry experts.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-yellow-700 mr-4">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Free Lifetime Access</h3>
                <p className="text-gray-600">Gain access to free guides on career paths, salary trends, and more.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-yellow-700 mr-4">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Flexible Learning</h3>
                <p className="text-gray-600">Learn at your own pace from any location, using any device.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg w- ml-auto">
          {/* This is the image taken as a screenshot in one of the courses (HTML) */}
          <img src="/esgela.png" alt="esgela" className="rounded shadow-sm w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
  