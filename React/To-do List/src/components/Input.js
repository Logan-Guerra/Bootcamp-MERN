import React from 'react';

const Input = (props) => {
    const { list, setList } = props;

    let task = {
        name: "",
        isComplete: false
    };

    const onChange = e => {
        task.name = e.target.value;
    }

    const onClick = e => {
        setList([...list, task]);
    }

    return (
        <div className="container w-50 mt-3">
            <h1 className="display-4">ToDo List</h1>
            <input
                className="form-control"
                type="text"
                name="task"
                onChange={onChange} />
            <button className="btn btn-primary btn-block mt-2" onClick={onClick}>Add Task</button>
        </div>
    )
}

export default Input;