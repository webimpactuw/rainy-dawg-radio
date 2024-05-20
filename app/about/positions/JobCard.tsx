const JobCard = ({ title, desc, link, open}) => {
    return (
        <div className="outline outline-1">
            <header className='py-2 text-center font-semibold bg-rdr-yellow text-3xl outline outline-1'>
                {title}
            </header>
            <div className = "p-6">
                <p className="text-[0.8rem]">
                    {desc}
                </p>
                {/* If open == true, then expect a link as input. Otherwise, display "closed". */}
                {open ? (
                    <button className="my-4 p-2">
                    <a href={link} className='inset-y-6  bg-rdr-yellow p-2'>
                        Apply
                    </a>
                </button>
                ) : (
                    <p className='my-4 inset-y-6 w-20 bg-rdr-yellow p-2'>
                        Closed
                    </p>
                )
                }
            </div>
        </div>
    )
}

export default JobCard;