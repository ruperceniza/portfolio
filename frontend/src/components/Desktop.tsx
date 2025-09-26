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
          <p className="text-[#333] -mt-1">Dev Role</p>
          <p className="text-[12px] text-[#444]">Location 📍</p>

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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold underline">Employment / Experience</h2>
          <div>
            <h3 className="font-bold">Role</h3>
            <p className="text-[#444] text-[12px] mb-1">Position</p>
            <p>
              Description
            </p>
          </div>
          <div>
            <h3 className="font-bold">Project 1</h3>
            <p className="text-[#444] text-[12px] mb-1">Short Description</p>
            <p>
              Description
            </p>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold underline">Projects & Achievements</h2>
          <div>
            <h3 className="font-bold">Project 2</h3>
            <p className="text-[#444] text-[12px] mb-1">Tech Stack</p>
            <p>Description</p>
          </div>
          <div>
            <h3 className="font-bold">Project 3</h3>
            <p className="text-[#444] text-[12px] mb-1">Tech Stack</p>
            <p>Description</p>
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

const ResumeContent: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#c0c0c0] overflow-hidden">
      <div className="bg-[#c0c0c0] p-1">
        <div className="flex gap-1 border-b border-[#808080] pb-1">
          <a 
            href="/resume.pdf" 
            download
            className="h-7 flex items-center bg-[#c0c0c0] text-[12px] text-black no-underline whitespace-nowrap font-win95"
            style={{ 
              border: '2px solid',
              borderTopColor: 'white',
              borderLeftColor: 'white',
              borderRightColor: '#404040',
              borderBottomColor: '#404040',
              boxShadow: 'inset -1px -1px #808080, inset 1px 1px #ffffff',
              fontFamily: "'W95FA', sans-serif",
              paddingLeft: '8px',
              paddingRight: '8px',
              minWidth: '70px',
              justifyContent: 'center',
              color: '#000000'
            }}
          >
            Download
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="h-7 flex items-center bg-[#c0c0c0] text-[12px] text-black no-underline whitespace-nowrap font-win95"
            style={{ 
              border: '2px solid',
              borderTopColor: 'white',
              borderLeftColor: 'white',
              borderRightColor: '#404040',
              borderBottomColor: '#404040',
              boxShadow: 'inset -1px -1px #808080, inset 1px 1px #ffffff',
              fontFamily: "'W95FA', sans-serif",
              paddingLeft: '8px',
              paddingRight: '8px',
              minWidth: '110px',
              justifyContent: 'center',
              color: '#000000'
            }}
          >
            Open in New Tab
          </a>
        </div>
      </div>
      
      <div className="h-1 bg-[#c0c0c0]"></div>
      
      <div className="flex-1 bg-black w-full overflow-hidden">
        <iframe 
          src="/resume.pdf" 
          className="w-full h-full border-none"
          style={{ backgroundColor: 'black' }}
          title="Resume PDF Viewer"
        />
      </div>
      
      <div className="bg-[#c0c0c0] h-5 border-t border-[#808080] px-2 text-xs flex justify-between items-center text-black">
        <div>Page 1</div>
        <div>100%</div>
      </div>
    </div>
  );
};

const PhotosContent: React.FC = () => {
  const photos = [
    {
      src: "/photos/me.jpg",
      title: "Profile Photo",
      description: "Professional headshot"
    },
  ];

  return (
    <div className="p-4 w-full text-sm pr-2 box-border bg-[#c0c0c0]">
      <div className="mx-auto max-w-full space-y-4">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold">Photo Gallery</h2>
          <p className="text-xs text-[#444]">Personal and professional photos</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="p-3 bg-[#d6d6d6] border border-[#808080] shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-auto mb-2 border border-[#808080]"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="text-center">
                <div className="font-bold text-xs">{photo.title}</div>
                <div className="text-xs text-[#444]">{photo.description}</div>
              </div>
            </div>
          ))}
        </div>
        
        {photos.length === 0 && (
          <div className="text-center p-8 bg-[#d6d6d6] border border-[#808080] shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]">
            <p className="text-xs text-[#444]">No photos available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const MailContent: React.FC = () => {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    from: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSend = () => {
    const mailtoUrl = `mailto:${formData.to}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="w-full h-full bg-[#c0c0c0] flex flex-col" style={{ fontFamily: 'MS Sans Serif, sans-serif' }}>
      <div className="bg-[#c0c0c0] border-b border-[#808080] p-1">
        <button 
          onClick={handleSend}
          className="px-3 py-1 bg-[#c0c0c0] border border-[#808080] text-xs hover:bg-[#dfdfdf] active:border-[#404040]"
          style={{ 
            borderTopColor: '#ffffff',
            borderLeftColor: '#ffffff',
            borderRightColor: '#404040',
            borderBottomColor: '#404040'
          }}
        >
          Send
        </button>
      </div>

      <div className="p-4 bg-[#c0c0c0]">
        <h2 className="text-lg font-bold mb-4 text-black">New Message</h2>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <label className="w-12 text-sm text-black">To:</label>
            <input
              type="email"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              className="flex-1 px-2 py-1 border border-[#808080] bg-white text-sm text-black"
              placeholder="recipient@example.com"
              style={{
                borderTopColor: '#404040',
                borderLeftColor: '#404040',
                borderRightColor: '#ffffff',
                borderBottomColor: '#ffffff',
                color: '#000000'
              }}
            />
          </div>

          <div className="flex items-center">
            <label className="w-12 text-sm text-black">Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="flex-1 px-2 py-1 border border-[#808080] bg-white text-sm text-black"
              style={{
                borderTopColor: '#404040',
                borderLeftColor: '#404040',
                borderRightColor: '#ffffff',
                borderBottomColor: '#ffffff',
                color: '#000000'
              }}
            />
          </div>

          <div className="flex items-center">
            <label className="w-12 text-sm text-black">From:</label>
            <input
              type="email"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              className="flex-1 px-2 py-1 border border-[#808080] bg-white text-sm text-black"
              placeholder="your-email@example.com"
              style={{
                borderTopColor: '#404040',
                borderLeftColor: '#404040',
                borderRightColor: '#ffffff',
                borderBottomColor: '#ffffff',
                color: '#000000'
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 pt-0">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full h-full p-2 border border-[#808080] bg-white text-sm resize-none text-black"
          placeholder="Type your message here..."
          style={{
            borderTopColor: '#404040',
            borderLeftColor: '#404040',
            borderRightColor: '#ffffff',
            borderBottomColor: '#ffffff',
            minHeight: '300px',
            color: '#000000'
          }}
        />
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
            size={64}
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
