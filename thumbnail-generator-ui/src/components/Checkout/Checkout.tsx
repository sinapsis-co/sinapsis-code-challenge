import React from 'react';
import { Box, Button, Container, Grid, Input, Typography } from '@mui/material';
import FileSaver from 'file-saver';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

function Checkout() {
  const image = useSelector((state: RootState) => state.checkoutData);
  const downloadHandler = () => {
    FileSaver.saveAs(image.url, 'image.jpg');
  };
  return (
    <Container>
      <Box>
        <Typography variant="h1">Ready!</Typography>
        <Typography variant="h3" align="center">
          Download your image
        </Typography>
        <Grid container direction="column">
          <Grid item mx="auto" md={12}>
            <Box
              component="img"
              src={image.url}
              sx={{ px: 'auto', maxWidth: '30vw' }}
            />
          </Grid>
          <Grid item md={12} mx="auto">
            <Input value={image.url} sx={{ width: '60vw' }} />
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Button variant="contained" onClick={downloadHandler} sx={{ m: 3 }}>
            Download
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}

export default Checkout;
