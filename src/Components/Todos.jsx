import Card from "./Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todoTitle, emoji }) {
  const [completed, setCompleted] = useState(false);

  function handleClick() {
    setCompleted(!completed);
  }

  const fillerStyles = {
    width: `${completed ? 100 : 0}%`,
  };

  return (
    <Card onClick={handleClick}>
      <div
        style={fillerStyles}
        className="flex h-full space-y-0 space-x-10 rounded-lg bg-violet-400 py-4 text-right transition-[width] duration-500 ease-in-out"
      >
        <span className="ml-8 block self-center rounded-lg bg-slate-100 p-3 text-4xl">
          {emoji}
        </span>
        <div className="space-y-2 text-left">
          <div className="space-y-0.5">
            <p className="w-max text-lg font-semibold text-black">
              {todoTitle}
            </p>
            <p className="font-semibold text-slate-300">Date</p>
          </div>
        </div>
        <span className="block self-center text-2xl text-slate-700">
          <FontAwesomeIcon icon={faEllipsis} />
        </span>
      </div>
    </Card>
  );
}
