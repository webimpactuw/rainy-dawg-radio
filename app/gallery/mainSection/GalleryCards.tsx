import Link from 'next/link'
import GalleryCard from './GalleryCard'
import { client } from '../../../sanity/lib/client';

async function getData() {
    const query = `*[_type == "event"] | order(_createdAt asc) {
        coverImage {
            asset -> {
                url
            }
        },
        slug,
        name,
        date,
    }`

    const result = await client.fetch(query);
    return result;
}


const GalleryCards = async () => {
    const fetchedEvents = await getData();
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                {fetchedEvents.map((member, index) => (
                    <GalleryCard 
                        key={index} 
                        title={member.name} 
                        date={new Date(member.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} 
                        photoUrl={member.coverImage.asset.url} 
                        link={"/gallery/"+member.slug.current}/>
                ))}
            </div>
        </>
    )
}

export default GalleryCards;