import logoReact from '../assets/react.svg'
import style from './Home.module.css'
import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

// import { sendData } from '../utils/dataRequest';

import Client from './Client';
import Product from './Product';

//export default function Home(props) {

/*
  const clients = [
    {
      id: nanoid(2),
      name: "Jean Dupont",
      email: "jean.dupont@example.com",
      phone: "123-456-7890",
    },
    {
      id:nanoid(2),
      name: "Marie Curie",
      email: "marie.curie@example.com",
      phone: "987-654-3210",
    },
    {
      id:nanoid(2),
      name: "Albert Camus",
      email: "albert.camus@example.com",
      phone: "555-123-4567",
    },
    {
      id:nanoid(2),
      name: "Simone de Beauvoir",
      email: "simone.beauvoir@example.com",
      phone: "444-789-1234",
    },
  ];
*/

  //const id = 12

  //console.log("nano",nanoid(4))
  /*
  return (
    <>
        <h2 className={style.titre_admin}>Page admin</h2>
         <p>Bienvenue sur notre site : {props.name}</p>

         <img src={logoReact} alt="" />
         <img src={`../../public/images/vite_${id}.svg`} alt="logo Vite" />
         {props.sAdmin ? <p>Vous êtes admin</p> : <></>}

         <section>
          <ul>
          {clients.map( (client)=> <Client key={client.id} name={client.name} email={client.email} phone={client.phone}/>)}
          </ul>
         </section>
    </>
   

  )
  */
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {

    console.log("ON RENTRE useEffect ---------------------");
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) =>{
      if(!res.ok) {
        throw new Error("Erreur");
      }
      setLoading(false)

      return res.json()
    }).then((resData) => {
      setData(resData);
    }).catch((err) => {
      console.log(err);
      setError(true);
      setLoading(false);
    })
  },[]);

  console.log("loading", loading);
  console.log("data", data);
  console.log("error", error);
  const displayData = data.map((product) => (
    <Product 
      key={product.id} 
      id={product.id} 
      title={product.title} 
      body={product.body}
    />
  ));  
const loader = loading ? <p>Chargement...</p> : <></>;
const errorMessage = error ? <p>Erreur</p> : <></>;

  return (
    <>
      <section>
        <ul>
          {loader}
          {displayData}
          {errorMessage}
        </ul>
      </section>
    
    
    
    </>





  )
}