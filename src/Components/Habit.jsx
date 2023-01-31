import Card from "./Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export default function Habit({ todoTitle, emoji, total, units }) {
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
            <p className="w-max font-semibold text-slate-300">
              {count} / {total} {units}
            </p>
          </div>
        </div>
        <span className="block self-center text-2xl text-slate-700 opacity-80">
          <FontAwesomeIcon icon={faEllipsis} />
        </span>
        </div>
      </Card>
    </div>
  );
}
