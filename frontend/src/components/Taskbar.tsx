"use client";
import React, { useState, useRef, useEffect } from "react";
import StartMenu from "./StartMenu";
import { WindowData } from "@/components/Desktop";

interface TaskbarProps {
  windows: WindowData[];
  openWindow: (title: string, content: React.ReactNode) => void;
  toggleMinimize: (id: number) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ windows, openWindow, toggleMinimize }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-300 border-t border-gray-500 flex items-center px-2">
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 px-3 py-1 bg-[#C0C0C0] border border-gray-500 shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080] hover:brightness-105"
        >
          <img src="/icons/start-icon.jpg" alt="Start" className="w-5 h-5" />
          <span className="font-sans text-sm font-bold">Start</span>
        </button>

        {isMenuOpen && (
          <div ref={menuRef} className="absolute bottom-10 left-0">
            <StartMenu openWindow={openWindow} />
          </div>
        )}
      </div>

      <div className="flex-1 flex items-center gap-1 overflow-x-auto ml-2">
        {windows.map((win) => (
          <button
            key={win.id}
            onClick={() => toggleMinimize(win.id)}
            className={`flex items-center px-2 py-1 text-sm border border-gray-500 bg-gray-200 hover:bg-gray-100 truncate ${
              win.minimized ? "opacity-60" : "opacity-100"
            }`}
            title={win.title}
          >
            {win.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Taskbar;
