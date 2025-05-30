import { TextInput } from "@repo/ui/text-input"
import { Button } from "@repo/ui/button"
import { ChatIcon } from "@repo/ui/chat-icon"

export default function Chat() {
    return (
        <div className='h-screen w-screen bg-black flex justify-center items-center'>
            <div className='w-160 h-172 border border-neutral-800 shadow-xl rounded-lg'>
                <div className='m-6'>
                    <div className='flex'>
                        <ChatIcon size="size-7"/>
                        <p className=' text-white text-2xl font-bold ml-2'>Real Time Chat</p>
                    </div>
                    <p className='text-neutral-500 text-md font-medium mt-1'>temporary room that expires after all users exit</p>
                </div>
                
                <div className='bg-neutral-800 m-6 py-3 px-3 rounded-md text-neutral-400 text-sm font-medium flex justify-between'>
                    <p>Room Code : D63845</p>
                    <p>Users : 1</p>
                </div>

                <div className='h-104 border border-neutral-800 shadow-xl rounded-lg m-6 overflow-y-auto p-4 flex flex-col gap-2'>
                    {/* {messages.map((m, i) => (
                            <div key={i} className='self-end bg-white text-black rounded-md px-4 py-2 max-w-xs text-right'>
                                {m}
                            </div>
                        ))} */}
                    <div></div>
                </div>

                <div className='flex m-6'>
                    <TextInput placeholder="Type a message . . ." type="text"></TextInput>
                    <Button size="small">Send</Button>
                </div>
            </div>
        </div>
    )
}






