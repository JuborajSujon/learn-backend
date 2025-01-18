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
      render={({ field }) => (
        <Form.Item label={label}>
          <Select {...field} style={{ width: "100%" }} options={options} />
        </Form.Item>
      )}
    />
  );
}
