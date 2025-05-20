'use client'
import { useState } from "react";


export default function Hydration() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex justify-center items-center h-screen">
            <button
                className="bg-white text-black px-7 py-2 cursor-pointer rounded-md font-bold text-lg flex items-center"
                onClick={() => { setCount(count => count + 1) }}
            >
                Click me! {count}
            </button>
        </div>
    );
}
