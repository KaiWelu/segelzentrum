import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar";

const RootLayout = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-4">
        <header>
          <TopBar />
        </header>
        <main>
          <Outlet />
        </main>

        <footer>Her will be dragons</footer>
      </div>
    </div>
  );
};

export default RootLayout;
