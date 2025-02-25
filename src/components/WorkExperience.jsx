export const WorkExperience = ({ companyName, year, description, techStack, link }) => {
    return (
      <div className="relative   w-full max-w-3xl mx-auto p-6 bg-gray-900 rounded-xl shadow-md border border-gray-800 transition hover:bg-gray-800">
        {/* Year */}
        <div className="text-xs flex justify-between uppercase font-semibold tracking-wide text-slate-500">
          {year}
        </div>
  
        {/* Job Title & Company */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-teal-400 hover:underline flex items-center gap-2"
        >
          {companyName}
          <span>↗</span>
        </a>
  
        {/* Description */}
        <p className="mt-2 text-md text-gray-400">{description}</p>
  
        {/* Tech Stack */}
        <div className="px-2 py-1.5 text-xs  w-8 font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"> {techStack}</div>
      </div>
    );
  };
  