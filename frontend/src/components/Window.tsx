import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';

interface WindowProps {
  title: string;
  iconSrc?: string;
  onClose: () => void;
  onMinimize?: () => void; 
  onMaximize?: () => void;
  onFocus?: () => void;
  isActive?: boolean;
  zIndex?: number;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({
  title,
  iconSrc,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  isActive,
  zIndex,
  children,
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [originalDimensions, setOriginalDimensions] = useState({
    width: 700,
    height: 550,
    top: 50,
    left: 50,
  });

  const handleToggleMaximize = () => {
    if (!isMaximized) {
      if (nodeRef.current) {
        const rect = nodeRef.current.getBoundingClientRect();
        const currentTop = parseInt(nodeRef.current.style.top) || 100;
        const currentLeft = parseInt(nodeRef.current.style.left) || 100;
        
        const safeTop = Math.max(0, Math.min(currentTop, window.innerHeight - 100));
        const safeLeft = Math.max(0, Math.min(currentLeft, window.innerWidth - 200));
        
        setOriginalDimensions({
          width: rect.width,
          height: rect.height,
          top: safeTop,
          left: safeLeft,
        });
      }
    }
    setIsMaximized(!isMaximized);
    
    if (onMaximize) {
      onMaximize();
    }
  };

  const BAR = 22;
  const BTN = 11;
  const CLOSE_BTN = 11;

  return (
    <Draggable 
      handle=".window-titlebar" 
      nodeRef={nodeRef} 
      disabled={isMaximized}
      bounds={{
        left: -400,
        top: 0,
        right: window.innerWidth - 100,
        bottom: window.innerHeight - 50
      }}
    >
      <div
        ref={nodeRef}
        onMouseDown={onFocus}
        style={{
          zIndex,
          width: isMaximized ? 'calc(100vw - 4px)' : originalDimensions.width,
          height: isMaximized ? 'calc(100vh - 40px)' : originalDimensions.height,
          background: "#C0C0C0",
          border: "2px solid #000",
          boxShadow: "2px 2px #000",
          position: "absolute",
          top: isMaximized ? 0 : originalDimensions.top,
          left: isMaximized ? 0 : originalDimensions.left,
        }}
      >
        <div
          className="window-titlebar"
          style={{
            height: BAR,
            background: isActive ? "navy" : "gray",
            color: "white",
            fontWeight: "bold",
            fontSize: 13,
            display: "flex",
            alignItems: "center",
            paddingLeft: 4,
            position: "relative",
            userSelect: "none",
          }}
        >
          {iconSrc && (
            <img
              src={iconSrc}
              alt=""
              style={{ width: 16, height: 16, marginRight: 4 }}
            />
          )}
          {title}

          <div className="win95-caption__buttons">
            <button 
              className="minimize-button button"
              onClick={onMinimize} 
              aria-label="Minimize"
            >
              <span>_</span>
            </button>

            <button 
              className="expand-button button"
              onClick={handleToggleMaximize} 
              aria-label={isMaximized ? "Restore" : "Maximize"}
            >
              <span>{isMaximized ? '❐' : '□'}</span>
            </button>

            <button 
              className="close-button button"
              onClick={onClose} 
              aria-label="Close"
            >
              <span>×</span>
            </button>
          </div>
        </div>

        <div style={{ 
          padding: 10, 
          overflow: 'auto',
          height: `calc(100% - ${BAR}px)`,
          boxSizing: 'border-box',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          {children}
        </div>
      </div>
    </Draggable>
  );
};

interface BtnProps {
  onClick?: () => void;
  ariaLabel?: string;
  size?: number;
  children: React.ReactNode;
}

const Win95Btn: React.FC<BtnProps> = ({ onClick, ariaLabel, size = 18, children }) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#C0C0C0",
        border: "2px solid #fff",
        borderRightColor: "#404040",
        borderBottomColor: "#404040",
        padding: 0,
        margin: 0,
        outline: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Window;
