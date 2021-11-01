import { NavBar } from './components/containers/NavBar';
import { ItemListContainer } from './components/containers/ItemListContainer';
import ItemDetailContainter from './components/containers/ItemDetailContainer';
//import { Carrousel } from './components/containers/Carrousel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar /> 
      {/* <Carrousel /> */}
      <ItemListContainer /> 
      <ItemDetailContainter /> 
    </div>
  );
}

export default App;
