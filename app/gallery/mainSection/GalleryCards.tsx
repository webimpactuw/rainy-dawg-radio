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

// type Event = {
//     title: string;
//     date: string;
//     photoUrl: string;
//     link: string;
//   };

// const events: Event[] = [
//     {
//         title: "locally sourced",
//         date: "2024",
//         photoUrl: "/fillerTwo.png",
//         link: "/gallery/locally_sourced",
//     },
//     {
//         title: "local shows",
//         date: "2023",
//         photoUrl: "/fillerTwo.png",
//         link: "#",
//     },
//     {
//         title: "birthday fest",
//         date: "2023",
//         photoUrl: "/Charlie.png",
//         link: "#",
//     },
//     {
//         title: "DJs",
//         date: "2023",
//         photoUrl: "/fillerTwo.png",
//         link: "#",
//     },
//     {
//         title: "history of rdr",
//         date: "2022",
//         photoUrl: "/fillerTwo.png",
//         link: "#",
//     },
//     {
//         title: "battle of the bands",
//         date: "2018",
//         photoUrl: "/fillerThree.png",
//         link: "#",
//     },
// ]

const GalleryCards = async () => {
    const fetchedEvents = await getData();
    return (
        <>
            <div className="grid grid-cols-3 gap-1">
                {fetchedEvents.map((member, index) => (
                    <GalleryCard 
                        key={index} 
                        title={member.name} 
                        date={member.date} 
                        photoUrl={member.coverImage.asset.url} 
                        link={"/gallery/"+member.slug.current}/>
                ))}
            </div>
        </>
    )
}

export default GalleryCards;