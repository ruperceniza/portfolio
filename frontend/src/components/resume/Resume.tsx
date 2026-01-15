'use client';

import { FC, memo } from 'react';

import Section from './Section';

interface Skill {
  name: string;
  level: number;
  max?: number;
}

interface SkillGroup {
  name: string;
  skills: Skill[];
}

interface ResumeProps {
  education?: Array<{
    date: string;
    degree: string;
    school: string;
    location?: string;
  }>;
  experience?: Array<{
    company: string;
    date: string;
    title: string;
    content: string;
  }>;
  skills?: SkillGroup[];
}

const Resume: FC<ResumeProps> = memo(({ education, experience, skills }) => {
  return (
    <Section className="bg-gray-50">
      <div className="space-y-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Resume</h2>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Skills</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="mb-4 text-xl font-semibold text-gray-800">{skillGroup.name}</h4>
                  <div className="space-y-3">
                    {skillGroup.skills.map((skill, skillIdx) => (
                      <div key={skillIdx}>
                        <div className="mb-1 flex justify-between">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">
                            {skill.level}/{skill.max || 10}
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                          <div
                            className="h-full bg-orange-500 transition-all duration-300"
                            style={{ width: `${(skill.level / (skill.max || 10)) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Experience</h3>
            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div key={idx} className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm font-medium text-orange-600">
                    {item.company} | {item.date}
                  </p>
                  <p className="mt-2 text-gray-600 whitespace-pre-line">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Education</h3>
            <div className="space-y-6">
              {education.map((item, idx) => (
                <div key={idx} className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-xl font-semibold text-gray-900">{item.degree}</h4>
                  <p className="text-sm font-medium text-orange-600">
                    {item.school} {item.location && `| ${item.location}`}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
