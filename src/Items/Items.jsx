import { Typography,Button } from '@mui/material';
import estilo from './Items.css'
import { Link } from 'react-router-dom';

function Item(props) {
    const { nombre, img, descripcion, precio, alt, id } = props;

    return (
        <div style={estilo} className='listadito'>
            <div>
            <Typography
                variant="h2"
                component="h2"
                mt={10}
                sx={{ display: { xs: 'none', md: 'grid' } }}
            >
                <>{nombre}</>
            </Typography>
            <Typography
                variant="h4"
                component="h4"
                mt={9}
                mb={9}
                sx={{ display: { xs: 'grid', md: 'none' } }}
            >
                <>{nombre}</>
            </Typography>
            <img width="200" alt={alt} src={img} />
            <p><span className='negrita'>Acerca de: </span>{descripcion}</p>
            <p><span className='negrita'>Precio: </span>${precio}</p>
            <Link to={`/product/${id}`}><Button variant="contained">Ver Producto</Button></Link>
            </div>
        </div>
    )
}
export default Item;