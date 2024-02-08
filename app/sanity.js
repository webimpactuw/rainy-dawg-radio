import { createClient } from 'next-sanity'

export const client = createClient({
    apiVersion: '2024-02-08',
    dataset: 'production',
    projectId: 'dl8089iz',
    useCdn: false,
})