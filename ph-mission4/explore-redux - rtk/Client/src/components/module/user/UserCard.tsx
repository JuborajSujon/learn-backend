import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/users/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <h1>{user?.name}</h1>

        <Button
          onClick={() => dispatch(removeUser(user?.id))}
          variant="link"
          className="p-0 text-red-500">
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
