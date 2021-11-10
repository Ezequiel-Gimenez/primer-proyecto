import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/containers/NavBar';
import { Cart } from './components/containers/Cart';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import CartContextProvider from './components/containers/CartContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar /> 
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>  
            </Route>
            <Route exact path="/categoria/:categoriaId" component={ItemListContainer} />
            <Route exact path="/producto/:productoId" component={ItemDetailContainer} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div> 
  );
}

export default App;
