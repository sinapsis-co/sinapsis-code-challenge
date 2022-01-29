import React, { useState, useCallback } from 'react';
import { Button, Container, Slider } from '@mui/material';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop/types';
import './cropArea.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export interface CropData {
  croppedArea: {
    [key: number]: Area;
  };
  croppedAreaPixels: {
    [key: number]: Area;
  };
}

function CropArea() {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropData, setCropData] = useState<CropData>({
    croppedArea: {},
    croppedAreaPixels: {},
  });
  const workImage = useSelector(
    (state: RootState) => state.imageSelected.value
  );
  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCropData({ croppedArea, croppedAreaPixels });
    },
    []
  );
  const changeHandler = (event: Event, value: number | number[]) =>
    setZoom(Number(value));
  const saveHandler = () => {
    sendFile(cropData).then((res) => {
      <Navigate 
    });
  };

  return (
    <Container>
      <div className="crop-container">
        <Cropper
          image={workImage as string}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div className="controls">
        <Slider
          value={zoom}
          min={0.5}
          max={3}
          step={0.05}
          aria-labelledby="Zoom"
          onChange={changeHandler}
          classes={{ root: 'slider' }}
        />
        <Button variant="outlined" sx={{ mx: 2 }} onClick={saveHandler}>
          Convert
        </Button>
      </div>
    </Container>
  );
}

export default CropArea;
