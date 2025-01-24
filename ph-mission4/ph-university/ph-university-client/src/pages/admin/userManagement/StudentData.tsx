import { Button, Pagination, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParams, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";

export type TTableDate = Pick<TStudent, "fullName" | "id">;

export default function StudentData() {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [page, setPage] = useState(5);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery([
    { name: "limit", value: 3 },
    {
      name: "page",
      value: page,
    },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const metaData = studentData?.meta;

  const tableData = studentData?.data?.map(({ _id, fullName, id }) => {
    return {
      key: _id,
      fullName,
      id,
    };
  });

  const columns: TableColumnsType<TTableDate> = [
    {
      title: "Name",
      dataIndex: "fullName",
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
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={false}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
}
