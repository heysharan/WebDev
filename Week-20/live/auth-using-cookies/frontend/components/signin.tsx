import { useRef } from "react";
import axios from "axios";

export default function Signin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center text-white gap-3">
      <input
        ref={emailRef}
        type="text"
        placeholder="Email"
        className="text-white border border-neutral-800 rounded-lg outline-none p-2"
      ></input>
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        className="text-white border border-neutral-800 rounded-lg outline-none p-2"
      ></input>
      <button
        onClick={async () => {
          await axios.post("http://localhost:3000/signin", {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
          }, {
            withCredentials: true
          });
        }}
        className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-light flex justify-center items-center"
      >
        Login
      </button>
    </div>
  );
}
