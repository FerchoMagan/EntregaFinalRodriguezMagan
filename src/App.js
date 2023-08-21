import NavBar from "./navBar/navBar"
import ItemDetailContainer from "./itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./itemListContainer/itemListContainer";
import ItemsHardware from "./hardware/ItemsHardware";
import ItemsSoftware from "./software/ItemsSoftware";
import Contacto from "./contacto/Contacto"
import PageNotFound from "./PageNotFound";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./footer/Footer";
import { createContext, useState } from "react";

const cartContext = createContext ({ cart: []});

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  
  const addToCart = (product, quantity) => {
    const updatedCart = [...cart, { product, quantity }];
    setCart(updatedCart);
    console.log('Cart updated:', updatedCart);
  };

  return (
    <cartContext.Provider value={{ cart: cart, addToCart: addToCart }}>
      {props.children}
    </cartContext.Provider>
  );
}

function App() {


  
  return (
    <>
    <CartContextProvider>
      <div id="topup" />
      
        <BrowserRouter>
        
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
            <Route path="/product/:id" element={<ItemDetailContainer/>}/>
            <Route path="/hardware" element={<ItemsHardware />} />
            <Route path="/software" element={<ItemsSoftware />} />
            <Route path="/contactenos" element={<Contacto />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
          
        </BrowserRouter>
      </CartContextProvider>
      </>
  );
}

export default App;


export {cartContext};