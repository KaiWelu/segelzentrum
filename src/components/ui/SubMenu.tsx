import { Link } from "react-router-dom";
import { MenuItem } from "../../types";

type SubMenuProps = {
  menuItems: MenuItem[];
};

const SubMenu = ({ menuItems }: SubMenuProps) => {
  return (
    <div className="bg-primary-2 text-white h-16 w-full shadow-sm shadow-slate-300 hidden md:flex">
      <nav className="navbar mx-auto max-w-screen-lg">
        <div className="w-full flex flex-row gap-4">
          {menuItems.map((item: MenuItem, index) => (
            <Link to={item.path} key={index}>
              <button className="nav-button_submenu">{item.name}</button>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SubMenu;
