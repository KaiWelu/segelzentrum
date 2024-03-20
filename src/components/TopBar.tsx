import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <>
      <div className="flex flex-row justify-center bg-white">
        <div className="w-full md:max-w-7xl py-4 flex flex-row">
          <img
            src="/public/assets/logo/logo_full_color.png"
            alt="logo"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-1 justify-center">
            <p className="text-5xl text-primary-1">
              CVJM Freizeit- und Segelzentrum Ratzeburg
            </p>
            {/* <p className="text-4xl">Ratzeburg</p> */}
          </div>
        </div>
      </div>
      <nav className="bg-primary-2 flex flex-row justify-center">
        <div className="w-full md:max-w-7xl flex flex-row gap-6 justify-start">
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
      </nav>
    </>
  );
};

export default TopBar;
