import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="navbar bg-primary-2 rounded-md shadow-md shadow-slate-300 w-full">
      {/* === Mobile Navbar === */}
      <div className="navbar-start lg:hidden text-white">
        <div className="flex flex-row gap-1">
          <Link to="/">
            <img
              src="/public/assets/logo/logo_white.png"
              alt="logo"
              width={55}
              height={55}
              className="p-1"
            />
          </Link>
          <div className="text-white font-light text-sm">
            <p>CVJM</p>
            <p>Ratzeburg</p>
          </div>
        </div>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-md w-52 mt-4"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </div>
        </div>
      </div>
      {/* === Desktop Navbar === */}
      <div className="navbar-start hidden lg:flex">
        <div className="flex flex-row gap-2">
          <Link to="/">
            <img
              src="/public/assets/logo/logo_white.png"
              alt="logo"
              width={70}
              height={70}
              className="p-1"
            />
          </Link>
          <div className="text-white font-semibold hidden xl:inline">
            <p>CVJM Ratzeburg</p>
            <p className="font-light">Freizeit- und Segelzentrum</p>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn rounded-none
            border-0           
            font-light
            text-lg
            text-white
            bg-primary-2
            hover:!bg-primary-2             
            active:!bg-primary-2 
            active:!text-white"
          >
            Haus
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-sm w-52 text-primary-2"
          >
            <li>
              <Link
                to="haus"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 1
              </Link>
            </li>
            <li>
              <Link
                to="haus"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 2
              </Link>
            </li>
            <li>
              <Link
                to="haus"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 3
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn rounded-none
            border-0           
            font-light
            text-lg
            text-white
            bg-primary-2
            hover:!bg-primary-2             
            active:!bg-primary-2 
            active:!text-white"
          >
            Wassersport
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-sm w-52 text-primary-2"
          >
            <li>
              <Link
                to="wassersport"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 1
              </Link>
            </li>
            <li>
              <Link
                to="wassersport"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 2
              </Link>
            </li>
            <li>
              <Link
                to="wassersport"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 3
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn rounded-none
            border-0           
            font-light
            text-lg
            text-white
            bg-primary-2
            hover:!bg-primary-2             
            active:!bg-primary-2 
            active:!text-white"
          >
            Umgebung
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-sm w-52 text-primary-2"
          >
            <li>
              <Link
                to="umgebung"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 1
              </Link>
            </li>
            <li>
              <Link
                to="umgebung"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 2
              </Link>
            </li>
            <li>
              <Link
                to="umgebung"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 3
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn rounded-none
            border-0           
            font-light
            text-lg
            text-white
            bg-primary-2
            hover:!bg-primary-2             
            active:!bg-primary-2 
            active:!text-white"
          >
            Buchen
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-sm w-52 text-primary-2"
          >
            <li>
              <Link
                to="buchung"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 1
              </Link>
            </li>
            <li>
              <Link
                to="buchung"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 2
              </Link>
            </li>
            <li>
              <Link
                to="buchung"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 3
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn rounded-none
            border-0           
            font-light
            text-lg
            text-white
            bg-primary-2
            hover:!bg-primary-2             
            active:!bg-primary-2 
            active:!text-white"
          >
            Verein
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-sm w-52 text-primary-2"
          >
            <li>
              <Link
                to="haus"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 1
              </Link>
            </li>
            <li>
              <Link
                to="haus"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 2
              </Link>
            </li>
            <li>
              <Link
                to="haus"
                className="hover:!bg-white hover:!text-primary-2 hover:!font-semibold focus:!bg-white focus:!text-primary-2 focus:!font-semibold"
              >
                Kategorie nummer 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <a href="https://www.facebook.com/cvjm.ratzeburg" target="_blank">
          <img
            src="/public/assets/icons/icons8-facebook-64.png"
            alt="facebook"
            height={35}
            width={35}
          />
        </a>
        <a href="https://www.instagram.com/cvjmratzeburg" target="_blank">
          <img
            src="/public/assets/icons/icons8-instagram-64.png"
            alt="instagram"
            height={35}
            width={35}
          />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
