const AppTodo = () => {
    return <div className="row mb-2">
        <div className="col-6">
            <input type="text" className="form-control" placeholder="Enter Task" />
        </div>
        <div className="col-4">
            <input type="date" className="form-control" />
        </div>
        <div className="col-2">
            <button className="btn btn-primary">Add</button>
        </div>
    </div>
}
export default AppTodo;