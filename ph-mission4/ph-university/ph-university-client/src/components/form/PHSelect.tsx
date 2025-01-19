import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

export default function PHSelect({ label, name, options }: TPHSelectProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            options={options}
            size="large"
          />
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Form.Item>
      )}
    />
  );
}
