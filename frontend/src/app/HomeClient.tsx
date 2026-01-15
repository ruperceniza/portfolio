'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import About from '@/components-template/Sections/About';
import Contact from '@/components-template/Sections/Contact';
import Footer from '@/components-template/Sections/Footer';
import Hero from '@/components-template/Sections/Hero';
import Portfolio from '@/components-template/Sections/Portfolio';
import Resume from '@/components-template/Sections/Resume';
import { setSanityData, setUpdateCallback } from '@/data/data';

// Header must be loaded client-side only
const Header = dynamic(() => import('@/components-template/Sections/Header'), { ssr: false });

interface HomeClientProps {
  about: any;
  projects: any[];
  skills: any[];
  socials: any[];
  education: any[];
  experience: any[];
}

export default function HomeClient({ about, projects, skills, socials, education, experience }: HomeClientProps) {
  const [dataLoaded, setDataLoaded] = useState(false);
  
  // Set Sanity data globally on mount
  useEffect(() => {
    console.log('=== SANITY DATA DEBUG ===');
    console.log('Skills received:', skills);
    console.log('About received:', about);
    console.log('Education received:', education);
    console.log('Experience received:', experience);
    
    // Set up update callback to force re-render
    setUpdateCallback(() => {
      setDataLoaded(prev => !prev);
    });
    
    setSanityData(about, projects, skills, socials, education, experience);
  }, [about, projects, skills, socials, education, experience]);

  return (
    <>
      <Header />
      <Hero key={`hero-${dataLoaded}`} />
      <About key={`about-${dataLoaded}`} />
      <Resume key={`resume-${dataLoaded}`} />
      <Portfolio key={`portfolio-${dataLoaded}`} />
      <Contact key={`contact-${dataLoaded}`} />
      <Footer />
    </>
  );
}
