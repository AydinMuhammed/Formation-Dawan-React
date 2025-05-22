import { Link } from "react-router-dom";


export default function Product({title, body, id}) {





  return (
    <>
        <li>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/product/${id}`}>Voir les détails du produit</Link>
        </li>
    </>
  )
}