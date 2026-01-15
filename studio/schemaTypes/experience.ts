import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "2022-Present" or "Jan 2022 - Dec 2023"',
    }),
    defineField({
      name: 'location',
      title: 'Company/Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Google, Mountain View" or "Acme Corp"',
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Senior Software Engineer"',
    }),
    defineField({
      name: 'content',
      title: 'Description',
      type: 'text',
      description: 'Job responsibilities, achievements, technologies used, etc.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which experience entries appear (lower numbers first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
    },
  },
})
