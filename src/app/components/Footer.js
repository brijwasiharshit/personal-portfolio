import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="text-center text-white">
        <p className="mb-4 text-lg">&copy; 2024 Made By Harshit Brijwasi. All rights reserved.</p>
        <hr className="w-8/12 mx-auto border-gray-700" />
        <p className="my-4 text-lg">
          Follow me on
        </p>
        <div className="flex justify-center space-x-6">
        <a href="https://instagram.com" className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
            <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15.63c0 .28-.22.5-.5.5H7.5c-.28 0-.5-.22-.5-.5v-8.46c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v8.46z"/>
              <circle cx="15.5" cy="8.5" r="1.5"/>
              <path d="M12 7c-.83 0-1.5.67-1.5 1.5S11.17 10 12 10s1.5-.67 1.5-1.5S12.83 7 12 7zm6.34 9H5.66c-.38 0-.68-.28-.68-.66V9.5h1.7c-.17.36-.26.77-.26 1.19v5.94c0 1.65 1.35 3 3 3h6.62c1.65 0 3-1.35 3-3V9.5c0-.42-.09-.83-.26-1.19h1.7v5.84c0 .38-.3.66-.68.66z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/harshit-brijwasi-303774138/" className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
            <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.7c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.7h-3v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.16 1.45-2.16 2.95v5.71h-3v-11h2.89v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v6.47z" />
            </svg>
          </a>
          <a href="https://github.com/brijwasiharshit" className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
            <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.05-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.31 1.24.96-.27 1.99-.4 3.01-.41 1.02.01 2.05.14 3.01.41 2.29-1.56 3.3-1.24 3.3-1.24.67 1.64.25 2.86.12 3.16.78.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.38.82 1.12.82 2.25 0 1.62-.01 2.93-.01 3.34 0 .32.21.69.83.57 4.77-1.59 8.21-6.09 8.21-11.39 0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
