import Layout from '../components/Layout';

export const NewTask = () => {
    return (
        <Layout>
            <div>
                <h1>Tarea Nueva</h1>
                <form>
                    <label>
                        Title:
                        <input type="text" name="title"/>
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description"/>
                    </label>
                    <label>
                        Due Date:
                        <input type="date" name="dueDate"/>
                    </label>
                    <label>
                        Priority:
                        <select name="priority">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </Layout>
    );
};