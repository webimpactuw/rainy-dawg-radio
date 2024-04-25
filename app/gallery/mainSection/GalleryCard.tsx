import Image from 'next/image'

const GalleryCard = ({ title, date, photoUrl, link }) => {
    return (
        <a href={link} className="bg-white p-2 mx-10 my-10 shadow-lg">
            <div>
            <Image src={photoUrl} alt={title} width='400' height='300' className="p-6" /> 
            <h3 className="text-2xl text-center font-semibold my-2">{title}</h3> 
            <p className="text-center mb-8">{date}</p>
            </div>
        </a>
        
    );
};
   
export default GalleryCard;