import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifiyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("Logging in...");
    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };

    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;

    //   dispatch(setUser({ user, token: res.data.accessToken }));

    //   toast.success("Login successful", { id: toastId, duration: 2000 });

    //   navigate(`/${user.role}/dashboard`);
    // } catch (error: any) {
    //   toast.error(`Login failed: ${error.message}`, {
    //     id: toastId,
    //     duration: 2000,
    //   });
    // }
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" {...register("password")} />

        <Button htmlType="submit">Login</Button>
      </div>
    </PHForm>
  );
}
