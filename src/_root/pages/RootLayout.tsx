import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar";
import ScrollToHashElement from "../../components/util/ScrollToHashElement";
import Footer from "../../components/ui/Footer";

const RootLayout = () => {
  return (
    <div className="w-full bg-white">
      <ScrollToHashElement />
      <header className="sticky top-0 z-50">
        <TopBar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
