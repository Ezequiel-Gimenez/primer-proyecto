import { NavBar } from './components/NavBar';
import { Carrousel } from './components/Carrousel';
import { ItemListContainer } from './components/containers/ItemListContainer';
import ItemCount from './components/containers/ItemCount';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Hola soy ItemListContainer'/> 
      <Carrousel />
      <ItemCount />
    </div>
  );
}

export default App;
