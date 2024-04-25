import Link from 'next/link'
import GalleryCard from './GalleryCard'

type Event = {
    title: string;
    date: string;
    photoUrl: string;
    link: string;
  };

const events: Event[] = [
    {
        title: "locally sourced",
        date: "2024",
        photoUrl: "/fillerTwo.png",
        link: "/gallery/locally_sourced",
    },
    {
        title: "local shows",
        date: "2023",
        photoUrl: "/fillerTwo.png",
        link: "#",
    },
    {
        title: "birthday fest",
        date: "2023",
        photoUrl: "/Charlie.png",
        link: "#",
    },
    {
        title: "DJs",
        date: "2023",
        photoUrl: "/fillerTwo.png",
        link: "#",
    },
    {
        title: "history of rdr",
        date: "2022",
        photoUrl: "/fillerTwo.png",
        link: "#",
    },
    {
        title: "battle of the bands",
        date: "2018",
        photoUrl: "/fillerThree.png",
        link: "#",
    },
]

const GalleryCards = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-1">
                {events.map((member, index) => (
                    <GalleryCard key={index} title={member.title} date={member.date} photoUrl={member.photoUrl} link={member.link}/>
                ))}
            </div>
        </>
    )
}

export default GalleryCards;