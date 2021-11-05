import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Task = ({ index, task, tasks, setTasks }) => {
  const [isChecked, setChecked] = useState(false);

  const handleClick = () => {
    if (!isChecked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  return (
    <div className="task" style={{ order: isChecked && "2" }}>
      <input type="checkbox" name="do" onClick={handleClick} />
      <p style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {task}
      </p>
      <FontAwesomeIcon
        onClick={() => {
          const newTask = [...tasks];
          newTask.splice(index, 1);
          setTasks(newTask);
        }}
        className="trash"
        icon="trash"
      />
    </div>
  );
};

export default Task;
