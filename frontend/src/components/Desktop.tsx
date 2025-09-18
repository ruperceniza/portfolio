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
  icon?: string;
}

const Badge: React.FC<{ text: string }> = ({ text }) => (
  <span
    className="inline-block px-2 py-[2px] text-xs bg-[#ececec]
               border border-[#808080]
               shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]"
  >
    {text}
  </span>
);

const AboutContent: React.FC = () => {
  const badges = [
    { label: "React", color: "61dafb", logo: "react", textColor: "000000" },
    { label: "Next.js", color: "000000", logo: "nextdotjs", textColor: "ffffff" },
    { label: "TypeScript", color: "3178c6", logo: "typescript", textColor: "ffffff" },
    { label: "JavaScript", color: "f7df1e", logo: "javascript", textColor: "000000" },
    { label: "HTML5", color: "e34f26", logo: "html5", textColor: "ffffff" },
    { label: "CSS3", color: "1572b6", logo: "css", textColor: "ffffff" },
    { label: "TailwindCSS", color: "06b6d4", logo: "tailwindcss", textColor: "ffffff" },
    { label: "Flutter", color: "02569b", logo: "flutter", textColor: "ffffff" },
    { label: "Node.js", color: "339933", logo: "nodedotjs", textColor: "ffffff" },
    { label: "Python", color: "3776ab", logo: "python", textColor: "ffffff" },
    { label: "Django", color: "092e20", logo: "django", textColor: "ffffff" },
    { label: "PostgreSQL", color: "336791", logo: "postgresql", textColor: "ffffff" },
    { label: "Firebase", color: "ffca28", logo: "firebase", textColor: "000000" },
    { label: "Git", color: "f05032", logo: "git", textColor: "ffffff" },
  ];

  return (
    <div className="p-6 w-full text-[13px] text-black leading-[1.6] pr-2 box-border bg-[#c0c0c0]">
      <div className="mx-auto max-w-full space-y-8">
        <div className="space-y-3">
          <img
            src="/photos/me.jpg"
            alt="Ruper"
            className="block w-full h-auto mx-auto
                       border border-[#808080]
                       shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <h1 className="font-bold text-[22px] mt-4">Ruper Art Ceniza</h1>
          <p className="text-[#333] -mt-1">Software Developer</p>
          <p className="text-[12px] text-[#444]">Philippines 📍</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {badges.map((b) => (
              <img
                key={b.label}
                src={`https://img.shields.io/badge/${encodeURIComponent(b.label)}-${b.color}?logo=${b.logo}&logoColor=${b.textColor}`}
                alt={b.label}
                className="h-5"
              />
            ))}
          </div>
        </div>

        <section className="space-y-2">
          <h2 className="font-bold underline">About Me</h2>
          <p>
            I am a developer passionate about building user-friendly and scalable applications.
            I enjoy combining creativity with problem-solving, focusing on writing clean, maintainable code and designing seamless user experiences.
            I stay curious about emerging technologies and best practices, continuously refining my skills to adapt to the ever-evolving tech landscape.
            My approach balances technical precision with adaptability, allowing me to contribute effectively to both individual and collaborative projects.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold underline">Employment / Experience</h2>
          <div>
            <h3 className="font-bold">Freelance Developer (2022–Present)</h3>
            <p className="text-[#444] text-[12px] mb-1">Core Team, Lead Engineer</p>
            <p>
              Built websites and small apps; emphasized accessibility, performance, and maintainable UI systems.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Smart-Surveillance-System (Capstone, 2025–2026)</h3>
            <p className="text-[#444] text-[12px] mb-1">Real-time vision pipeline</p>
            <p>
              Prototyped a home surveillance system using YOLOv8 pose/face + Python with a modular alerting workflow.
            </p>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold underline">Projects & Achievements</h2>
          <div>
            <h3 className="font-bold">Portfolio</h3>
            <p className="text-[#444] text-[12px] mb-1">TypeScript • Next.js</p>
            <p>Retro Windows-95 inspired UI with draggable windows and a taskbar.</p>
          </div>
          <div>
            <h3 className="font-bold">OHA Traveler’s System</h3>
            <p className="text-[#444] text-[12px] mb-1">Django • PostgreSQL</p>
            <p>PMS + booking + inventory workflows with clean data models and admin tooling.</p>
          </div>
        </section>

        <section className="space-y-2 pb-2">
          <h2 className="font-bold underline">Résumé</h2>
          <a href="/resume.pdf" className="text-red-600 underline">View my résumé</a>
        </section>
      </div>
    </div>
  );
};

const ProjectsContent: React.FC = () => {
  const projects = [
    {
      name: "Portfolio",
      desc: "Personal portfolio built with TypeScript, featuring a retro Windows 95-inspired UI.",
      link: "https://github.com/ruperceniza/Portfolio",
    },
    {
      name: "Smart-Surveillance-System",
      desc: "2025–2026 capstone project focused on real-time surveillance and intelligent detection.",
      link: "https://github.com/ruperceniza/Smart-Surveillance-System",
    },
    {
      name: "ohatravelersystem",
      desc: "Public web project built with HTML, emphasizing simplicity and accessibility.",
      link: "https://github.com/ruperceniza/ohatravelersystem",
    },
  ];

  return (
    <div className="p-4 w-full text-sm pr-2 box-border">
      <div className="mx-auto max-w-full space-y-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="p-3 bg-[#d6d6d6] border border-[#808080]
                       shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]">
            <div className="font-bold">{p.name}</div>
            <div className="text-[#444] mb-1">{p.desc}</div>
            {p.link && (
              <a 
                className="text-blue-700 underline text-xs" 
                href={p.link} 
                target="_blank" 
                rel="noreferrer"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<number | null>(null);
  const [highestZIndex, setHighestZIndex] = useState(1);

  const bringToFront = (id: number) => {
    setHighestZIndex((prev) => prev + 1);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: highestZIndex + 1 } : w))
    );
    setActiveWindowId(id);
  };

  const openWindow = (title: string, content: ReactNode, icon?: string) => {
    const id = Date.now();
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);

    setWindows((prev) => [
      ...prev,
      { id, title, content, minimized: false, zIndex: newZIndex, icon },
    ]);
    setActiveWindowId(id);
  };

  const closeWindow = (id: number) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const toggleMinimize = (id: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w))
    );
    bringToFront(id);
  };

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
            onClick={() => openWindow("Projects", <ProjectsContent />, "folder.png")}
          />
          <Icon
            label="Mail"
            img="mail.png"
            size={64}
            labelSizeClass="text-sm"
            onClick={() => window.location.href = 'mailto:your-email@example.com'}
          />
        </div>
      </div>

      {windows.map(
        (win) =>
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
