import {TaskContext} from '../context/TaskContext';
import {useContext} from 'react';


const Home = () => {
    const {hello} = useContext(TaskContext);
    return (
        <div>
            <h1>API</h1>
            <p>
                Hello, this is the API page.{hello}
            </p>
        </div>
    )
}
export default Home;