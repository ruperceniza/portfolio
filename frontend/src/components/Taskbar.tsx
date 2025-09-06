"use client";
import React, { useState, useRef, useEffect } from "react";
import StartMenu from "./StartMenu";
import { WindowData } from "@/components/Desktop";

interface TaskbarProps {
  windows: WindowData[];
  openWindow: (title: string, content: React.ReactNode, icon?: string) => void;
  toggleMinimize: (id: number) => void;
  setActiveWindowId: (id: number | null) => void;
  activeWindowId: number | null;
}

const Taskbar: React.FC<TaskbarProps> = ({
  windows,
  openWindow,
  toggleMinimize,
  setActiveWindowId,
  activeWindowId
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");

  const toggleMenu = () => setIsMenuOpen((p) => !p);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handleTaskbarClick = (win: WindowData) => {
    if (win.minimized) {
      toggleMinimize(win.id);
    }
    setActiveWindowId(win.id);
  };

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-9 bg-[#C0C0C0] flex items-center justify-between
                 shadow-[inset_0_1px_0_#ffffff,inset_0_-1px_0_#808080]
                 border-t border-[#808080] !pl-[6px] pr-6"
    >
      <div className="flex items-center flex-1">
        <div className="relative">
          <button
            onClick={toggleMenu}
            aria-pressed={isMenuOpen}
            className={`win95-start-button flex items-center justify-start h-6 w-[56px] pl-px pr-1
                        bg-[#C0C0C0] border border-[#808080]
                        ${isMenuOpen ? "win95-start-button--pressed" : ""}`}
          >
            <img src="/icons/start-icon.png" alt="Start" className="w-5 h-5 -translate-x-[8px]" />
            <span className="win95-font text-sm font-bold text-black leading-none -translate-x-[3px]">
              Start
            </span>
          </button>

          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute bottom-full left-0 -translate-y-[6px] -translate-x-[6px]"
            >
              <StartMenu openWindow={openWindow} />
            </div>
          )}
        </div>

        <div className="w-[12px]" aria-hidden />

        <div className="flex items-center overflow-x-auto no-scrollbar gap-[6px]">
          {windows.map((win) => {
            const isActive = win.id === activeWindowId;

            return (
              <button
                key={win.id}
                onMouseDown={() => setActiveWindowId(win.id)}
                onClick={() => handleTaskbarClick(win)}
                aria-pressed={isActive}
                title={win.title}
                className={[
                  "navbar-item",
                  isActive ? "navbar-item--pressed" : "navbar-item--inactive",
                  win.minimized ? "navbar-item--minimized" : "",
                ].join(" ")}
              >
                <img
                  src={`/icons/${win.icon || 'folder.png'}`}
                  alt=""
                  className="w-7 h-7"
                />
                <span className="win95-font leading-none">{win.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center h-7 bg-[#C0C0C0] border border-gray-500 shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#808080]">
          <div className="w-7 h-7 flex items-center justify-center">
            <img src="/icons/speaker.png" alt="Speaker" className="w-7 h-7" />
          </div>
          <div className="h-7 pl-3 pr-2 flex items-center justify-end">
            <span className="win95-font text-[11px] text-black">{time}</span>
            <span className="w-[4px] shrink-0" aria-hidden />
          </div>
        </div>
        <div className="w-1 shrink-0" aria-hidden />
      </div>
    </div>
  );
};

export default Taskbar;
