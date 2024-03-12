import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import sharp from 'sharp';
import { uploadToS3 } from '../utils/imageUtils'; 

module.exports.generateThumbnailHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      // Obtener la imagen de la solicitud
      const originalImageBuffer = Buffer.from(event.body!, 'base64');
  
      // Verificar el tamaño del archivo (rechazar si es mayor a 11MB)
      if (originalImageBuffer.length > 11 * 1024 * 1024) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'File size exceeds the maximum allowed size of 11MB.' })
        };
      }
  
      // Verificar el tipo de archivo (solo aceptar PNG y JPEG)
      const fileType = getFileType(originalImageBuffer);
      if (!fileType || (fileType !== 'image/png' && fileType !== 'image/jpeg')) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Unsupported file type. Only PNG and JPEG files are allowed.' })
        };
      }
  
      // Procesar la imagen y generar miniaturas con las dimensiones especificadas
      const thumbnails = await Promise.all([
        sharp(originalImageBuffer).resize(400, 300).toBuffer(),
        sharp(originalImageBuffer).resize(160, 120).toBuffer(),
        sharp(originalImageBuffer).resize(120, 120).toBuffer()
      ]);
  
      // Subir las miniaturas generadas a un bucket de S3
      const thumbnailUrls = await Promise.all(thumbnails.map(thumbnail => uploadToS3(thumbnail)));
  
      // Devolver las URLs de las miniaturas generadas en la respuesta
      return {
        statusCode: 200,
        body: JSON.stringify({ thumbnails: thumbnailUrls })
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error generating thumbnail' })
      };
    }
  };
  
  const getFileType = (buffer: Buffer): string | undefined => {
    const supportedTypes = ['image/png', 'image/jpeg'];
    // Verificar si el buffer es lo suficientemente largo para determinar el tipo de archivo
    if (buffer.length < 4) {
      return undefined; // No se puede determinar el tipo de archivo
    }
    // Obtener los primeros 4 bytes del buffer y convertirlos a hexadecimal
    const type = buffer.slice(0, 4).toString('hex');
    // Buscar el tipo de archivo en la lista de tipos admitidos
    return supportedTypes.find(supportedType => type.startsWith(supportedType.replace('image/', '')));
  };

  