import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth'; // Import the hook
import { auth } from '../firebase/config'; // Ensure the correct path to your Firebase config
import 'animate.css';

const Body = () => {
  const [user, loading, error] = useAuthState(auth); // Get user info from Firebase
  const router = useRouter();

  const handleclick = () => {
    router.push('/collection');
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading state while Firebase is checking the user status
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display any error that occurred
  }

  return (
    <div className="relative w-full h-screen"> {/* Container with relative positioning */}
      {/* Image component for background */}
      <Image
        src="/images/instagram.png"  // Path to the image in public folder
        alt="Instagram Background"
        layout="fill"  // This makes the image cover the entire container
        objectFit="cover"  // Ensures the image covers the area
        objectPosition="center"  // Centers the image
      />

      {/* Text over the image */}
      <div className="text-overlay2">
        <h1 className='animate__animated animate__backInLeft'>Find Cars</h1>
        <h1 className='animate__animated animate__backInLeft'>Special For You</h1>
        <h2 className='animate__animated animate__backInLeft'>With thousands of cars we have just the right one for you!</h2>
      </div>

      <div className="text-overlay">
        <h1 className='animate__animated animate__rollIn'>
          Welcome <span className='userName'>{user ? user.displayName : 'Guest'}</span> to AutoRx
        </h1> {/* Display user name or "Guest" */}
        <p className='animate__animated animate__rollIn'>Enjoy our amazing Showroom!</p>
        <button onClick={handleclick} className="black-red-button">Find Cars</button>
      </div>
    </div>
  );
};

export default Body;
