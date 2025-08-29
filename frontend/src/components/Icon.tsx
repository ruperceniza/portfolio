import React from 'react';

interface IconProps {
  label: string;
  img: string;
  onClick?: () => void;
  size?: number;             
  labelSizeClass?: string;
}

const Icon: React.FC<IconProps> = ({
  label,
  img,
  onClick,
  size = 48,
  labelSizeClass = "text-xs"
}) => {
  return (
    <div
      className="flex flex-col items-center text-center cursor-pointer"
      onDoubleClick={onClick}
    >
      <img
        src={`/icons/${img}`}
        alt={label}
        className="block w-12 h-12"
        style={{
          width: size,
          height: size,
          imageRendering: "pixelated",
        }}
      />
      <span
       className={`text-white ${labelSizeClass} mt-[1px] leading-none`}
       style={{marginTop: "1px",lineHeight: "1px", fontSize: "14.5px",  }}>{label}</span>
    </div>
  );
};

export default Icon;
