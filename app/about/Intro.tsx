import Image from 'next/image'

const Intro = () => {
    return (
        <div className="p-10 flex flex-row items-center">
            <div className="px-8">
                <Image src="/history.png" alt="person from gallery" width={550} height={550}/>
            </div>
            <div className="px-8 max-w-lg">
                <h1 className='font-mono my-4 font-semibold text-4xl'>
                    The History of Rainy Dawg Radio
                </h1>
                <p className="text-sm">
                    Rainy Dawg Radio is the only radio station at the University of Washington. Being part of Rainy Dawg Radio means immersing yourself in a vibrant community where music is the heartbeat. The station&apos;s student-run nature fosters creativity, diversity, and a sense of belonging among its members. It&apos;s truly special to be part of such a dynamic collective where passion for music brings people together, creating unforgettable experiences and lifelong friendships.
                </p>
            </div>
        </div>
    )
}

export default Intro;