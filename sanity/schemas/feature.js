import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Feature Menu categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Feature Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      to: [{type: 'reference', to: [{ type: "restaurants"}]}],
      of: [{
        type: "restaurant"
      }],
    }),
  ],
})
