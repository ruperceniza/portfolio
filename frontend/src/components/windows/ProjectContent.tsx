import React, { memo } from 'react';
import { Project } from '@/types';

interface ProjectContentProps {
  project: Project;
}

const ProjectContent: React.FC<ProjectContentProps> = memo(({ project }) => {
  return (
    <div className="p-8 w-full text-[13px] text-black leading-[1.8] bg-[#c0c0c0] overflow-y-auto max-h-full">
      <div className="max-w-full mx-auto space-y-12" style={{ paddingLeft: '48px', paddingRight: '48px' }}>
        
        <div className="space-y-4 pb-4 border-b-2 border-gray-400">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex-1 min-w-0">
            </div>
          </div>
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="space-y-3" style={{ marginBottom: '20px' }}>
            <div className="bg-gray-100 border-2 border-gray-300 rounded p-4 text-center">
              <img 
                src={project.screenshots[0]} 
                alt=""
                className="w-full h-auto border border-gray-400 rounded shadow-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-gray-500 text-sm mt-4">
                <div className="text-4xl mb-2">🖼️</div>
                <p>Image not available</p>
                <p className="text-xs mt-1">Add image URL to project.screenshots array</p>
              </div>
            </div>
          </div>
        )}

        {project.screenshots && project.screenshots.length > 1 && (
          <div className="space-y-8" style={{ marginTop: '10px' }}>
            <div className="text-left" style={{ marginBottom: '10px' }}>
              <h3 className="text-base font-bold text-gray-800">Dashboard View</h3>
            </div>
            
            <div className="space-y-6">
              {project.screenshots.slice(1).map((screenshot, index) => (
                <div key={index} className="bg-gray-100 border-2 border-gray-300 rounded p-4 text-center">
                  <img 
                    src={screenshot} 
                    alt=""
                    className="w-full h-auto border border-gray-400 rounded shadow-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden text-gray-500 text-sm mt-4">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p>Image not available</p>
                    <p className="text-xs mt-1">Add image URL to project.screenshots array</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3" style={{ marginTop: '30px' }}>
              <p className="text-sm leading-relaxed text-gray-700 pl-2 border-l-4 border-blue-400 bg-[#c0c0c0] p-4 rounded-r">
                {project.longDescription || project.description}
              </p>
            </div>
          </div>
        )}

        <div className="space-y-3" style={{ marginTop: '12px' }}>
          <h3 className="text-base font-bold text-gray-800 border-b border-gray-300 pb-1"><strong>Technologies Used</strong></h3>
          <div className="flex gap-2 flex-wrap pl-4">
            {project.technologies.map((tech) => {
              // Color mapping for different technologies
              const getColorAndLogo = (technology: string) => {
                switch(technology.toLowerCase()) {
                  case 'django': return { color: '092e20', logo: 'django' };
                  case 'html': return { color: 'e34f26', logo: 'html5' };
                  case 'css': return { color: '1572b6', logo: 'css3' };
                  case 'javascript': return { color: 'f7df1e', logo: 'javascript' };
                  case 'supabase': return { color: '3ecf8e', logo: 'supabase' };
                  case 'python': return { color: '3776ab', logo: 'python' };
                  case 'yolov8': return { color: '00599c', logo: 'opencv' };
                  case 'opencv': return { color: '5c3ee8', logo: 'opencv' };
                  case 'tensorflow': return { color: 'ff6f00', logo: 'tensorflow' };
                  case 'flask': return { color: '000000', logo: 'flask' };
                  case 'dart': return { color: '0175c2', logo: 'dart' };
                  case 'flutter': return { color: '02569b', logo: 'flutter' };
                  case 'gpt-4': return { color: '412991', logo: 'openai' };
                  case 'firebase': return { color: 'ffca28', logo: 'firebase' };
                  case 'api integration': return { color: '009688', logo: 'api' };
                  case 'material design': return { color: '757575', logo: 'materialdesign' };
                  default: return { color: '4285f4', logo: technology.toLowerCase().replace(/[^a-z0-9]/g, '') };
                }
              };
              const { color, logo } = getColorAndLogo(tech);
              return (
                <img
                  key={tech}
                  src={`https://img.shields.io/badge/${encodeURIComponent(tech)}-${color}?logo=${logo}&logoColor=white`}
                  alt={tech}
                  className="h-5"
                />
              );
            })}
          </div>
        </div>

        {/* Links */}
        <div className="space-y-3 pt-4 border-t-2 border-gray-400" style={{ marginTop: '12px' }}>
          <div className="space-y-3 pl-4">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-800 text-sm rounded hover:bg-gray-100 transition-colors border border-gray-400 shadow-sm"
            >
              <span>🔗</span>
              <span>View this on GitHub</span>
            </a>
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors border border-blue-500 shadow-sm ml-0 md:ml-3"
              >
                <span>🌐</span>
                <span>View Live Demo</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
});

ProjectContent.displayName = 'ProjectContent';

export default ProjectContent;