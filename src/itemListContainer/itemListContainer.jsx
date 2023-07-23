/* una prop greeting */
import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import getData from '../services/asyncProducts';
import Item from '../Items/Items'
import {useParams} from 'react-router-dom';


function ItemList() {

  const [products, resProducts] = useState([]);
  const { categoria } = useParams();
  async function requestProducts() {
    const response = await getData();
    resProducts(response);

  }
  useEffect(() => {
    requestProducts();
  }, []);
  requestProducts();
  
  const filteredByCategory = categoria ? products.filter((item) => item.categoria === categoria) : products;
  
  const filteredProducts = filteredByCategory.filter((item) => item.stock > 0);


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
          <>Nuestros productos</></Typography>
        <Typography
          variant="h3"
          component="h3"
          align='center'

          mt={9}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <>Nuestros productos</></Typography>

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

