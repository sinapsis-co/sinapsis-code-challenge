import React from 'react';
import { Box, Container, Grid, Switch } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import WebCamComponent from '../WebCamComponent.tsx/WebCamComponent';
import FileUploaderContainer from '../../containers/FileUploaderContainer/FileUploaderContainer';
import { RootState } from '../../app/store';
import { cameraToggle } from '../../features/cameraStatus/cameraStatusSlice';

function Generator() {
  const workImage = useSelector((state: RootState) => state.imageSelected);
  const cameraStatus = useSelector(
    (state: RootState) => state.cameraStatus.value
  );
  const dispatch = useDispatch();
  const handleCamera = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(cameraToggle({ value: event.target.checked }));
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
          <Grid container>
            <Grid item xs={12}>
              <span>Turn on camera</span>
              <Switch
                onChange={handleCamera}
                checked={cameraStatus}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </Grid>
            <Grid item sx={{ mt: 5, mx: 'auto' }}>
              {cameraStatus ? <WebCamComponent /> : <FileUploaderContainer />}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} mt={9} alignItems="center">
          {workImage ? (
            <Box
              sx={{
                width: '100%',
              }}
            >
              <img alt="Preview" src={workImage.value || undefined} />
            </Box>
          ) : (
            <p>Sin imagenes cargadas</p>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Generator;
