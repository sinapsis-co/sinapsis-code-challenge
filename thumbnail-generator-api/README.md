<<<<<<< HEAD
# Thumbnail Generator API
Este proyecto es una API serverless que genera miniaturas a partir de una imagen de origen. Permite a los usuarios cargar una imagen y devuelve tres miniaturas con dimensiones específicas.

## Requisitos
•	Node.js v18 o superior
•	Serverless Framework
•	Cuenta de AWS

## Instalación
1. Clona este repositorio en tu máquina local:
•	git clone https://github.com/sinapsis-co/sinapsis-code-challenge.git

2. Navega hasta el directorio del proyecto:
•	cd sinapsis-code-challenge/thumbnail-generator-api

3. Instala las dependencias del proyecto:
•	npm install

## Configuración
Antes de desplegar la API en AWS, asegúrate de configurar adecuadamente tus credenciales de AWS en tu entorno local. Puedes seguir la guía oficial de AWS para obtener más información sobre cómo hacerlo.
## Despliegue
Para desplegar la API en AWS, utiliza el siguiente comando:
•	npx serverless deploy

Este comando desplegará la API en tu cuenta de AWS.

## Implementación en AWS S3

Para implementar la API en AWS S3, sigue estos pasos:

1. Asegúrate de haber configurado tu bucket S3 como se describe en la sección anterior de este README.
2. Utiliza el siguiente código en tu aplicación para subir archivos al bucket S3:

```typescript
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
Asegúrate de reemplazar 'tu-bucket-s3' con el nombre de tu bucket S3 y 'nombre-del-archivo.jpg' con el nombre que deseas darle al archivo que estás subiendo.
Este código te permitirá subir archivos al bucket S3 desde tu aplicación Lambda.


## Uso
Una vez desplegada la API, puedes acceder a ella mediante la URL proporcionada por Serverless Framework. Por ejemplo:
•	https://abc123.execute-api.us-east-1.amazonaws.com/dev/generate-thumbnail

Para probar la API, puedes utilizar una herramienta como Postman o simplemente enviar solicitudes HTTP directamente. 
La API proporciona un punto de conexión POST /generate-thumbnail donde puedes enviar una imagen en formato PNG o JPEG para generar miniaturas.

### Cargar una imagen
Para cargar una imagen y generar miniaturas, realiza una solicitud POST a la URL de la API con la imagen en formato PNG o JPEG. Aquí tienes un ejemplo utilizando cURL:
•	curl -X POST -H "Content-Type: image/png" --data-binary "@ruta/de/tu/imagen.png" https://abc123.execute-api.us-east-1.amazonaws.com/dev/generate-thumbnail
=======
# Sinapsis Technical Code Challenge

## Intro:

Inside each folder you'll find a README file containing the instructions for the missions.
Each mission is structured as follows:
  - There is a goal (AKA: *what* you're building)
  - There are a set of requirements (AKA: constraints on *how* you build it)
  - There are a set grading guidelines. This is how we'll evaluate the Code Challenge

## Instructions:

1. Fork this repo!
2. Pick one mission from the root folder and solve it
3. Complete as many missions as you want!
4. Send us your repo url to `jobs at sinapsis.co`

## What's next?

We'll contact you after reviewing your submission. Be ready for a show and tell describing your solution.

# **Have Fun! :-)**
>>>>>>> d200dc67ebc93a83dc525e560623e82fbb243114
