import {useState, useEffect} from 'react';
import {getProductData} from '../services/asyncProducts';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import Typography from '@mui/material/Typography';


function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    async function requestProduct() {
        const response = await getProductData(id);
        setProduct(response);
        setLoading(false); 
    }

    useEffect(() => {
        requestProduct();
    }, [requestProduct]);

    if (loading) {
        return <Typography
        variant="h1"
        component="h1"
        align='center'

        mt={20}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <>Cargando... </></Typography>
      
    }

    return <ItemDetail product={product} />;
}

export default ItemDetailContainer;