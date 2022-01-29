import { CropData } from '../components/CropArea/CropArea';

const baseURL: string = process.env.REACT_APP_BASE_URL || '';

const sendFile = async (file: string, cropData: CropData) => {
  const req = await fetch(baseURL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/x-www-form-urlencoded',
      access_token: '',
    },
    body: JSON.stringify({ data: { image_base64: file, cropData } }),
  });
  return req;
};

export default { sendFile };
