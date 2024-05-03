import Image from 'next/image'

const GalleryCard = ({ title, date, photoUrl, link }) => {
    return (
        <a href={link} className="relative outline outline-1 rounded-sm bg-white outline-gray-300
                                p-2 mx-10 my-10 hover:shadow-lg">
            <Image src={photoUrl} alt={title} width='400' height='200' className="p-6" /> 
            <h3 className="text-2xl text-center font-semibold my-2">{title}</h3> 
            <p className="text-center mb-8">{date}</p>
            <div className='absolute -left-6 -bottom-6 outline outline-1 rounded-sm outline-gray-300 
                h-full w-full bg-white -z-10'>
            </div>
        </a>
    );
};
   
export default GalleryCard;