'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import 'animate.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { updateProfile } from "firebase/auth";
import { auth, db } from '../../firebase/config'; // Ensure this is correct
import { addDoc, collection } from "firebase/firestore"; // Import Firestore methods properly

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if all fields are filled
    if (!name || !email || !password) {
      alert('All fields are required.');
      return;
    }
  
    try {
      const userCredentials = await createUserWithEmailAndPassword(email, password);
  
      if (userCredentials) {
        const user = userCredentials.user;
  
        // Update the user's display name
        try {
          await updateProfile(user, { displayName: name });
        } catch (updateError) {
          console.error("Error updating profile:", updateError);
        }
  
        // Save user details to Firestore
        try {
          const docRef = await addDoc(collection(db, "users"), {
            name: name,
            email: email,
            userId: user.uid,
            createdAt: new Date(),
          });
          console.log("Document written with ID: ", docRef.id); // Log the document ID
        } catch (firestoreError) {
          console.error("Error adding document to Firestore: ", firestoreError);
        }
  
        // Redirect to sign-in page
        router.push('/sign-in');
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  
  return (
    <div className="page-container">
      <h1 className="animate__animated animate__zoomInDown">Welcome TO AutoRX</h1>

      <h2 className="animate__animated animate__zoomInDown">Look what's fits you the best!</h2>

      {/* Display loading, error, and success messages */}
      {error && <p className="text-red-500">{error.message}</p>}
      {loading && <p className="text-gray-400">Loading...</p>}
      {user && <p className="text-green-400">User Created Successfully</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email" // Use correct type for email
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password" // Use correct type for password
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" disabled={loading}>Submit</button>
      </form>

      <Link href="/sign-in">Already Have An Account? Click Here</Link>
    </div>
  );
};

export default Register;
