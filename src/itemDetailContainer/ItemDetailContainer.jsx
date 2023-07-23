import {useState, useEffect} from 'react';
import {getProductData} from '../services/asyncProducts';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';


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
        return <p>Loading...</p>; 
    }

    return <ItemDetail product={product} />;
}

export default ItemDetailContainer;