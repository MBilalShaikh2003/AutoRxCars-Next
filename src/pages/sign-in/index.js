'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config'; // Ensure this path is correct
import Link from 'next/link';
import 'animate.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trigger sign-in
    try {
      const res = await signInWithEmailAndPassword(email, password);

      // If the sign-in is successful, user should be available
      if (res?.user) {
        setEmail('');
        setPassword('');
        router.push('/'); // Redirect to home if sign-in is successful
      }
    } catch (error) {
      console.log("Sign-in error:", error.message);
    }
  };

  // Redirect the user if they are already signed in
  if (user) {
    router.push('/'); // Redirect to home if already signed in
  }

  return (
    <div className="page-container">
      <h1 className="animate__animated animate__zoomInDown">Welcome TO AutoRX</h1>
      <h2 className="animate__animated animate__zoomInDown">Look what's fits you the best!</h2>

      {/* Display error if any */}
      {error && <p className="text-red-500">{error.message}</p>}

      {/* Show loading state */}
      {loading && <p className="text-gray-400">Signing in...</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>Submit</button>
      </form>

      <Link href="/register">Don't Have An Account? Click Here</Link>
    </div>
  );
};

export default SignIn;
