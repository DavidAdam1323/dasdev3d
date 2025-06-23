import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <AnnouncementBar />
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
