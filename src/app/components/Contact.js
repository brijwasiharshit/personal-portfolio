import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Me</h1>
          <p className="text-lg text-gray-600">
            Kindly submit the form below so that I can reach out to you.
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
            />
          </div>
          <div>
            <textarea
              placeholder="Enter Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
