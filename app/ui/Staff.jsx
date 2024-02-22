import React from 'react'
import { client } from '../../sanity/lib/client';
import AboutCard from './AboutCard'

async function getData() {
    
    const query = `*[_type == 'contactperson']{
        image,
        name,
        role,
        bio,
        contactpurpose,
        contact,
    }`

    const res = await client.fetch(query);

    return res;
}

const Staff = async () => {
    const people = await getData();
    // console.log(people)
    return (
        <div>
            {
                people.map((person, index) => (
                    <AboutCard key={index} name={person.name} image={person.image} role={person.role} bio={person.bio} contactpurpose={person.contactpurpose} contact={person.contact}/>
                  ))
            }
        </div>
    )
}

export default Staff