import { links } from "../constants";

const NavLinks = () => {
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
