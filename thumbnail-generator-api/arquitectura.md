|  Cliente (Postman,   |
|  cURL, etc.)         |
|                      |
+----------+-----------+
|
v
+----------------------+
|                      |
|    API Gateway       |
|                      |
+----------+-----------+
|
v
+----------------------+
|                      |
|  AWS Lambda          |
|                      |
+----------+-----------+
|
v
+----------------------+
|                      |
|  Amazon S3 (Storage) |
|                      |
+----------------------+


•	El cliente envía una solicitud HTTP POST a la API Gateway.
•	La API Gateway enruta la solicitud al AWS Lambda correspondiente.
•	La función Lambda procesa la solicitud, genera miniaturas de la imagen y las almacena en Amazon S3.
•	Finalmente, la función Lambda devuelve las URLs de las miniaturas generadas al cliente.
