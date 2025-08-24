"use client";
import React, { useState, useRef, useEffect } from "react";
import StartMenu from "./StartMenu";
import { WindowData } from "@/components/Desktop";

interface TaskbarProps {
  windows: WindowData[];
  openWindow: (title: string, content: React.ReactNode) => void;
  toggleMinimize: (id: number) => void;
  setActiveWindowId: (id: number) => void; 
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
  const [time, setTime] = useState<string>("");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTaskbarClick = (win: WindowData) => {
    if (win.minimized) toggleMinimize(win.id);
    setActiveWindowId(win.id);
  };

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "2-digit" };
      setTime(now.toLocaleTimeString([], options));
    };
    updateClock();
    const interval = setInterval(updateClock, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-9 bg-[#C0C0C0] flex items-center justify-between shadow-[inset_0_1px_0_#fff,inset_0_-1px_0_#808080]
    border-t border-[#808080] !pl-[6px] pr-6">
      <div className="flex items-center gap-2 flex-1">
        <div className="relative">
          <button
            onClick={toggleMenu}
            aria-pressed={isMenuOpen}
            className={`win95-start-button flex items-center justify-start h-6 w-[56px] pl-px pr-1
              bg-[#C0C0C0] border border-gray-500 hover:brightness-105
              ${isMenuOpen ? 'win95-start-button--pressed' : ''}`}
          >
            <img src="/icons/start-icon.png" alt="Start" className="w-5 h-5 -translate-x-[8px]" />
            <span className="win95-font text-sm font-bold text-black leading-none inline-block -translate-x-[3px]">Start</span>
          </button>

        {isMenuOpen && (
          <div ref={menuRef} className="absolute bottom-full left-0 -translate-y-[6px] -translate-x-[6px] ">
            <StartMenu openWindow={openWindow} />
          </div>
        )}
      </div>

        <div className="flex items-center gap-1 overflow-x-auto ml-2">
          {windows.map((win) => (
            <button
              key={win.id}
              onClick={() => handleTaskbarClick(win)}
              className={`flex items-center px-2 py-1 text-sm border border-gray-500 truncate
                ${
                  win.id === activeWindowId
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : "bg-[#C0C0C0] hover:brightness-105"
                }
                ${win.minimized ? "opacity-60" : "opacity-100"}`}
              title={win.title}
            >
              {win.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center h-7 bg-[#C0C0C0] border border-gray-500 shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]">
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
