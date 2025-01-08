import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/tasks/taskSlice";
import { selectUsers } from "@/redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();

  const users = useAppSelector(selectUsers);

  const assignedUser = users.find((user) => user?.id === task?.assignedTo);

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task?.priority === "Low",
              "bg-yellow-500": task?.priority === "Medium",
              "bg-red-500": task?.priority === "High",
            })}></div>
          <h1 className={cn({ "line-through": task?.isCompleted })}>
            {task?.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task?.id))}
            variant="link"
            className="p-0 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox
            checked={task?.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task?.id))}
          />
        </div>
      </div>
      <p className="mt-5">
        Assigned To - {assignedUser ? assignedUser?.name : "No one"}
      </p>
      <p className="mt-1">{task?.description}</p>
    </div>
  );
};

export default TaskCard;
