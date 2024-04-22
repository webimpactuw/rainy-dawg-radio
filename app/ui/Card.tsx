import Image from 'next/image'

const Card = ({ name, detail, photoUrl }) => {
    return (
    <div className="bg-white p-2 mx-10 my-10 shadow-lg">
        <Image src={photoUrl} alt={name} width='400' height='300' className="p-6" /> 
        <h3 className="text-2xl text-center font-semibold my-2">{name}</h3> 
        <p className="text-center mb-8">{detail}</p>
    </div>
        );
};
   
export default Card;