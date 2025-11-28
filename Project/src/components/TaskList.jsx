import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.length === 0 && <p>Nenhuma tarefa cadastrada...</p>}

      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} />
      ))}
    </div>
  );
};

export default TaskList;