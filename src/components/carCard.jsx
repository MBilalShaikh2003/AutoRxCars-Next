import React from 'react';
import Image from 'next/image';



const CarCard = ({ car }) => {

  return (
    <>
    <div className="car-card">
      <Image
        src={car.image}
        alt={car.name}
        width={300}
        height={200}
        className="car-image"
      />
      <div className="car-info">
        <h3 className="car-name">{car.name}</h3>
        <p className="car-price">Price: ${car.price}</p>
        <button className="car-button">View Details</button>
      </div>
    </div>
    
    </>
  );
};
export default CarCard;