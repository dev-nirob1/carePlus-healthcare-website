import { Outlet } from "react-router-dom";
import Navbar from "../../../components/Section/Navbar";
import Footer from "../../../components/Section/Footer";

function MainLayout() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
