const JobCard = ({ title, desc, appUrl}) => {
    return (
        <div className="outline outline-1">
            <header className='py-2 text-center font-semibold bg-rdr-yellow text-3xl outline outline-1'>
                {title}
            </header>

            <div className = "p-6">
                <p className="text-[0.8rem]">
                    {desc}
                </p>
                <button className="my-4">
                    <a href={appUrl} className='inset-y-6 bg-rdr-yellow p-2'>
                        Apply
                    </a>
                </button>
            </div>
        </div>
    )
}

export default JobCard;