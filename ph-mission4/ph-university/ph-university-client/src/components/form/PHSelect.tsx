import { Form, Select } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function PHSelect({ label }: { label: string }) {
  return (
    <Form.Item label={label}>
      <Select
        defaultValue="lucy"
        style={{ width: "100%" }}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </Form.Item>
  );
}
