import { Button } from "@/components/ui/button";

export default function QuizControl() {
  return (
    <div className="w-full flex justify-between mt-4 space-x-4">
      <Button>Previous</Button>
      <Button>Next</Button>
    </div>
  );
}
