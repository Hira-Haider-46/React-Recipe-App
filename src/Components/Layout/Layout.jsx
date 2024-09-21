import { Outlet } from "react-router-dom";
import Navbar from "../../CommonComponents/Navbar";
import Footer from "../../CommonComponents/Footer";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
};