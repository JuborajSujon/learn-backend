import Calendar from "@/components/Cards/Calendar";
import General from "@/components/Cards/General";
import { TableDemo } from "@/components/Cards/Table";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-8">
      <div className="grid grid-cols-2 gap-8">
        <General />
        <div className="grid gap-8 overflow-hidden">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card className="p-8 h-[300px] overflow-hidden">
          <div className="h-full overflow-y-auto">
            <TableDemo />
          </div>
        </Card>
        <Card className="h-[300px]">hello world</Card>
        <Card className="h-[300px]">hello world</Card>
      </div>
    </div>
  );
}
