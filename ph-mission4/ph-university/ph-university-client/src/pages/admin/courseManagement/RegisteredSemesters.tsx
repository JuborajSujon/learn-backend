import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParams } from "../../../types";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement";

export type TTableDate = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;

export default function RegisteredSemesters() {
  // const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);

  const { data: semesterData, isFetching } =
    useGetAllRegisteredSemestersQuery(undefined);

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => {
      return {
        key: _id,
        name: `${academicSemester.name} ${academicSemester.year}`,
        startDate,
        endDate,
        status,
      };
    }
  );

  const columns: TableColumnsType<TTableDate> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      render: () => {
        return (
          <div>
            <Button type="primary">Update</Button>
          </div>
        );
      },
    },
  ];

  // const onChange: TableProps<TTableDate>["onChange"] = (
  //   _pagination,
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra.action === "filter") {
  //     const queryParams: TQueryParams[] = [];
  //     filters?.name?.forEach((item) =>
  //       queryParams.push({
  //         name: "name",
  //         value: item,
  //       })
  //     );

  //     filters?.year?.forEach((item) =>
  //       queryParams.push({
  //         name: "year",
  //         value: item,
  //       })
  //     );

  //     setParams(queryParams);
  //   }
  // };

  return (
    <Table<TTableDate>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
}
