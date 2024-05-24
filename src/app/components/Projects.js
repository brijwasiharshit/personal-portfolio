import React from 'react';

const Projects = () => {
    return (
        <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-semibold text-gray-900 mb-4">Projects</h1>
                    <p className="text-lg text-gray-600 mx-auto w-11/12 md:w-8/12 lg:w-7/12">
                        Here you will find some of my projects along with their live links and code repositories.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project Cards will go here */}
                    {/* Example of a project card */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Project Name</h2>
                        <p className="text-gray-700 mb-4">Project Description goes here. It should be brief and concise.</p>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
                            <a href="#" className="text-blue-600 hover:underline">View Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
