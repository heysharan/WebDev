import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div style={{ height: "100vh", background: "red" }}>
      <Header />
      <div style={{ height: "90vh", background: "blue" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
