import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
  const [ userId, setUserId ] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/user', {
      withCredentials: true
    }).then( res => { setUserId(res.data.userId)} )
  }, [])

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center text-white gap-3">
      <h1>Your id is {userId}</h1>
      <button
        onClick={() => {
          axios.post("http://localhost:3000/logout", {}, {
            withCredentials: true
          });
        }}
        className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-light flex justify-center items-center"
      >
        Logout
      </button>
    </div>
  );
}
