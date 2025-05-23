import '../styles/Article.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArticle, removeArticle } from '../slices/selectedArticlesSlice';

export default function Article({title, text, id}) {
  const dispatch = useDispatch();
  const selectedArticles = useSelector((state) => state.selectedArticles.articles);
  
  // Vérifier si cet article est dans la liste des articles sélectionnés
  const isInSelection = selectedArticles.some(article => article.id === id);//.some retourne true si au moins un élément du tableau satisfait la condition
  // avec .find on aurait l'article
  //const isInSelection = selectedArticles.find(article => article.id === id);

  
  //console.log("IS IN SELECTION", isInSelection);
  const [isSelected, setIsSelected] = useState(isInSelection);
  
  // Mettre à jour l'état local si la sélection globale change
  useEffect(() => {
    setIsSelected(isInSelection);
  }, [isInSelection]);

  const toggleSelection = () => {
    const newSelectionState = !isSelected;
    setIsSelected(newSelectionState);
    
    if (newSelectionState) {
      dispatch(addArticle({ id, title, text }));
    } else {
      dispatch(removeArticle({ id }));
    }
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
  );
}