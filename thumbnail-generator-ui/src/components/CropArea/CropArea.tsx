import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Slider } from '@mui/material';
import Cropper from 'react-easy-crop';
import { Point, Area } from 'react-easy-crop/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { saveData } from '../../features/checkoutData/checkoutDataSlice';
import './cropArea.css';
import request from '../../api/apiCalls';

export interface CropData {
  croppedArea: {
    [key: number]: Area;
  };
  croppedAreaPixels: {
    [key: number]: Area;
  };
}
interface HttpDataResponse {
  data: {
    id: string;
    url: string;
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
    (state: RootState) => state.imageSelected.value as string
  );

  const dispatch = useDispatch();

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCropData({ croppedArea, croppedAreaPixels });
    },
    []
  );
  const navigate = useNavigate();

  const changeHandler = (event: Event, value: number | number[]) =>
    setZoom(Number(value));

  const saveHandler = async () => {
    let response: HttpDataResponse;
    try {
      response = await request(workImage as string, cropData);
      console.log(response);
      dispatch(saveData({ id: response.data.id, url: response.data.url }));
      navigate(`/checkout/${response.data.id}`);
      console.log('hola');
      console.log(response);
    } catch (error) {
      // error
      console.log('error', error);
    }
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
