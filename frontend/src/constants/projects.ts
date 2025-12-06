import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'oha-inn',
    name: 'OHA Inn',
    fullName: 'OHA Traveler\'s Inn',
    description: '',
    longDescription: 'A comprehensive property management solution designed specifically for OHA Traveler\'s Inn. This system streamlines hotel operations by providing integrated modules for guest booking, room management, housekeeping workflows, inventory tracking, and staff coordination.',
    technologies: ['Django', 'HTML', 'CSS', 'JavaScript', 'Supabase'],
    githubUrl: 'https://github.com/ruperceniza/oha-travelers-inn-pms',
    category: 'web',
    features: [
      'Guest booking and reservation management',
      'Room status tracking and management', 
      'Housekeeping workflow automation',
      'Inventory management system',
      'Staff dashboard and reporting',
      'Payment processing integration'
    ],
    screenshots: [
      '/work/oha-webpage.png',
      '/work/oha-dashboard.png'
    ]
  },
  {
    id: 'smart-cctv',
    name: 'RTHID',
    fullName: 'Real-Time Home Intruder Detection Using YOLOv8n for Face and Pose Detection with Local Face Recognition',
    description: '',
    longDescription: 'An advanced AI-powered home security system that uses cutting-edge computer vision technologies to provide real-time monitoring and threat detection. The system combines facial recognition, pose detection, and behavioral analysis to identify potential security threats and alert homeowners immediately.',
    technologies: ['Python', 'Flutter', 'Firebase'],
    githubUrl: 'https://github.com/ruperceniza/smart-home-intruder-detection',
    category: 'ai',
    features: [
      'Real-time facial recognition',
      'Pose detection and analysis',
      'Behavioral pattern recognition',
      'Mobile alert notifications',
      'Live video streaming',
      'Historical footage analysis'
    ]
  },
  {
    id: 'medease-ai',
    name: 'MedEase AI',
    fullName: 'MedEase AI Chatbot Inventory',
    description: '',
    longDescription: 'A modern pharmacy management solution that combines traditional inventory management with AI-powered conversational interfaces. Pharmacists can interact with the system using natural language to check stock levels, process transactions, and manage inventory efficiently.',
    technologies: ['Dart', 'Flutter', 'Python'],
    githubUrl: 'https://github.com/ruperceniza/medease-ai-chatbot-inventory',
    category: 'mobile',
    features: [
      'AI-powered chatbot interface',
      'Real-time inventory tracking',
      'Natural language queries',
      'Transaction processing',
      'Stock level alerts',
      'Prescription management'
    ]
  },
  {
    id: 'univents',
    name: 'Univents',
    fullName: 'Univents',
    description: '',
    longDescription: 'A comprehensive university event management platform that allows students, faculty, and administrators to create, manage, and participate in campus events. The system facilitates better communication and coordination for academic and social activities.',
    technologies: ['Dart', 'Flutter', 'Firebase', 'Material Design'],
    githubUrl: 'https://github.com/ruperceniza/univents-web',
    category: 'mobile',
    features: [
      'Event creation and management',
      'User registration and authentication',
      'Event discovery and search',
      'RSVP and attendance tracking',
      'Push notifications',
      'Calendar integration'
    ]
  }
];