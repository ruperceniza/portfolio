import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Your contact email address',
    }),
    defineField({
      name: 'photo',
      title: 'Profile Photo URL (S3)',
      type: 'url',
      validation: (Rule) => Rule.required(),
      description: 'Paste your S3 image URL here',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'string',
      description: 'e.g., "24" or "24 years old"',
    }),
    defineField({
      name: 'nationality',
      title: 'Nationality',
      type: 'string',
      description: 'e.g., "Filipino", "American"',
    }),
    defineField({
      name: 'interests',
      title: 'Interests',
      type: 'string',
      description: 'e.g., "Photography, Hiking, Technology"',
    }),
    defineField({
      name: 'study',
      title: 'Study/Education',
      type: 'string',
      description: 'e.g., "University of Philippines"',
    }),
    defineField({
      name: 'employment',
      title: 'Employment Status',
      type: 'string',
      description: 'e.g., "Software Engineer at Company"',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Job Title'},
            {name: 'date', type: 'string', title: 'Date'},
            {
              name: 'responsibilities',
              type: 'array',
              title: 'Responsibilities',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'location',
    },
  },
})
