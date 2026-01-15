"use client";
import React, { useState, ReactNode, useCallback, useEffect } from 'react';
import Icon from '@/components/Icon';
import Window from '@/components/Window';
import Taskbar from '@/components/Taskbar';
import AboutContent from '@/components/windows/AboutContent';
import ResumeContent from '@/components/windows/ResumeContent';
import PhotosContent from '@/components/windows/PhotosContent';
import MailContent from '@/components/windows/MailContent';
import ProjectContent from '@/components/windows/ProjectContent';
import { getProjects } from '@/lib/sanity';
import type { Project } from '@/types';

export interface WindowData {
  id: number;
  title: string;
  content: ReactNode;
  minimized?: boolean;
  zIndex: number;
  icon?: string;
  width?: number;
  height?: number;
  position?: { x: number; y: number };
}

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<number | null>(null);
  const [highestZIndex, setHighestZIndex] = useState(1);
  const [nextId, setNextId] = useState(1);
  const [allProjects, setAllProjects] = useState<Project[]>([]);

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

  const openWindow = useCallback((title: string, content: ReactNode, icon?: string, width?: number, height?: number) => {
    const existingWindow = windows.find(w => w.title === title);
    
    if (existingWindow) {
      if (existingWindow.minimized) {
        setWindows((prev) =>
          prev.map((w) => (w.id === existingWindow.id ? { ...w, minimized: false } : w))
        );
      }
      bringToFront(existingWindow.id);
      return;
    }
    
    const id = nextId;
    setNextId(prev => prev + 1);
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);

    setWindows((prev) => [
      ...prev,
      { id, title, content, minimized: false, zIndex: newZIndex, icon, width, height },
    ]);
    setActiveWindowId(id);
  }, [nextId, highestZIndex, windows, bringToFront]);

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

  const updateWindowPosition = useCallback((id: number, position: { x: number; y: number }) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, position } : w))
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      openWindow("Biography", <AboutContent />, "mycomputer.png", 900, 700);
    }, 500);

    // Fetch all projects from Sanity CMS
    getProjects()
      .then((sanityProjects) => {
        if (sanityProjects) {
          setAllProjects(sanityProjects);
        }
      })
      .catch((err) => console.error('Failed to fetch Sanity projects:', err));

    return () => clearTimeout(timer);
  }, []); 

  return (
    <div
      className="h-screen w-screen font-win95 relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/icons/wallpaper.jpg')" }}
    >
      <div className="flex">
        <div className="w-4 shrink-0" />
        <div className="absolute top-4 left-4 flex flex-col gap-6 items-start">
          <Icon
            label="Biography"
            img="mycomputer.png"
            size={64}
            labelSizeClass="text-sm"
            onClick={() => openWindow("Biography", <AboutContent />, "mycomputer.png", 900, 700)}
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
          
          {/* Dynamic Project Icons from Sanity CMS */}
          {allProjects.map((project) => (
            <Icon
              key={project.id}
              label={project.name}
              img={project.icon || "folder.png"}
              size={48}
              labelSizeClass="text-sm"
              onClick={() => {
                openWindow(project.fullName, <ProjectContent project={project} />, project.icon || "folder.png");
              }}
            />
          ))}
          
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
              width={win.width}
              height={win.height}
              position={win.position}
              onPositionChange={(position) => updateWindowPosition(win.id, position)}
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
        bringToFront={bringToFront}
      />
    </div>
  );
};

export default Desktop;
