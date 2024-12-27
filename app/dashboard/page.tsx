"use client" // Ensure this is a client-side component

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // For redirecting
import { ClipLoader } from 'react-spinners'; // Import the spinner
import HomePage from '../home';

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to sign-in page if the user is not signed in
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/'); // Replace with your actual sign-in page route
    }
  }, [status, router]);

  // If the session is still loading, show a loading spinner
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader size={50} color="#6B21A8" loading={true} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-3xl text-purple-500">
        Welcome to Dashboard, Thanks for Signing In
        <HomePage />
      </div>
    </div>
  );
};

export default Page;
