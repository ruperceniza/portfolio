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
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className="flex flex-col items-center text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#008080] rounded-sm"
      onDoubleClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open ${label} window`}
      style={{ width: '80px' }}
    >
      <div 
        className="flex items-center justify-center"
        style={{ 
          width: '64px', 
          height: '64px',
          minHeight: '64px'
        }}
      >
        <img
          src={`/icons/${img}`}
          alt={`${label} icon`}
          className="block"
          style={{
            width: size,
            height: size,
            imageRendering: imageRendering,
            aspectRatio: aspectRatio,
            objectFit: "contain",
          }}
        />
      </div>
      <span
       className={`text-white ${labelSizeClass} mt-0 leading-none`}
       style={{marginTop: "-2px", lineHeight: "1px", fontSize: "14.5px", width: '80px', textAlign: 'center', wordWrap: 'break-word'}}
       id={`icon-label-${label.toLowerCase().replace(/\s+/g, '-')}`}
       aria-hidden="true"
      >
        {label}
      </span>
    </div>
  );
};

export default Icon;
