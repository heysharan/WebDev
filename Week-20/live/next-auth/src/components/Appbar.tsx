"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./Button";

export const Appbar = () => {
  const session = useSession();
  return (
    <div>
      <div className="flex justify-end mt-2">
        {session.status === 'authenticated' && <Button onClick={() => signOut()}>Logout</Button>}
        {session.status === 'unauthenticated' && <Button onClick={() => signIn()}>Signin</Button>} 
      </div>
      <span className="text-2xl font-bold bg-white rounded-lg text-black p-2">From Client Component --- {JSON.stringify(session)}</span>
    </div>
  );
};
