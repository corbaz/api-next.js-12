import {useTaskContext} from '../context/TaskContext';

export default function Home() {
    const {tasks} = useTaskContext();
    return (
        <ul>
            {tasks.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}

