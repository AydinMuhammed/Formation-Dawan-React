import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/Layout.css";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>contact : contact@notresite.com</p>
      </footer>
    </>
  );
}