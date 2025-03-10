const AppList = () => {
    let tasks = [
        { id: "1", name: "Task 1", date: '2023-01-01' },
        { id: "2", name: "Task 1", date: '2023-01-01' },
        { id: "3", name: "Task 1", date: '2023-01-01' }];
    return <div className="row text-start">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => {
                    return (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.name}</td>
                            <td>{task.date}</td>
                            <td className="d-flex justify-content-start gap-1">
                                <button className="btn btn-info text-white">
                                <i className="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button className="btn btn-danger text-white">
                                <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
}
export default AppList