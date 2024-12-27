"use client"
import { useSession } from 'next-auth/react';

const HomePage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <h1 className='text-3xl'>Please sign in</h1>;
  }

  const userName = session.user?.name;
  const userEmail = session.user?.email;
  const userAvatar = session.user?.image;
  console.log('Session Data:', session);
  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg my-4'>
      <div className='flex items-center'>
        {/* Avatar on the left */}
        <img src={userAvatar || "/sam.jpeg"} alt="User Avatar" className="rounded-full m-3  w-16 h-16" />
        
        {/* Name and email on the right */}
        <div className='ml-4'>
          <h1 className="text-xl font-semibold text-white">Welcome, {userName}!</h1>
          <p className="text-white">Your email: {userEmail}</p>
        </div>
      </div>
    </div>
  );
  
  
};

export default HomePage;
