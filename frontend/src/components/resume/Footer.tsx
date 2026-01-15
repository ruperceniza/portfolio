'use client';

import { FC, memo } from 'react';

interface SocialLink {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
}

interface FooterProps {
  socials?: SocialLink[];
}

const Footer: FC<FooterProps> = memo(({ socials }) => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Social Links */}
          {socials && socials.length > 0 && (
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  className="text-gray-400 transition-colors hover:text-white"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}>
                  <social.Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
