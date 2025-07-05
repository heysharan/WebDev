"use client";
import { signIn } from "next-auth/react";
import { useRef } from "react";

export default function Signin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="rounded-2xl w-120 h-130 border border-neutral-800">
        <div className="flex flex-col p-5 gap-1">
          <p className="font-bold text-3xl text-white">Login</p>
          <p className="text-white">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="flex flex-col pr-5 pb-5 pl-5">
          <p className="font-light text-lg text-white">Email</p>
          <input
            ref={emailRef}
            type="text"
            placeholder="someone@example.com"
            className="p-2 border border-neutral-800 rounded-lg outline-none"
          ></input>
        </div>
        <div className="flex flex-col pr-5 pb-5 pl-5">
          <p className="font-light text-lg text-white">Password</p>
          <input
            ref={passwordRef}
            type="password"
            className="p-2 border border-neutral-800 rounded-lg outline-none"
          ></input>
        </div>
        <div className="flex flex-col justify-center items-center pt-3 pr-5 pb-5 pl-5">
          <button
            className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-light flex justify-center items-center w-full"
            onClick={async () => {
              await signIn("credentials", {
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
                callbackUrl: "/"
              });
            }}
          >
            Login with eamil
          </button>
          <div className="flex w-full items-center gap-4 mt-5 mb-5">
            <div className="flex-grow h-px bg-neutral-600"></div>
            <span className="text-neutral-500 text-sm">OR CONTINUE WITH</span>
            <div className="flex-grow h-px bg-neutral-600"></div>
          </div>
          <button
            className="bg-neutral-900 text-white px-7 py-2 cursor-pointer rounded-md font-light flex justify-center items-center w-full mb-4"
            onClick={ async () => {
              await signIn("google", {
                callbackUrl: '/'
              })
            }}
          >
            Google
          </button>
          <button
            className="bg-neutral-900 text-white px-7 py-2 cursor-pointer rounded-md font-light flex justify-center items-center w-full"
            onClick={async () => {
              await signIn("github", {
                callbackUrl: '/'
              });
            }}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
