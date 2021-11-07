import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import Task from "./components/Task";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const newTask = [...tasks];

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("https://git.heroku.com/todo-list-backend-by-thomas.git/newTask", {
        task: task,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    newTask.push(task);
    setTasks(newTask);
    setTask("");
  };

  return (
    <>
      <Header />
      <div className="content">
        <div className="content-task">
          {tasks.map((task, index) => {
            return (
              <Task
                index={index}
                key={Math.round(Math.random() * 10000000)}
                tasks={tasks}
                setTasks={setTasks}
                task={task}
              />
            );
          })}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="adder"
            value={task}
            type="text"
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />
          <input className="adder2" type="submit" value="Add task" />
        </form>
      </div>
    </>
  );
}

export default App;
