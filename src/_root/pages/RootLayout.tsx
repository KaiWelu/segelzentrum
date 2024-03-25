import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar";

const RootLayout = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-4">
        <header className="sticky top-0">
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
