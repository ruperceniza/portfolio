import React from 'react';
import Draggable from 'react-draggable';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Window: React.FC<WindowProps> = ({ title, children, onClose }) => {
  return (
    <Draggable handle=".title-bar">
      <div
        className="window absolute"
        style={{
          top: '100px',
          left: '100px',
          width: '300px',
          zIndex: 1000,
        }}
      >
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={onClose}></button>
          </div>
        </div>
        <div className="window-body">{children}</div>
      </div>
    </Draggable>
  );
};

export default Window;
