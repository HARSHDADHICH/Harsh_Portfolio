import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-4 text-white">
              <p className="font-medium">View Details</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-3">
            <span className="text-xs font-medium bg-teal-100 text-teal-800 px-2.5 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
          <p className="text-slate-600 line-clamp-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span 
                key={tech} 
                className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div 
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center" 
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-sm font-medium bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                {project.technologies.slice(0, 4).map((tech) => (
                  <span 
                    key={tech} 
                    className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{project.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Features</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Results</h4>
                <p className="text-slate-600 leading-relaxed">{project.results}</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-5 rounded-md transition-colors"
                  >
                    Live Site
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-900 text-white font-medium py-2 px-5 rounded-md transition-colors"
                  >
                    GitHub
                    <Github size={16} className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;