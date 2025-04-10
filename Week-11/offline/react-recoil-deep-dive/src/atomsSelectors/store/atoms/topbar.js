// import { atom, selector } from "recoil"

// export const networkAtom = atom({
//     key: 'networkAtom',
//     default: 1
    
// })

// export const jobskAtom = atom({
//     key: 'jobskAtom',
//     default: 1
// })

// export const messagesAtom = atom({
//     key: 'messagesAtom',
//     default: 1
// })

// export const notificationsAtom = atom({
//     key: 'notificationsAtom',
//     default: 1
// })

// export const totalNotificationSelector = selector({
//     key: 'totalNotificationSelector',
//     get: ({ get }) => {
//         const networkCount = get(networkAtom);
//         const jobsCount = get(jobskAtom);
//         const messagesCount = get(messagesAtom);
//         const notificationsCount = get(notificationsAtom);
//         return networkCount + jobsCount + messagesCount + notificationsCount
//     }
// })




// // Asynchronous Data Queries by first principles thinking

// import { atom } from "recoil"

// export const topbarAtom = atom({
//     key: 'topbarAtom',
//     default: {
//         network: 0,
//         jobs: 0,
//         messages: 0,
//         notifications: 0
//     }
// })


// export const totalNotificationSelector = selector({
//     key: 'totalNotificationSelector',
//     get: ({ get }) => {
//         const topBarCount = get(topbarAtom);
//         return topBarCount.network + 
//         topBarCount.jobs + 
//         topBarCount.messages + 
//         topBarCount.notifications
//     }
// })



// Asynchronous Data Queries - doing it the right way now

import axios from "axios";
import { atom, selector } from "recoil"

export const topbarAtom = atom({
    key: 'topbarAtom',
    default: selector({
        key: 'topBarAtomSelector',
        get: async () => {
            const response = await axios.get("http://localhost:3000/notifications");
            return response.data; 
        }
    })
})


export const totalNotificationSelector = selector({
    key: 'totalNotificationSelector',
    get: ({ get }) => {
        const topBarCount = get(topbarAtom);
        return topBarCount.network + 
        topBarCount.jobs + 
        topBarCount.messages + 
        topBarCount.notifications
    }
})