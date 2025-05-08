
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import '../styles/Layout.css'

export default function Layout() {
  return (
    <>
        <NavBar />
        {/* Contenu principal (rendu via Outlet) */}
        <main className="main-content">
            <div className="container">
                <Outlet />
            </div>
        </main>
        
        {/* Pied de page */}
        <footer className="app-footer">
            <div className="container">
                <p>Démonstration d'authentification avec Redux Toolkit &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
   </>
  )
}
