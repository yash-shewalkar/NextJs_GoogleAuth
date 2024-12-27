"use client" // This ensures the component is treated as a client component

import { signIn, signOut, useSession } from 'next-auth/react';

export default function SignIn() {
  const { data: session } = useSession();

  // Check if the user is signed in
  const isSignedIn = session?.user;

  const handleSignOut = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission

    // Show confirmation dialog before signing out
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (confirmed) {
      await signOut({ redirectTo: '/' });
    }
  };

  return (
    <form onSubmit={isSignedIn ? handleSignOut : async (e) => {
        e.preventDefault(); // Prevent form submission
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        {isSignedIn ? 'Sign Out' : 'Sign In with Google'}
      </button>
    </form>
  );
}
