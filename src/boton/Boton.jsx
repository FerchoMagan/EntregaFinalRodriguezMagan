import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import estiloBoton from './Boton.css'

function Contador({ stock }) {
    const [contador, setContador] = useState(1);
  
    const sumar = () => {
      if (contador < stock) {
        setContador(contador + 1);
      }
    };
  
    const restar = () => {
      if (contador > 1) {
        setContador(contador - 1);
      }
    };
  
    return (
        
      <div className='botoncito' style={estiloBoton}>
       <span className='botoncito2'>
       <RemoveIcon onClick={restar} className='botoncitosEstilos' id='restar'/>
       <span >  {contador} </span>
       <AddCircleOutlineIcon onClick={sumar} className='botoncitosEstilos' id='sumar'/>
       </span>
      </div>
      
    );
  }

  
  
  export default Contador;