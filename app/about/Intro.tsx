import Image from 'next/image'

const Intro = () => {
    return (
        <div className="my-28 flex flex-row place-content-center">
            <div>
                <Image src="/history.png" alt="person from gallery" width={550} height={550}
                className="px-12"/>
            </div>
            <div className="max-w-lg">
                <h1 className='my-4 font-medium text-4xl'>
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