import Image from 'next/image'

const ZineCard = ({ coverUrl, date, link}) => {
    return (
        <a href={link}>
            <div className="outline outline-1 max-w-96">
            <Image src={coverUrl} alt={coverUrl} width='400' height='300'/> 
                <header className='py-2 text-center font-semibold text-3xl outline outline-1'>
                    {date}
                </header>
            </div>
        </a>
    )
}

export default ZineCard;