import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';

// Store for Sanity data
let sanityAbout: any = null;
let sanityProjects: any[] = [];
let sanitySkills: any[] = [];
let sanitySocials: any[] = [];
let sanityEducation: any[] = [];
let sanityExperience: any[] = [];

// Callback to trigger re-renders
let updateCallback: (() => void) | null = null;

export function setUpdateCallback(callback: () => void) {
  updateCallback = callback;
}

// Function to set Sanity data
export function setSanityData(about: any, projects: any[], skills: any[], socials: any[], education?: any[], experience?: any[]) {
  sanityAbout = about;
  sanityProjects = projects || [];
  sanitySkills = skills || [];
  sanitySocials = socials || [];
  sanityEducation = education || [];
  sanityExperience = experience || [];
  
  // Trigger re-render if callback is set
  if (updateCallback) {
    updateCallback();
  }
}

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
 * Hero section
 */
let _heroData: Hero = {
  imageSrc: heroImage,
  name: "I'm Your Name",
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        An IT practitioner who's passionate about exploring technology and building innovative solutions. I have a strong interest in both web development and software development, constantly learning new frameworks, languages, and tools to expand my skillset.

      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
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

export const heroData = Object.defineProperty({} as Hero, 'valueOf', {
  get() {
    if (sanityAbout) {
      return {
        imageSrc: heroImage,
        name: sanityAbout.name || "I'm Your Name",
        description: (
          <>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
              {sanityAbout.description || 'Welcome to my portfolio'}
            </p>
          </>
        ),
        actions: [
          {
            href: '/assets/resume.pdf',
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
    }
    return _heroData;
  }
});

Object.defineProperty(heroData, 'imageSrc', {
  get() {
    return sanityAbout ? heroImage : _heroData.imageSrc;
  },
  enumerable: true,
});

Object.defineProperty(heroData, 'name', {
  get() {
    return sanityAbout?.name || _heroData.name;
  },
  enumerable: true,
});

Object.defineProperty(heroData, 'description', {
  get() {
    if (sanityAbout?.description) {
      return (
        <>
          <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            {sanityAbout.description}
          </p>
        </>
      );
    }
    return _heroData.description;
  },
  enumerable: true,
});

Object.defineProperty(heroData, 'actions', {
  get() {
    return [
      {
        href: '/assets/resume.pdf',
        text: 'Resume',
        primary: true,
        Icon: ArrowDownTrayIcon,
      },
      {
        href: `#${SectionId.Contact}`,
        text: 'Contact',
        primary: false,
      },
    ];
  },
  enumerable: true,
});

/**
 * About section
 */
let _aboutData: About = {
  profileImageSrc: profilepic,
  description: `Tell us about yourself...`,
  aboutItems: [],
};

export const aboutData = new Proxy({} as About, {
  get(target, prop) {
    if (sanityAbout) {
      const imageUrl = sanityAbout.photo || profilepic;
      
      if (prop === 'profileImageSrc') return imageUrl;
      if (prop === 'description') return sanityAbout.bio || 'Tell us about yourself...';
      if (prop === 'aboutItems') {
        const items = [];
        if (sanityAbout.location) items.push({ label: 'Location', text: sanityAbout.location, Icon: MapIcon });
        if (sanityAbout.age) items.push({ label: 'Age', text: String(sanityAbout.age), Icon: CalendarIcon });
        if (sanityAbout.nationality) items.push({ label: 'Nationality', text: sanityAbout.nationality, Icon: FlagIcon });
        if (sanityAbout.interests) items.push({ label: 'Interests', text: sanityAbout.interests, Icon: SparklesIcon });
        if (sanityAbout.study) items.push({ label: 'Study', text: sanityAbout.study, Icon: AcademicCapIcon });
        if (sanityAbout.employment) items.push({ label: 'Employment', text: sanityAbout.employment, Icon: BuildingOffice2Icon });
        return items;
      }
    }
    return _aboutData[prop as keyof About];
  }
});

/**
 * Skills section
 */
let _skills: SkillGroup[] = [];

export const skills = new Proxy([] as SkillGroup[], {
  get(target, prop) {
    if (prop === 'length') {
      // Return 2 groups for 2-column grid layout
      if (sanitySkills?.length > 0) {
        const frontend = sanitySkills.filter((skill: any) => skill.category === 'Frontend');
        const backend = sanitySkills.filter((skill: any) => skill.category === 'Backend');
        return [frontend, backend].filter(arr => arr.length > 0).length;
      }
      return 0;
    }
    if (prop === Symbol.iterator) {
      return function* () {
        if (sanitySkills?.length > 0) {
          const frontend = sanitySkills.filter((skill: any) => skill.category === 'Frontend');
          const backend = sanitySkills.filter((skill: any) => skill.category === 'Backend');
          if (frontend.length > 0) {
            yield {
              name: 'Frontend Development',
              skills: frontend.map((skill: any) => ({
                name: skill.label || skill.name || '',
                level: skill.level || 10,
              })),
            };
          }
          if (backend.length > 0) {
            yield {
              name: 'Backend Development',
              skills: backend.map((skill: any) => ({
                name: skill.label || skill.name || '',
                level: skill.level || 10,
              })),
            };
          }
        } else {
          for (const item of _skills) {
            yield item;
          }
        }
      };
    }
    if (typeof prop === 'string' && !isNaN(Number(prop))) {
      const index = Number(prop);
      if (sanitySkills?.length > 0) {
        const frontend = sanitySkills.filter((skill: any) => skill.category === 'Frontend');
        const backend = sanitySkills.filter((skill: any) => skill.category === 'Backend');
        const groups = [];
        if (frontend.length > 0) {
          groups.push({
            name: 'Frontend Development',
            skills: frontend.map((skill: any) => ({
              name: skill.label || skill.name || '',
              level: skill.level || 10,
            })),
          });
        }
        if (backend.length > 0) {
          groups.push({
            name: 'Backend Development',
            skills: backend.map((skill: any) => ({
              name: skill.label || skill.name || '',
              level: skill.level || 10,
            })),
          });
        }
        return groups[index];
      }
      return _skills[index];
    }
    if (prop === 'map' || prop === 'filter' || prop === 'forEach' || prop === 'find' || prop === 'some' || prop === 'every') {
      const frontend = sanitySkills.filter((skill: any) => skill.category === 'Frontend');
      const backend = sanitySkills.filter((skill: any) => skill.category === 'Backend');
      const groups = [];
      if (frontend.length > 0) {
        groups.push({
          name: 'Frontend Development',
          skills: frontend.map((skill: any) => ({
            name: skill.label || skill.name || '',
            level: skill.level || 10,
          })),
        });
      }
      if (backend.length > 0) {
        groups.push({
          name: 'Backend Development',
          skills: backend.map((skill: any) => ({
            name: skill.label || skill.name || '',
            level: skill.level || 10,
          })),
        });
      }
      return (groups as any)[prop].bind(groups);
    }
    return (target as any)[prop];
  }
});

/**
 * Portfolio section
 */
let _portfolioItems: PortfolioItem[] = [];

export const portfolioItems = new Proxy([] as PortfolioItem[], {
  get(target, prop) {
    if (prop === 'length') {
      return sanityProjects?.length || 0;
    }
    if (prop === Symbol.iterator) {
      return function* () {
        const projectsData = sanityProjects?.length > 0
          ? sanityProjects.map((project: any) => ({
              title: project.name || project.fullName || 'Untitled Project',
              description: project.longDescription || project.description || '',
              url: project.githubUrl || project.liveUrl || '#',
              image: (project.screenshots && project.screenshots[0]) || project.imageUrl || porfolioImage1,
            }))
          : _portfolioItems;
        
        for (const item of projectsData) {
          yield item;
        }
      };
    }
    if (typeof prop === 'string' && !isNaN(Number(prop))) {
      const index = Number(prop);
      const projectsData = sanityProjects?.length > 0
        ? sanityProjects.map((project: any) => ({
            title: project.name || project.fullName || 'Untitled Project',
            description: project.longDescription || project.description || '',
            url: project.githubUrl || project.liveUrl || '#',
            image: (project.screenshots && project.screenshots[0]) || project.imageUrl || porfolioImage1,
          }))
        : _portfolioItems;
      return projectsData[index];
    }
    if (prop === 'map' || prop === 'filter' || prop === 'forEach' || prop === 'find' || prop === 'some' || prop === 'every') {
      const projectsData = sanityProjects?.length > 0
        ? sanityProjects.map((project: any) => ({
            title: project.name || project.fullName || 'Untitled Project',
            description: project.longDescription || project.description || '',
            url: project.githubUrl || project.liveUrl || '#',
            image: (project.screenshots && project.screenshots[0]) || project.imageUrl || porfolioImage1,
          }))
        : _portfolioItems;
      return (projectsData as any)[prop].bind(projectsData);
    }
    return (target as any)[prop];
  }
});

/**
 * Resume section
 */
let _education: TimelineItem[] = [];

export const education = new Proxy([] as TimelineItem[], {
  get(target, prop) {
    if (prop === 'length') {
      return sanityEducation?.length || 0;
    }
    if (prop === Symbol.iterator) {
      return function* () {
        const educationData = sanityEducation?.length > 0
          ? sanityEducation.map((edu: any) => ({
              date: edu.date || '',
              location: edu.location || '',
              title: edu.title || '',
              content: edu.content || undefined,
            }))
          : _education;
        
        for (const item of educationData) {
          yield item;
        }
      };
    }
    if (typeof prop === 'string' && !isNaN(Number(prop))) {
      const index = Number(prop);
      const educationData = sanityEducation?.length > 0
        ? sanityEducation.map((edu: any) => ({
            date: edu.date || '',
            location: edu.location || '',
            title: edu.title || '',
            content: edu.content || undefined,
          }))
        : _education;
      return educationData[index];
    }
    if (prop === 'map' || prop === 'filter' || prop === 'forEach' || prop === 'find' || prop === 'some' || prop === 'every') {
      const educationData = sanityEducation?.length > 0
        ? sanityEducation.map((edu: any) => ({
            date: edu.date || '',
            location: edu.location || '',
            title: edu.title || '',
            content: edu.content || undefined,
          }))
        : _education;
      return (educationData as any)[prop].bind(educationData);
    }
    return (target as any)[prop];
  }
});

let _experience: TimelineItem[] = [];

export const experience = new Proxy([] as TimelineItem[], {
  get(target, prop) {
    if (prop === 'length') {
      return sanityExperience?.length || 0;
    }
    if (prop === Symbol.iterator) {
      return function* () {
        const experienceData = sanityExperience?.length > 0
          ? sanityExperience.map((exp: any) => ({
              date: exp.date || '',
              location: exp.location || '',
              title: exp.title || '',
              content: exp.content || undefined,
            }))
          : _experience;
        
        for (const item of experienceData) {
          yield item;
        }
      };
    }
    if (typeof prop === 'string' && !isNaN(Number(prop))) {
      const index = Number(prop);
      const experienceData = sanityExperience?.length > 0
        ? sanityExperience.map((exp: any) => ({
            date: exp.date || '',
            location: exp.location || '',
            title: exp.title || '',
            content: exp.content || undefined,
          }))
        : _experience;
      return experienceData[index];
    }
    if (prop === 'map' || prop === 'filter' || prop === 'forEach' || prop === 'find' || prop === 'some' || prop === 'every') {
      const experienceData = sanityExperience?.length > 0
        ? sanityExperience.map((exp: any) => ({
            date: exp.date || '',
            location: exp.location || '',
            title: exp.title || '',
            content: exp.content || undefined,
          }))
        : _experience;
      return (experienceData as any)[prop].bind(experienceData);
    }
    return (target as any)[prop];
  }
});

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: heroImage,
  testimonials: [],
};

/**
 * Contact section
 */
let _contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out!',
  items: [],
};

export const contact = new Proxy({} as ContactSection, {
  get(target, prop) {
    if (sanityAbout) {
      if (prop === 'headerText') return 'Get in touch.';
      if (prop === 'description') return 'I’m always up for a chat about tech, design, or new ideas! Reach out or find me on any of the platforms listed here. Looking forward to hearing from you!';
      if (prop === 'items') {
        const items = [];
        // Add email first
        if (sanityAbout.email) {
          items.push({
            type: ContactType.Email,
            text: sanityAbout.email,
            href: `mailto:${sanityAbout.email}`,
          });
        }
        // Add location
        if (sanityAbout.location) {
          items.push({
            type: ContactType.Location,
            text: sanityAbout.location,
            href: '#',
          });
        }
        // Add social links from sanitySocials
        if (sanitySocials?.length > 0) {
          for (const social of sanitySocials) {
            const platform = (social.name || social.platform || '').toLowerCase();
            if (platform.includes('instagram')) {
              items.push({
                type: ContactType.Instagram,
                text: `noisy.zoi`,
                href: social.url || '#',
              });
            } else if (platform.includes('github')) {
              items.push({
                type: ContactType.Github,
                text: 'ruperceniza',
                href: social.url || '#',
              });
            } else if (platform.includes('linkedin')) {
              items.push({
                type: ContactType.LinkedIn,
                text: 'ruperceniza',
                href: social.url || '#',
              });
            } else if (platform.includes('twitter')) {
              items.push({
                type: ContactType.Twitter,
                text: social.name || 'twitter',
                href: social.url || '#',
              });
            } else if (platform.includes('facebook')) {
              items.push({
                type: ContactType.Facebook,
                text: 'Ruper Ceniza',
                href: social.url || '#',
              });
            }
          }
        }
        return items;
      }
    }
    return _contact[prop as keyof ContactSection];
  }
});

/**
 * Social items
 */
let _socialLinks: Social[] = [];

export const socialLinks = new Proxy([] as Social[], {
  get(target, prop) {
    if (prop === 'length') {
      return sanitySocials?.length || 0;
    }
    if (prop === Symbol.iterator) {
      return function* () {
        const socialsData = sanitySocials?.length > 0
          ? sanitySocials.map((social: any) => {
              let Icon = GithubIcon;
              const platform = (social.name || social.platform || '').toLowerCase();
              
              if (platform.includes('github')) Icon = GithubIcon;
              else if (platform.includes('linkedin')) Icon = LinkedInIcon;
              else if (platform.includes('twitter')) Icon = TwitterIcon;
              else if (platform.includes('instagram')) Icon = InstagramIcon;
              else if (platform.includes('facebook')) Icon = FacebookIcon;
              else if (platform.includes('stackoverflow') || platform.includes('stack')) Icon = StackOverflowIcon;
              
              return {
                label: social.name || social.platform || 'Social',
                Icon,
                href: social.url || '#',
              };
            })
          : _socialLinks;
        
        for (const item of socialsData) {
          yield item;
        }
      };
    }
    if (typeof prop === 'string' && !isNaN(Number(prop))) {
      const index = Number(prop);
      const socialsData = sanitySocials?.length > 0
        ? sanitySocials.map((social: any) => {
            let Icon = GithubIcon;
            const platform = (social.name || social.platform || '').toLowerCase();
            
            if (platform.includes('github')) Icon = GithubIcon;
            else if (platform.includes('linkedin')) Icon = LinkedInIcon;
            else if (platform.includes('twitter')) Icon = TwitterIcon;
            else if (platform.includes('instagram')) Icon = InstagramIcon;
            else if (platform.includes('facebook')) Icon = FacebookIcon;
            else if (platform.includes('stackoverflow') || platform.includes('stack')) Icon = StackOverflowIcon;
            
            return {
              label: social.name || social.platform || 'Social',
              Icon,
              href: social.url || '#',
            };
          })
        : _socialLinks;
      return socialsData[index];
    }
    if (prop === 'map' || prop === 'filter' || prop === 'forEach' || prop === 'find' || prop === 'some' || prop === 'every') {
      const socialsData = sanitySocials?.length > 0
        ? sanitySocials.map((social: any) => {
            let Icon = GithubIcon;
            const platform = (social.name || social.platform || '').toLowerCase();
            
            if (platform.includes('github')) Icon = GithubIcon;
            else if (platform.includes('linkedin')) Icon = LinkedInIcon;
            else if (platform.includes('twitter')) Icon = TwitterIcon;
            else if (platform.includes('instagram')) Icon = InstagramIcon;
            else if (platform.includes('facebook')) Icon = FacebookIcon;
            else if (platform.includes('stackoverflow') || platform.includes('stack')) Icon = StackOverflowIcon;
            
            return {
              label: social.name || social.platform || 'Social',
              Icon,
              href: social.url || '#',
            };
          })
        : _socialLinks;
      return (socialsData as any)[prop].bind(socialsData);
    }
    return (target as any)[prop];
  }
});
