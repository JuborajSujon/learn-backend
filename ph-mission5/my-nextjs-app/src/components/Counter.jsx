"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center gap-7 h-screen">
      <h1 className="text-3xl font-bold underline">Simple Counter</h1>
      <div className="flex gap-2 items-center justify-center ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <span className="text-3xl font-bold">{count}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
