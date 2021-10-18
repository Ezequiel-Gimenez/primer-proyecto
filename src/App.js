import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Carrousel } from './components/Carrousel';
import { ItemListContainer } from './components/containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Hola soy ItemListContainer'/> 
      <Carrousel />
    </div>
  );
}

export default App;
