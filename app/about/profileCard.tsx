const OfficerCard = ({ name, position, photoUrl }) => {
    return (
    <div className="bg-white p-4">
        <img src={photoUrl} alt={name} className="w-50 h-50 mb-2" /> 
        <h3 className="text-lg font-semibold">{name}</h3> 
        <p className="text-gray-500">{position}</p>
    </div>
        );
};
   
export default OfficerCard;