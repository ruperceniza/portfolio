import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { MdDescription, MdFolder } from 'react-icons/md';
import { PROJECTS } from '@/constants/projects';
import { SOCIAL_LINKS } from '@/constants/social';
import { StartMenuProps } from '@/types';



const createProjectsContent = () => {

  return (
    <div className="p-4 w-full text-sm pr-2 box-border">
      <div className="mx-auto max-w-full space-y-3">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="p-3 bg-[#d6d6d6] border border-[#808080]
                       shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]">
            <div className="font-bold">{project.name}</div>
            <div className="text-[#444] mb-1">{project.desc}</div>
            {project.link && (
              <a 
                className="text-blue-700 underline text-xs" 
                href={project.link} 
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

const StartMenu: React.FC<StartMenuProps> = ({ openWindow }) => {
  const menuItems = [
    ...SOCIAL_LINKS.map(social => ({
      icon: <social.icon color={social.color} size={20} />,
      label: <span className="win95-menu-text">{social.name}</span>,
      action: () => window.open(social.url, '_blank'),
      bgColor: 'bg-gray-200'
    })),
    { divider: true },
    {
      icon: <MdFolder />,
      label: <span className="win95-menu-text">Résumé</span>,
      action: () => window.open('/resume.pdf', '_blank'),
      bgColor: 'bg-yellow-400'
    },
    {
      icon: <MdDescription />,
      label: <span className="win95-menu-text">Projects</span>,
      action: () => openWindow('Projects', createProjectsContent(), 'folder.png'),
      bgColor: 'bg-green-500'
    },
  ];

  return (
    <div className="startmenu flex h-[230px] w-[165px] overflow-y-auto">
      <div className="bg-[#7b7d7b] text-[#bdbebd] font-bold text-xs px-2 py-4 writing-mode-vertical win95-font">
        <span className="text-[#bdbebd]">Windows</span>
        <span className="text-[#fbfbfb]">95</span>
      </div>

      <ul className="flex-1 bg-[#C0C0C0]">
        {menuItems.map((item, idx) =>
          item.divider ? (
            <hr key={idx} className="border-t border-gray-500 my-1" />
          ) : (
            <li
              key={idx}
              className="startmenu-item win95-font min-w-0 w-full"
              onClick={item.action}
            >
              <div className="startmenu-icon">
                <div className={`w-7 h-7 rounded ${item.bgColor} flex items-center justify-center`}>
                  {item.icon}
                </div>
              </div>
              <span className="truncate">{item.label}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default StartMenu;
