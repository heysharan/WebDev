export default function Home() {
  return(
    <div className='h-screen w-screen bg-black flex justify-center items-center'>
            <div className='w-120 h-153 border border-gray-700 shadow-xl rounded-lg'>
                <div className='m-5'>
                    <div className='flex'>
                        {/* <div className='flex items-center'><ChatIcon /></div> */}
                        <p className=' text-white text-xl font-bold ml-2'>Real Time Chat</p>
                    </div>
                    <p className='text-gray-400 text-sm'>temporary room that expires after all users exit</p>
                </div>

                <div className='bg-gray-600 m-5 p-2 rounded-md text-gray-400 text-xs flex justify-between'>
                    <p>Room Code:</p>
                    <p>Users:</p>
                </div>

                <div className='h-96 border border-gray-700 shadow-xl rounded-lg m-5 overflow-y-auto p-4 flex flex-col gap-2'>
                    {/* {messages.map((m, i) => (
                        <div key={i} className='self-end bg-white text-black rounded-md px-4 py-2 max-w-xs text-right'>
                            {m}
                        </div>
                    ))}
                    <div ref={messageRef}></div> */}
                </div>


                <div className='flex m-5'>
                    <input className='text-white pt-2 pr-3 pb-2 pl-3 mr-2 w-full focus:outline-none focus:ring-0 border border-gray-700 rounded-sm' type='text' placeholder='Type a message....'></input>
                    <div className='bg-white rounded-sm flex items-center py-1 px-8 cursor-pointer'>Send</div>
                </div>
            </div>
        </div>
  )
}