import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{NavBar} from './components/NavBar';
import {Carrousel} from './components/Carrousel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carrousel />
    </div>
  );
}

export default App;
