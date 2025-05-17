import Link from "next/link";

export default function Home() {
  return(
    <div className="h-screen bg-black">
      <h1 className="text-white text-5xl flex justify-center mt-4">Home Page</h1>
      <div className="flex justify-center mt-8">
          <Link href='/signup' className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-bold flex items-center mr-6"    >Sign Up</Link>
          <Link href='/signin' className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-bold flex items-center mr-6">Sign In</Link>
          <Link href='/user'   className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-bold flex items-center"     > User </Link>
      </div>
    </div>
  )
}