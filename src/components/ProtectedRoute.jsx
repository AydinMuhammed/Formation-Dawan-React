import { useSelector } from "react-redux"
import { Navigate,  Outlet } from "react-router-dom"

export default function ProtectedRoute() {
    const isConnected = useSelector((state)=>state.auth.isConnected)

    if(isConnected){
        return <Outlet />
    }else{
        return <Navigate to="/" replace />
    }
}
