import React, { memo } from 'react';
import { SKILLS_BADGES } from '@/constants/skills';

const AboutContent: React.FC = memo(() => {

  return (
    <div className="p-6 w-full text-[13px] text-black leading-[1.8] pr-2 box-border bg-[#c0c0c0]">
      <div className="mx-auto max-w-full space-y-8" style={{ paddingLeft: '48px', paddingRight: '48px' }}>
        <div className="space-y-4">
          <div className="flex justify-center">
            <img
              src="/photos/me.png"
              alt="Ruper"
              className="block w-48 h-auto m-4
                         border border-[#808080]
                         shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <h1 className="font-bold text-[22px] mt-4">Ruper Art Ceniza</h1>
          <p className="text-[12px] text-[#444]">Philippines📍</p>

          <div style={{ marginBottom: '16px' }}></div>

          <div className="flex flex-wrap gap-2 pt-2">
            {SKILLS_BADGES.map((badge) => (
              <img
                key={badge.label}
                src={`https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${badge.color}?logo=${badge.logo}&logoColor=${badge.textColor}`}
                alt={badge.label}
                className="h-5"
              />
            ))}
          </div>

          <div style={{ marginBottom: '20px' }}></div>
        </div>

        <section className="space-y-3">
          <h2 className="font-bold underline">About Me</h2>
          <p className="leading-[1.8]" style={{ lineHeight: '1.8' }}>
            I'm a 22-year-old IT student who's passionate about exploring technology and building innovative solutions. 
            I have a strong interest in both web development and software development, constantly learning new frameworks, 
            languages, and tools to expand my skillset.
            <br /><br />
            Through my studies and personal projects, I've gained experience in various programming languages and technologies. 
            I enjoy the challenge of solving complex problems and turning ideas into functional applications. 
            My curiosity drives me to stay updated with the latest trends in technology and development practices.
          </p>
        </section>

        <div style={{ marginBottom: '24px' }}></div>

        <section className="space-y-3">
          <h2 className="font-bold underline">Experience & Projects</h2>
          <div className="space-y-3">

          </div>
          <div className="space-y-3">
            <h3 className="font-bold">Project 1</h3>
            <p className="text-[#444] text-[12px] mb-1">Short Description</p>
            <p className="leading-[1.8]">
              Description
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <div className="space-y-3">
            <h3 className="font-bold">Project 2</h3>
            <p className="text-[#444] text-[12px] mb-1">Tech Stack</p>
            <p className="leading-[1.8]">Description</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold">Project 3</h3>
            <p className="text-[#444] text-[12px] mb-1">Tech Stack</p>
            <p className="leading-[1.8]">Description</p>
          </div>
        </section>

        <section className="space-y-2 pb-2">
          <h2 className="font-bold underline">Résumé</h2>
          <a href="/resume.pdf" className="text-red-600 underline">View my résumé</a>
        </section>
      </div>
    </div>
  );
});

export default AboutContent;