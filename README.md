## Pasos para usar la página con JavaScript y NodeJs

1.  Después de clonar el repositorio, dirigirse a la carpeta e instalar las dependencias

```sh
cd javascript-node
npm i
```

2.  Para cambiar el puerto ir a `src/app.js` y cambiar la constante PORT

```js
const PORT = 3000
```

3. Iniciar el servidor

```sh
npm run dev
```

## Pasos usar para la página con Python y Flask

1.  Dirigirse a la carpeta

```sh
cd python-flask
```

2.  Para cambiar el puerto ir al archivo `app.py` y cambiar la línea `port=`

```py
app.run(debug=True, host='localhost', port= 5000  )
```

3. Iniciar el servidor

```sh
py app.py
```
