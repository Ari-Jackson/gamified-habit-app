import Card from "./Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export function Todo() {
  return (
    <Card>
      <img
        class="mx-0 block h-24 shrink-0 rounded-full"
        src="src/assets/images/11331b5cf7f853a4717cf8df4ccad807e47c1b09.png"
        alt="character"
      />
      <div class="space-y-2 text-left">
        <div class="space-y-0.5">
          <p class="text-lg font-semibold text-black">Sample Text</p>
          <p class="font-medium text-slate-500">Sample Text</p>
        </div>
        <span className="block self-center text-2xl text-slate-700">
          <FontAwesomeIcon icon={faEllipsis} />
        </span>
      </div>
    </Card>
  );
}
