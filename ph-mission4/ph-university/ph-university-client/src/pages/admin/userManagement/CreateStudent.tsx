import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "antd";

export default function CreateStudent() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    console.log(Object.fromEntries(formData));
    // console.log([...formData.entries()]);
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name" label="Name" />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </PHForm>
  );
}
