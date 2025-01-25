import { Button, Table, Tag, Dropdown } from "antd";
import type { TableColumnsType } from "antd";
import { useState } from "react";
import { TSemester } from "../../../types";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement";
import moment from "moment";
export type TTableDate = Pick<TSemester, "startDate" | "endDate" | "status">;

const items = [
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];

export default function RegisteredSemesters() {
  // const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const [semesterId, setSemesterId] = useState("");

  const { data: semesterData, isFetching } =
    useGetAllRegisteredSemestersQuery(undefined);

  // const [updateSemesterStatus] = useUpdateRegisteredSemesterMutation();

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => {
      return {
        key: _id,
        name: `${academicSemester.name} ${academicSemester.year}`,
        startDate: moment(new Date(startDate)).format("MMMM"),
        endDate: moment(new Date(endDate)).format("MMMM"),
        status,
      };
    }
  );

  const handleStatusUpdate = (data) => {
    const updateData = {
      id: semesterId,
      data: {
        status: data.key,
      },
    };

    console.log(updateData);
    // updateSemesterStatus(updateData);
  };
  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };

  const columns: TableColumnsType<TTableDate> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (item) => {
        let color;
        if (item === "UPCOMING") {
          color = "blue";
        }
        if (item === "ONGOING") {
          color = "green";
        }
        if (item === "ENDED") {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
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
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(item.key)}>Update</Button>
          </Dropdown>
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
      pagination={false}
    />
  );
}
