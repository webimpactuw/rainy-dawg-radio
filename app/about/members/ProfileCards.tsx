import Image from 'next/image'
import Card from '../../ui/Card'
import { client } from '../../../sanity/lib/client';

async function getData() {
    const query = `*[_type == "teamperson"]{
        name,
        image {
            asset -> {
            url
            }
        },
        role,
    }`

    const res = await client.fetch(query);
    return res;
}

const ProfileCards = async () => {
    const fetchedPeople = await getData();
    console.log(fetchedPeople);
    return (
        <>
            <header>
                <Image src="/teamHeader.png" className="mx-auto" width={400} height={400} alt={"Meet the Team"}/>
            </header>
            <div className="grid grid-cols-3 gap-1">
                {fetchedPeople.map((member, index) => (
                    // <Card key={index} name={member.name} detail={member.position} photoUrl={member.photoUrl}/>
                    <Card 
                        key={index} 
                        name={member.name} 
                        detail={member.role} 
                        photoUrl={member.image.asset.url} // Assuming '_ref' is the correct reference to the image URL
                    />
                ))}
            </div>
        </>
    )
}

export default ProfileCards;