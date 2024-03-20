import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      <div className="flex flex-row justify-center bg-white ">
        <div className="w-full md:max-w-7xl py-4 flex flex-row gap-4  border-primary-2">
          <img
            src="/public/assets/logo/logo_transparent_bg.png"
            alt="logo"
            width={150}
            height={150}
            className="p-1"
          />
          <div className="flex flex-col gap-2 ">
            <p className="text-5xl text-primary-1 font-light">CVJM Ratzeburg</p>
            <p className="text-4xl  text-secondary-1  font-light">
              Freizeit- und Segelzentrum
            </p>
          </div>
        </div>
      </div>
      <nav className="bg-white flex flex-row justify-center ">
        <div className="w-full md:max-w-7xl flex flex-row gap-6 justify-start border-b-2 border-t-2 border-primary-2">
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
    </div>
  );
};

export default TopBar;
