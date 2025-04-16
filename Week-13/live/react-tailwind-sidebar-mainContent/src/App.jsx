import { SidebarNaive } from "./components/SidebarNaive";
import "./App.css";
import { DarkLightMode } from "./components/DarkLightMode";
import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "./components/useMediaQuery";

function App() {
  const [ sidebarOpen, setSidebarOpen ] = useState(true)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  useEffect(() => {
    if(isDesktop == false){
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isDesktop])
  return (
    <div>

      <DarkLightMode />
    </div> 
  );
}



export default App;
