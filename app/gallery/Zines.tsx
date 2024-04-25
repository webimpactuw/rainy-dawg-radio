import Image from 'next/image'
import ZineCard from './ZineCard'

type Zine = {
    name: string;
    position: string;
    photoUrl: string;
  };

const allZines: Zine[] = [
    {
        name: "Bella Lufshanowski",
        position: "General Manager",
        photoUrl: "/fillerTwo.png",
    },
    {
        name: "Naomi Zamarripa",
        position: "Assistant General Manager",
        photoUrl: "/fillerTwo.png",
    },
    {
        name: "Charlie Darnall",
        position: "Music Director",
        photoUrl: "/Charlie.png",
    },
    {
        name: "Cossette Fricke",
        position: "Promotions Coordinator",
        photoUrl: "/fillerTwo.png",
    },
    {
        name: "Mia Pham",
        position: "Technology Manager",
        photoUrl: "/fillerTwo.png",
    },
    {
        name: "Coming Soon",
        position: "",
        photoUrl: "/fillerThree.png",
    },
]

const Zines = () => {
    return (
        <>
            <header>
                <Image src="/teamHeader.png" className="mx-auto" width={400} height={400} alt={"Meet the Team"}/>
            </header>
            <div className="grid grid-cols-3 gap-1">
                {allZines.map((member, index) => (
                    <ZineCard key={index} name={member.name} detail={member.position} photoUrl={member.photoUrl}/>
                ))}
            </div>
        </>
    )
}

export default Zines;