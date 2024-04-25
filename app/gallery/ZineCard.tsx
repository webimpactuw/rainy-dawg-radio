const ZineCard = ({ coverUrl, date}) => {
    return (
        <div className="outline outline-1 max-w-96">
            <header className='py-2 text-center font-semibold bg-rdr-yellow text-3xl outline outline-1'>
                {date}
            </header>
        </div>
    )
}

export default ZineCard;