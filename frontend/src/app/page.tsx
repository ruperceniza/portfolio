import { homePageMeta } from '@/data/data';
import HomeClient from './HomeClient';
import { getAbout, getProjects, getSkills, getSocialLinks, getEducation, getExperience } from '@/lib/sanity';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: homePageMeta.title,
  description: homePageMeta.description,
};

export default async function Home() {
  // Fetch Sanity data on server
  const [about, projects, skills, socials, education, experience] = await Promise.all([
    getAbout(),
    getProjects(),
    getSkills(),
    getSocialLinks(),
    getEducation(),
    getExperience(),
  ]);

  return (
    <HomeClient
      about={about}
      projects={projects}
      skills={skills}
      socials={socials}
      education={education}
      experience={experience}
    />
  );
}
