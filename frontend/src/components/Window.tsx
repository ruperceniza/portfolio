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
  const BTN = 18;
  const CLOSE_BTN = 20;

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

          <div
            style={{
              position: "absolute",
              right: 2,
              top: Math.floor((BAR - BTN) / 2),
              height: BTN,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Win95Btn size={BTN} onClick={onMinimize} ariaLabel="Minimize">
              <div style={{ width: 8, height: 2, background: "#000" }} />
            </Win95Btn>

            <Win95Btn size={BTN} onClick={onMaximize} ariaLabel="Maximize">
              <div style={{ width: 10, height: 8, border: "1px solid #000" }} />
            </Win95Btn>

            <Win95Btn size={CLOSE_BTN} onClick={onClose} ariaLabel="Close">
              <span style={{ color: "#000", fontWeight: 700, fontSize: 12 }}>
                ×
              </span>
            </Win95Btn>
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
