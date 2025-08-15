import React, { useRef } from 'react';
import Draggable from 'react-draggable';

interface WindowProps {
  title: string;
  onClose: () => void;
  onMinimize?: () => void; 
  onFocus?: () => void;
  isActive?: boolean;
  zIndex?: number;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({
  title,
  onClose,
  onMinimize,
  onFocus,
  isActive,
  zIndex,
  children,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable handle=".window-titlebar" nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className={`absolute top-20 left-20 w-[600px] 
          bg-[#C0C0C0] 
          border-2 
          border-t-white border-l-white border-b-[#808080] border-r-[#808080] 
          shadow-[2px_2px_#000]`}
        style={{ zIndex }}
        onMouseDown={onFocus}
      >
        <div
          className="window-titlebar flex justify-between items-center 
            bg-[#000080] text-white h-7 px-2 select-none
            border-b border-b-[#808080]"
        >
          <span className="font-bold">{title}</span>
          <div className="flex gap-1">
            {onMinimize && (
              <button
                className="w-6 h-6 bg-[#C0C0C0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] text-black flex items-center justify-center"
                onClick={onMinimize}
              >
                _
              </button>
            )}
            <button
              className="w-6 h-6 bg-[#C0C0C0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] text-black flex items-center justify-center"
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>

        <div
          className="bg-[#C0C0C0] p-2 overflow-auto"
          style={{ minHeight: "200px", maxHeight: "400px" }}
        >
          {children}
        </div>
      </div>
    </Draggable>
  );
};


export default Window;
