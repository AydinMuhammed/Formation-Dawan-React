import Articles from './components/Articles';
import './App.css';
import Form from './components/Form';
import UncontrolledForm from './components/UncontrolledForm';
import Effect from './components/Effect';
import Home from './components/Home';
import Meteo from './components/Meteo';
import Counter from './components/Counter';

function App() {
 

  return (
    <>      
      <h1>Hello world !</h1>
      <Articles/>

      <h2>Formulaire</h2>
      <Form/>

      <h2>Formulaire non contrôlé</h2>
      <UncontrolledForm/>

      <h2>Effet</h2>
      <Effect/>

      <h2>Home Product</h2>
      <Home/>

      <h2>Meteo</h2>
      <Meteo/>

      <h2>Counter</h2>
      <Counter/>
    </>
)
}

export default App
