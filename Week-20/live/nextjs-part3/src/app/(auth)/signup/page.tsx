export default function Signup() {
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="rounded-2xl w-120 h-137 border border-gray-800">
                <div className="flex flex-col p-5 gap-1">
                    <p className="font-bold text-3xl text-white">Signup</p>
                    <p className="text-white">Enter your email to sign up for an account</p>
                </div>
                <div className="flex flex-col pr-5 pb-5 pl-5">
                    <p className="font-light text-lg text-white">Firstname</p>
                    <input type="text" className="p-2 border-gray-800 rounded-lg border outline-none"></input>
                </div>
                <div className="flex flex-col pr-5 pb-5 pl-5">
                    <p className="font-light text-lg text-white">Lastname</p>
                    <input type="text" className="p-2 border border-gray-800 rounded-lg outline-none"></input>
                </div>
                <div className="flex flex-col pr-5 pb-5 pl-5">
                    <p className="font-light text-lg text-white">Email</p>
                    <input type="text" placeholder="someone@example.com" className="p-2 border border-gray-800 rounded-lg outline-none"></input>
                </div>
                <div className="flex flex-col pr-5 pb-5 pl-5">
                    <p className="font-light text-lg text-white">Password</p>
                    <input type="password" className="p-2 border border-gray-800 rounded-lg outline-none"></input>
                </div>
                <div className="flex justify-center items-center pt-3 pr-5 pb-5 pl-5">
                    <button className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-light flex justify-center items-center w-full">Sign Up</button>
                </div>
            </div>
        </div>
    )
}