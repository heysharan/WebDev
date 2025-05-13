// Server Component

// 'use client'
// import axios from 'axios'
// import { useEffect, useState } from 'react'

// interface User {
//   name: string,
//   email: string,
//   address: {
//     city?: string,
//     state?: string,
//     houseNumber?: number
//   }
// }

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState<User>();

//   useEffect(() => {
//     axios.get<User>('http://localhost:3000/user')
//       .then(response => {
//         setData(response.data)
//         setLoading(false)
//       })
//   }, [])

//   return (
//     <div className='flex items-center justify-center h-screen'>
//       <div className='border border-gray-500 rounded-lg flex flex-col p-5'>
//         <p>Name: {loading? 'loading....': data?.name}</p>
//         <p>Email: {loading? 'loading....': data?.email}</p>
//       </div>
//     </div>
//   );
// }




// Server Component

// import axios from 'axios'

// const getData = async () => {
//   const response = await axios.get<User>('http://localhost:3001/api/v1/user/details')
//   return response.data
// }

// interface User {
//   name: string,
//   email: string,
//   address: {
//      city?: string,
//      state?: string,
//      houseNumber?: number
//     }
// }

// export default async function Home() { 

//   const user: User = await getData();

//   return (
//     <div className='flex items-center justify-center h-screen'>
//       <div className='border border-gray-500 rounded-lg flex flex-col p-5'>
//         <p>Name: {user.name}</p>
//         <p>Email: {user.email}</p>
//       </div>  
//     </div>
//   );
// }
