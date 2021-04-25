# Práctica 8: Aplicación de procesamiento de notas de texto

## Introducción

Este es el informe de la octava práctica, donde he implementado una aplicación de procesamiento de notas. He podido familiarizarme con las API de Node.js y la utilización del sistema de ficheros mediante TypeScript.

Como se recomienda en el guión, he intentado seguir las técinas de desarrollo que hemos aprendido hasta el momento, generar documentaicón, basar el código en pruebas, asegurarnos que el código está "cubierto", seguir principios SOLID de Programación Orientada a Objetos y un largo etc. 


## Configuración del entorno de trabajo

Para configurar el entorno de trabjo y optimizar el tiempo  (_"not to reinvent the wheel"_ como se diría en inglés), he aprovechado el repositorio que ha facilitado el profesor Eduardo:

- [Enlace al repositorio GitHub Action para comprobar la calidad y seguridad del código fuente mediante Sonar Cloud](https://github.com/ULL-ESIT-INF-DSI-2021/github-actions-sonar-cloud)

He descargado el contenido del repositorio en mi máquina local y luego los he transferido todos los ficheros usando el comando `scp` al directorio de que he creado para la práctica en el servidor del IaaS:

```bash
usuario@dsi:~$ mkdir pr8-notes-app
```

```bash
alberto@xps-13:Downloads/github-actions-sonar-cloud-main $ scp -Cpr ./* dsi:/home/usuario/pr5-objects-classes-interfaces
```

Una vez hecho esto, ya tengo todo el set up con las dependencias necesarias y la estructura de ficheros. Todo lo que queda por hacer es:

```bash
npm install
```
![project_structure](img/project_structure.png)

