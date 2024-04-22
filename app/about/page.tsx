import Image from 'next/image'
import ProfileSection from './members/profiles'
import IntroSection from './intro'
import TeamSection from './TeamApps'

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
        </div>)
}