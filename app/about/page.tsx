import Image from 'next/image'
import ProfileSection from './members/ProfileCards'
import IntroSection from './Intro'
import TeamSection from './positions/TeamApps'

export default function About() {
    // Testing
    return (
        <div className="w-full">
            <header className="font-mono large-heading bg-rdr-purple text-center font-semibold pt-20 pb-10 h-30">
                About Us
            </header>
            <div style={{width:"95%", margin:"auto"}}>
                <IntroSection/>
                <ProfileSection/>
                <TeamSection/>
                <ApplicationDescription />
            </div>
        </div>)
}

function ApplicationDescription() {
    return (
        <section className="p-10">
            <div>
                <header className='font-mono mt-10 medium-heading font-semibold '> DJ Applications </header>
                <p> DJ Applications open once or twice a year during the end of Fall and Winter Quarter. Check our Instagram for the latest information regarding DJ applications. </p>
            </div>
            <div>
                <header className='font-mono mt-10 medium-heading font-semibold '>Blog</header>
                <p> Writing for the blog is always an option! Email Steven, our Music Director, if you’d like to get involved! Asuwrdmd@uw.edu </p>
            </div>
        </section>
    );
}