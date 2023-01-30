import Card from "./Card";
import { useState } from "react";

export default function Habit({ todoTitle, emoji, total }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    if (count !== total) {
      setCount(count + 1);
    }
  }

  const fillerStyles = {
    width: `${Math.round((count / total) * 100)}%`,
  };

  return (
    <div
      onClick={() => handleClick(total)}
      className="m-auto w-fit cursor-pointer"
    >
      <Card>
        <div
          style={fillerStyles}
          className="flex h-full w-full space-y-0 space-x-6 rounded-lg bg-violet-400 py-4 text-right transition-[width] duration-500 ease-in-out"
        >
          <span className="ml-8 block self-center rounded-lg bg-slate-100 p-3 text-4xl">
            {emoji}
          </span>
          <div className="space-y-2 text-left">
            <div className="space-y-0.5">
              <p className="w-max text-lg font-semibold text-black">
                {todoTitle}
              </p>
              <p className="font-semibold text-slate-200">
                {count} / {total}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
