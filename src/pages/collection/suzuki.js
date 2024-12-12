import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CarCard from '@/components/carCard'; // Ensure it's properly imported
import { useRouter } from 'next/router';

const Suzuki = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/collection');
  };

  const suzukiCarList = [
    { name: 'Swift', price: "2,000,000 PKR", image: "/images/swift.avif" },
    { name: 'Alto', price: "1,500,000 PKR", image: "/images/swift.avif" },
    { name: 'G-Wagonr', price: "2,000,000 PKR", image: "/images/swift.avif" },
    { name: 'Mehran', price: "1,500,000 PKR", image: "/images/swift.avif" },
    { name: 'Swift', price: "2,000,000 PKR", image: "/images/swift.avif" },
    { name: 'Alto', price: "1,500,000 PKR", image: "/images/swift.avif" },
    { name: 'G-Wagonr', price: "2,000,000 PKR", image: "/images/swift.avif" },
    { name: 'Mehran', price: "1,500,000 PKR", image: "/images/swift.avif" },
    // Add more cars here if needed
  ];

  return (
    <div>
      <Header />
      
      <div className="main-content">
        {/* Car List Section */}
        <div className="car-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {suzukiCarList.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-6">
          <button onClick={handleClick} className="black-red-button px-6 py-2 font-semibold rounded">
            GO TO COLLECTIONS
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Suzuki;



    //   {/* <div style={{ textAlign: 'center', padding: '50px' }}>
    //     <h1>Welcome to AutoRX Suzuki Collection</h1>
    //     <h2>Find the Best Car That Suits You!</h2>
        
    //     {/* Suzuki Car Card */}
    //     <div className="car-card">
    //       <Image
    //         src={'/images/swift.avif'}
    //         alt={'Swift'}
    //         width={300}
    //         height={200}
    //         className="car-image"
    //       />
    //       <div className="car-info">
    //         <h3 className="car-name">Suzuki Swift</h3>
    //         <p className="car-price">Price: 2,000,000 PKR</p>
    //         <button className="car-button">View Details</button>
    //       </div>
    //     </div>
    //   </div> */}
