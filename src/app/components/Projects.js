import Image from 'next/image';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div id="projects" className="bg-blue-50 py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
                    <p className="text-lg text-gray-600 mx-auto w-11/12 md:w-8/12 lg:w-7/12">
                        Here you will find some of my projects along with their live links and code repositories.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard
                        title="EatMore Food Delivery"
                        imageSrc="/images/eatMore.jpg"
                        imageAlt="EatMore Food Delivery"
                        description="EatMore is a web application that helps users discover nearby restaurants and browse their available menus. Users can add their favorite items to a cart and place orders seamlessly."
                        note="Please install the CORS plugin to avoid CORS errors on your browser."
                        noteLink="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
                        liveLink="https://eatfoodmore.netlify.app/"
                        codeLink="https://github.com/brijwasiharshit/EatMore-Food-Delivery"
                    />
                    <ProjectCard
                        title="Netflix GPT"
                        imageSrc="/images/netflix.png"
                        imageAlt="Netflix GPT"
                        description="Netflix-GPT is a dynamic web platform that provides users with trending movies. It also offers personalized recommendations based on the genres they search, utilizing OpenAI's API for enhanced suggestions."
                        liveLink="https://movies-gpt.netlify.app/"
                        codeLink="https://github.com/brijwasiharshit/netflix-gpt"
                    />
                    <ProjectCard
                        title="Recipe-Harshit"
                        imageSrc="/images/harshitRecipe.png"
                        imageAlt="Recipe-Harshit"
                        description="RecipeHarshit is a website that provides users the recipe for their favorite food items. It uses the Spoonacular API to fetch detailed info about the food items."
                        liveLink="https://recipeharshit.netlify.app"
                        codeLink="https://github.com/brijwasiharshit/Wobot"
                    />
                </div>
            </div>
        </div>
    );
};



export default Projects;
