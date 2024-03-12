import { S3 } from 'aws-sdk';

const s3 = new S3();

export const uploadToS3 = async (imageBuffer: Buffer): Promise<string> => {
  const params: S3.PutObjectRequest = {
    Bucket: 'tu-bucket-s3',
    Key: 'nombre-del-archivo.jpg', // Puedes generar un nombre de archivo único aquí
    Body: imageBuffer
  };

  const { Location } = await s3.upload(params).promise();
  return Location!;
};
