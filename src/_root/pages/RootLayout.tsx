import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar";

const RootLayout = () => {
  return (
    <div className="w-full bg-slate-50">
      <header>
        <TopBar />
      </header>
      <main>
        <Outlet />
      </main>

      <footer>Her will be dragons</footer>
    </div>
  );
};

export default RootLayout;
