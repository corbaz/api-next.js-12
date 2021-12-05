import { createContext, useContext, useState } from "react";
import { v4 as ID } from "uuid";
// funcion que va a devolver un objeto con el contexto
const TaskContext = createContext();

// exportar el contexto
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarea 1",
      description: "Descripcion de la tarea 1",
      status: "Pendiente",
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Descripcion de la tarea 2",
      status: "Pendiente",
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "Descripcion de la tarea 3",
      status: "Pendiente",
    },
  ]);
  const crearTarea = (title, description, status) => {
    // Añadir una tarea al array de tareas(tasks)
    setTasks([
      ...tasks,
      {
        id: ID(),
        title,
        description,
        status,
      },
    ]);
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, crearTarea }}>
      {children}
    </TaskContext.Provider>
  );
};

// cuando se necesita el contexto
// custom hook
export default function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
}
