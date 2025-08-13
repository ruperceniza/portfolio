import React from 'react';

interface IconProps {
  label: string;
  img: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ label, img, onClick }) => {
  return (
    <div
      className="flex flex-col items-center text-center cursor-pointer"
      onDoubleClick={onClick}
    >
      <img
        src={`/icons/${img}`}
        alt={label}
        className="w-12 h-12"
        style={{ imageRendering: 'pixelated' }}
      />
      <span className="text-white text-xs mt-1">{label}</span>
    </div>
  );
};

export default Icon;
