import React from 'react';
import { FaInstagram, FaReddit, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { MdDescription, MdFolder } from 'react-icons/md';

interface StartMenuProps {
  openWindow: (title: string, content: React.ReactNode) => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ openWindow }) => {
  const menuItems = [
    { icon: <FaInstagram />, label: 'Instagram', action: () => window.open('https://instagram.com', '_blank') },
    { icon: <FaReddit />, label: 'Reddit', action: () => window.open('https://reddit.com', '_blank') },
    { icon: <FaLinkedin />, label: 'LinkedIn', action: () => window.open('https://linkedin.com', '_blank') },
    { icon: <FaTwitter />, label: 'Twitter', action: () => window.open('https://twitter.com', '_blank') },
    { icon: <FaGithub />, label: 'GitHub', action: () => window.open('https://github.com', '_blank') },
    { divider: true },
    { icon: <MdDescription />, label: 'Résumé', action: () => openWindow('Résumé', <p>My resume </p>) },
    { icon: <MdFolder />, label: 'Projects', action: () => openWindow('Projects', <p>Projects </p>) },
  ];

  return (
    <div className="flex bg-[#C0C0C0] border border-gray-600 shadow-lg">
      <div className="bg-[#808080] text-white font-bold text-xs px-2 py-4 writing-mode-vertical">
        Windows95
      </div>

      <ul className="min-w-[200px]">
        {menuItems.map((item, idx) =>
          item.divider ? (
            <hr key={idx} className="border-t border-gray-500 my-1" />
          ) : (
            <li
              key={idx}
              className="flex items-center gap-2 px-3 py-1 hover:bg-blue-600 hover:text-white cursor-pointer text-sm"
              onClick={item.action}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default StartMenu;
