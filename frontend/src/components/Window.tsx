import React, { useRef } from 'react';
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

  const BAR = 22;
  const BTN = 11;
  const CLOSE_BTN = 11;

  return (
    <Draggable handle=".window-titlebar" nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        onMouseDown={onFocus}
        style={{
          zIndex,
          width: 500,
          background: "#C0C0C0",
          border: "2px solid #000",
          boxShadow: "2px 2px #000",
          position: "absolute",
          top: 100,
          left: 100,
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
              onClick={onMaximize} 
              aria-label="Maximize"
            >
              <span>□</span>
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

        {/* Content */}
        <div style={{ padding: 10 }}>{children}</div>
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
