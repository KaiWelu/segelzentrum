import { useState } from "react";
import { Link } from "react-router-dom";
import SubMenu from "./ui/SubMenu";

const TopBar = () => {
  // static data for the submenu
  const hausMenuItems = [
    {
      name: "Über uns",
      path: "haus/uberuns",
    },
    {
      name: "Ausstattung",
      path: "haus/ausstattung",
    },
    {
      name: "Tagungen",
      path: "haus/tagungen",
    },
    {
      name: "Anfahrt",
      path: "haus/anfahrt",
    },
    {
      name: "Webcam",
      path: "haus/webcam",
    },
    { name: "Stellenangebote", path: "haus/stellenangebote" },
  ];

  // submenu states and functionality
  const [isHausMenuShown, setIsHausMenuShown] = useState(false);
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  function subMenuHandler(event: any) {
    if (event.target.id === "haus") {
      setIsHausMenuShown(!isHausMenuShown);
    }
  }

  function mobileMenuHandler() {
    setIsMobileMenuShown(!isMobileMenuShown);
  }

  return (
    <div className="w-full bg-white shadow-sm shadow-slate-300 relative">
      {/* mobile navbar */}
      <nav className="navbar w-full md:hidden">
        <div className="flex flex-row w-full justify-between px-1">
          <div className="flex flex-row gap-2">
            <Link to="/">
              <img
                src="/public/assets/logo/logo_transparent_bg.png"
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
            <div className="flex flex-col">
              <p className="text-xs font-semibold">CVJM Ratzeburg</p>
              <p className="text-xs font-light">Freizeit- und Segelzentrum</p>
            </div>
          </div>
          <button onClick={mobileMenuHandler}>
            {/* burger menu */}
            {isMobileMenuShown ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            )}
          </button>
        </div>
        {/* mobile menu */}
        {isMobileMenuShown && (
          <div className="absolute left-0 top-0 h-screen bg-white shadow-md shadow-slate-300 items-start">
            <div className="flex flex-col gap-1 text-primary-2">
              <div className="collapse collapse-arrow bg-white">
                <input type="radio" name="mobile-accordion" />
                <div className="collapse-title text-sm font-semibold">Haus</div>
                <div className="collapse-content text-sm">
                  <p>Über uns</p>
                  <p>Wassersport</p>
                  <p>Tagen</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white">
                <input type="radio" name="mobile-accordion" />
                <div className="collapse-title text-sm font-semibold">
                  Wassersport
                </div>
                <div className="collapse-content text-sm">
                  <p>Über uns</p>
                  <p>Wassersport</p>
                  <p>Tagen</p>
                  <p>Über uns</p>
                  <p>Wassersport</p>
                  <p>Tagen</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white">
                <input type="radio" name="mobile-accordion" />
                <div className="collapse-title text-sm font-semibold">
                  Umgebung
                </div>
                <div className="collapse-content text-sm">
                  <p>Über uns</p>
                  <p>Wassersport</p>
                  <p>Tagen</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white">
                <input type="radio" name="mobile-accordion" />
                <div className="collapse-title text-sm font-semibold">
                  Buchen
                </div>
                <div className="collapse-content text-sm">
                  <p>Über uns</p>
                  <p>Wassersport</p>
                  <p>Tagen</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white">
                <input type="radio" name="mobile-accordion" />
                <div className="collapse-title text-sm font-semibold">
                  Förderverein
                </div>
                <div className="collapse-content text-sm">
                  <p>Über uns</p>
                  <p>Wassersport</p>
                  <p>Tagen</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* desktop navbar elements */}
      <nav className="navbar mx-auto max-w-screen-xl py-5 hidden md:flex">
        <div className="navbar-start">
          <div className="flex flex-row gap-4 items-center">
            {/* for medium and smaller displays */}
            <div className="xl:hidden">
              <Link to="/">
                <img
                  src="/public/assets/logo/logo_transparent_bg.png"
                  alt="logo"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
            {/* for large displays */}
            <div className="hidden xl:flex">
              <Link to="/">
                <img
                  src="/public/assets/logo/logo_transparent_bg.png"
                  alt="logo"
                  width={120}
                  height={120}
                />
              </Link>
            </div>
            {/* for large displays */}
            <div className="hidden xl:flex flex-col">
              <p className="text-2xl font-light">CVJM Ratzeburg</p>
              <p className="font-light">Freizeit- und Segelzentrum</p>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <div className="flex-row gap-4 hidden md:flex">
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
        <div className="navbar-end hidden md:flex">
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
      {isHausMenuShown && <SubMenu menuItems={hausMenuItems} />}
      {/* {isHausMenuShown && (
        <div className="bg-primary-2 text-white h-16 w-full shadow-sm shadow-slate-300 hidden md:flex">
          <nav className="navbar mx-auto max-w-screen-lg">
            <div className="w-full flex flex-row gap-4">
              <Link to="haus/uberuns">
                <button className="nav-button_submenu">Über uns</button>
              </Link>
              <Link to="haus#ausstattung">
                <button className="nav-button_submenu">Ausstattung</button>
              </Link>
              <Link to="haus#tagen">
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
      )} */}
    </div>
  );
};

export default TopBar;
