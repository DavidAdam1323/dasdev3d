import { useEffect, useState } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import NavBar from "../components/NavBar";

const Layout = ({ children }) => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY <= 10) {
        setShowAnnouncement(true);
      } else {
        setShowAnnouncement(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnnouncementBar show={showAnnouncement} />
      <NavBar showAnnouncement={showAnnouncement} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
