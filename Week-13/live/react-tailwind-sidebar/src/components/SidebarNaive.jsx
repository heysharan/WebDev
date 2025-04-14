import { MenuScale } from 'iconoir-react'

export const SidebarNaive = () => {
  return (
    <div className="flex flex-cols">
      <div className="bg-blue-200 transform-all duration-1500 w-0 md:w-96 h-screen">
        Sidebar
        <MenuScale  className="transform-all duration-1000 w-7 h-7 hover:w-9 h-9"/>
      </div>
      <div className="bg-red-200 w-full h-screen">Contents</div>
    </div>
  );
};
 