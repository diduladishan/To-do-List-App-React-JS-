import React, { useState } from 'react';
import videoSource from './components/snow-background.mp4';
import './components/AddedBackground.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  function addTodo() {
    if (inputText !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  }

  function editTodo(index) {
    const newTodo = prompt('Edit Todo', todos[index]);
    if (newTodo !== null && newTodo !== '') {
      const newTodos = [...todos];
      newTodos[index] = newTodo;
      setTodos(newTodos);
    }
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <video autoPlay muted loop id="backgroundVideo">
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="container">
        <div className="blur"></div>
        <div className="formContent">
          <h2>Todo List</h2>
          <label htmlFor="todo" className="enteraTodo">
            Enter a Todo:
          </label>
          <div className="input-container">
            <input
              className="inputTextField"
              type="text"
              id="todo"
              name="todo"
              placeholder=""
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button className="addButton" onClick={addTodo}>
              Add
            </button>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                <div className="todo-text">{todo}</div>
                <div className="button-container">
                  <button onClick={() => editTodo(index)}>Edit</button>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
