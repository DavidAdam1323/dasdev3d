const NavLinks = () => {
  const links = [
    { name: "Home", link: "#profile" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
  ];

  return (
    <>
      <ul>
        {links.map(({ link, name }) => (
          <li key={name} className="group">
            <a href={link} title={name}>
              <span>{name}</span>
              <span className="underline"></span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
