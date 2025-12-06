import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppNavbar from "./navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Jika URL mengandung #id (contoh: /visi-misi#ourteam)
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        // Smooth scroll setelah render halaman
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    } else {
      // Jika tidak ada hash → scroll ke atas
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <AppNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
