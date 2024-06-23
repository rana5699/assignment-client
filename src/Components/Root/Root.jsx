import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ThemeContext } from "../../AuthProvider/ThemeProvider";

const Root = () => {
  const { isDark } = useContext(ThemeContext);
  const styles = isDark
    ? "bg-[#0d1b2a] text-white"
    : "bg-[#edede9] text-[#03045e]";
  return (
    <div className={`p-2 ${styles}`}>
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
