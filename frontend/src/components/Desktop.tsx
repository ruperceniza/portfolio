"use client";
import React, { useState, ReactNode } from 'react';
import Icon from '@/components/Icon';
import Window from '@/components/Window';
import Taskbar from '@/components/Taskbar';

export interface WindowData {
  id: number;
  title: string;
  content: ReactNode;
  minimized?: boolean;
}

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowData[]>([]);

  const openWindow = (title: string, content: ReactNode) => {
    setWindows((prev) => [
      ...prev,
      { id: Date.now(), title, content, minimized: false }
    ]);
  };

  const closeWindow = (id: number) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const toggleMinimize = (id: number) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, minimized: !w.minimized } : w
      )
    );
  };

  return (
    <div 
      className="h-screen w-screen font-win95 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/icons/wallpaper.jpg')"}}>

      <div className="p-4 grid grid-cols-2 gap-4">
        <Icon
          label="About Me"
          img="/mycomputer.png"
          onClick={() =>
            openWindow(
              'About Me',
              <div>
                <p>Hello! I’m Ruper.</p>
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

      {windows.map(
        (win) =>
          !win.minimized && (
            <Window
              key={win.id}
              title={win.title}
              onClose={() => closeWindow(win.id)}
              onMinimize={() => toggleMinimize(win.id)} 
            >
              {win.content}
            </Window>
          )
      )}

      <Taskbar
        windows={windows}
        openWindow={openWindow}
        toggleMinimize={toggleMinimize}
      />
    </div>
  );
};

export default Desktop;
