import { useState } from "react";

export default function Form() {

    //const [name, setName] = useState("");
    //const [age, setAge] = useState(0);
    const [user, setUser] = useState({
        name: "",
        age: 0
    });

    console.log("name", user.name);
    console.log("age", user.age);

    function handleSubmit(e) {
        e.preventDefault(); // Empêche le rechargement de la page, très important en React
        

        console.log("Envoyé");
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Votre nom</label>
        <input type="text" id="name" name="name" value={user.name} placeholder="Votre nom" required onChange={(e)=>setUser({...user, name: e.target.value})} />
        <label htmlFor="age">Votre age</label>
        <input type="number" id="age" name="age" value={user.age} placeholder="Votre age" required onChange={(e)=>setUser({...user, age: e.target.value})}/>
        <button type="submit">Envoyer</button>
        <p>Bonjour {user.name}, vous avez {user.age} ans</p>

    </form>
  )
}