const ProjectCard = ({ title, description, github, demo, image }) => {
  return (
    <div className="bg-black-100 rounded-lg border border-black-200 
                    overflow-hidden p-6 reveal flex flex-col 
                    md:w-[450px] w-[390px] h-[500px]">
      {image && (
        <div className="md:h-[300px] md:w-[400px] h-[280px] w-auto mb-5">
          <img
            src={image}
            alt={title}
            className="w-auto md:h-[300px] md:w-[400px] h-[280px] object-cover bg-black-200 rounded-md mb-0"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-white-50">{title}</h3>
      <p className="text-sm text-blue-50 mt-2 flex-grow">{description}</p>
      <div className="flex gap-4 mt-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-100 text-white-50 py-2 px-4 rounded-md text-sm hover:opacity-80 transition"
        >
          GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white-50 text-black-100 py-2 px-4 rounded-md text-sm hover:opacity-90 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
