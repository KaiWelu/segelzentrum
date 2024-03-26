import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar";

const RootLayout = () => {
  return (
    <div className="w-full bg-white">
      <header className="sticky top-0 z-50">
        <TopBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Icons by Icon 8</p>
      </footer>
    </div>
  );
};

export default RootLayout;
