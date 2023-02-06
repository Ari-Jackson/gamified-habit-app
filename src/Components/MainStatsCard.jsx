import DailySummary from "./DailySummary";
import CharcterInfo from "./CharacterInfo";
import StatusBox from "./StatusBox";
import { faCoins, faGem, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function MainStatsCard() {
  return (
    <div className="ml-40 mt-20 h-auto w-[650px] max-w-7xl space-y-0 space-x-6 rounded-xl bg-white pb-3">
      <div className="flex h-auto w-full flex-col">
        <CharcterInfo />
        <hr />
        {/* --------------XP-------------- */}
        <div className="mx-6 my-2 flex h-fit flex-col rounded-md p-5 font-tech text-lg hover:cursor-pointer hover:bg-slate-200">
          <div className="flex-box-center mx-1">
            <p className="flex-grow text-2xl">XP</p>
            <p>1500</p>
          </div>
          <ProgressBar />
        </div>
        {/* --------------Status Boxes @ Daily Summary-------------- */}
        <div className="mx-6 my-2 flex h-24 justify-around space-x-5">
          {statBoxInfo.map(({ title, number, icon, color, id }) => (
            <StatusBox
              title={title}
              number={number}
              icon={icon}
              color={color}
              key={id}
            />
          ))}
        </div>
        <DailySummary />
      </div>
    </div>
  );
}

{
  /* ------------------------------------ Progress Bar ------------------------------------*/
}

const ProgressBar = () => {
  return (
    <div className="h-4 w-full rounded-full bg-gray-300">
      <div
        className={"h-full rounded-full bg-yellow-200 text-right"}
        style={{ width: `${(750 / 1500) * 100}%` }}
      ></div>
      <span></span>
    </div>
  );
};

{
  /* ------------------------------------ Status Box Info ------------------------------------*/
}

let statBoxInfo = [
  {
    title: "Gold",
    number: 365,
    icon: faCoins,
    color: "text-amber-500",
    id: "gold",
  },
  {
    title: "Mana",
    number: 10,
    icon: faGem,
    color: "text-cyan-500",
    id: "mana",
  },
  {
    title: "Heart",
    number: 12,
    icon: faHeart,
    color: "text-rose-500",
    id: "heart",
  },
];
