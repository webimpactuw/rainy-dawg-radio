export const contactPerson = {
    name: 'contactperson',
    title: 'Contact Person',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
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
                type: 'string',
                title: 'Alternative Text',
              }
            ]
          },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'string',
        },
        {
            name: 'contactpurpose',
            title: 'Contact Purpose',
            type: 'string',
        },
        {
            name: 'contact',
            title: 'Contact',
            type: 'string',
        },
    ]
}