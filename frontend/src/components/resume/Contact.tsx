'use client';

import { FC, memo } from 'react';

import Section from './Section';

interface ContactProps {
  email: string;
  phone?: string;
  description?: string;
}

const Contact: FC<ContactProps> = memo(({ email, phone, description }) => {
  return (
    <Section className="bg-gray-50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Get In Touch</h2>
        
        {description && (
          <p className="mb-8 text-lg text-gray-600">{description}</p>
        )}

        <div className="space-y-4">
          <div>
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-orange-700"
              href={`mailto:${email}`}>
              Send Me an Email
            </a>
          </div>

          {phone && (
            <p className="text-gray-600">
              Or call me at{' '}
              <a className="font-medium text-orange-600 hover:text-orange-700" href={`tel:${phone}`}>
                {phone}
              </a>
            </p>
          )}
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
