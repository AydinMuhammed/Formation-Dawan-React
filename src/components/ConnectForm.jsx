import { useState, useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { loginUser } from "../slices/authSlice"
import { useNavigate } from "react-router-dom"
import '../styles/ConnectForm.css'

export default function ConnectForm() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // Destructuration des données de l'authentification, state.auth correspond au nom donné dans le createSlice
    const {isConnected, error, loading} = useSelector(state=>state.auth)

    const [connectForm, setConnectForm] = useState({
        identifiant: "",
        password: ""
    })

    //Redirigé si déjà connecté
    useEffect(()=>{
        if(isConnected){
            navigate("/admin")
        }
    },[isConnected, navigate])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await dispatch(loginUser(connectForm))
    }


  return (
    <>
    <h2>Connexion</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label htmlFor="identifiant">Identifiant</label>
        <input type="text" id="identifiant" onChange={(e)=>{setConnectForm({...connectForm, identifiant : e.target.value})}} required/>
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" onChange={(e)=>{setConnectForm({...connectForm, password: e.target.value})}} required/>
        <button type="submit">{loading ? "Connexion en cours..." : "Se connecter"}</button>
    </form>
    </>
  )
}
