// import { Outlet } from "react-router-dom"
// import { Header } from "./Header"

// export const Layout = () => {
//     return (
//       <div style={{height: '100vh', background: 'green'}}>
//         <Header />
//       <div style={{height: '90vh', background: 'red' }}>
//         <Outlet />
//       </div>
//       Footer | Contact Us
//       </div>
//     )
// }

import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Layout = () => {
    return (
      <div style={{height: '100vh', background: 'green'}}>
        <Header />
      <div style={{height: '90vh', background: 'red' }}>
        <Outlet />
      </div>
      Footer | Contact Us
      </div>
    )
}