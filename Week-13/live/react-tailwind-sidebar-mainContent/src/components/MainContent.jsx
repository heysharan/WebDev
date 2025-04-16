import SharanPhoto from "../assets/SharanPhoto.jpg";
import {
  Calendar,
  NavArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  VideoCamera,
  CalendarPlus,
  Plus,
  Folder
} from "iconoir-react";

export const MainContent = ({ sidebarOpen }) => {
  return (
    <div className="w-full">
      <div className="h-40 bg-blue-300 hidden md:block"></div>
      <div className="grid grid-cols-11 gap-8 p-4">
        <div className="h-90 rounded-2xl bg-white col-span-11 md:col-span-5 lg:col-span-2 ml-5 -translate-y-12 shadow-lg hidden md:block">{/* Profile Card */}
          <div className="flex flex-col justify-between items-center my-15 mx-5">
            <img
              src={SharanPhoto}
              alt="SharanPhoto"
              className="w-30 h-30 rounded-lg flex border border-b-gray-400"
            />
            <h1 className="mt-5 mb-3 font-extrabold text-xl">Sharan C M</h1>
            <p className="font-medium text-base text-gray-400">
              hi@cmsharan.com
            </p>
            <p className="font-medium text-base text-gray-400 mb-3">
              9148645360
            </p>
            <p className="font-medium text-base text-gray-400">
              Bengaluru, India
            </p>
          </div>
        </div>
        <div className="h-96 bg-white col-span-11 md:col-span-5 lg:col-span-4 ml-5 translate-y-2">{/* View Schedule Card */}
          <div className="flex flex-col justify-between gap-5 my-10">{/* Date and Greetings*/}
            <p className="font-bold">Monday, 14 October</p>
            <h1 className="font-extrabold text-3xl">
              Good Morning, Sharan! 👋
            </h1>
          </div>
          <div className="h-96 rounded-2xl bg-white col-span-11 md:col-span-5 lg:col-span-6 shadow-lg">{/* Schedule box*/}
            <div className="flex flex-col">
              <div className="flex justify-between translate-y-5 bg-gray-100 rounded-lg p-2 m-4">
                {" "}
                {/* Date box inside the Schedule box*/}
                <div className="flex justify-start gap-4">
                  <Calendar />
                  <p>Monday, 14 October 2024</p>
                  <NavArrowDown />
                </div>
                <div className="flex justify-end gap-4">
                  <ArrowDownLeft />
                  <ArrowDownRight />
                </div>
              </div>
              <div className="h-80 bg-white overflow-auto ">
                {" "}
                {/* Meetings Schedule box*/}
                <div className="flex flex-start pb-2 border-b-2 border-b-gray-300 m-5">
                  <div className="mr-2">
                    <p className="font-bold text-black text-lg">11:30 AM</p>
                    <p className="font-bold text-gray-500 text-sm">11:30 AM</p>
                  </div>
                  <div className="pl-2 border-l-2 border-l-blue-300">
                    <div className="flex flex-start gap-1">
                      <p className="text-gray-500 font-bold">Live</p>
                      <VideoCamera color="#ff0000" />
                    </div>
                    <p className="font-bold text-2xl">UX Webinar</p>
                  </div>
                </div>
                <div className="flex flex-start pb-2 border-b-2 border-b-gray-300 m-5">
                  <div className="mr-2">
                    <p className="font-bold text-black text-lg">12:30 PM</p>
                    <p className="font-bold text-gray-500 text-sm">12:30 PM</p>
                  </div>
                  <div className="pl-2 border-l-2 border-l-blue-300">
                    <div className="flex flex-start gap-1">
                      <p className="text-gray-500 font-bold">Upcoming</p>
                      <VideoCamera color="#5676ff" />
                    </div>
                    <p className="font-bold text-2xl">My first Webinar</p>
                  </div>
                </div>
                <div className="flex flex-start pb-2 border-b-2 border-b-gray-300 m-5">
                  <div className="mr-2">
                    <p className="font-bold text-black text-lg">01:45 PM</p>
                    <p className="font-bold text-gray-500 text-sm">01:45 PM</p>
                  </div>
                  <div className="pl-2 border-l-2 border-l-blue-300">
                    <div className="flex flex-start gap-1">
                      <p className="text-gray-500 font-bold">Upcoming</p>
                      <VideoCamera color="#5676ff" />
                    </div>
                    <p className="font-bold text-2xl">Important Webinar</p>
                  </div>
                </div>
                <div className="flex flex-start pb-2 border-b-2 border-b-gray-300 m-5">
                  <div className="mr-2">
                    <p className="font-bold text-black text-lg">03:30 PM</p>
                    <p className="font-bold text-gray-500 text-sm">03:30 PM</p>
                  </div>
                  <div className="pl-2 border-l-2 border-l-blue-300">
                    <div className="flex flex-start gap-1">
                      <p className="text-gray-500 font-bold">Upcoming</p>
                      <VideoCamera color="#5676ff" />
                    </div>
                    <p className="font-bold text-2xl">Web3 Webinar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-82 rounded-2xl bg-white col-span-11 md:col-span-11 ml-5 lg:col-span-3 shadow-lg translate-y-42">{/* Create Schedule Card */}
          <div className="grid grid-cols-2">
            <div className="flex flex-col w-38 h-29 justify-center items-center gap-2 mt-8 mb-8 ml-6 ">
              <div className="flex w-20 h-20 bg-blue-300 rounded-lg justify-center mr-1 items-center cursor-pointer ">
                <CalendarPlus width='2em' height='2em'/>
              </div>

              <p className="flex justify-center items-center font-bold ">Schedule a Webinar</p>
            </div>
            <div className="flex flex-col w-38 h-29 justify-center items-center gap-2 mt-8 mb-8 ml-6 ">
              <div className="flex w-20 h-20 bg-blue-300 rounded-lg justify-center mr-1 items-center cursor-pointer">
                <Plus width='2em' height='2em'/>
              </div>

              <p className="flex justify-center items-center font-bold ">Join a Webinar</p>
            </div>
            <div className="flex flex-col w-38 h-29 justify-center items-center gap-2 mb-8 ml-6 ">
              <div className="flex w-20 h-20 bg-blue-300 rounded-lg justify-center mr-1 items-center cursor-pointer">
                <Folder width='2em' height='2em'/>
              </div>

              <p className="flex justify-center items-center font-bold ">Open Recordings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
