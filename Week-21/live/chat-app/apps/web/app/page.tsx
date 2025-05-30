"use client"
import { TextInput } from "@repo/ui/text-input"
import { Button } from "@repo/ui/button"
import { ChatIcon } from "@repo/ui/chat-icon"
import { useRef } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
    const inputRoomRef = useRef<HTMLInputElement>(null)
    const router = useRouter();

  return(
    <div className='h-screen w-screen bg-black flex justify-center items-center'>
            <div className='w-164 h-76 border border-neutral-800 shadow-2xl rounded-2xl'>
                <div className='m-5'>
                    <div className='flex'>
                        <div className='flex items-center'><ChatIcon size="size-8"/></div>
                        <p className=' text-white text-3xl font-medium ml-2'>Real Time Chat</p>
                    </div>
                    <p className='text-neutral-500 text-xl font-medium mb-6'>temporary room that expires after all users exit</p>
                    <div className="flex flex-col gap-4">
                    <Button size="big">Create New Room</Button>
                    <TextInput placeholder="Enter Your Name" type="text"/>
                    <div className="flex">
                        <TextInput ref={inputRoomRef} placeholder="Enter Room Code" type="text"/>
                        <Button size="medium" onClick={() => {
                            router.push(`/chat/${inputRoomRef.current!.value}`)
                        }}>Join Room</Button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}