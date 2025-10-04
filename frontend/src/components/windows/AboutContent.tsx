import React, { memo } from 'react';
import { SKILLS_BADGES } from '@/constants/skills';

const AboutContent: React.FC = memo(() => {

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
            {SKILLS_BADGES.map((badge) => (
              <img
                key={badge.label}
                src={`https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${badge.color}?logo=${badge.logo}&logoColor=${badge.textColor}`}
                alt={badge.label}
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
});

export default AboutContent;