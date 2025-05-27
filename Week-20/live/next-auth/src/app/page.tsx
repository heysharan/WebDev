"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {

  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  );
}

const RealHome = () => {

  const session = useSession();

  return(
    <div className="flex justify-end mt-5 mr-5">
      {session.status === 'authenticated' && <button className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-bold flex items-center" onClick={() => signOut()}>Logout</button> }

      {session.status === 'unauthenticated' && <button className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-bold flex items-center" onClick={() => signIn()}>Sign In</button> }

      {JSON.stringify(session)}
    </div>
  )
}