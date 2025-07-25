import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ title, description, github, demo, image }) => {
  return (
    <div className="bg-[var(--black-100)] rounded-lg border border-[var(--black-50)] overflow-hidden 
                    p-5 reveal flex flex-col sd:max-w-[400px] md:w-[450px] w-[350px] h-[550px]">
      {image && (
        <div className="relative md:h-[300px] md:w-[400px] h-[280px] w-auto mb-5">
          <img
            src={image}
            alt={title}
            className="absolute max-h-full w-full object-cover bg-[var(--black-200)] rounded-sm mb-0"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--white-50)]">{title}</h3>
      <p className="text-sm text-[var(--blue-50)] mt-2 flex-grow">{description}</p>
      <div className="flex flex-col justify-center gap-4 mt-4 w-full">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center justify-center w-full bg-[var(--blue-100)] text-center text-[var(--white-50)] py-3 px-6 rounded-lg font-semibold text-lg hover:opacity-80 transition"
        >
          View Code <FiGithub className="text-xl" />
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center justify-center w-full border border-[var(--white-50)] text-center text-[var(--white-50)] py-3 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transition"
        >
          Live Demo <FiExternalLink className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
