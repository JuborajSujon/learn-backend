"use client";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveCalendar } from "@nivo/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveCalendar = ({ data }: any) => (
  <ResponsiveCalendar
    data={data}
    from="2023-01-01"
    to="2023-12-12"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    yearSpacing={40}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: "bottom-right",
        direction: "row",
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: "right-to-left",
      },
    ]}
  />
);

export default function Calendar() {
  function generateDataforYear2023() {
    const data = [];
    const startDate = new Date("2023-01-01");
    const endDate = new Date("2023-12-31");

    while (startDate <= endDate) {
      const value = Math.floor(Math.random() * 301);
      const formattedDate = startDate.toISOString().split("T")[0];

      data.push({
        value: value,
        day: formattedDate,
      });

      startDate.setDate(startDate.getDate() + 1);
    }

    return data;
  }

  const data = generateDataforYear2023();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>This week</CardTitle>
        <CardDescription>These are the results of this week.</CardDescription>
      </CardHeader>
      <CardContent className="h-[200px] flex items-center w-full">
        <MyResponsiveCalendar data={data} />
      </CardContent>
    </Card>
  );
}
