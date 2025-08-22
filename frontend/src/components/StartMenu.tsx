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
      label: 'Instagram',
      action: () => window.open('https://www.instagram.com/noisy.zoy/', '_blank'),
      bgColor: 'from-purple-500 via-pink-500 to-orange-400'
    },
    {
      icon: <FaFacebook />,
      label: 'Facebook',
      action: () => window.open('https://www.facebook.com/rasceniza/', '_blank'),
      bgColor: 'bg-blue-600'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      action: () => window.open('https://linkedin.com', '_blank'),
      bgColor: 'bg-blue-400'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      action: () => window.open('https://github.com/ruperceniza', '_blank'),
      bgColor: 'bg-gray-800'
    },
    { divider: true },
    {
      icon: <MdFolder />,
      label: 'Résumé',
      action: () => openWindow('Résumé', <p>My resume </p>),
      bgColor: 'bg-yellow-400'
    },
    {
      icon: <MdDescription />,
      label: 'Projects',
      action: () => openWindow('Projects', <p>Projects </p>),
      bgColor: 'bg-green-500'
    },
  ];

  return (
    <div className="startmenu flex">
      <div className="bg-[#008080] text-white font-bold text-xs px-2 py-4 writing-mode-vertical win95-font">
        Windows95
      </div>

      <ul className="flex-1 bg-[#C0C0C0]">
        {menuItems.map((item, idx) =>
          item.divider ? (
            <hr key={idx} className="border-t border-gray-500 my-1" />
          ) : (
            <li
              key={idx}
              className="startmenu-item win95-font"
              onClick={item.action}
            >
              <div className="startmenu-icon">
                <div className={`w-6 h-6 rounded ${item.bgColor === 'from-purple-500 via-pink-500 to-orange-400' ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400' : item.bgColor} flex items-center justify-center text-white`}>
                  <span className="text-sm">{item.icon}</span>
                </div>
              </div>
              <span>{item.label}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default StartMenu;
