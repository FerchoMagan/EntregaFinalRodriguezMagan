import NavBar from "./navBar/navBar"
import ItemDetailContainer from "./itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./itemListContainer/itemListContainer";
import ItemsHardware from "./hardware/ItemsHardware";
import ItemsSoftware from "./software/ItemsSoftware";
import Contacto from "./contacto/Contacto"
import PageNotFound from "./PageNotFound";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {


  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path="/hardware" element={<ItemsHardware />} />
          <Route path="/software" element={<ItemsSoftware />} />
          <Route path="/contactenos" element={<Contacto />} />
          

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


