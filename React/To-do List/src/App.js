
import React, { useState } from 'react';
import Input from './components/Input';
import Task from './components/Task';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App container">
      <Input list={list} setList={setList} />
      <div className="container mt-3">
        {list.map((task, index) => (
          <Task task={task} index={index} setList={setList} list={list} />
        ))}
      </div>
    </div>
  );
}

export default App;