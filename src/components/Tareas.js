import useTaskContext from "../context/TaskContext";

export default function Tareas() {
  const { tasks } = useTaskContext();

  return (
    <>
      <h3 className="text-3xl text-center my-5">Lista de Tareas</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tarea</th>
              <th>Descripción</th>
              <th>Estados</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="">
                <th>{task.id}</th>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
