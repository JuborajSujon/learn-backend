import AddUserModal from "@/components/module/user/AddUserModal";
import UserCard from "@/components/module/user/UserCard";
import { selectUsers } from "@/redux/features/users/userSlice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {
  const tasks = useAppSelector(selectUsers);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Users</h1>
        <AddUserModal />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-5">
        {tasks.map((user) => (
          <UserCard key={user?.id} user={user} />
        ))}
      </div>
    </div>
  );
};
export default Users;
