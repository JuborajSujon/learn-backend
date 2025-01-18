import { useFormContext } from "react-hook-form";

export default function PHInput({ type, name, label }) {
  const { register } = useFormContext();

  const style = {
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "10px",
  };

  return (
    <>
      {label ? label : null}

      <input style={style} type={type} id={name} {...register(name)} />
      <br />
    </>
  );
}
