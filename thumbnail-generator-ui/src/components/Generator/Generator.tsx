import React, { useState } from 'react';

import { Container, Grid } from '@mui/material';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'GIF', 'JPEG'];

function Generator() {
  const [file, setFile] = useState<File | null>(null);
  const [imgURL, setImgURL] = useState<string>('');
  const handleChange = (image: File) => {
    setFile(image);
    setImgURL(URL.createObjectURL(image));
  };

  return (
    <Container>
      <h1>Welcome to Thumbnail Generator</h1>
      <Grid
        container
        rowSpacing={1}
        justifyContent="center"
        alignItems="start"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} md={6}>
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {imgURL ? (
            <img src={imgURL} alt="preview" />
          ) : (
            <p>Sin imagenes cargadas</p>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Generator;
