import Layout from "../components/Layout";
import useTaskContext from "../context/TaskContext";
import { useState } from "react";
import Tareas from "../components/Tareas";

export default function NewTask() {
  const { crearTarea } = useTaskContext();
  const emptyTask = () => {
    return {
      title: "",
      description: "",
      status: "",
    };
  };
  const [task, setTask] = useState(emptyTask);

  const onChange = (e) => {
    if (e.target.value.length > 0) {
      setTask({
        ...task,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    crearTarea(task.title, task.description, task.status);
    setTask(emptyTask);
  };

  return (
    <Layout>
      <div>
        <button
          className="text-3xl text-center text-green-600 my-5 mx-32
                     bg-yellow-200 rounded-lg p-2 shadow-2xl
                     shadow-red-900"
        >
          Tarea Nueva
        </button>

        <div className="mb-8 md:mt-0 md:col-span-2">
          <form method="POST">
            {/*Tarea*/}
            <div className="my-5 flex rounded-md shadow-sm gap-2">
              <span
                className="inline-flex items-center px-3 py-1
                    rounded-md border border-gray-300
                    bg-red-400 text-white
                    text-bold text-sm"
              >
                Tarea
              </span>
              <input
                type="text"
                name="title"
                value={task.title}
                id="idTarea"
                placeholder="Ingrese una Tarea"
                className="bg-white hover:bg-green-400 focus:bg-red-400
                    text-black hover:text-white focus:text-white
                    focus:placeholder-red-600
                    hover:placeholder-green-600
                    focus:outline-none
                    flex-1 block w-full rounded
                    text-sm px-3 py-1"
                onChange={onChange}
              />
            </div>

            {/*Descripcion*/}
            <div className="mt-5 flex rounded-md shadow-sm gap-2">
              <span
                className="inline-flex items-center px-3 py-1
                    rounded-md border border-gray-300
                    bg-red-400 text-white
                    text-bold text-sm"
              >
                Descripción
              </span>
              <input
                type="text"
                name="description"
                value={task.description}
                id="idDescripcion"
                placeholder="Ingrese una Descripcion"
                className="bg-white hover:bg-green-400 focus:bg-red-400
                    text-black hover:text-white focus:text-white
                    focus:placeholder-red-600
                    hover:placeholder-green-600
                    focus:outline-none
                    flex-1 block w-full rounded
                    text-sm px-3 py-1"
                onChange={onChange}
              />
            </div>

            {/*Status*/}
            <div className="my-5 flex rounded-md shadow-sm gap-2">
              <span
                className="inline-flex items-center px-3 py-1
                    rounded-md border border-gray-300
                    bg-red-400 text-white
                    text-bold text-sm"
              >
                Estado
              </span>
              <select
                name="status"
                value={task.status}
                placeholder="Pendiente o Terminado"
                className="bg-white hover:bg-green-400 focus:bg-red-400
                    text-black hover:text-white focus:text-white
                    focus:placeholder-red-600
                    hover:placeholder-green-600
                    focus:outline-none
                    flex-1 block w-full rounded
                    text-sm px-3 py-1"
                onChange={onChange}
              >
                <option value="" disabled className="disabled:text-black">
                  ********** Seleccione el Estado de su Tarea **********
                </option>
                <option value="Pendiente">Pendiente</option>
                <option value="Activo">Activo</option>
                <option value="Terminado">Terminado</option>
              </select>
            </div>

            {/*Botones*/}
            <div className="flex justify-evenly">
              {/*Boton Save/Guardar*/}
              <button
                disabled={!task.title || !task.description || !task.status}
                className="inline-flex justify-center py-2 px-4
                    border border-transparent shadow-sm rounded
                    text-sm font-medium-md text-white
                    bg-indigo-600 hover:bg-indigo-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-indigo-500
                    cursor-alias
                    disabled:opacity-50
                    disabled:cursor-not-allowed"
                type="submit"
                onClick={onSave}
              >
                Guardar
              </button>
              {/*Cancelar*/}
              <button
                className="inline-flex justify-center py-2 px-4
                    border border-transparent shadow-sm rounded
                    text-sm font-medium-md text-white
                    bg-red-600 hover:bg-red-700
                    focus:outline-none focus:ring-2
                    focus:ring-offset-2
                    focus:ring-red-500
                    cursor-alias
                    disabled:opacity-50
                    disabled:cursor-not-allowed"
                type="submit"
                disabled={!task.title && !task.description && !task.status}
                onClick={emptyTask}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
        <Tareas />
      </div>
    </Layout>
  );
}
