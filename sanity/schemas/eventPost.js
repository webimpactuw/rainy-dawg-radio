export const eventPost = {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'coverImage',
        title: 'Cover Photo',
        type: 'image',
        validation: (Rule) => Rule.required(),
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
          }
        ]
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                title: 'Alternative text',
                type: 'string',
              },
            ],
          },
        ],
        options: {
          layout: 'grid',
        },
      },
    ],
  };