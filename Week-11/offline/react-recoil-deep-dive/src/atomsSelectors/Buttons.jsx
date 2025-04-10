// import { useRecoilValue } from "recoil";
// import {
//   jobskAtom,
//   messagesAtom,
//   networkAtom,
//   notificationsAtom,
//   totalNotificationSelector,
// } from "../store/atoms/topbar";

// export const Buttons = () => {
//   const topbarCount.network = useRecoilValue(networkAtom);                         // Atom Implementation
//   const topbarCount.jobs = useRecoilValue(jobskAtom);                             
//   const topbarCount.messages = useRecoilValue(messagesAtom);                      
//   const topbarCount.notifications = useRecoilValue(notificationsAtom);            
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector)  // Selector Implementation

//   return (
//     <div>
//       <button>Home</button>
//       <button>My Network ({topbarCount.network >= 100 ? "99+" : topbarCount.network})</button>
//       <button>Jobs ({topbarCount.jobs >= 100 ? "99+" : topbarCount.jobs})</button>
//       <button>Message ({topbarCount.messages >= 100 ? "99+" : topbarCount.messages})</button>
//       <button>Notifications ({topbarCount.notifications >= 100 ? "99+" : topbarCount.notifications})</button>
//       <button>Total ({totalNotificationCount})</button>
//     </div>
//   );
// };



// // Asynchronous Data Queries by first principles thinking

// import { useRecoilState, useRecoilValue } from "recoil";
// import { topbarAtom, totalNotificationSelector } from "../store/atoms/topbar";
// import axios from "axios";
// import { useEffect } from "react";


// export const Buttons = () => {
//   const [ topbarCount, setTopbarCount ] = useRecoilState(topbarAtom)
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector); 

//   const backendRequest = async () => {
//     const response = await axios.get("http://localhost:3000/notifications");
//     setTopbarCount(response.data);
//   };

//   useEffect(() => {
//     backendRequest();
//   }, []);

//   return (
//     <div>
//       <button>Home</button>
//       <button>My Network ({topbarCount.network >= 100 ? "99+" : topbarCount.network})</button>
//       <button>Jobs ({topbarCount.jobs >= 100 ? "99+" : topbarCount.jobs})</button>
//       <button>Message ({topbarCount.messages >= 100 ? "99+" : topbarCount.messages})</button>
//       <button>
//         Notifications ({topbarCount.notifications >= 100 ? "99+" : topbarCount.notifications})
//       </button>
//       <button>Total ({totalNotificationCount})</button>
//     </div>
//   );
// };


// Asynchronous Data Queries - doing it the right way now

import { useRecoilValue } from "recoil";
import { topbarAtom, totalNotificationSelector } from "./store/atoms/topbar";


export const Buttons = () => {
  const topbarCount = useRecoilValue(topbarAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector); 


  return (
    <div>
      <button>Home</button>
      <button>My Network ({topbarCount.network >= 100 ? "99+" : topbarCount.network})</button>
      <button>Jobs ({topbarCount.jobs >= 100 ? "99+" : topbarCount.jobs})</button>
      <button>Message ({topbarCount.messages >= 100 ? "99+" : topbarCount.messages})</button>
      <button>
        Notifications ({topbarCount.notifications >= 100 ? "99+" : topbarCount.notifications})
      </button>
      <button>Total ({totalNotificationCount})</button>
    </div>
  );
};
