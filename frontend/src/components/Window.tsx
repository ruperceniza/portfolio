import React from 'react';
import Draggable from 'react-draggable';

interface WindowProps {
  title: string;
  onClose: () => void;
  onMinimize?: () => void; 
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ title, onClose, onMinimize, children }) => {
  return (
    <div className="absolute top-20 left-20 w-96 bg-gray-100 border border-gray-500 shadow-lg">
      <div className="flex justify-between items-center bg-blue-600 text-white px-2 py-1">
        <span className="font-bold">{title}</span>
        <div className="flex gap-1">
          {onMinimize && (
            <button
              className="bg-gray-200 text-black px-1"
              onClick={onMinimize}
            >
              _
            </button>
          )}
          <button
            className="bg-red-500 text-white px-1"
            onClick={onClose}
          >
            X
          </button>
        </div>
      </div>

      <div className="p-2">{children}</div>
    </div>
  );
};


export default Window;
