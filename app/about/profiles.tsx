import Image from 'next/image'
import Card from './profileCard'

type teamData = {
    name: string;
    position: string;
    photoUrl: string;
  };

const theTeam: teamData[] = [
    {
        name: "Bella Lufshanowski",
        position: "General Manager",
        photoUrl: "/fillerOne.png",
    },
    {
        name: "Naomi Zamarripa",
        position: "Assistant General Manager",
        photoUrl: "/fillerOne.png",
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
        <div className="grid grid-cols-3 gap-1 flex flex-row">
            
                {theTeam.map((member, index) => (
                    <Card key={index} name={member.name} position={member.position} photoUrl={member.photoUrl} />
            ))}
            
        </div>
    )
}

export default ProfileCards;