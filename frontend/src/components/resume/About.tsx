'use client';

import Image from 'next/image';
import { FC, memo } from 'react';

import Section from './Section';

interface AboutProps {
  aboutImageSrc?: string;
  description: string;
  profileImageSrc?: string;
}

const About: FC<AboutProps> = memo(({ aboutImageSrc, description, profileImageSrc }) => {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-x-8">
        {/* Image Column */}
        {(profileImageSrc || aboutImageSrc) && (
          <div className="col-span-1">
            <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-full">
              <Image
                alt="About"
                className="object-cover"
                fill
                src={profileImageSrc || aboutImageSrc || ''}
              />
            </div>
          </div>
        )}

        {/* Content Column */}
        <div className={profileImageSrc || aboutImageSrc ? 'col-span-3' : 'col-span-4'}>
          <h2 className="mb-6 text-3xl font-bold text-gray-900">About Me</h2>
          <div className="prose prose-sm max-w-none text-gray-600 sm:prose">
            <p className="whitespace-pre-line">{description}</p>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
