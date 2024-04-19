import Image from 'next/image'

const Header = () => {
    return (
        <header>
                <Image src="/teamHeader.png" className="mx-auto" width={350} height={350} alt={"Meet the Team"}/>
            </header>
    )
}

export default Header;