export const jobApp = {
    name: 'jobapp',
    title: 'Job Application',
    type: 'document',
    fields: [
        {
            name: 'jobname',
            title: 'Job Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Job Description',
            type: 'string',
        },
        {
            name: 'open',
            title: 'Open',
            type: 'boolean',
            description: 'Select to add link to job application',
        },
        {
            name: 'link',
            title: 'Link to Application',
            type: 'string',
            hidden: ({ parent }) => !parent?.open,
        },
    ]
}