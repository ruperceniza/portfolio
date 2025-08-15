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
  zIndex: number; 
}

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<number | null>(null);
  const [highestZIndex, setHighestZIndex] = useState(1);

  const bringToFront = (id: number) => {
    setHighestZIndex(prev => prev + 1);
    setWindows(prev =>
      prev.map(w => w.id === id ? { ...w, zIndex: highestZIndex + 1 } : w)
    );
    setActiveWindowId(id);
  };

  const openWindow = (title: string, content: ReactNode) => {
    const id = Date.now();
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);

    setWindows(prev => [
      ...prev,
      { id, title, content, minimized: false, zIndex: newZIndex }
    ]);
    setActiveWindowId(id);
  };

  const closeWindow = (id: number) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const toggleMinimize = (id: number) => {
    setWindows(prev =>
      prev.map(w =>
        w.id === id ? { ...w, minimized: !w.minimized } : w
      )
    );
    bringToFront(id);
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
        win =>
          !win.minimized && (
            <Window
              key={win.id}
              title={win.title}
              onClose={() => closeWindow(win.id)}
              onMinimize={() => toggleMinimize(win.id)} 
              onFocus={() => bringToFront(win.id)} 
              isActive={activeWindowId === win.id}
              zIndex={win.zIndex} 
            >
              {win.content}
            </Window>
          )
      )}

      <Taskbar
        windows={windows}
        openWindow={openWindow}
        toggleMinimize={toggleMinimize}
        activeWindowId={activeWindowId}
        setActiveWindowId={setActiveWindowId}
      />
    </div>
  );
};

export default Desktop;
