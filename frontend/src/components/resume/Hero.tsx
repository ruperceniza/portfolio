'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';

import Section from './Section';

interface HeroProps {
  imageSrc: string;
  name: string;
  description: string;
  actions?: React.ReactNode;
  socials?: React.ReactNode;
}

const Hero: FC<HeroProps> = memo(({ imageSrc, name, description, actions, socials }) => {
  return (
    <Section className="relative flex h-screen items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900" noPadding>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Hero background"
          className="object-cover"
          fill
          priority
          src={imageSrc}
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-300 sm:text-xl md:text-2xl">
          {description}
        </p>

        {/* Actions */}
        {actions && <div className="mt-8 flex gap-4">{actions}</div>}

        {/* Socials */}
        {socials && (
          <div className="mt-8 flex gap-4">
            {socials}
          </div>
        )}
      </div>

      {/* Scroll Down Arrow */}
      <a
        className={classNames(
          'absolute bottom-8 left-1/2 -translate-x-1/2 transform cursor-pointer text-white',
          'animate-bounce',
        )}
        href="#about"
        aria-label="Scroll to About section">
        <ChevronDownIcon className="h-8 w-8" />
      </a>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
