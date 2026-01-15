import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social Link',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Platform Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Instagram", "LinkedIn", "GitHub"',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Instagram', value: 'instagram'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'GitHub', value: 'github'},
          {title: 'Facebook', value: 'facebook'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Icon Color',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Hex color code (e.g., "#E4405F" for Instagram)',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'url',
    },
  },
})
