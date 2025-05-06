import React, { useState } from "react";

const AppTodo = ({ addTask }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handelClick = (e) => {
        e.preventDefault();
        if (!name || !date) return alert("Both fields are required!");

        addTask(name, date); // Call parent function
        setName("");
        setDate("");
    };

    return (
        <form onSubmit={handelClick} className="row w-100 mb-2">
            <div className="col-6">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter Task"
                />
            </div>
            <div className="col-4">
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="col-2">
                <button className="btn btn-primary">Add</button>
            </div>
        </form>
    );
};

export default AppTodo;
