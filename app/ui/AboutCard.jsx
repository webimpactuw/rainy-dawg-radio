'use server'
import React from 'react'
import { createClient } from '@sanity/client';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

const configuredSanityClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true
});

const AboutCard = ({ name, image, role, bio, contactpurpose, contact }) => {
    const imageProps = useNextSanityImage(configuredSanityClient, image);
    return (
    <div>
        {name}
        {role}
    </div>)
}

export default AboutCard