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
  const [draggableKey, setDraggableKey] = useState(0);
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
        const computedStyle = window.getComputedStyle(nodeRef.current);
        const transform = computedStyle.transform;
        
        let currentTop = originalDimensions.top;
        let currentLeft = originalDimensions.left;
        
        if (transform && transform !== 'none') {
          const matrix = transform.match(/matrix\(([^)]+)\)/);
          if (matrix) {
            const values = matrix[1].split(', ');
            currentLeft = parseFloat(values[4]) || currentLeft;
            currentTop = parseFloat(values[5]) || currentTop;
          }
        }
        
        const safeTop = Math.max(0, Math.min(currentTop, window.innerHeight - 200));
        const safeLeft = Math.max(0, Math.min(currentLeft, window.innerWidth - 300));
        
        setOriginalDimensions({
          width: rect.width,
          height: rect.height,
          top: safeTop,
          left: safeLeft,
        });
      }
    }
    
    setIsMaximized(!isMaximized);
    setDraggableKey(prev => prev + 1);
    
    if (onMaximize) {
      onMaximize();
    }
  };

  const BAR = 22;

  return (
    <Draggable 
      key={draggableKey}
      handle=".window-titlebar" 
      nodeRef={nodeRef} 
      disabled={isMaximized}
      defaultPosition={isMaximized ? { x: 0, y: 0 } : { x: 0, y: 0 }}
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
        role="dialog"
        aria-labelledby={`window-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
        aria-modal="false"
        tabIndex={-1}
        style={{
          zIndex,
          width: isMaximized ? '100vw' : originalDimensions.width,
          height: isMaximized ? 'calc(100vh - 40px)' : originalDimensions.height,
          background: "#C0C0C0",
          border: "2px solid #000",
          boxShadow: "2px 2px #000",
          position: isMaximized ? "fixed" : "absolute",
          top: isMaximized ? '0px' : originalDimensions.top,
          left: isMaximized ? '0px' : originalDimensions.left,
          transform: isMaximized ? 'none !important' : undefined,
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
              alt={`${title} window icon`}
              style={{ width: 30, height: 30 }}
            />
          )}
          <span id={`window-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</span>

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



export default Window;
