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
          <div className="space-y-3" style={{ marginBottom: '24px' }}>
            <h3 className="font-bold">OHA Travelers' Inn Website and PMS | Fullstack Developer </h3>
            <p className="text-[#444] text-[12px] mb-1">June 2025</p>
            <ul className="list-disc list-inside space-y-2 pl-4 leading-[1.8]">
              <li>• Built a full-stack Property Management System for a small hotel, supporting room booking, housekeeping, inventory tracking, and staff coordination</li>
              <li>• Developed RESTful APIs using Django REST Framework and integrated Supabase (PostgreSQL) for data management</li>
              <li>• Implemented dynamic front-end features with HTML, CSS, JavaScript, jQuery, DataTables, and SweetAlert2</li>
              <li>• Integrated secure authentication via Supabase Auth (Google OAuth)</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <div className="space-y-3" style={{ marginBottom: '24px' }}>
            <h3 className="font-bold">Real-Time Home Intruder Detection Using YOLOv8n for Face and Pose Detection with Local Face Recognition | Backend Developer</h3>
            <p className="text-[#444] text-[12px] mb-1">November 2025</p>
            <ul className="list-disc list-inside space-y-2 pl-4 leading-[1.8]">
              <li>• Developed a real-time home surveillance system integrating YOLOv8n-face, YOLOv8n-pose, and local face recognition</li>
              <li>• Implemented advanced face recognition using InsightFace with 512-dimensional embeddings</li>
              <li>• Built AI behavioral analysis to detect crouching, climbing, and loitering</li>
              <li>• Designed a full production pipeline for data preprocessing, detection, recognition, and alerting</li>
            </ul>
          </div>
          <div className="space-y-3" style={{ marginBottom: '24px' }}>
            <h3 className="font-bold">MedEase AI Chatbot Inventory System | Backend Developer</h3>
            <p className="text-[#444] text-[12px] mb-1">August 2025</p>
            <ul className="list-disc list-inside space-y-2 pl-4 leading-[1.8]">
              <li>• Built modern pharmacy management solution with AI-powered conversational interfaces</li>
              <li>• Integrated GPT-4 for natural language queries and inventory management</li>
              <li>• Developed real-time inventory tracking and transaction processing</li>
              <li>• Implemented chatbot interface for pharmacists to interact using natural language</li>
            </ul>
          </div>
          <div className="space-y-3" style={{ marginBottom: '24px' }}>
            <h3 className="font-bold">Univents | Fullstack Developer</h3>
            <p className="text-[#444] text-[12px] mb-1">September 2025</p>
            <ul className="list-disc list-inside space-y-2 pl-4 leading-[1.8]">
              <li>• Created comprehensive university event management platform</li>
              <li>• Developed features for event creation, management, and participation</li>
              <li>• Built user registration, and authentication</li>
              <li>• Implemented push notifications and calendar integration</li>
            </ul>
          </div>
            <div className="space-y-3" style={{ marginBottom: '24px' }}>
            <h3 className="font-bold">SAMAHAN Newsfeed Website | DevOps Engineer</h3>
            <p className="text-[#444] text-[12px] mb-1">2025</p>
            <ul className="list-disc list-inside space-y-2 pl-4 leading-[1.8]">
              <li>• Managed deployment and infrastructure for student organization website</li>
              <li>• Configured server environment</li>
            </ul>
          </div>
            <div className="space-y-3" style={{ marginBottom: '24px' }}>
            <h3 className="font-bold">SAMAHAN Systems Development Website | DevOps Engineer</h3>
            <p className="text-[#444] text-[12px] mb-1">2025</p>
            <ul className="list-disc list-inside space-y-2 pl-4 leading-[1.8]">
              <li>• Managed deployment and infrastructure for student organization website</li>
              <li>• Configured server environment</li>
            </ul>
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