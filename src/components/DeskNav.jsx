import { navLinks } from "../constants/index";
import NavItem from "./NavItem";

const DeskNav = () => {
  const desktopNavLinks = navLinks.slice(0, -1)

  return (
    <div className="items-center justify-between hidden w-full md:w-auto lg:block">
      <ul className="flex font-medium p-4 md:p-0 mt-4 md:mt-0 md:space-x-8">
        {desktopNavLinks.map(({ id, name, icon }) => (
          <NavItem
            key={name}
            id={id}
            name={name}
            icon={icon}
            variant="desktop"
          />
        ))}
      </ul>
    </div>
  );
};

export default DeskNav;
