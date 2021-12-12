import useTaskContext from "../context/TaskContext";

export default function Tareas() {
  const { tasks } = useTaskContext();

  return (
    <>
      <div
        className="bg-white shadow-md rounded-lg border
                      max-w-md p-4 sm:p-8 dark:bg-gray-800
                      dark:border-gray-700 mx-auto"
      >
        <div className="flex items-center justify-center mb-4">
          <h2
            className="text-xl font-bold leading-none text-indigo-600
                       dark:text-white"
          >
            Listado de Tareas
          </h2>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {tasks.map((task) => (
              <li key={task.id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-medium truncate dark:text-white 
                        ${
                          task.status === "Pendiente"
                            ? "text-red-600"
                            : task.status == "Activo"
                            ? "text-green-600"
                            : "text-blue-600"
                        }
                      `}
                    >
                      {task.title}
                    </p>
                    <p
                      className={`text-sm truncate dark:text-gray-400 
                         ${
                           task.status == "Pendiente"
                             ? "text-red-600"
                             : task.status == "Activo"
                             ? "text-green-600"
                             : "text-blue-600"
                         }
                      `}
                    >
                      {task.description}
                    </p>
                  </div>
                  <div
                    className={`inline-flex items-center text-base font-semibold dark:text-white 
                      ${
                        task.status == "Pendiente"
                          ? "text-red-600"
                          : task.status == "Activo"
                          ? "text-green-600"
                          : "text-blue-600"
                      }
                    `}
                  >
                    {task.status}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
