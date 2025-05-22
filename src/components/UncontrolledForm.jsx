import { useRef,useState } from "react"





export default function UncontrolledForm() {

    const name = useRef();
    const age = useRef();

    const savedData = useRef(0);
    const [nb, setNb] = useState(0);
    console.log(savedData);

    function handleSubmit(e) { 
        e.preventDefault(); // Empêche le rechargement de la page, très important en React
        console.log(name.current.value);
        console.log(age.current.value);
        name.current.style.color="red";
        
    }


  return (
    <div>
        <button onClick={()=> setNb(nb+1)}>Increment state</button>
        <button onClick={()=> savedData.current++}>Increment ref</button>
        <p>{nb}</p>
        <p>{savedData.current}</p>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Votre nom</label>
            <input ref={name} />
            <label htmlFor="age">Votre age</label>
            <input ref={age}/>
            <button type="submit">Envoyer</button>

        </form>

    </div>
  )
}