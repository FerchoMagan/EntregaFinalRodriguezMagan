
import { Typography, TextField, Box, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';



function saludosInternautas() {



  return (
    <div>

      <Typography
        variant="h3"
        component="h3"
        align='center'

        mt={10}
        mb={5}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <>
          Envianos tus datos para contactarte!
        </></Typography>

      <Box
        align="center"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="Name-Contact" label="Nombre" variant="outlined" />
        </div>
        <div>
          <TextField id="SurName-Contact" label="Apellido" variant="outlined" />
        </div>

        <div>
          <TextField id="Email-Contact" label="E-mail" variant="outlined" />
        </div>

        <div>
          <TextField id="Phone-Contact" label="Telefono" variant="outlined" />
        </div>

        <div>
          <TextField id="Text-Contact" label="Ingrese su texto" multiline maxRows={4} />
        </div>
        <div >
        <Button size="large" variant="contained" endIcon={<SendIcon />}>
          Enviar
        </Button>
        </div>
      </Box>

    </div>
  )





}




export default saludosInternautas;