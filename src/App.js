import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/containers/NavBar';
import { Cart } from './components/containers/Cart';
import  ItemListContainer from './components/containers/ItemListContainer';
import  ItemDetailContainer from './components/containers/ItemDetailContainer';
//import { Carrousel } from './components/containers/Carrousel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar /> 
        {/* <Carrousel /> */}
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>  
          </Route>
          <Route exact path="/categoria/:categoriaId" component={ItemListContainer} />
          <Route exact path="/producto/:productoId" component={ItemDetailContainer} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    </div> 
  );
}

export default App;
