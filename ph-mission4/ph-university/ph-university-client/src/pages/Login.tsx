import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifiyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "admin123",
  //   },
  // });

  const defaultValues = {
    userId: "2024010001",
    password: "123456",
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user, token: res.data.accessToken }));

      toast.success("Login successful", { id: toastId, duration: 2000 });

      if (res.data.needsPasswordChange) {
        navigate("/change-password");
      } else {
        navigate(`/${user.role}/dashboard`);
      }
    } catch (error: any) {
      if (error?.status === 404) {
        toast.error(error.data.message, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.error(`Login failed: ${error.message}`, {
          id: toastId,
          duration: 2000,
        });
      }
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID:" />
        <PHInput type="password" name="password" label="Password:" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
}
