
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/ItemsProducts';
import Navegacion from './components/nav/index';
import Carrito from './components/carrito/carrito';
import CartProvider from './context/cartContext';





export default function App() {

  return (

    <div className="App">


      <CartProvider>
        <header>
          <Navegacion />
          <Carrito />
        </header>

        <main>

          <Product />
        </main>
      </CartProvider>


    </div>
  )


}
