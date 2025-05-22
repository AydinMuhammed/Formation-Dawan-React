import { useEffect } from "react";
import { useRef, useState } from "react";



export default function Effect() {

    const [count, setCount] = useState(0);
    const query = useRef();



    useEffect(() => {
        console.log("Affichage avec tableau vide")
    }, []);

  return (
    <>
      <div>Effect</div>
      <p>{count}</p>
      <input type="text" ref={query} />
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </>
  )
}