import React, { useState, useEffect } from 'react';
import { getProductData } from '../services/asyncProducts';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function requestProduct() {
            const response = await getProductData(id);
            setProduct(response);
        }
        requestProduct();
    }, [id]);

    return <ItemDetail product={product} />;
}

export default ItemDetailContainer;