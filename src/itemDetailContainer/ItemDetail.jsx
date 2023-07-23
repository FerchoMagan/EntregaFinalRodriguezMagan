import React from 'react';
import Typography from '@mui/material/Typography';
import Contador from '../boton/Boton' 
import estilo from './ItemDetail.css'
import {Button} from '@mui/material';
const ItemDetail = ({ product }) => {
  
  return (
    <>
      <div style={estilo} className='listadito'>
        <div>
          <Typography
            variant="h2"
            component="h2"
            mt={10}
            sx={{ display: { xs: 'none', md: 'grid' } }}
          >
            {product.nombre}
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            mt={9}
            mb={9}
            sx={{ display: { xs: 'grid', md: 'none' } }}
          >
            {product.nombre}
          </Typography>
          <img width="400" alt={product.alt} src={product.img} />
          <p><span className='negrita'>Acerca de: </span>{product.descripcion}</p>
          <p><span className='negrita'>Precio: </span>${product.precio}</p>
          <Contador stock={product.stock} />
          <Button variant="contained">Agregar al carrito</Button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;