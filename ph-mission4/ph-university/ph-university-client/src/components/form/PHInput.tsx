import { Input } from "antd";
import { Controller } from "react-hook-form";

export default function PHInput({ type, name, label }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} placeholder={`${label}`} type={type} id={name} />
        )}
      />
    </div>
  );
}
