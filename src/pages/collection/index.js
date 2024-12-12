// import React from 'react';
// import Image from 'next/image';
// import Header from '@/components/header';
// import Footer from '@/components/footer';
// import Link from 'next/link';

// const Collection = () => {
//   const carBrands = [
//     { name: 'Nissan', image: '/images/nissan.jpg' },
//     { name: 'Hyundai', image: '/images/hyundai.png' },
//     { name: 'Suzuki', image: '/images/suzuki.png' },
//     { name: 'Audi', image: '/images/audi.jpg' },
//   ];

//   return (
//     <div>
//       <Header />
//       <div className="collection-div">
//         <h1>Here are our Collections</h1>
//         <h2>Look what's fits you the best</h2>

//         {/* Car Companies Section */}
//         <div className="car-company">
//           {carBrands.map((brand, index) => (
//             <Link key={index} href={`/collection/${brand.name.toLowerCase()}`} passHref>
//               <button className="car-button">
//                 <Image
//                   src={brand.image} // No need to prepend "/images/" again
//                   alt={`${brand.name} Logo`}
//                   width={40}
//                   height={40}
//                 />
//                 <span>{brand.name}</span>
//               </button>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Collection;



import React from 'react';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import suzuki from './suzuki';

const collection = () => {
const carBrands=['Nissan','Suzuki','Hyundai','Audi']

  return (
    <div>
      <Header />
      <div className="collection-div">
        
        <h1 className='animate__animated animate__zoomInDown'>Here are our Brands Collections</h1>
        <h2 className='animate__animated animate__zoomInDown'>Look what's fits you the best!</h2>
        
        {/* Car Companies Section */}
        <div className="car-company">
          <button className="car-button">
            <Image src="/images/nissan.jpg" alt="Nissan Logo" width={150} height={40} />
            <span>Nissan</span>
          </button>
          <button className="car-button">
            <Image src="/images/hyundai.png" alt="Hyundai Logo" width={150} height={40} />
            <span>Hyundai</span>
          </button>
          <Link key={suzuki} href={'/collection/suzuki'}>
          <button className="car-button">
            <Image src="/images/suzuki.png" alt="Suzuki Logo" width={150} height={40} />
            <span>Suzuki</span>
          </button>
          </Link>
          <button className="car-button">
            <Image src="/images/audi.jpg" alt="Audi Logo" width={150} height={40} />
            <span>Audi</span>
          </button>
        </div>

        {/* Another Car Company Section */}
        <div className="car-company">
          <button className="car-button">
            <Image src="/images/nissan.jpg" alt="Nissan Logo" width={150} height={40} />
            <span>Nissan</span>
          </button>
          <button className="car-button">
            <Image src="/images/hyundai.png" alt="Hyundai Logo" width={150} height={40} />
            <span>Hyundai</span>
          </button>
          <Link key={suzuki} href={'/collection/suzuki'}>
          <button className="car-button">
            <Image src="/images/suzuki.png" alt="Suzuki Logo" width={150} height={40} />
            <span>Suzuki</span>
          </button>
          </Link>
          <button className="car-button">
            <Image src="/images/audi.jpg" alt="Audi Logo" width={150} height={40} />
            <span>Audi</span>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default collection;
