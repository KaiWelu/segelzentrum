import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar";

const RootLayout = () => {
  return (
    <div className="w-full bg-slate-50 lg:p-4">
      <div className="mx-auto max-w-screen-xl p-4 bg-white shadow-sm shadow-slate-200">
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
    </div>
  );
};

export default RootLayout;
