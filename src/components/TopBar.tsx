import { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [isHausMenuShown, setIsHausMenuShown] = useState(false);

  function subMenuHandler(event: any) {
    if (event.target.id === "haus") {
      setIsHausMenuShown(!isHausMenuShown);
    }
  }

  return (
    <div className="w-full bg-white shadow-sm shadow-slate-300 relative">
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
            <div className="hidden xl:flex flex-col">
              <p className="text-2xl font-light">CVJM Ratzeburg</p>
              <p className="font-light">Freizeit- und Segelzentrum</p>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <div className="flex-row gap-4 hidden lg:flex">
            <button
              className="nav-button_topbar"
              id="haus"
              onClick={subMenuHandler}
            >
              Haus
            </button>
            <button
              className="nav-button_topbar"
              id="wassersport"
              onClick={subMenuHandler}
            >
              Wassersport
            </button>
            <button
              className="nav-button_topbar"
              id="umgebung"
              onClick={subMenuHandler}
            >
              Umgebung
            </button>
            <button
              className="nav-button_topbar"
              id="Buchen"
              onClick={subMenuHandler}
            >
              Buchen
            </button>
            <button
              className="nav-button_topbar"
              id="verein"
              onClick={subMenuHandler}
            >
              Förderverein
            </button>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="flex flex-row justify-end w-full gap-3 mr-4">
            <a href="https://www.instagram.com/cvjmratzeburg" target="_blank">
              <img
                src="/public/assets/icons/icons8-instagram-red.svg"
                alt="instagram"
                height={35}
                width={35}
              />
            </a>
            <a href="https://www.facebook.com/cvjm.ratzeburg" target="_blank">
              <img
                src="/public/assets/icons/icons8-facebook-red.svg"
                alt="instagram"
                height={35}
                width={35}
              />
            </a>
          </div>
        </div>
      </nav>
      {isHausMenuShown && (
        <div className="bg-primary-2 text-white h-16 w-full shadow-sm shadow-slate-300 hidden lg:flex">
          <nav className="navbar mx-auto max-w-screen-lg">
            <div className="w-full flex flex-row gap-4">
              <Link to="wassersport">
                <button className="nav-button_submenu">Über uns</button>
              </Link>
              <Link to="wassersport">
                <button className="nav-button_submenu">Ausstattung</button>
              </Link>
              <Link to="wassersport">
                <button className="nav-button_submenu">Tagungen</button>
              </Link>
              <Link to="wassersport">
                <button className="nav-button_submenu">Gallerie</button>
              </Link>
              <Link to="wassersport">
                <button className="nav-button_submenu">Webcam</button>
              </Link>
              <Link to="wassersport">
                <button className="nav-button_submenu">Kontakt</button>
              </Link>
              <Link to="wassersport">
                <button className="nav-button_submenu">Anfahrt</button>
              </Link>
              <Link to="wassersport">
                <button className="nav-button_submenu">Stellenangebote</button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default TopBar;
