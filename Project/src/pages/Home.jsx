import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskList from "../components/TaskList";
import { Link } from "react-router-dom";

const Home = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h1>Minhas Tarefas</h1>

      <Link to="/add-task">
        <button>Adicionar Tarefa</button>
      </Link>

      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;