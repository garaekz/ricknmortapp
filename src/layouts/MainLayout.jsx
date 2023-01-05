import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

export default function MainLayout() {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`scrollbar dark:bg-slate-700 bg-slate-200 min-h-screen`}>
        <NavbarComponent />
        <main className="pt-8">
          <Outlet />
        </main>
        <FooterComponent />
      </div>
    </div>
  );
}
