import {
  MenuScale,
  HomeAlt,
  Settings,
  UserCircle,
  Group,
  Wallet,
} from "iconoir-react";
import SharanPhoto from "../assets/SharanPhoto.jpg";
import { SidebarButton } from "./SidebarButton";

export const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
  if (sidebarOpen) {
    return (
      <div className="w-96 h-screen bg-white shadow-2xl absolute md:relative">
        <div>
          <div className="flex justify-between mt-5 mr-5 mb-10 ml-5 px-2 py-3 bg-blue-400 rounded-lg">
            <img
              src="https://webinar.gg/loginLogo.svg"
              alt="Logo"
              className="w-40 text-black"
            />
            <img
              src={SharanPhoto}
              alt="SharanPhoto"
              className="w-10 h-10 rounded-lg"
            />
          </div>

          <div>
            <div className="flex justify-between m-5 px-2 py-3 font-extrabold text-black hover:bg-blue-300 rounded-lg cursor-pointer">
              <span>Home</span>
              <HomeAlt strokeWidth={2} className="w-6 h-6" />
            </div>
            <div className="flex justify-between m-5 p-2 py-3 font-extrabold text-black hover:bg-blue-300 rounded-lg cursor-pointer">
              <span>Webinars</span>
              <Group strokeWidth={2} />
            </div>
            <div className="flex justify-between m-5 p-2 py-3 font-extrabold text-black hover:bg-blue-300 rounded-lg cursor-pointer">
              <span>Billing</span>
              <Wallet strokeWidth={2} className="w-6 h-6" />
            </div>
            <div className="flex justify-between m-5 p-2 py-3 font-extrabold text-black hover:bg-blue-300 rounded-lg cursor-pointer">
              <span>User Management</span>
              <UserCircle strokeWidth={2} />
            </div>
            <div className="flex justify-between m-5 p-2 py-3 font-extrabold text-black hover:bg-blue-300 rounded-lg cursor-pointer">
              <span>Settings</span>
              <Settings strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed top-0 left-0">
      <MenuScale
        className="transform-all duration-1000 cursor-pointer w-6 h-6 hover:w-9 hover:h-9"
        onClick={() => {
          setSidebarOpen(!sidebarOpen);
        }}
      />
    </div>
  );
};
