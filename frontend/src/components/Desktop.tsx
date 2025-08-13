"use client";
import React, { useState, ReactNode } from 'react';
import Icon from '@/components/Icon';
import Window from '@/components/Window';
import Taskbar from '@/components/Taskbar';

interface WindowData {
  id: number;
  title: string;
  content: ReactNode;
}

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowData[]>([]);

  const openWindow = (title: string, content: ReactNode) => {
    setWindows(prev => [...prev, { id: Date.now(), title, content }]);
  };

  const closeWindow = (id: number) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className="h-screen w-screen bg-win95Gray font-win95 relative">
      {/* Desktop Icons */}
      <div className="p-4 grid grid-cols-2 gap-4">
        <Icon
          label="About Me"
          img="/mycomputer.png"
          onClick={() =>
            openWindow(
              'About Me',
              <div>
                <p>Hello! I’m your name.</p>
                <p>This is my retro portfolio site.</p>
              </div>
            )
          }
        />
        <Icon
          label="Projects"
          img="/folder.png"
          onClick={() =>
            openWindow(
              'Projects',
              <div>
                <ul>
                  <li>Project 1</li>
                  <li>Project 2</li>
                </ul>
              </div>
            )
          }
        />
      </div>

      {/* Windows */}
      {windows.map((win) => (
        <Window
          key={win.id}
          title={win.title}
          onClose={() => closeWindow(win.id)}
        >
          {win.content}
        </Window>
      ))}

      {/* Taskbar */}
      <Taskbar windows={windows} />
    </div>
  );
};

export default Desktop;
