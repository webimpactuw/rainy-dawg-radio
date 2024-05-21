import Image from 'next/image'
import Job from './JobCard'
import { client } from '../../../sanity/lib/client';

async function getData() {
    // Queries for corresponding attributes for a Job
    const query = 
    `*[_type == "jobapp"] | order(_createdAt asc) { 
        jobname, 
        description,
        open,
        link,
    }`;
    const res = await client.fetch(query);
    return res;
}

type JobPost = {
    title: string;
    desc: string;
    appUrl: string;
    open: boolean;
}

const currJobs: JobPost[] = [
    {
        title: "Volunteer DJ",
        desc: "Being a volunteer DJ means you'd be guaranteed at least hour a week to broadcast your show to the University of Washington campus! Show concepts can range from talk shows, comedy, music niches, and much more. We hire the majority of our DJs in the fall, however DJ applications do open every quarter.",
        appUrl: "#",
        open: true,
    },
    {
        title: "Volunteer Blawgger",
        desc: "Blawggers have the opportunity to practice journalism and write about local music in Seattle, such as attending events and listening to music. Rainy Dawg Radio ocasionally supplies bloggers with free tickets to local shows to fuel blogging content and promote local acts. View the blog to get an idea, and break our mold.",
        appUrl: "#",
        open: false,
    }
]

const TeamApps = () => {
    // Keeping this commented out until we fix cacheing
    // const fetchedJobs = await getData();
    return (
        <div>
            <Image src='/joinTheTeam.png' alt="join the team" width={400}  height={400}
            className='mx-auto mb-20'/>

            <div className='grid grid-cols-2 gap-4 px-10 place-content-center' style={{margin:"auto"}}>
                {currJobs.map((job, index) => (
                    <Job 
                        key={index} 
                        title={job.title} 
                        desc={job.desc} 
                        open={job.open}
                        link={job.appUrl}/>
                ))}
            </div>
        </div>
    )
}

export default TeamApps