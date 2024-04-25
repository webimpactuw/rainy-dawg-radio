import Image from 'next/image'
import ProfileSection from './members/ProfileCards'
import IntroSection from './Intro'
import TeamSection from './positions/TeamApps'

export default function About() {
    // Testing
    return (
        <div className="w-full">
            <header className="bg-rdr-purple text-3xl text-center font-semibold pt-20 pb-10 h-30">
                About Us
            </header>
            <IntroSection/>
            <ProfileSection/>
            <TeamSection/>
            <div>
                <header className='mt-10 p-8 text-3xl font-semibold '> DJ Applications </header>
                <p className='p-8'> DJ Applications open once or twice a year during the end of Fall and Winter Quarter. Check our Instagram for the latest information regarding DJ applications. </p>
                <Image src="/djInfo.png" alt="Application information for DJ" width={400} height={400}
                className="px-12"/>
            </div>
            <div>
                <header className='mt-10 p-8 text-3xl font-semibold '>Blog</header>
                <p className='p-8'> Writing for the blog is always an option! Email Steven, our Music Director, if you’d like to get involved! Asuwrdmd@uw.edu </p>
            </div>
        </div>)
}