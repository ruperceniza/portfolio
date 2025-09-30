import React from 'react';

interface IconProps {
  label: string;
  img: string;
  onClick?: () => void;
  size?: number;             
  labelSizeClass?: string;
  imageRendering?: "auto" | "pixelated" | "crisp-edges";
  aspectRatio?: string;
}

const Icon: React.FC<IconProps> = ({
  label,
  img,
  onClick,
  size = 48,
  labelSizeClass = "text-xs",
  imageRendering = "pixelated",
  aspectRatio = "1/1"
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
          imageRendering: imageRendering,
          aspectRatio: aspectRatio,
          objectFit: "contain",
        }}
      />
      <span
       className={`text-white ${labelSizeClass} mt-0 leading-none`}
       style={{marginTop: "-2px", lineHeight: "1px", fontSize: "14.5px"}}>{label}</span>
    </div>
  );
};

export default Icon;
