import { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [isHausMenuShown, setIsHausMenuShown] = useState(false);

  function isHausMenuShownHandler() {
    setIsHausMenuShown(!isHausMenuShown);
  }

  return (
    <div className="w-full bg-white shadow-lg shadow-slate-300 ">
      <nav className="navbar mx-auto max-w-screen-xl py-5">
        {/* desktop navbar elements */}
        <div className="navbar-start">
          <div className="flex flex-row gap-4 items-center">
            <Link to="/">
              <img
                src="/public/assets/logo/logo_transparent_bg.png"
                alt="logo"
                width={120}
                height={120}
              />
            </Link>
            <div>
              <p className="text-2xl font-light">CVJM Ratzeburg</p>
              <p className="font-light">Freizeit- und Segelzentrum</p>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <div className="flex flex-row gap-2">
            <button
              className="nav-button_topbar"
              onClick={isHausMenuShownHandler}
            >
              Haus
            </button>
          </div>
        </div>
        <div className="navbar-end">
          <p>here be dragons</p>
        </div>
      </nav>
      {isHausMenuShown && (
        <nav className="bg-primary-2 text-white h-12">Hallo</nav>
      )}
    </div>
  );
};

export default TopBar;
