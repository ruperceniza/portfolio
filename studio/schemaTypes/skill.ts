import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "React", "TypeScript", "Next.js"',
    }),
    defineField({
      name: 'color',
      title: 'Badge Color',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Hex color without # (e.g., "61DAFB" for React blue)',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Simple Icons slug (e.g., "react", "typescript", "nextdotjs")',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Text color - usually "white" or "black"',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which skills appear (lower numbers first)',
    }),
    defineField({
      name: 'level',
      title: 'Skill Level',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(10),
      description: 'Skill proficiency level from 0-10 (used for progress bar)',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'Frontend' },
          { title: 'Backend', value: 'Backend' },
        ],
      },
      validation: (Rule) => Rule.required(),
      description: 'Select whether this skill is Frontend or Backend',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'logo',
    },
  },
})
