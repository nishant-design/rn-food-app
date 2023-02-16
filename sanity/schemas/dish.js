import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of dish',
      validation: (Rule) => Rule.required(),      
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.max(200),      
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of dish',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',     
    }),
  ],
})
