"use client";

export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <div className="avater rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
        <p>GD</p>
      </div>
      <div className="grow">
        <p className="text-base font-bold">Guillaume Dulhan</p>
        <p className="text-sm text-neutral-500 ">codewithguillaume@gmail.com</p>
      </div>
    </div>
  );
}
