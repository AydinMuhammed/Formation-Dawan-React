import { useEffect, useState } from "react"
import '../styles/Articles.css'

import Article from "../components/Article"

export default function Articles() {

        const [query, setQuery] = useState({
            isLoading: false,
            error: false,
            data: false
        })


    useEffect(()=>{
        setQuery({...query, isLoading: true})
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        
        .then((data) => {

            setQuery({...query, isLoading: false, data: data})
        })
        .catch((e) =>{

            setQuery({...query,isLoading: false, error : e, })
        })
    },[])

    

    const display = query.data?.length > 0 ? query.data.map(article => (<Article key={article.id} title={article.title} text={article.body} />)) : <p>Données indisponibles</p>
    const loader = query.isLoading ? <p>Loading...</p> : <></>
    const error = query.error ? <p>Erreur lors du chargement</p>: <></>
  
  
    return (
    <>
    
   <h1>Derniers articles</h1> 

   <main>
        {loader}
    
        {display}
        {error}

   </main>
    
    </>
  )
}
