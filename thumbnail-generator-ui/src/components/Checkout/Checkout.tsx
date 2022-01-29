import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

function Checkout() {
  const image = useSelector((state: RootState) => state.checkoutData);
  console.log(image);
  return (
    <Container>
      <Box>
        <Typography variant="h1">Checkout</Typography>
        <Typography variant="h2" align="center">
          Download your image
        </Typography>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Box
            component="img"
            src={image.url}
            sx={{ px: 'auto', maxWidth: '35vw' }}
          />
        </Grid>
      </Box>
    </Container>
  );
}

export default Checkout;
