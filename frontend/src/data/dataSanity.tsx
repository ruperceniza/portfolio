import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  EnvelopeIcon,
  FlagIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components-template/Icon/GithubIcon';
import InstagramIcon from '../components-template/Icon/InstagramIcon';
import LinkedInIcon from '../components-template/Icon/LinkedInIcon';
import TwitterIcon from '../components-template/Icon/TwitterIcon';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

// Import Sanity data
import { getAbout, getProjects, getSkills, getSocialLinks } from '@/lib/sanity';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'My Portfolio',
  description: 'Personal portfolio website',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Fetch and transform Sanity data to template format
 */
export async function getSanityData() {
  const [about, projects, skills, socials] = await Promise.all([
    getAbout(),
    getProjects(),
    getSkills(),
    getSocialLinks(),
  ]);

  // Hero section
  const heroData: Hero = {
    imageSrc: about?.heroImage || '/work/oha-webpage.png',
    name: about?.name || "I'm Your Name",
    description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          {about?.tagline || 'Your tagline here'}
        </p>
        {about?.bio && (
          <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            {about.bio}
          </p>
        )}
      </>
    ),
    actions: [
      {
        href: about?.resumeUrl || '/assets/resume.pdf',
        text: 'Resume',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
      {
        href: `#${SectionId.Contact}`,
        text: 'Contact',
        primary: false,
      },
    ],
  };

  // About section
  const aboutData: About = {
    profileImageSrc: about?.profileImage || '/photos/me.png',
    description: about?.description || about?.bio || 'Tell us about yourself...',
    aboutItems: [
      ...(about?.location ? [{ label: 'Location', text: about.location, Icon: MapIcon }] : []),
      ...(about?.age ? [{ label: 'Age', text: about.age.toString(), Icon: CalendarIcon }] : []),
      ...(about?.nationality ? [{ label: 'Nationality', text: about.nationality, Icon: FlagIcon }] : []),
      ...(about?.interests ? [{ label: 'Interests', text: about.interests, Icon: SparklesIcon }] : []),
      ...(about?.study ? [{ label: 'Study', text: about.study, Icon: AcademicCapIcon }] : []),
      ...(about?.employment ? [{ label: 'Employment', text: about.employment, Icon: BuildingOffice2Icon }] : []),
    ],
  };

  // Skills section
  const skillsData: SkillGroup[] = skills && skills.length > 0
    ? [
        {
          name: 'Technical Skills',
          skills: skills.map((skill: any) => ({
            name: skill.name,
            level: skill.level || 8,
            max: 10,
          })),
        },
      ]
    : [];

  // Portfolio section
  const portfolioItems: PortfolioItem[] = projects?.map((project: any) => ({
    title: project.name || project.fullName,
    description: project.description || '',
    url: project.url || project.githubUrl || '#',
    image: project.screenshot || project.image || '/work/test-image.png',
  })) || [];

  // Education timeline (placeholder - add to Sanity if needed)
  const education: TimelineItem[] = [];

  // Experience timeline (placeholder - add to Sanity if needed)
  const experience: TimelineItem[] = [];

  // Contact section
  const contact: ContactSection = {
    headerText: 'Get In Touch',
    description: 'Feel free to reach out for collaborations or just a friendly chat!',
    items: [
      {
        type: ContactType.Email,
        text: about?.email || 'your.email@example.com',
        href: `mailto:${about?.email || 'your.email@example.com'}`,
      },
      ...(about?.phone
        ? [
            {
              type: ContactType.Phone,
              text: about.phone,
              href: `tel:${about.phone}`,
            },
          ]
        : []),
      ...(about?.location
        ? [
            {
              type: ContactType.Location,
              text: about.location,
            },
          ]
        : []),
    ],
  };

  // Social links
  const socialLinks: Social[] = socials?.map((social: any) => {
    let Icon = GithubIcon;
    const platform = social.platform?.toLowerCase() || social.name?.toLowerCase() || '';
    
    if (platform.includes('github')) Icon = GithubIcon;
    else if (platform.includes('linkedin')) Icon = LinkedInIcon;
    else if (platform.includes('twitter') || platform.includes('x')) Icon = TwitterIcon;
    else if (platform.includes('instagram')) Icon = InstagramIcon;

    return {
      label: social.platform || social.name,
      Icon,
      href: social.url,
    };
  }) || [];

  return {
    heroData,
    aboutData,
    skillsData,
    portfolioItems,
    education,
    experience,
    contact,
    socialLinks,
  };
}
