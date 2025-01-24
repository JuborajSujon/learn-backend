import { Button, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParams, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";

export type TTableDate = Pick<TStudent, "name" | "id">;

export default function StudentData() {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery(params);

  console.log({ isLoading, isFetching });

  const tableData = studentData?.data?.map(({ _id, fullName: name, id }) => {
    return {
      key: _id,
      name,
      id,
    };
  });

  const columns: TableColumnsType<TTableDate> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Roll No",
      dataIndex: "id",
    },
    {
      title: "Action",
      render: () => {
        return (
          <Space>
            <Button type="primary">Details</Button>
            <Button type="primary">Update</Button>
            <Button type="primary">Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableDate>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];
      filters?.name?.forEach((item) =>
        queryParams.push({
          name: "name",
          value: item,
        })
      );

      filters?.year?.forEach((item) =>
        queryParams.push({
          name: "year",
          value: item,
        })
      );

      setParams(queryParams);
    }
  };

  return (
    <Table<TTableDate>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
}
