import Image from 'next/image'
import Job from './JobCard'

type JobPost = {
    title: string;
    desc: string;
    appUrl: string;
}

const currJobs: JobPost[] = [
    {
        title: "Volunteer DJ",
        desc: "Being a volunteer DJ means you'd be guaranteed at least hour a week to broadcast your show to the University of Washington campus! Show concepts can range from talk shows, comedy, music niches, and much more. We hire the majority of our DJs in the fall, however DJ applications do open every quarter.",
        appUrl: "#"
    },
    {
        title: "Volunteer Blawgger",
        desc: "Blawgers have the opportunity to practice journalism and write about local music in Seattle, such as attending events and listening to music. Rainy Dawg Radio ocasionally supplies bloggers with free tickets to local shows to fuel blogging content and promote local acts. View the blog to get an idea, and break our mold.",
        appUrl: "#"
    }
]

const TeamApps = () => {
    return (
        <div>
            <Image src='/joinTheTeam.png' alt="join the team" width={400}  height={400}
            className='mx-auto mb-20'/>
            <div className='grid grid-cols-2 gap-4 place-content-center'>
                {currJobs.map((job, index) => (
                    <Job key={index} title={job.title} desc={job.desc} appUrl={job.appUrl}/>
                ))}
            </div>
        </div>    
    )
}

export default TeamApps