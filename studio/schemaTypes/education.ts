import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "2018-2022" or "Graduated 2022"',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "University of Philippines, Manila"',
    }),
    defineField({
      name: 'title',
      title: 'Degree/Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Bachelor of Science in Computer Science"',
    }),
    defineField({
      name: 'content',
      title: 'Description',
      type: 'text',
      description: 'Additional details about your education, achievements, coursework, etc.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which education entries appear (lower numbers first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
    },
  },
})
