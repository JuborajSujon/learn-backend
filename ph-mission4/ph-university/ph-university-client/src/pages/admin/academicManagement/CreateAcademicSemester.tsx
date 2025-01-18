import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

export default function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const semesterData = {
      name: "Something",
      code: "Something",
    };

    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect name="name" label="Name" options={nameOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
}
