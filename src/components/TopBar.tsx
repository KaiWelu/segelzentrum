import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="navbar bg-primary-2 rounded-md shadow-md shadow-slate-300">
      <div className="hidden xl:flex flex-row gap-1">
        <Link to="/">
          <img
            src="/public/assets/logo/logo_white.png"
            alt="logo"
            width={60}
            height={60}
            className="p-1"
          />
        </Link>
        <div className="text-white font-semibold hidden xl:inline">
          <p>CVJM Ratzeburg</p>
          <p className="font-light">Freizeit- und Segelzentrum</p>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex text-white">
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
    </div>
  );
};

export default TopBar;
