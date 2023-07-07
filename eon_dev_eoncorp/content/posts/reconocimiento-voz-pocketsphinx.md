---
title: "Reconocimiento de Voz en Tiempo Real con PocketSphinx: ¡Habla y Escucha con Python!"
date: 2018-01-24
categories:
- tutorial
tags:
- reconocimiento de voz
- pocketsphinx
- python
- idioma español
thumbnailImagePosition: left
thumbnailImage: images/miniconda_tuto.png
---
¡Hola amigos! En esta ocasión, nos complace presentarles una solución sencilla para el reconocimiento de voz en tiempo real utilizando Python y PocketSphinx. Con esta tecnología, podrás experimentar la magia de convertir tu voz en texto de manera instantánea.
<!--more-->

Para comenzar, debemos descargar las librerías base Sphinxbase y Pocketsphinx. Para ello, seguiremos unos simples pasos. Abrimos la consola y escribimos los siguientes comandos:

{{< highlight bash>}}
sudo apt install autoconf libtool automake bison python-dev swig libpulse-dev
mkdir sphinx
cd sphinx
git clone https://github.com/cmusphinx/sphinxbase
git clone https://github.com/cmusphinx/pocketsphinx
{{< / highlight >}}

Posteriormente, procederemos a instalar las librerías en nuestro sistema:
{{<highlight bash>}}
cd sphinxbase
./autogen.sh
make
sudo make install

cd ../pocketsphinx
./autogen.sh
make
sudo make install


{{</highlight>}}

¡Excelente! Ahora instalaremos la interfaz que nos permitirá utilizar PocketSphinx con Python. Asegúrate de tener la última versión de setuptools y wheel instalada ejecutando los siguientes comandos:

{{< highlight bash >}}
pip install --upgrade pip setuptools wheel
pip install --upgrade pocketsphinx
{{< / highlight >}}

Una vez completados estos pasos, agregaremos el idioma español a nuestro reconocimiento de voz. Para ello, nos dirigimos a la siguiente dirección: [enlace a la dirección]. Descargaremos los siguientes archivos: ```cmusphinx-es-5.2.tar.gz, es-20k.lm.gz, es.dict```.

Descomprimimos los archivos ```cmusphinx-es5.2.tar.gz y es-20k.lm.gz```. Estos archivos contienen los modelos y el diccionario que utilizaremos para el idioma español.

Cabe recalcar que utilizaremos el modelo de Hidden Markov Models [[1]](#1)[[2]](#2).

A continuación, abrimos la consola nuevamente y ejecutamos el siguiente comando para obtener la dirección en la que debemos guardar los archivos recién descomprimidos. Antes de eso, realizaremos algunos cambios: renombraremos el archivo **es-20k.lm** a **es-20k.lm.bin**. Luego, ingresaremos a la carpeta **cmusphinx-es-5.2** y encontraremos una subcarpeta llamada **model_parameters** que contiene una carpeta similar a **voxforge_es_sphinx.cd_ptm_4000**. La renombraremos como **es-es**.

Finalmente, copiamos el archivo y la carpeta renombrados (**es-20k.lm.bin** y **es-es**) en la dirección del modelo, junto con el archivo **es.dict**.

¡Ya estamos listos para probar nuestro script! Abrimos Atom o tu editor de texto favorito y copiamos el siguiente script. También puedes descargarlo desde nuestro repositorio en GitHub: [Click Aqui](https://github.com/richiprieto/SpeechRecognition).

{{< highlight python >}}
import os
from pocketsphinx import LiveSpeech, get_model_path

model_path = get_model_path()
print(model_path)

speech = LiveSpeech(
    verbose=False,
    sampling_rate=16000,
    buffer_size=2048,
    no_search=False,
    full_utt=False,
    hmm=os.path.join(model_path, 'es-es'),
    lm=os.path.join(model_path, 'es-20k.lm.bin'),
    dict=os.path.join(model_path, 'es.dict')
)

for phrase in speech:
    print(phrase)

{{< / highlight >}}

¡Genial! Ahora solo debes ejecutar el script y disfrutar del reconocimiento de voz en tiempo real con PocketSphinx. Podrás ver los resultados en la consola.

{{< youtube id="T-l2OIJAy8Q" >}}

Esperamos que esta solución haya sido de tu agrado. Recuerda que en EÓN estamos comprometidos con la innovación tecnológica y seguimos explorando nuevas formas de mejorar nuestras interacciones con la voz.

¡Hasta la próxima!

Bibliografía:
- <a id="1">[1]</a> [Jurafsky](https://web.stanford.edu/~jurafsky/slp3/9.pdf)
- <a id="2">[2]</a> [Zoubin](http://mlg.eng.cam.ac.uk/zoubin/papers/ijprai.pdf)



