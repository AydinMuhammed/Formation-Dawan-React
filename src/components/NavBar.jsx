import { Link, NavLink } from "react-router-dom"
import '../styles/NavBar.css'
import { useSelector } from "react-redux"

export default function NavBar() {
    const {isConnected} = useSelector(state=>state.auth)
    const admin = isConnected ? <li><NavLink to="/admin" className={({isActive}) => isActive ? 'active' : ''}>Admin</NavLink></li> : <></>
    
  return (
    <nav>
        <ul>
            <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/articles" className={({isActive}) => isActive ? 'active' : ''}>Articles</NavLink></li>
            {admin}
        </ul>
    </nav>
  )
}
