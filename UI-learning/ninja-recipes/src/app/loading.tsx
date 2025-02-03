import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

export default function Loading() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {Array.from({ length: 20 }).map((i, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </main>
  );
}
