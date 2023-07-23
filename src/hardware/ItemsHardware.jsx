import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import {getHardwareData} from '../services/asyncProducts';
import Item from '../Items/Items'
import {useParams} from 'react-router-dom';


function ItemList() {
    const [products, setProducts] = useState([]);
    let { categoria } = useParams();
  
    async function requestProducts() {
      const response = await getHardwareData(categoria); 
      setProducts(response);
    }
  
    useEffect(() => {
      requestProducts();
    }, [categoria]);

const filteredProducts = products.filter((item) => item.stock > 0);

  return (
    <div>
      <div>
        <Typography
          variant="h1"
          component="h1"
          align='center'

          mt={10}
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          <>Nuestro Hardware</></Typography>
        <Typography
          variant="h3"
          component="h3"
          align='center'

          mt={9}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <>Nuestro Hardware</></Typography>

      </div>

      <Grid container spacing={2}>
        {filteredProducts.map((item) => (
          <Grid key={item.id} item xs={12} md={4}>
            <Item {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  )





}




export default ItemList;