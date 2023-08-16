import { Typography, TextField, Box, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';

function SaludosInternautas() {
  const [formData, setFormData] = React.useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    text: '',
  });

  const [errors, setErrors] = React.useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    const formIsValid = validateForm();
    const isTextEmpty = formData.text.trim() === '';

    if (formIsValid && !isTextEmpty) {
      alert("En breve lo contactaremos");
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        text: 'Este campo no puede estar vacío'
      }));
    }
  }

  function validateForm() {
    const newErrors = {
      name: '',
      surname: '',
      email: '',
      phone: '',
    };

    let formIsValid = true;

    if (!/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ\s]*$/.test(formData.name)) {
      newErrors.name = 'Ingrese un nombre válido';
      formIsValid = false;
    }
    if (!/^[A-Za-zñÑáÁéÉíÍóÓúÚüÜ\s]*$/.test(formData.surname)) {
      newErrors.surname = 'Ingrese un apellido válido';
      formIsValid = false;
    }

    if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido';
      formIsValid = false;
    }

    if (!/^\+?[0-9]+(\s?[0-9]+)*$/.test(formData.phone)) {
      newErrors.phone = 'Ingrese un número de teléfono válido';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  }

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors(prevErrors => ({
      ...prevErrors,
      text: ''
    }));
  }

  return (
    <div>
      <Typography variant="h3" component="h3" align='center' mt={10} mb={5} sx={{ display: { xs: 'none', md: 'block' } }}>
        Envianos tus datos para contactarte!
      </Typography>

      <Box align="center" component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' }, }} noValidate autoComplete="off">

        <div>
          <TextField required id="name" label="Nombre" variant="outlined" value={formData.name} onChange={handleChange}
            error={!!errors.name} helperText={errors.name} />
        </div>

        <div>
          <TextField required id="surname" label="Apellido" variant="outlined" value={formData.surname} onChange={handleChange}
            error={!!errors.surname} helperText={errors.surname} />
        </div>

        <div>
          <TextField required id="email" label="E-mail" variant="outlined" value={formData.email} onChange={handleChange}
            error={!!errors.email} helperText={errors.email} />
        </div>

        <div>
          <TextField required id="phone" label="Telefono" variant="outlined" value={formData.phone} onChange={handleChange}
            error={!!errors.phone} helperText={errors.phone} />
        </div>

        <div>
          <TextField required id="text" label="Ingrese su texto" multiline maxRows={4} value={formData.text} onChange={handleChange}
            error={!!errors.text} helperText={errors.text} />
        </div>

        <div>
          <Button onClick={handleSubmit} size="large" variant="contained" endIcon={<SendIcon />}>Enviar</Button>
        </div>

      </Box>
    </div>
  );
}

export default SaludosInternautas;