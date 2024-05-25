import Image from "next/image";

const ProjectCard = ({ title, imageSrc, imageAlt, description, note, noteLink, liveLink, codeLink }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={500}
                className="border-2 border-black my-4"
            />
            {description && <p className="text-gray-700 mb-4">{description}</p>}
            {note && (
                <p className="text-sm text-gray-500 mb-4">
                    <span className="text-red-500 font-semibold">Note:</span> {note} 
                    <a href={noteLink} className="text-blue-600 hover:underline ml-1">Click Here</a>
                </p>
            )}
            <div className="flex justify-between items-center">
                <a href={liveLink} className="text-blue-600 hover:underline">Live Link</a>
                <a href={codeLink} className="text-blue-600 hover:underline">View Code</a>
            </div>
        </div>
    )
}
export default ProjectCard;