import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { MdDescription, MdFolder } from 'react-icons/md';

interface StartMenuProps {
  openWindow: (title: string, content: React.ReactNode) => void;
}

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
      action: () => openWindow('Résumé', <p>My resume </p>),
      bgColor: 'bg-yellow-400'
    },
    {
      icon: <MdDescription />,
      label: <span className="win95-menu-text">Projects</span>,
      action: () => openWindow('Projects', <p>Projects </p>),
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
