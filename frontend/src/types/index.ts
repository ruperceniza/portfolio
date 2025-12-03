export interface Project {
  id: string;
  name: string;
  fullName: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  features?: string[];
  screenshots?: string[];
  status?: 'completed' | 'in-progress' | 'maintenance';
  category: 'web' | 'mobile' | 'ai' | 'system';
}

export interface Photo {
  src: string;
  title: string;
  description?: string;
}

export interface SkillBadge {
  label: string;
  color: string;
  logo: string;
  textColor: string;
}

export interface ContactForm {
  to: string;
  subject: string;
  from: string;
  message: string;
}

export interface WindowData {
  id: number;
  title: string;
  content: React.ReactNode;
  minimized?: boolean;
  zIndex: number;
  icon?: string;
}

export interface IconProps {
  label: string;
  img: string;
  onClick?: () => void;
  size?: number;
  labelSizeClass?: string;
  imageRendering?: "auto" | "pixelated" | "crisp-edges";
  aspectRatio?: string;
}

export interface WindowProps {
  title: string;
  iconSrc?: string;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onFocus?: () => void;
  isActive?: boolean;
  zIndex?: number;
  children: React.ReactNode;
}

export interface TaskbarProps {
  windows: WindowData[];
  openWindow: (title: string, content: React.ReactNode, icon?: string) => void;
  toggleMinimize: (id: number) => void;
  activeWindowId: number | null;
  setActiveWindowId: (id: number | null) => void;
}

export interface StartMenuProps {
  openWindow: (title: string, content: React.ReactNode, icon?: string) => void;
}

// Social media links
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ color?: string; size?: number; className?: string }>;
  color: string;
}

// Form validation
export interface FormErrors {
  [key: string]: string;
}

export interface EmailValidation {
  isValid: boolean;
  errors: FormErrors;
}