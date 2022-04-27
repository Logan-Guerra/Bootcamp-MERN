import React from 'react';

const Task = (props) => {
    const { task, index, setList, list } = props;

    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        })
    }

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return (
        <div className="container">
            {task.isComplete ?
                <h4 className="isComplete">{task.name}</h4> :
                <h4 className="d-inline mr-2">{task.name}</h4>}
                
            <input type="checkbox" onChange={onChange} checked={task.isComplete} />
            <button className="btn btn-danger btn-xs" onClick={onClick}>Delete</button>
        </div>
    )
}

export default Task;