const NavItem = ({ id, name, icon: Icon, onClick, variant = "desktop" }) => {
  const isMobile = variant === "mobile";
  return (
    <li
      key={name}
      className={`relative group ${isMobile ? "text-white" : "text-white-50"}`}
    >
      <a
        href={id}
        title={name}
        onClick={onClick}
        className={`flex items-center ${
          isMobile
            ? "px-5 sm:pl-7 py-3 text-xl sm:text-2xl sm:py-6"
            : "py-2 px-3 lg:text-xl md:p-0"
        } hover:text-white`}
      >
        {Icon && (
          <Icon
            className="mr-2 text-blue-50"
          />
        )}
        <span>{name}</span>
        <span className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  );
};

export default NavItem;
