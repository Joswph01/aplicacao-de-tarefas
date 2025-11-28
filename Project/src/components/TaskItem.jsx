import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { removeTask, editTask } = useContext(TaskContext);
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    editTask({ ...task, title: newTitle });
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <button onClick={handleEdit}>Salvar</button>
        </>
      ) : (
        <>
          <p>{task.title}</p>

          <button onClick={() => setEditing(true)}>Editar</button>
          <button onClick={() => removeTask(task.id)}>Excluir</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;