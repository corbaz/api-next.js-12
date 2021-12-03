import {createContext, useContext, useState} from 'react';

// funcion que va a devolver un objeto con el contexto
const TaskContext = createContext();

// exportar el contexto
export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Tarea 1',
            description: 'Descripcion de la tarea 1',
            status: 'Pendiente'
        },
        {
            id: 2,
            title: 'Tarea 2',
            description: 'Descripcion de la tarea 2',
            status: 'Pendiente'
        },
        {
            id: 3,
            title: 'Tarea 3',
            description: 'Descripcion de la tarea 3',
            status: 'Pendiente'
        },
        {
            id: 4,
            title: 'Tarea 4',
            description: 'Descripcion de la tarea 4',
            status: 'Pendiente'
        },
        {
            id: 5,
            title: 'Tarea 5',
            description: 'Descripcion de la tarea 5',
            status: 'Pendiente'
        },
        {
            id: 6,
            title: 'Tarea 6',
            description: 'Descripcion de la tarea 6',
            status: 'Pendiente'
        },
        {
            id: 7,
            title: 'Tarea 7',
            description: 'Descripcion de la tarea 7',
            status: 'Pendiente'
        },
        {
            id: 8,
            title: 'Tarea 8',
            description: 'Descripcion de la tarea 8',
            status: 'Pendiente'
        },
        {
            id: 9,
            title: 'Tarea 9',
            description: 'Descripcion de la tarea 9',
            status: 'Pendiente'
        },
        {
            id: 10,
            title: 'Tarea 10',
            description: 'Descripcion de la tarea 10',
            status: 'Pendiente'
        },
        {
            id: 11,
            title: 'Tarea 11',
            description: 'Descripcion de la tarea 11',
            status: 'Pendiente'
        },
        {
            id: 12,
            title: 'Tarea 12',
            description: 'Descripcion de la tarea 12',
            status: 'Pendiente'
        }
    ]);

    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

// cuando se necesita el contexto
// custom hook
export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
}