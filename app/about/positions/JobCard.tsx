const JobCard = ({ title, desc, link}) => {
    return (
        <div className="outline outline-1 max-w-96">
            <header className='py-2 text-center font-semibold bg-rdr-yellow text-3xl outline outline-1'>
                {title}
            </header>
            <p className="p-6 text-xs">
                {desc}
            </p>
            <a href={link} className='inset-y-6 bg-rdr-yellow p-2 outline outline-2'>
                Apply
            </a>
        </div>
    )
}

export default JobCard;