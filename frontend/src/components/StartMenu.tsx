import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { MdDescription, MdFolder } from 'react-icons/md';

interface StartMenuProps {
  openWindow: (title: string, content: React.ReactNode, icon?: string) => void;
}

const createResumeContent = () => (
  <div className="p-4 w-full text-sm pr-2 box-border bg-[#c0c0c0]">
    <div className="mx-auto max-w-full space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-lg font-bold">Ruper Art Ceniza</h2>
        <p className="text-sm">Software Developer</p>
        <p className="text-xs text-[#444]">Philippines 📍</p>
      </div>
      
      <div className="p-3 bg-[#d6d6d6] border border-[#808080] shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]">
        <h3 className="font-bold mb-2">Download Resume</h3>
        <p className="text-xs mb-3">Click below to view or download my resume:</p>
        <a 
          href="/resume.pdf" 
          className="inline-block px-3 py-1 bg-[#c0c0c0] border border-[#808080] text-xs hover:bg-[#dfdfdf] text-black no-underline"
          style={{ 
            borderTopColor: '#ffffff',
            borderLeftColor: '#ffffff',
            borderRightColor: '#404040',
            borderBottomColor: '#404040'
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume (PDF)
        </a>
      </div>

      <div className="p-3 bg-[#d6d6d6] border border-[#808080] shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]">
        <h3 className="font-bold mb-2">Quick Summary</h3>
        <p className="text-xs leading-relaxed">
          Currently a student while completing capstone project 
          on smart surveillance systems.
        </p>
      </div>

      <div className="p-3 bg-[#d6d6d6] border border-[#808080] shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]">
        <h3 className="font-bold mb-2">Contact Information</h3>
        <div className="text-xs space-y-1">
          <p>Email: your-email@example.com</p>
          <p>LinkedIn: linkedin.com/in/ruperceniza</p>
          <p>GitHub: github.com/ruperceniza</p>
        </div>
      </div>
    </div>
  </div>
);

const createProjectsContent = () => {
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
    <div className="p-4 w-full text-sm pr-2 box-border">
      <div className="mx-auto max-w-full space-y-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="p-3 bg-[#d6d6d6] border border-[#808080]
                       shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]">
            <div className="font-bold">{p.name}</div>
            <div className="text-[#444] mb-1">{p.desc}</div>
            {p.link && (
              <a 
                className="text-blue-700 underline text-xs" 
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

const StartMenu: React.FC<StartMenuProps> = ({ openWindow }) => {
  const menuItems = [
    {
      icon: <FaInstagram />,
      label: <span className="win95-menu-text">Instagram</span>,
      action: () => window.open('https://www.instagram.com/noisy.zoy/', '_blank'),
      bgColor: 'from-purple-500 via-pink-500 to-orange-400'
    },
    {
      icon: <FaFacebook />,
      label: <span className="win95-menu-text">Facebook</span>,
      action: () => window.open('https://www.facebook.com/rasceniza/', '_blank'),
      bgColor: 'bg-blue-600'
    },
    {
      icon: <FaLinkedin />,
      label: <span className="win95-menu-text">LinkedIn</span>,
      action: () => window.open('https://linkedin.com', '_blank'),
      bgColor: 'bg-blue-400'
    },
    {
      icon: <FaGithub />,
      label: <span className="win95-menu-text">Github</span>,
      action: () => window.open('https://github.com/ruperceniza', '_blank'),
      bgColor: 'bg-gray-800'
    },
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
                <div className={`w-7 h-7 rounded ${item.bgColor === 'from-purple-500 via-pink-500 to-orange-400' ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400' : item.bgColor}
                 flex items-center justify-center text-white`}>
                  <span className="text-lg">{item.icon}</span>
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
