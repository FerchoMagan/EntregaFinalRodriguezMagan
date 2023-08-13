import React from 'react';
import Typography from '@mui/material/Typography';
import estilo from './App.css'
const PaginaNoEncontrada = () => {
  return (
    <div>
      <Typography mt={10} mb={6} variant="h2" align='center'>
        <>No se encontró la página solicitada!!!!!!!</>
      </Typography>
      <div id="centradoImagen" style={estilo}>
         <img src="../archivos/pagenotfound.gif" alt="Page Not Found" style={estilo} id="imagenerror"/>
        </div>
    </div>
  );
};

export default PaginaNoEncontrada;