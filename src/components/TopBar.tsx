import { Link, NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="navbar bg-primary-2 rounded-md">
      <div className="hidden lg:flex flex-row gap-1">
        <Link to="/">
          <img
            src="/public/assets/logo/logo_white.png"
            alt="logo"
            width={60}
            height={60}
            className="p-1"
          />
        </Link>
        <div className="text-white  font-semibold">
          <p>CVJM Ratzeburg</p>
          <p className="font-light">Freizeit- und Segelzentrum</p>
        </div>
      </div>
    </div>
  );
  /* <div className="flex flex-row justify-center bg-white ">
        <div className="w-full py-4 flex flex-row gap-4">
          <Link to="/">
            <img
              src="/public/assets/logo/logo_transparent_bg.png"
              alt="logo"
              width={150}
              height={150}
              className="p-1"
            />
          </Link>
          <div className="flex flex-col gap-2 ">
            <p className="text-5xl text-primary-1 font-light">CVJM Ratzeburg</p>
            <p className="text-4xl  text-secondary-1 font-light">
              Freizeit- und Segelzentrum
            </p>
          </div>
        </div>
      </div>
      <nav className="flex flex-row justify-center">
        <div className="w-full flex flex-row gap-6 justify-start">
          <NavLink to="haus" className="navlink">
            Haus
          </NavLink>
          <NavLink to="wassersport" className="navlink">
            Wassersport
          </NavLink>
          <NavLink to="umgebung" className="navlink">
            Umgebung
          </NavLink>
          <NavLink to="buchung" className="navlink">
            Buchen
          </NavLink>
          <NavLink to="verein" className="navlink">
            Förderverein
          </NavLink>
          <NavLink to="partner" className="navlink">
            Partner
          </NavLink>
        </div>
      </nav> */
};

export default TopBar;
