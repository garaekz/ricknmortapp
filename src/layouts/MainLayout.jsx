import { Outlet } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

export default function MainLayout() {
  return (
  <>
    <NavbarComponent />
    <main className='mt-20'>
      <Outlet />
    </main>
    <FooterComponent />
  </>
  );
}