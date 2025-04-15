import SharanPhoto from '../assets/SharanPhoto.jpg'

export const MainContent = ({ sidebarOpen }) => {
  return (
    <div className="w-full">
      <div className="h-72 bg-blue-300 hidden md:block"></div>
      <div className="grid grid-cols-11 gap-8 p-4">
        <div className="h-90 rounded-2xl bg-white col-span-11 md:col-span-5 lg:col-span-2 -translate-y-24 shadow-lg hidden md:block">
            <div className="flex flex-col justify-between items-center my-15 mx-5">
                <img src={SharanPhoto} alt="SharanPhoto" className='w-30 h-30 rounded-lg flex border border-b-gray-400'/>
                <h1 className='mt-5 mb-3 font-extrabold text-xl'>Sharan C M</h1>
                <p className='font-medium text-base text-gray-400'>hi@cmsharan.com</p>
                <p className='font-medium text-base text-gray-400 mb-3'>9148645360</p>
                <p className='font-medium text-base text-gray-400'>Bengaluru, India</p>
            </div>
        </div>
        <div className="h-96 rounded-2xl bg-white col-span-11 md:col-span-5 lg:col-span-6 shadow-lg" >
        <div>
    
        </div>

        </div>
        <div className="h-96 rounded-2xl bg-white col-span-11 md:col-span-11 lg:col-span-3  shadow-lg"></div>
      </div>
    </div>
  );
};
