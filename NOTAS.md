# Tailwind

## Instalar tailwind

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

## Archivo de configuracion

```bash
npx tailwindcss init -p
```

lo cual da el siguiente resultado:
> Created Tailwind CSS config file: tailwind.config.js Created PostCSS config file: postcss.config.js

## importando

> /* ./styles/globals.css */ <br />
> @tailwind base;<br />
> @tailwind components;<br />
> @tailwind utilities;

# _app.js

`_app.js` es el modulo que se encarga de cargar todos los componentes para renderizar las páginas, es por ello que se
carga directamente el modulo de css globalmente en ese script.

## _app.js y context

Sabemos que `_app.js` se encarga de cargar todos los componentes para que sean renderizados en las páginas. Es por ello
que necesitamos importar <TasksProvider> para encerrar los componentes que serán renderizados; de la siguiente manera:

```js
import '../styles/globals.css'
import {TasksProvider} from '../context/taskContext'


function MyApp({Component, pageProps}) {
    return (
        /* Vemos que es aqui en donde todos los componentes accederan a los estdos */
        <TasksProvider>
            <Component {...pageProps} />
        </TasksProvider>
    )
}

export default MyApp
```

# Context

Una idea preliminar para entender `context` es concebirla como un **archivo** que almacenará los estados de los
componentes. Lo anterior evita que el estado deba ser pasado a través de `props`. En lugar de eso, para compartir los
estados basta con importar el archivo en donde estarán definidos los estados.

## crear contexto

para crear contexto basta con usar `createContext`.

```js
import {createContext} from "react";

/* create context nos permite poder exportar un objeto `algo especial` para manejar estado */
const TaskContext = createContext();


export const TasksProvider = ({children}) => {
    return (
        <TaskContext.Provider>
            {children}
        </TaskContext.Provider>
    )
}

/* la idea es que cualquier componente que pasen como hijos {children}, a ese componente <TasksProvider>
podra acceder a taskContext */
```

## Pasar valores

```js
import {createContext} from "react";

const TaskContext = createContext();

export const TasksProvider = ({children}) => {
    let hello = "world";

    return (
        /* De esta manera decimos que cualquier hijo {children} puede acceder a las variables dentro de 
        value={{variables, ...}} */
        <TaskContext.Provider value={{hello}}>
            {children}
        </TaskContext.Provider>
    )
}
```

## usar contexto

para usar el contexto no basta solo con importar, es necesario usar una función propia de react que es `useContext`, de
la siguiente manera:

```js
import React, {useState} from 'react'
import {TaskContext} from '../context/taskContext';
/* aqui importamos useContext */
import {useContext} from 'react';

const Home = () => {
    const [task, setTask] = useState([]);
    /* aqui lo utilizamos */
    const {hello} = useContext(TaskContext);

    return (
        <div>
            Hello world, {hello}
        </div>
    )
}

export default Home;
```