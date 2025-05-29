import { TextInput } from "@repo/ui/text-input"
import { Button } from "@repo/ui/button"

export default function Home() {
  return(
    <div className='h-screen w-screen bg-black flex justify-center items-center'>
            <div className='w-180 h-75 border border-neutral-800 shadow-2xl rounded-2xl'>
                <div className='m-5'>
                    <div className='flex'>
                        <div className='flex items-center'></div>
                        <p className=' text-white text-xl font-bold ml-2'>Real Time Chat</p>
                    </div>
                    <p className='text-gray-400 text-sm'>temporary room that expires after all users exit</p>
                </div>
            </div>
        </div>
  )
}