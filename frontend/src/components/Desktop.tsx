"use client";
import React, { useState, ReactNode, useCallback } from 'react';
import Icon from '@/components/Icon';
import Window from '@/components/Window';
import Taskbar from '@/components/Taskbar';
import AboutContent from '@/components/windows/AboutContent';
import ResumeContent from '@/components/windows/ResumeContent';
import PhotosContent from '@/components/windows/PhotosContent';
import MailContent from '@/components/windows/MailContent';

export interface WindowData {
  id: number;
  title: string;
  content: ReactNode;
  minimized?: boolean;
  zIndex: number;
  icon?: string;
}

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<number | null>(null);
  const [highestZIndex, setHighestZIndex] = useState(1);
  const [nextId, setNextId] = useState(1);

  const bringToFront = useCallback((id: number) => {
    setHighestZIndex((prev) => {
      const newZIndex = prev + 1;
      setWindows((prevWindows) =>
        prevWindows.map((w) => (w.id === id ? { ...w, zIndex: newZIndex } : w))
      );
      return newZIndex;
    });
    setActiveWindowId(id);
  }, []);

  const openWindow = useCallback((title: string, content: ReactNode, icon?: string) => {
    const id = nextId;
    setNextId(prev => prev + 1);
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);

    setWindows((prev) => [
      ...prev,
      { id, title, content, minimized: false, zIndex: newZIndex, icon },
    ]);
    setActiveWindowId(id);
  }, [nextId, highestZIndex]);

  const closeWindow = useCallback((id: number) => {
    setWindows((prev) => {
      const remaining = prev.filter((w) => w.id !== id);
      if (activeWindowId === id) {
        const topWindow = remaining.reduce((max, win) => 
          !max || win.zIndex > max.zIndex ? win : max, null as WindowData | null
        );
        setTimeout(() => setActiveWindowId(topWindow?.id || null), 0);
      }
      return remaining;
    });
  }, [activeWindowId]);

  const toggleMinimize = useCallback((id: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w))
    );
    bringToFront(id);
  }, [bringToFront]);

  return (
    <div
      className="h-screen w-screen font-win95 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/icons/wallpaper.jpg')" }}
    >
      <div className="flex">
        <div className="w-4 shrink-0" />
        <div className="absolute top-4 left-4 flex flex-col gap-6 items-start">
          <Icon
            label="About Me"
            img="mycomputer.png"
            size={64}
            labelSizeClass="text-sm"
            onClick={() => openWindow("About Me", <AboutContent />, "mycomputer.png")}
          />
          <Icon
            label="Résumé"
            img="folder.png"
            size={64}
            labelSizeClass="text-sm"
            onClick={() => openWindow("Résumé", <ResumeContent />, "folder.png")}
          />
          <Icon
            label="Mail"
            img="mail.png"
            size={64}
            labelSizeClass="text-sm"
            onClick={() => openWindow("Mail", <MailContent />, "mail.png")}
          />
          <Icon
            label="Photos"
            img="photos.png"
            size={75}
            labelSizeClass="text-sm"
            imageRendering="pixelated"
            aspectRatio="1/1"
            onClick={() => openWindow("Photos", <PhotosContent />, "photos.png")}
          />
        </div>
      </div>

      {windows.map(
        (win) =>
          !win.minimized && (
            <Window
              key={win.id}
              title={win.title}
              iconSrc={win.icon ? `/icons/${win.icon}` : undefined}
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
