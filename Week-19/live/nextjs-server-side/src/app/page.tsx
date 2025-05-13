import Link from "next/link"

export default function Home() {
    return ( 
        <div className="flex flex-col justify-center items-center h-screen gap-6">
            <p className=" bg-white text-black border border-gray-600 px-15 py-4 rounded-lg font-extrabold text-2xl">Todo Application</p>
            <div className="flex">
                <Link href='/signup' className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-bold flex items-center mr-6">Sign Up</Link>
                <Link href='/signin' className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-bold flex items-center">Sign In</Link>
            </div>

        </div>
    )
}