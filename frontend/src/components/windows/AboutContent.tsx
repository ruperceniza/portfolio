import React from 'react';

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
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
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

export default AboutContent;