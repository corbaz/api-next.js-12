import {useTaskContext} from '../context/TaskContext';
import Layout from '../components/Layout';

export default function Home() {
    const {tasks} = useTaskContext();

    return (
        <Layout>
            <h1>Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </Layout>
    )
}

