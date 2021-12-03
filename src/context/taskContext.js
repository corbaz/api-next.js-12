import {createContext} from 'react';

// funcion que va a devolver un objeto con el contexto
export const TaskContext = createContext();


// exportar el contexto
export const TaskProvider = ({children}) => {
    let hello = 'julio.corbaz@gmail.com';
    return (
        <TaskContext.Provider value={{hello}}>
            {children}
        </TaskContext.Provider>
    )
}