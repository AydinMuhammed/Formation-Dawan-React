import '../styles/Article.css';
import { useState } from 'react'; // Importation de useState

export default function Article({title, text}) {
  // Création d'un état pour gérer la sélection
  const [isSelected, setIsSelected] = useState(false);
  
  // Fonction pour basculer l'état de sélection quand on clique sur le bouton
  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <section>
        <h2 style={isSelected ? {color: 'green'} : {}}>{title}</h2>
        <p>{text}</p>
        <button 
          onClick={toggleSelection}
          className={isSelected ? 'selected' : 'unselected'}
        >
          {isSelected ? 'Désélectionner' : 'Sélectionner'}
        </button>
    </section>
  )
}