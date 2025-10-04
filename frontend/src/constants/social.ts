import { SocialLink } from '@/types';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/ruperceniza",
    icon: FaInstagram,
    color: "#E4405F"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/ruperceniza",
    icon: FaLinkedin,
    color: "#0077B5"
  },
  {
    name: "GitHub",
    url: "https://github.com/ruperceniza", 
    icon: FaGithub,
    color: "#181717"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/ruperceniza",
    icon: FaFacebook,
    color: "#1877F2"
  }
];

export const CONTACT_INFO = {
  email: "ruperceniza@gmail.com",
  linkedin: "linkedin.com/in/ruperceniza",
  github: "github.com/ruperceniza",
  location: "Philippines 📍"
};