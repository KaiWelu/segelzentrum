import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="w-full bg-white shadow-lg shadow-slate-300 ">
      <nav className="navbar mx-auto max-w-screen-xl py-5">
        {/* desktop navbar elements */}
        <div className="navbar-start">
          <div className="flex flex-row gap-4 items-center">
            <img
              src="/public/assets/logo/logo_transparent_bg.png"
              alt="logo"
              width={120}
              height={120}
            />
            <div>
              <p className="text-2xl font-light">CVJM Ratzeburg</p>
              <p className="font-light">Freizeit- und Segelzentrum</p>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <div className="flex flex-row gap-2">
            <Link to="haus">
              <button className="nav-button_topbar">Haus</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
