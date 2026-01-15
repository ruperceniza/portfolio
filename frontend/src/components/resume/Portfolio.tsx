'use client';

import Image from 'next/image';
import { FC, memo } from 'react';

import Section from './Section';

interface PortfolioItem {
  id: string;
  name: string;
  description: string;
  image: string;
  url?: string;
  githubUrl?: string;
  technologies?: string[];
}

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio: FC<PortfolioProps> = memo(({ items }) => {
  return (
    <Section className="bg-white">
      <div className="space-y-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Portfolio</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  alt={item.name}
                  className="object-cover"
                  fill
                  src={item.image}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{item.description}</p>

                {/* Technologies */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4">
                  {item.url && (
                    <a
                      className="text-sm font-medium text-orange-600 hover:text-orange-700"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      View Project →
                    </a>
                  )}
                  {item.githubUrl && (
                    <a
                      className="text-sm font-medium text-gray-600 hover:text-gray-900"
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
