import {
  selectFilteredTasks,
  selectTasks,
} from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  const filteredTasks = useAppSelector(selectFilteredTasks);
  console.log(tasks);
  console.log(filteredTasks);
  return <div>Task Page</div>;
};

export default Task;
