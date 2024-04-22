import Image from 'next/image'
import Card from '../../ui/Card'

type Member = {
    name: string;
    position: string;
    photoUrl: string;
  };

const theTeam: Member[] = [
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

const ProfileCards = () => {
    return (
        <>
            <header>
                <Image src="/teamHeader.png" className="mx-auto" width={400} height={400} alt={"Meet the Team"}/>
            </header>
            <div className="grid grid-cols-3 gap-1">
                {theTeam.map((member, index) => (
                    <Card key={index} name={member.name} detail={member.position} photoUrl={member.photoUrl}/>
                ))}
            </div>
        </>
    )
}

export default ProfileCards;