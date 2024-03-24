import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import SwitchButton from "../components/SwitchButton";
import Footer from "../components/footer/Footer";

import "../style.css";

const Root = () => {
  return (
    <div className="bg-white dark:bg-[#101314]">
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <SwitchButton />
      <Footer />
    </div>
  );
};

export default Root;
