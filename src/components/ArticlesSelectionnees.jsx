import { useSelector } from 'react-redux';
import '../styles/Articles.css';
import Article from './Article';

export default function ArticlesSelectionnees() {
  const selectedArticles = useSelector((state) => state.selectedArticles.articles);

  return (
    <>
      <h1>Articles sélectionnés</h1>
      
      {selectedArticles.length === 0 ? (
        <p>Aucun article sélectionné</p>
      ) : (
        <main>
          {selectedArticles.map((article) => (
            <Article 
              key={article.id} 
              id={article.id}
              title={article.title} 
              text={article.text}
            />
          ))}
        </main>
      )}
    </>
  );
}