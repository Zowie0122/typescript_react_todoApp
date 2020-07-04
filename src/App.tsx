import React, { Fragment, useState } from "react";
import "./App.css";

function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  // todos is an array of ITodo (which is an object)
  const [todos, setTodos] = useState<ITodo[]>([]);

  // define event's type
  type FromElem = React.FormEvent<HTMLFormElement>;

  // define what is the structure inside of the object
  interface ITodo {
    text: string;
    complete: boolean;
  }

  // if the function just excute functions instead of returning anything, using void
  const handleSubmit = (e: FromElem): void => {
    // prevent the page refreshing everytime the value changes
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (index: number): void => {
    const todoCopy = [...todos];
    todoCopy[index].complete = !todoCopy[index].complete;
    setTodos(todoCopy);
  };

  const removeTodo = (index: number): void => {
    const todoCopy = [...todos];
    todoCopy.splice(index, 1);
    setTodos(todoCopy);
  };

  //&times; is special simple, check out Entity Names
  return (
    <Fragment>
      <h1>Typescript VS React : To Do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <Fragment key={index}>
              {todo.text}
              <button
                type="button"
                onClick={() => {
                  toggleTodo(index);
                }}
              >
                {todo.complete ? "Incomplete" : "Complete"}
              </button>
              <button
                type="button"
                onClick={() => {
                  removeTodo(index);
                }}
              >
                &times;
              </button>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
}

export default App;
