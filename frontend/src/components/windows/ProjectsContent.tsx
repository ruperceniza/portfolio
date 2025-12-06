import React from 'react';

const ProjectsContent: React.FC = () => {
  const projects = [
    {
      name: "Portfolio",
      desc: "Personal portfolio built with TypeScript, featuring a retro Windows 95-inspired UI.",
      link: "https://github.com/ruperceniza/Portfolio",
    },
    {
      name: "Smart-Surveillance-System",
      desc: "2025–2026 capstone project focused on real-time surveillance and intelligent detection.",
      link: "https://github.com/ruperceniza/Smart-Surveillance-System",
    },
    {
      name: "ohatravelersystem",
      desc: "Public web project built with HTML, emphasizing simplicity and accessibility.",
      link: "https://github.com/ruperceniza/ohatravelersystem",
    },
  ];

  return (
    <div className="p-4 w-full text-sm pr-2 box-border bg-[#c0c0c0]">
      <div className="mx-auto max-w-full space-y-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="p-3 bg-[#d6d6d6] border border-[#808080]
                       shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]"
            style={{ color: '#000000' }}>
            <div className="font-bold">{p.name}</div>
            <div className="mb-1">{p.desc}</div>
            {p.link && (
              <a 
                className="underline text-xs" 
                style={{ color: '#0000EE' }}
                href={p.link} 
                target="_blank" 
                rel="noreferrer"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;