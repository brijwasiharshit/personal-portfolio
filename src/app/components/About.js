import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-gray-900 mb-4 relative inline-block">
                        ABOUT ME 👨‍💻
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-pink-500 to-yellow-500 -mb-1"></span>
                    </h1>
                    <p className="text-lg text-gray-600 mx-auto w-11/12 md:w-8/12 lg:w-7/12 mb-8">
                        In this section, you'll get to know more about me, my skills, and the tech stack I work with!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Who am I?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            I'm a frontend-focused web developer dedicated to crafting captivating user experiences. With a keen eye for design and a passion for coding, I specialize in building and managing the frontend of websites and web applications.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow">HTML</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow">CSS / Tailwind CSS</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow">JavaScript</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow">ReactJs</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow">NextJs</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow">ReduxJs</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow">JEST</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow">Material UI</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow">NodeJs</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow">Express JS</span>
                            <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-lg shadow mx-auto">FireBase</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
