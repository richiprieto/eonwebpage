---
title: "Instalación Miniconda"
date: 2023-06-25
categories:
- tutorial
tags:
- instalacion
- tutorial
- miniconda
thumbnailImagePosition: left
thumbnailImage: images/miniconda_tuto.png
---
En este manual, te guiaré a través del proceso de instalación de Conda, una popular herramienta de gestión de paquetes y entornos virtuales para el desarrollo de software en Python. 
<!--more-->

Conda te permite crear entornos aislados y gestionar las dependencias de tus proyectos de manera sencilla. Sigue los pasos a continuación para instalar Conda en tu sistema.

![image](/images/miniconda_tuto.png "miniconda")

## Paso 1: Descargar Conda

1. Ve al sitio web oficial de Conda: [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html).
2. Descarga la versión adecuada de Conda para tu sistema operativo (Windows, macOS o Linux).
3. Haz clic en el enlace de descarga correspondiente y guarda el archivo en tu computadora.

## Paso 2: Instalar Conda

### Windows

1. Ejecuta el archivo de instalación descargado (por ejemplo, `Miniconda3-latest-Windows-x86_64.exe`).
2. Acepta los términos y condiciones de la licencia.
3. Selecciona "Just Me" cuando se te pregunte si quieres instalar Conda solo para tu usuario o para todos los usuarios del sistema.
4. Elige una ubicación para la instalación de Conda. Por defecto, se sugiere `C:\Users\TuUsuario\Miniconda3`.
5. Selecciona "Add Anaconda to my PATH environment variable" para agregar Conda al PATH del sistema.
6. Haz clic en "Install" y espera a que se complete la instalación.
7. Una vez instalado, cierra la ventana de instalación.

### macOS

1. Abre una ventana de Terminal.
2. Navega hasta la ubicación donde descargaste el archivo de instalación (por ejemplo, `cd Descargas`).
3. Ejecuta el siguiente comando para instalar Conda:

```bash
bash Miniconda3-latest-MacOSX-x86_64.sh
```

1. Acepta los términos y condiciones de la licencia.
2. Presiona "Enter" para aceptar la ubicación de instalación predeterminada (`~/miniconda3`).
3. Selecciona "yes" cuando se te pregunte si deseas agregar Conda al PATH del sistema.
4. Espera a que se complete la instalación.

### Linux

1. Abre una ventana de Terminal.
2. Navega hasta la ubicación donde descargaste el archivo de instalación (por ejemplo, `cd Descargas`).
3. Ejecuta el siguiente comando para instalar Conda:

```bash
bash Miniconda3-latest-Linux-x86_64.sh
```
4. Acepta los términos y condiciones de la licencia.
5. Presiona "Enter" para aceptar la ubicación de instalación predeterminada (`~/miniconda3`).
6. Selecciona "yes" cuando se te pregunte si deseas agregar Conda al PATH del sistema.
7. Espera a que se complete la instalación.

## Paso 3: Verificar la instalación

1. Cierra todas las ventanas de Terminal que hayas abierto durante la instalación.
2. Abre una nueva ventana de Terminal.
3. Ejecuta el siguiente comando para verificar que Conda se haya instalado correctamente:
```bash
conda --version
```

4. Si Conda está instalado correctamente, deberías ver la versión de Conda que has instalado.

5. ¡Felicidades! Has completado la instalación de Conda en tu sistema. Ahora puedes comenzar a utilizar Conda para gestionar tus entornos y paquetes de Python.

6. Espero que este manual de instalación te haya sido útil. Si tienes alguna pregunta o problema durante la instalación, no dudes en preguntar. ¡Disfruta usando Conda en tu desarrollo de software y nuestros cursos!
