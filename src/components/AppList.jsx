import ListItem from "./listItem";

const AppList = ({tasks}) => {
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
                        <ListItem key={task.id} item={task}/>
                    );
                })}
            </tbody>
        </table>
    </div>
}
export default AppList